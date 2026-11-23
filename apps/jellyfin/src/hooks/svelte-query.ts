import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
) {
  return ['System', '/System/ActivityLog/Entries', args] as const
}

export function getSystemActivityLogEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemActivityLogEntriesQueryKey>
  >({
    queryKey: getSystemActivityLogEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.System.ActivityLog.Entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemActivityLogEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemActivityLogEntriesQueryKey>
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
      ...getSystemActivityLogEntriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAuthKeysQueryKey() {
  return ['Auth', '/Auth/Keys'] as const
}

export function getAuthKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthKeysQueryKey>
  >({
    queryKey: getAuthKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Auth.Keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostAuthKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Auth.Keys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuthKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthKeysKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getArtistsQueryKey(args: InferRequestType<typeof client.Artists.$get>) {
  return ['Artists', '/Artists', args] as const
}

export function getArtistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Artists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArtistsQueryKey>
  >({
    queryKey: getArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Artists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArtistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArtistsNameQueryKey(
  args: InferRequestType<(typeof client.Artists)[':name']['$get']>,
) {
  return ['Artists', '/Artists/:name', args] as const
}

export function getArtistsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Artists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsNameQueryKey>
  >({
    queryKey: getArtistsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArtistsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Artists)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArtistsAlbumArtistsQueryKey(
  args: InferRequestType<typeof client.Artists.AlbumArtists.$get>,
) {
  return ['Artists', '/Artists/AlbumArtists', args] as const
}

export function getArtistsAlbumArtistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Artists.AlbumArtists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsAlbumArtistsQueryKey>
  >({
    queryKey: getArtistsAlbumArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists.AlbumArtists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArtistsAlbumArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Artists.AlbumArtists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsAlbumArtistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsAlbumArtistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAudioItemIdStreamQueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/stream', args] as const
}

export function getAudioItemIdStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAudioItemIdStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAudioItemIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioItemIdStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createHeadAudioItemIdStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadAudioItemIdStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAudioItemIdStreamContainerQueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/stream.:container', args] as const
}

export function getAudioItemIdStreamContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAudioItemIdStreamContainerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId']['stream.:container'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAudioItemIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAudioItemIdStreamContainerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadAudioItemIdStreamContainer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadAudioItemIdStreamContainerMutationOptions<
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

export function getBackupQueryKey() {
  return ['Backup', '/Backup'] as const
}

export function getBackupQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupQueryKey>
  >({
    queryKey: getBackupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Backup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBackup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBackupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostBackupCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Backup.Create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackupCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBackupManifestQueryKey(
  args: InferRequestType<typeof client.Backup.Manifest.$get>,
) {
  return ['Backup', '/Backup/Manifest', args] as const
}

export function getBackupManifestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Backup.Manifest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBackupManifestQueryKey>
  >({
    queryKey: getBackupManifestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Backup.Manifest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBackupManifest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Backup.Manifest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBackupManifestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBackupManifestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostBackupRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackupRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBrandingConfigurationQueryKey() {
  return ['Branding', '/Branding/Configuration'] as const
}

export function getBrandingConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingConfigurationQueryKey>
  >({
    queryKey: getBrandingConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Branding.Configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrandingConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBrandingCssQueryKey() {
  return ['Branding', '/Branding/Css'] as const
}

export function getBrandingCssQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrandingCssQueryKey>
  >({
    queryKey: getBrandingCssQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Branding.Css.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBrandingCss<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingCssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingCssQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBrandingCssCssQueryKey() {
  return ['Branding', '/Branding/Css.css'] as const
}

export function getBrandingCssCssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingCssCssQueryKey>
  >({
    queryKey: getBrandingCssCssQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Branding['Css.css'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBrandingCssCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingCssCssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingCssCssQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.Channels.$get>) {
  return ['Channels', '/Channels', args] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChannelsChannelIdFeaturesQueryKey(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
) {
  return ['Channels', '/Channels/:channelId/Features', args] as const
}

export function getChannelsChannelIdFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelIdFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Channels[':channelId'].Features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsChannelIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChannelsChannelIdFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelsChannelIdItemsQueryKey(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
) {
  return ['Channels', '/Channels/:channelId/Items', args] as const
}

export function getChannelsChannelIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Channels[':channelId'].Items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsChannelIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChannelsChannelIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelsFeaturesQueryKey() {
  return ['Channels', '/Channels/Features'] as const
}

export function getChannelsFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsFeaturesQueryKey>
  >({
    queryKey: getChannelsFeaturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Channels.Features.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsFeaturesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getChannelsItemsLatestQueryKey(
  args: InferRequestType<typeof client.Channels.Items.Latest.$get>,
) {
  return ['Channels', '/Channels/Items/Latest', args] as const
}

export function getChannelsItemsLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Channels.Items.Latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsItemsLatestQueryKey>
  >({
    queryKey: getChannelsItemsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Channels.Items.Latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannelsItemsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Channels.Items.Latest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsItemsLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsItemsLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostClientLogDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ClientLog.Document.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ClientLog.Document.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClientLogDocumentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Collections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCollectionsCollectionIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCollectionIdItemsMutationOptions<
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

export function createDeleteCollectionsCollectionIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCollectionsCollectionIdItemsMutationOptions<
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

export function getSystemConfigurationQueryKey() {
  return ['System', '/System/Configuration'] as const
}

export function getSystemConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigurationQueryKey>
  >({
    queryKey: getSystemConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSystemConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSystemConfigurationKeyQueryKey(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
) {
  return ['System', '/System/Configuration/:key', args] as const
}

export function getSystemConfigurationKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSystemConfigurationKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Configuration[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemConfigurationKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSystemConfigurationKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSystemConfigurationKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemConfigurationKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSystemConfigurationBranding<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemConfigurationBrandingMutationOptions<
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

export function getSystemConfigurationMetadataOptionsDefaultQueryKey() {
  return ['System', '/System/Configuration/MetadataOptions/Default'] as const
}

export function getSystemConfigurationMetadataOptionsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getSystemConfigurationMetadataOptionsDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Configuration.MetadataOptions.Default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemConfigurationMetadataOptionsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSystemConfigurationMetadataOptionsDefaultQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWebConfigurationPageQueryKey(
  args: InferRequestType<typeof client.web.ConfigurationPage.$get>,
) {
  return ['web', '/web/ConfigurationPage', args] as const
}

export function getWebConfigurationPageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.web.ConfigurationPage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebConfigurationPageQueryKey>
  >({
    queryKey: getWebConfigurationPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.web.ConfigurationPage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebConfigurationPage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.web.ConfigurationPage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebConfigurationPageQueryKey>
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
      ...getWebConfigurationPageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWebConfigurationPagesQueryKey(
  args: InferRequestType<typeof client.web.ConfigurationPages.$get>,
) {
  return ['web', '/web/ConfigurationPages', args] as const
}

export function getWebConfigurationPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.web.ConfigurationPages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebConfigurationPagesQueryKey>
  >({
    queryKey: getWebConfigurationPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.web.ConfigurationPages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebConfigurationPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.web.ConfigurationPages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebConfigurationPagesQueryKey>
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
      ...getWebConfigurationPagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesQueryKey(args: InferRequestType<typeof client.Devices.$get>) {
  return ['Devices', '/Devices', args] as const
}

export function getDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >({
    queryKey: getDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Devices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Devices.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevicesInfoQueryKey(args: InferRequestType<typeof client.Devices.Info.$get>) {
  return ['Devices', '/Devices/Info', args] as const
}

export function getDevicesInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Devices.Info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesInfoQueryKey>
  >({
    queryKey: getDevicesInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Devices.Info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Devices.Info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesOptionsQueryKey(
  args: InferRequestType<typeof client.Devices.Options.$get>,
) {
  return ['Devices', '/Devices/Options', args] as const
}

export function getDevicesOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Devices.Options.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesOptionsQueryKey>
  >({
    queryKey: getDevicesOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Devices.Options.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Devices.Options.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesOptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDevicesOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicesOptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDisplayPreferencesDisplayPreferencesIdQueryKey(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
) {
  return ['DisplayPreferences', '/DisplayPreferences/:displayPreferencesId', args] as const
}

export function getDisplayPreferencesDisplayPreferencesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDisplayPreferencesDisplayPreferencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.DisplayPreferences[':displayPreferencesId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDisplayPreferencesDisplayPreferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDisplayPreferencesDisplayPreferencesIdQueryKey>
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
      ...getDisplayPreferencesDisplayPreferencesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostDisplayPreferencesDisplayPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDisplayPreferencesDisplayPreferencesIdMutationOptions<
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

export function getEnvironmentDefaultDirectoryBrowserQueryKey() {
  return ['Environment', '/Environment/DefaultDirectoryBrowser'] as const
}

export function getEnvironmentDefaultDirectoryBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getEnvironmentDefaultDirectoryBrowserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Environment.DefaultDirectoryBrowser.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentDefaultDirectoryBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEnvironmentDefaultDirectoryBrowserQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEnvironmentDirectoryContentsQueryKey(
  args: InferRequestType<typeof client.Environment.DirectoryContents.$get>,
) {
  return ['Environment', '/Environment/DirectoryContents', args] as const
}

export function getEnvironmentDirectoryContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Environment.DirectoryContents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentDirectoryContentsQueryKey>
  >({
    queryKey: getEnvironmentDirectoryContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Environment.DirectoryContents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentDirectoryContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Environment.DirectoryContents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentDirectoryContentsQueryKey>
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
      ...getEnvironmentDirectoryContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEnvironmentDrivesQueryKey() {
  return ['Environment', '/Environment/Drives'] as const
}

export function getEnvironmentDrivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentDrivesQueryKey>
  >({
    queryKey: getEnvironmentDrivesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Environment.Drives.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentDrives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentDrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentDrivesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEnvironmentParentPathQueryKey(
  args: InferRequestType<typeof client.Environment.ParentPath.$get>,
) {
  return ['Environment', '/Environment/ParentPath', args] as const
}

export function getEnvironmentParentPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Environment.ParentPath.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentParentPathQueryKey>
  >({
    queryKey: getEnvironmentParentPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Environment.ParentPath.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentParentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Environment.ParentPath.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentParentPathQueryKey>
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
      ...getEnvironmentParentPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostEnvironmentValidatePath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvironmentValidatePathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItemsFiltersQueryKey(args: InferRequestType<typeof client.Items.Filters.$get>) {
  return ['Items', '/Items/Filters', args] as const
}

export function getItemsFiltersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.Filters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsFiltersQueryKey>
  >({
    queryKey: getItemsFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.Filters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsFilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.Filters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemsFiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsFiltersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsFilters2QueryKey(
  args: InferRequestType<typeof client.Items.Filters2.$get>,
) {
  return ['Items', '/Items/Filters2', args] as const
}

export function getItemsFilters2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.Filters2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsFilters2QueryKey>
  >({
    queryKey: getItemsFilters2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.Filters2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsFilters2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.Filters2.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemsFilters2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsFilters2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGenresQueryKey(args: InferRequestType<typeof client.Genres.$get>) {
  return ['Genres', '/Genres', args] as const
}

export function getGenresQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Genres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresQueryKey>
  >({
    queryKey: getGenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Genres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGenres<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Genres.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGenresGenreNameQueryKey(
  args: InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
) {
  return ['Genres', '/Genres/:genreName', args] as const
}

export function getGenresGenreNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenresGenreNameQueryKey>
  >({
    queryKey: getGenresGenreNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Genres[':genreName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGenresGenreName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenresGenreNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresGenreNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArtistsNameImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Artists', '/Artists/:name/Images/:imageType/:imageIndex', args] as const
}

export function getArtistsNameImagesImageTypeImageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArtistsNameImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists[':name'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArtistsNameImagesImageTypeImageIndex<
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
  args: () => InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArtistsNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadArtistsNameImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadArtistsNameImagesImageTypeImageIndexMutationOptions<
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

export function getBrandingSplashscreenQueryKey(
  args: InferRequestType<typeof client.Branding.Splashscreen.$get>,
) {
  return ['Branding', '/Branding/Splashscreen', args] as const
}

export function getBrandingSplashscreenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Branding.Splashscreen.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingSplashscreenQueryKey>
  >({
    queryKey: getBrandingSplashscreenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Branding.Splashscreen.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBrandingSplashscreen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Branding.Splashscreen.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrandingSplashscreenQueryKey>
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
      ...getBrandingSplashscreenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBrandingSplashscreen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBrandingSplashscreenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBrandingSplashscreen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$delete>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBrandingSplashscreenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGenresNameImagesImageTypeQueryKey(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
) {
  return ['Genres', '/Genres/:name/Images/:imageType', args] as const
}

export function getGenresNameImagesImageTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGenresNameImagesImageTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Genres[':name'].Images[':imageType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGenresNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGenresNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadGenresNameImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadGenresNameImagesImageTypeMutationOptions<
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

export function getGenresNameImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Genres', '/Genres/:name/Images/:imageType/:imageIndex', args] as const
}

export function getGenresNameImagesImageTypeImageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGenresNameImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Genres[':name'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGenresNameImagesImageTypeImageIndex<
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
  args: () => InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGenresNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadGenresNameImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadGenresNameImagesImageTypeImageIndexMutationOptions<
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

export function getItemsItemIdImagesQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
) {
  return ['Items', '/Items/:itemId/Images', args] as const
}

export function getItemsItemIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdImagesImageTypeQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
) {
  return ['Items', '/Items/:itemId/Images/:imageType', args] as const
}

export function getItemsItemIdImagesImageTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdImagesImageTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItemsItemIdImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdImagesImageTypeMutationOptions<
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

export function createDeleteItemsItemIdImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsItemIdImagesImageTypeMutationOptions<
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

export function createHeadItemsItemIdImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadItemsItemIdImagesImageTypeMutationOptions<
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

export function getItemsItemIdImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', args] as const
}

export function getItemsItemIdImagesImageTypeImageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdImagesImageTypeImageIndex<
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
  args: () => InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItemsItemIdImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdImagesImageTypeImageIndexMutationOptions<
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

export function createDeleteItemsItemIdImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsItemIdImagesImageTypeImageIndexMutationOptions<
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

export function createHeadItemsItemIdImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadItemsItemIdImagesImageTypeImageIndexMutationOptions<
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

export function getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
  >,
) {
  return [
    'Items',
    '/Items/:itemId/Images/:imageType/:imageIndex/:tag/:format/:maxWidth/:maxHeight/:percentPlayed/:unplayedCount',
    args,
  ] as const
}

export function getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryOptions<
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
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][
          ':maxHeight'
        ][':percentPlayed'][':unplayedCount'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
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
  args: () => InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountMutationOptions<
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

export function createPostItemsItemIdImagesImageTypeImageIndexIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdImagesImageTypeImageIndexIndexMutationOptions<
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

export function getMusicGenresNameImagesImageTypeQueryKey(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType', args] as const
}

export function getMusicGenresNameImagesImageTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMusicGenresNameImagesImageTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres[':name'].Images[':imageType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMusicGenresNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMusicGenresNameImagesImageTypeQueryKey>
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
      ...getMusicGenresNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadMusicGenresNameImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadMusicGenresNameImagesImageTypeMutationOptions<
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

export function getMusicGenresNameImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType/:imageIndex', args] as const
}

export function getMusicGenresNameImagesImageTypeImageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMusicGenresNameImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMusicGenresNameImagesImageTypeImageIndex<
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
  args: () => InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMusicGenresNameImagesImageTypeImageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createHeadMusicGenresNameImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadMusicGenresNameImagesImageTypeImageIndexMutationOptions<
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

export function getPersonsNameImagesImageTypeQueryKey(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
) {
  return ['Persons', '/Persons/:name/Images/:imageType', args] as const
}

export function getPersonsNameImagesImageTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPersonsNameImagesImageTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Persons[':name'].Images[':imageType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPersonsNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPersonsNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadPersonsNameImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadPersonsNameImagesImageTypeMutationOptions<
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

export function getPersonsNameImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Persons', '/Persons/:name/Images/:imageType/:imageIndex', args] as const
}

export function getPersonsNameImagesImageTypeImageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPersonsNameImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Persons[':name'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPersonsNameImagesImageTypeImageIndex<
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
  args: () => InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPersonsNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadPersonsNameImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadPersonsNameImagesImageTypeImageIndexMutationOptions<
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

export function getStudiosNameImagesImageTypeQueryKey(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
) {
  return ['Studios', '/Studios/:name/Images/:imageType', args] as const
}

export function getStudiosNameImagesImageTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStudiosNameImagesImageTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Studios[':name'].Images[':imageType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudiosNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStudiosNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadStudiosNameImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadStudiosNameImagesImageTypeMutationOptions<
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

export function getStudiosNameImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Studios', '/Studios/:name/Images/:imageType/:imageIndex', args] as const
}

export function getStudiosNameImagesImageTypeImageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStudiosNameImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Studios[':name'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStudiosNameImagesImageTypeImageIndex<
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
  args: () => InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStudiosNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadStudiosNameImagesImageTypeImageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadStudiosNameImagesImageTypeImageIndexMutationOptions<
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

export function getUserImageQueryKey(args: InferRequestType<typeof client.UserImage.$get>) {
  return ['UserImage', '/UserImage', args] as const
}

export function getUserImageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.UserImage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserImageQueryKey>
  >({
    queryKey: getUserImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.UserImage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.UserImage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserImageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUserImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.UserImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserImageMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.UserImage.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createHeadUserImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$head>>>>
        >,
        TError,
        InferRequestType<typeof client.UserImage.$head>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadUserImageMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlbumsItemIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>,
) {
  return ['Albums', '/Albums/:itemId/InstantMix', args] as const
}

export function getAlbumsItemIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlbumsItemIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Albums[':itemId'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlbumsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlbumsItemIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArtistsItemIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>,
) {
  return ['Artists', '/Artists/:itemId/InstantMix', args] as const
}

export function getArtistsItemIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArtistsItemIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists[':itemId'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArtistsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArtistsItemIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>,
) {
  return ['Items', '/Items/:itemId/InstantMix', args] as const
}

export function getItemsItemIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMusicGenresNameInstantMixQueryKey(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:name/InstantMix', args] as const
}

export function getMusicGenresNameInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMusicGenresNameInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres[':name'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMusicGenresNameInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMusicGenresNameInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMusicGenresInstantMixQueryKey(
  args: InferRequestType<typeof client.MusicGenres.InstantMix.$get>,
) {
  return ['MusicGenres', '/MusicGenres/InstantMix', args] as const
}

export function getMusicGenresInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.MusicGenres.InstantMix.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresInstantMixQueryKey>
  >({
    queryKey: getMusicGenresInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres.InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMusicGenresInstantMix<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.MusicGenres.InstantMix.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMusicGenresInstantMixQueryKey>
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
      ...getMusicGenresInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPlaylistsItemIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>,
) {
  return ['Playlists', '/Playlists/:itemId/InstantMix', args] as const
}

export function getPlaylistsItemIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaylistsItemIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playlists[':itemId'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaylistsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPlaylistsItemIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSongsItemIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>,
) {
  return ['Songs', '/Songs/:itemId/InstantMix', args] as const
}

export function getSongsItemIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSongsItemIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Songs[':itemId'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSongsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSongsItemIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdExternalIdInfosQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
) {
  return ['Items', '/Items/:itemId/ExternalIdInfos', args] as const
}

export function getItemsItemIdExternalIdInfosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdExternalIdInfosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].ExternalIdInfos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdExternalIdInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdExternalIdInfosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItemsRemoteSearchApplyItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchApplyItemIdMutationOptions<
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

export function createPostItemsRemoteSearchBook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Book.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Items.RemoteSearch.Book.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchBookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemsRemoteSearchBoxSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.BoxSet.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchBoxSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemsRemoteSearchMovie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Movie.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Items.RemoteSearch.Movie.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchMovieMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemsRemoteSearchMusicAlbum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchMusicAlbumMutationOptions<
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

export function createPostItemsRemoteSearchMusicArtist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchMusicArtistMutationOptions<
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

export function createPostItemsRemoteSearchMusicVideo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchMusicVideoMutationOptions<
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

export function createPostItemsRemoteSearchPerson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Person.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Items.RemoteSearch.Person.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchPersonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemsRemoteSearchSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Series.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Items.RemoteSearch.Series.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemsRemoteSearchTrailer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchTrailerMutationOptions<
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

export function createPostItemsItemIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItemsQueryKey(args: InferRequestType<typeof client.Items.$get>) {
  return ['Items', '/Items', args] as const
}

export function getItemsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >({
    queryKey: getItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Items.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserItemsItemIdUserDataQueryKey(
  args: InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>,
) {
  return ['UserItems', '/UserItems/:itemId/UserData', args] as const
}

export function getUserItemsItemIdUserDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserItemsItemIdUserDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.UserItems[':itemId'].UserData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserItemsItemIdUserData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUserItemsItemIdUserDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUserItemsItemIdUserData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserItemsItemIdUserDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserItemsResumeQueryKey(
  args: InferRequestType<typeof client.UserItems.Resume.$get>,
) {
  return ['UserItems', '/UserItems/Resume', args] as const
}

export function getUserItemsResumeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.UserItems.Resume.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserItemsResumeQueryKey>
  >({
    queryKey: getUserItemsResumeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.UserItems.Resume.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserItemsResume<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.UserItems.Resume.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserItemsResumeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserItemsResumeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['$get']>,
) {
  return ['Items', '/Items/:itemId', args] as const
}

export function getItemsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdQueryKey>
  >({
    queryKey: getItemsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsItemId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Items)[':itemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemsItemIdContentType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdContentTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItemsItemIdMetadataEditorQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
) {
  return ['Items', '/Items/:itemId/MetadataEditor', args] as const
}

export function getItemsItemIdMetadataEditorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdMetadataEditorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].MetadataEditor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdMetadataEditor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdMetadataEditorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlbumsItemIdSimilarQueryKey(
  args: InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
) {
  return ['Albums', '/Albums/:itemId/Similar', args] as const
}

export function getAlbumsItemIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlbumsItemIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Albums[':itemId'].Similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlbumsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlbumsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArtistsItemIdSimilarQueryKey(
  args: InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
) {
  return ['Artists', '/Artists/:itemId/Similar', args] as const
}

export function getArtistsItemIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getArtistsItemIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists[':itemId'].Similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArtistsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getArtistsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdAncestorsQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
) {
  return ['Items', '/Items/:itemId/Ancestors', args] as const
}

export function getItemsItemIdAncestorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdAncestorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Ancestors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdAncestors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdAncestorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdCollectionsQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>,
) {
  return ['Items', '/Items/:itemId/Collections', args] as const
}

export function getItemsItemIdCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdDownloadQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
) {
  return ['Items', '/Items/:itemId/Download', args] as const
}

export function getItemsItemIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdFileQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
) {
  return ['Items', '/Items/:itemId/File', args] as const
}

export function getItemsItemIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdFileQueryKey>
  >({
    queryKey: getItemsItemIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].File.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsItemIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsItemIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdSimilarQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
) {
  return ['Items', '/Items/:itemId/Similar', args] as const
}

export function getItemsItemIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdThemeMediaQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
) {
  return ['Items', '/Items/:itemId/ThemeMedia', args] as const
}

export function getItemsItemIdThemeMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdThemeMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].ThemeMedia.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdThemeMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdThemeMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdThemeSongsQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
) {
  return ['Items', '/Items/:itemId/ThemeSongs', args] as const
}

export function getItemsItemIdThemeSongsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdThemeSongsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].ThemeSongs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdThemeSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdThemeSongsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdThemeVideosQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
) {
  return ['Items', '/Items/:itemId/ThemeVideos', args] as const
}

export function getItemsItemIdThemeVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdThemeVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].ThemeVideos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdThemeVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdThemeVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsCountsQueryKey(args: InferRequestType<typeof client.Items.Counts.$get>) {
  return ['Items', '/Items/Counts', args] as const
}

export function getItemsCountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.Counts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsCountsQueryKey>
  >({
    queryKey: getItemsCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.Counts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsCounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.Counts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemsCountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsCountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLibrariesAvailableOptionsQueryKey(
  args: InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
) {
  return ['Libraries', '/Libraries/AvailableOptions', args] as const
}

export function getLibrariesAvailableOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibrariesAvailableOptionsQueryKey>
  >({
    queryKey: getLibrariesAvailableOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Libraries.AvailableOptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLibrariesAvailableOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibrariesAvailableOptionsQueryKey>
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
      ...getLibrariesAvailableOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLibraryMediaUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryMediaUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLibraryMediaFoldersQueryKey(
  args: InferRequestType<typeof client.Library.MediaFolders.$get>,
) {
  return ['Library', '/Library/MediaFolders', args] as const
}

export function getLibraryMediaFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Library.MediaFolders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryMediaFoldersQueryKey>
  >({
    queryKey: getLibraryMediaFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Library.MediaFolders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLibraryMediaFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Library.MediaFolders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibraryMediaFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryMediaFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLibraryMoviesAdded<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryMoviesAddedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLibraryMoviesUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.Movies.Updated.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Library.Movies.Updated.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryMoviesUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLibraryPhysicalPathsQueryKey() {
  return ['Library', '/Library/PhysicalPaths'] as const
}

export function getLibraryPhysicalPathsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryPhysicalPathsQueryKey>
  >({
    queryKey: getLibraryPhysicalPathsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Library.PhysicalPaths.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLibraryPhysicalPaths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibraryPhysicalPathsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryPhysicalPathsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLibraryRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLibrarySeriesAdded<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibrarySeriesAddedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLibrarySeriesUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.Series.Updated.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Library.Series.Updated.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibrarySeriesUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMoviesItemIdSimilarQueryKey(
  args: InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
) {
  return ['Movies', '/Movies/:itemId/Similar', args] as const
}

export function getMoviesItemIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMoviesItemIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Movies[':itemId'].Similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMoviesItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getShowsItemIdSimilarQueryKey(
  args: InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
) {
  return ['Shows', '/Shows/:itemId/Similar', args] as const
}

export function getShowsItemIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShowsItemIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shows[':itemId'].Similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShowsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTrailersItemIdSimilarQueryKey(
  args: InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
) {
  return ['Trailers', '/Trailers/:itemId/Similar', args] as const
}

export function getTrailersItemIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTrailersItemIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Trailers[':itemId'].Similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrailersItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTrailersItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLibraryVirtualFoldersQueryKey() {
  return ['Library', '/Library/VirtualFolders'] as const
}

export function getLibraryVirtualFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryVirtualFoldersQueryKey>
  >({
    queryKey: getLibraryVirtualFoldersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Library.VirtualFolders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLibraryVirtualFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibraryVirtualFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryVirtualFoldersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLibraryVirtualFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Library.VirtualFolders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryVirtualFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLibraryVirtualFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLibraryVirtualFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLibraryVirtualFoldersLibraryOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryVirtualFoldersLibraryOptionsMutationOptions<
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

export function createPostLibraryVirtualFoldersName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryVirtualFoldersNameMutationOptions<
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

export function createPostLibraryVirtualFoldersPaths<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryVirtualFoldersPathsMutationOptions<
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

export function createDeleteLibraryVirtualFoldersPaths<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLibraryVirtualFoldersPathsMutationOptions<
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

export function createPostLibraryVirtualFoldersPathsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryVirtualFoldersPathsUpdateMutationOptions<
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

export function getLiveTvChannelMappingOptionsQueryKey(
  args: InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
) {
  return ['LiveTv', '/LiveTv/ChannelMappingOptions', args] as const
}

export function getLiveTvChannelMappingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvChannelMappingOptionsQueryKey>
  >({
    queryKey: getLiveTvChannelMappingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.ChannelMappingOptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvChannelMappingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvChannelMappingOptionsQueryKey>
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
      ...getLiveTvChannelMappingOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLiveTvChannelMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.LiveTv.ChannelMappings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvChannelMappingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveTvChannelsQueryKey(
  args: InferRequestType<typeof client.LiveTv.Channels.$get>,
) {
  return ['LiveTv', '/LiveTv/Channels', args] as const
}

export function getLiveTvChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LiveTv.Channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvChannelsQueryKey>
  >({
    queryKey: getLiveTvChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLiveTvChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Channels/:channelId', args] as const
}

export function getLiveTvChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvChannelsChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvGuideInfoQueryKey() {
  return ['LiveTv', '/LiveTv/GuideInfo'] as const
}

export function getLiveTvGuideInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvGuideInfoQueryKey>
  >({
    queryKey: getLiveTvGuideInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.GuideInfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvGuideInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvGuideInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvGuideInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLiveTvInfoQueryKey() {
  return ['LiveTv', '/LiveTv/Info'] as const
}

export function getLiveTvInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiveTvInfoQueryKey>
  >({
    queryKey: getLiveTvInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLiveTvListingProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.LiveTv.ListingProviders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvListingProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLiveTvListingProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvListingProvidersMutationOptions<
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

export function getLiveTvListingProvidersDefaultQueryKey() {
  return ['LiveTv', '/LiveTv/ListingProviders/Default'] as const
}

export function getLiveTvListingProvidersDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvListingProvidersDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.ListingProviders.Default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvListingProvidersDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvListingProvidersDefaultQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvListingProvidersLineupsQueryKey(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
) {
  return ['LiveTv', '/LiveTv/ListingProviders/Lineups', args] as const
}

export function getLiveTvListingProvidersLineupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvListingProvidersLineupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.ListingProviders.Lineups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvListingProvidersLineups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvListingProvidersLineupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvListingProvidersSchedulesDirectCountriesQueryKey() {
  return ['LiveTv', '/LiveTv/ListingProviders/SchedulesDirect/Countries'] as const
}

export function getLiveTvListingProvidersSchedulesDirectCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvListingProvidersSchedulesDirectCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvListingProvidersSchedulesDirectCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLiveTvListingProvidersSchedulesDirectCountriesQueryKey>
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
      ...getLiveTvListingProvidersSchedulesDirectCountriesQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvLiveRecordingsRecordingIdStreamQueryKey(
  args: InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>,
) {
  return ['LiveTv', '/LiveTv/LiveRecordings/:recordingId/stream', args] as const
}

export function getLiveTvLiveRecordingsRecordingIdStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvLiveRecordingsRecordingIdStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.LiveRecordings[':recordingId'].stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvLiveRecordingsRecordingIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvLiveRecordingsRecordingIdStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
  >,
) {
  return ['LiveTv', '/LiveTv/LiveStreamFiles/:streamId/stream.:container', args] as const
}

export function getLiveTvLiveStreamFilesStreamIdStreamContainerQueryOptions<
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
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.LiveStreamFiles[':streamId']['stream.:container'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvLiveStreamFilesStreamIdStreamContainer<
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
  args: () => InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvLiveStreamFilesStreamIdStreamContainerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvProgramsQueryKey(
  args: InferRequestType<typeof client.LiveTv.Programs.$get>,
) {
  return ['LiveTv', '/LiveTv/Programs', args] as const
}

export function getLiveTvProgramsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LiveTv.Programs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvProgramsQueryKey>
  >({
    queryKey: getLiveTvProgramsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Programs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Programs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvProgramsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLiveTvPrograms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.LiveTv.Programs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvProgramsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveTvProgramsProgramIdQueryKey(
  args: InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Programs/:programId', args] as const
}

export function getLiveTvProgramsProgramIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvProgramsProgramIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Programs[':programId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvProgramsProgramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvProgramsProgramIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvProgramsRecommendedQueryKey(
  args: InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
) {
  return ['LiveTv', '/LiveTv/Programs/Recommended', args] as const
}

export function getLiveTvProgramsRecommendedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvProgramsRecommendedQueryKey>
  >({
    queryKey: getLiveTvProgramsRecommendedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Programs.Recommended.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvProgramsRecommended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvProgramsRecommendedQueryKey>
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
      ...getLiveTvProgramsRecommendedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvRecordingsQueryKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings', args] as const
}

export function getLiveTvRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LiveTv.Recordings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsQueryKey>
  >({
    queryKey: getLiveTvRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Recordings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvRecordings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Recordings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvRecordingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvRecordingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLiveTvRecordingsRecordingIdQueryKey(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Recordings/:recordingId', args] as const
}

export function getLiveTvRecordingsRecordingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvRecordingsRecordingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Recordings[':recordingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvRecordingsRecordingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvRecordingsRecordingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteLiveTvRecordingsRecordingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvRecordingsRecordingIdMutationOptions<
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

export function getLiveTvRecordingsFoldersQueryKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Folders', args] as const
}

export function getLiveTvRecordingsFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsFoldersQueryKey>
  >({
    queryKey: getLiveTvRecordingsFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Recordings.Folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvRecordingsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvRecordingsFoldersQueryKey>
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
      ...getLiveTvRecordingsFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvSeriesTimersQueryKey(
  args: InferRequestType<typeof client.LiveTv.SeriesTimers.$get>,
) {
  return ['LiveTv', '/LiveTv/SeriesTimers', args] as const
}

export function getLiveTvSeriesTimersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LiveTv.SeriesTimers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvSeriesTimersQueryKey>
  >({
    queryKey: getLiveTvSeriesTimersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.SeriesTimers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvSeriesTimers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.SeriesTimers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvSeriesTimersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvSeriesTimersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLiveTvSeriesTimers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvSeriesTimersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveTvSeriesTimersTimerIdQueryKey(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', args] as const
}

export function getLiveTvSeriesTimersTimerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLiveTvSeriesTimersTimerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.SeriesTimers[':timerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvSeriesTimersTimerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLiveTvSeriesTimersTimerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLiveTvSeriesTimersTimerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvSeriesTimersTimerIdMutationOptions<
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

export function createDeleteLiveTvSeriesTimersTimerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvSeriesTimersTimerIdMutationOptions<
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

export function getLiveTvTimersQueryKey(args: InferRequestType<typeof client.LiveTv.Timers.$get>) {
  return ['LiveTv', '/LiveTv/Timers', args] as const
}

export function getLiveTvTimersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.LiveTv.Timers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTimersQueryKey>
  >({
    queryKey: getLiveTvTimersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Timers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveTvTimers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Timers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvTimersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvTimersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLiveTvTimers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.LiveTv.Timers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTimersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveTvTimersTimerIdQueryKey(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Timers/:timerId', args] as const
}

export function getLiveTvTimersTimerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTimersTimerIdQueryKey>
  >({
    queryKey: getLiveTvTimersTimerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Timers[':timerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvTimersTimerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvTimersTimerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvTimersTimerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLiveTvTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTimersTimerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLiveTvTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvTimersTimerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveTvTimersDefaultsQueryKey(
  args: InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
) {
  return ['LiveTv', '/LiveTv/Timers/Defaults', args] as const
}

export function getLiveTvTimersDefaultsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTimersDefaultsQueryKey>
  >({
    queryKey: getLiveTvTimersDefaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Timers.Defaults.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvTimersDefaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvTimersDefaultsQueryKey>
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
      ...getLiveTvTimersDefaultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLiveTvTunerHosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.LiveTv.TunerHosts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTunerHostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLiveTvTunerHosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvTunerHostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveTvTunerHostsTypesQueryKey() {
  return ['LiveTv', '/LiveTv/TunerHosts/Types'] as const
}

export function getLiveTvTunerHostsTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTunerHostsTypesQueryKey>
  >({
    queryKey: getLiveTvTunerHostsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.TunerHosts.Types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvTunerHostsTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvTunerHostsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvTunerHostsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLiveTvTunersTunerIdReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTunersTunerIdResetMutationOptions<
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

export function getLiveTvTunersDiscoverQueryKey(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
) {
  return ['LiveTv', '/LiveTv/Tuners/Discover', args] as const
}

export function getLiveTvTunersDiscoverQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTunersDiscoverQueryKey>
  >({
    queryKey: getLiveTvTunersDiscoverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Tuners.Discover.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvTunersDiscover<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvTunersDiscoverQueryKey>
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
      ...getLiveTvTunersDiscoverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLiveTvTunersDiscvoverQueryKey(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
) {
  return ['LiveTv', '/LiveTv/Tuners/Discvover', args] as const
}

export function getLiveTvTunersDiscvoverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTunersDiscvoverQueryKey>
  >({
    queryKey: getLiveTvTunersDiscvoverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Tuners.Discvover.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveTvTunersDiscvover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvTunersDiscvoverQueryKey>
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
      ...getLiveTvTunersDiscvoverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLocalizationCountriesQueryKey() {
  return ['Localization', '/Localization/Countries'] as const
}

export function getLocalizationCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationCountriesQueryKey>
  >({
    queryKey: getLocalizationCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Localization.Countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocalizationCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocalizationCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLocalizationCulturesQueryKey() {
  return ['Localization', '/Localization/Cultures'] as const
}

export function getLocalizationCulturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationCulturesQueryKey>
  >({
    queryKey: getLocalizationCulturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Localization.Cultures.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocalizationCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocalizationCulturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationCulturesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLocalizationOptionsQueryKey() {
  return ['Localization', '/Localization/Options'] as const
}

export function getLocalizationOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationOptionsQueryKey>
  >({
    queryKey: getLocalizationOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Localization.Options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocalizationOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocalizationOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLocalizationParentalRatingsQueryKey() {
  return ['Localization', '/Localization/ParentalRatings'] as const
}

export function getLocalizationParentalRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationParentalRatingsQueryKey>
  >({
    queryKey: getLocalizationParentalRatingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Localization.ParentalRatings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocalizationParentalRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocalizationParentalRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationParentalRatingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAudioItemIdLyricsQueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/Lyrics', args] as const
}

export function getAudioItemIdLyricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAudioItemIdLyricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].Lyrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAudioItemIdLyrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioItemIdLyricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAudioItemIdLyrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioItemIdLyricsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAudioItemIdLyrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAudioItemIdLyricsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAudioItemIdRemoteSearchLyricsQueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/RemoteSearch/Lyrics', args] as const
}

export function getAudioItemIdRemoteSearchLyricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAudioItemIdRemoteSearchLyricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].RemoteSearch.Lyrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAudioItemIdRemoteSearchLyrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAudioItemIdRemoteSearchLyricsQueryKey>
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
      ...getAudioItemIdRemoteSearchLyricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAudioItemIdRemoteSearchLyricsLyricId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudioItemIdRemoteSearchLyricsLyricIdMutationOptions<
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

export function getProvidersLyricsLyricIdQueryKey(
  args: InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>,
) {
  return ['Providers', '/Providers/Lyrics/:lyricId', args] as const
}

export function getProvidersLyricsLyricIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProvidersLyricsLyricIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Providers.Lyrics[':lyricId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersLyricsLyricId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProvidersLyricsLyricIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdPlaybackInfoQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
) {
  return ['Items', '/Items/:itemId/PlaybackInfo', args] as const
}

export function getItemsItemIdPlaybackInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdPlaybackInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].PlaybackInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdPlaybackInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdPlaybackInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItemsItemIdPlaybackInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdPlaybackInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLiveStreamsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveStreamsCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLiveStreamsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Open.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.LiveStreams.Open.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveStreamsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlaybackBitrateTestQueryKey(
  args: InferRequestType<typeof client.Playback.BitrateTest.$get>,
) {
  return ['Playback', '/Playback/BitrateTest', args] as const
}

export function getPlaybackBitrateTestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Playback.BitrateTest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlaybackBitrateTestQueryKey>
  >({
    queryKey: getPlaybackBitrateTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playback.BitrateTest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlaybackBitrateTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Playback.BitrateTest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaybackBitrateTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaybackBitrateTestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMediaSegmentsItemIdQueryKey(
  args: InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>,
) {
  return ['MediaSegments', '/MediaSegments/:itemId', args] as const
}

export function getMediaSegmentsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaSegmentsItemIdQueryKey>
  >({
    queryKey: getMediaSegmentsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MediaSegments[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMediaSegmentsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaSegmentsItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMediaSegmentsItemIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMoviesRecommendationsQueryKey(
  args: InferRequestType<typeof client.Movies.Recommendations.$get>,
) {
  return ['Movies', '/Movies/Recommendations', args] as const
}

export function getMoviesRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Movies.Recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesRecommendationsQueryKey>
  >({
    queryKey: getMoviesRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Movies.Recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMoviesRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Movies.Recommendations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesRecommendationsQueryKey>
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
      ...getMoviesRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMusicGenresGenreNameQueryKey(
  args: InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:genreName', args] as const
}

export function getMusicGenresGenreNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresGenreNameQueryKey>
  >({
    queryKey: getMusicGenresGenreNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres[':genreName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMusicGenresGenreName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMusicGenresGenreNameQueryKey>
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
      ...getMusicGenresGenreNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPackagesQueryKey() {
  return ['Packages', '/Packages'] as const
}

export function getPackagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPackagesQueryKey>
  >({
    queryKey: getPackagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Packages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPackagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPackagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPackagesNameQueryKey(
  args: InferRequestType<(typeof client.Packages)[':name']['$get']>,
) {
  return ['Packages', '/Packages/:name', args] as const
}

export function getPackagesNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Packages)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPackagesNameQueryKey>
  >({
    queryKey: getPackagesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Packages[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPackagesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Packages)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPackagesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPackagesInstalledName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPackagesInstalledNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePackagesInstallingPackageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePackagesInstallingPackageIdMutationOptions<
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

export function getRepositoriesQueryKey() {
  return ['Repositories', '/Repositories'] as const
}

export function getRepositoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRepositoriesQueryKey>
  >({
    queryKey: getRepositoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Repositories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRepositoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRepositoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostRepositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Repositories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRepositoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPersonsQueryKey(args: InferRequestType<typeof client.Persons.$get>) {
  return ['Persons', '/Persons', args] as const
}

export function getPersonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Persons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPersonsQueryKey>
  >({
    queryKey: getPersonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Persons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPersons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Persons.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPersonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPersonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPersonsNameQueryKey(
  args: InferRequestType<(typeof client.Persons)[':name']['$get']>,
) {
  return ['Persons', '/Persons/:name', args] as const
}

export function getPersonsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Persons)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonsNameQueryKey>
  >({
    queryKey: getPersonsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Persons[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPersonsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Persons)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPersonsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Playlists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlaylistsPlaylistIdQueryKey(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>,
) {
  return ['Playlists', '/Playlists/:playlistId', args] as const
}

export function getPlaylistsPlaylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
  >({
    queryKey: getPlaylistsPlaylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playlists[':playlistId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsPlaylistIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlaylistsPlaylistIdItemsQueryKey(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
) {
  return ['Playlists', '/Playlists/:playlistId/Items', args] as const
}

export function getPlaylistsPlaylistIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaylistsPlaylistIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playlists[':playlistId'].Items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaylistsPlaylistIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPlaylistsPlaylistIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPlaylistsPlaylistIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsPlaylistIdItemsMutationOptions<
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

export function createDeletePlaylistsPlaylistIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlaylistsPlaylistIdItemsMutationOptions<
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

export function createPostPlaylistsPlaylistIdItemsItemIdMoveNewIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexMutationOptions<
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

export function getPlaylistsPlaylistIdUsersQueryKey(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>,
) {
  return ['Playlists', '/Playlists/:playlistId/Users', args] as const
}

export function getPlaylistsPlaylistIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaylistsPlaylistIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playlists[':playlistId'].Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaylistsPlaylistIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPlaylistsPlaylistIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPlaylistsPlaylistIdUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>,
) {
  return ['Playlists', '/Playlists/:playlistId/Users/:userId', args] as const
}

export function getPlaylistsPlaylistIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaylistsPlaylistIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playlists[':playlistId'].Users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaylistsPlaylistIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getPlaylistsPlaylistIdUsersUserIdQueryKey>
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
      ...getPlaylistsPlaylistIdUsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPlaylistsPlaylistIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsPlaylistIdUsersUserIdMutationOptions<
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

export function createDeletePlaylistsPlaylistIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlaylistsPlaylistIdUsersUserIdMutationOptions<
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

export function createPostSessionsPlaying<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsPlayingPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsPlayingProgress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingProgressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsPlayingStopped<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingStoppedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserPlayedItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserPlayedItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserPlayedItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserPlayedItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPluginsQueryKey() {
  return ['Plugins', '/Plugins'] as const
}

export function getPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >({
    queryKey: getPluginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPluginsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDeletePluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePluginsPluginIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePluginsPluginIdVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePluginsPluginIdVersionMutationOptions<
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

export function createPostPluginsPluginIdVersionDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPluginsPluginIdVersionDisableMutationOptions<
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

export function createPostPluginsPluginIdVersionEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPluginsPluginIdVersionEnableMutationOptions<
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

export function getPluginsPluginIdVersionImageQueryKey(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
) {
  return ['Plugins', '/Plugins/:pluginId/:version/Image', args] as const
}

export function getPluginsPluginIdVersionImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPluginsPluginIdVersionImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Plugins[':pluginId'][':version'].Image.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPluginsPluginIdVersionImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPluginsPluginIdVersionImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPluginsPluginIdConfigurationQueryKey(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
) {
  return ['Plugins', '/Plugins/:pluginId/Configuration', args] as const
}

export function getPluginsPluginIdConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPluginsPluginIdConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Plugins[':pluginId'].Configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPluginsPluginIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPluginsPluginIdConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPluginsPluginIdConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPluginsPluginIdConfigurationMutationOptions<
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

export function createPostPluginsPluginIdManifest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPluginsPluginIdManifestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuickConnectAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Authorize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.QuickConnect.Authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuickConnectAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQuickConnectConnectQueryKey(
  args: InferRequestType<typeof client.QuickConnect.Connect.$get>,
) {
  return ['QuickConnect', '/QuickConnect/Connect', args] as const
}

export function getQuickConnectConnectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.QuickConnect.Connect.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectConnectQueryKey>
  >({
    queryKey: getQuickConnectConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.QuickConnect.Connect.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuickConnectConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.QuickConnect.Connect.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectConnectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuickConnectConnectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuickConnectEnabledQueryKey() {
  return ['QuickConnect', '/QuickConnect/Enabled'] as const
}

export function getQuickConnectEnabledQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectEnabledQueryKey>
  >({
    queryKey: getQuickConnectEnabledQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.QuickConnect.Enabled.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuickConnectEnabled<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectEnabledQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuickConnectEnabledQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostQuickConnectInitiate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuickConnectInitiateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItemsItemIdRemoteImagesQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
) {
  return ['Items', '/Items/:itemId/RemoteImages', args] as const
}

export function getItemsItemIdRemoteImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdRemoteImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].RemoteImages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdRemoteImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdRemoteImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItemsItemIdRemoteImagesDownload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdRemoteImagesDownloadMutationOptions<
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

export function getItemsItemIdRemoteImagesProvidersQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>,
) {
  return ['Items', '/Items/:itemId/RemoteImages/Providers', args] as const
}

export function getItemsItemIdRemoteImagesProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdRemoteImagesProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].RemoteImages.Providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdRemoteImagesProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getItemsItemIdRemoteImagesProvidersQueryKey>
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
      ...getItemsItemIdRemoteImagesProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScheduledTasksQueryKey(
  args: InferRequestType<typeof client.ScheduledTasks.$get>,
) {
  return ['ScheduledTasks', '/ScheduledTasks', args] as const
}

export function getScheduledTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ScheduledTasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduledTasksQueryKey>
  >({
    queryKey: getScheduledTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ScheduledTasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScheduledTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ScheduledTasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScheduledTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScheduledTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScheduledTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
) {
  return ['ScheduledTasks', '/ScheduledTasks/:taskId', args] as const
}

export function getScheduledTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduledTasksTaskIdQueryKey>
  >({
    queryKey: getScheduledTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ScheduledTasks[':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScheduledTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScheduledTasksTaskIdQueryKey>
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
      ...getScheduledTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostScheduledTasksTaskIdTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScheduledTasksTaskIdTriggersMutationOptions<
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

export function createPostScheduledTasksRunningTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScheduledTasksRunningTaskIdMutationOptions<
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

export function createDeleteScheduledTasksRunningTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScheduledTasksRunningTaskIdMutationOptions<
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

export function getSearchHintsQueryKey(args: InferRequestType<typeof client.Search.Hints.$get>) {
  return ['Search', '/Search/Hints', args] as const
}

export function getSearchHintsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Search.Hints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchHintsQueryKey>
  >({
    queryKey: getSearchHintsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Search.Hints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchHints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Search.Hints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchHintsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchHintsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAuthPasswordResetProvidersQueryKey() {
  return ['Auth', '/Auth/PasswordResetProviders'] as const
}

export function getAuthPasswordResetProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthPasswordResetProvidersQueryKey>
  >({
    queryKey: getAuthPasswordResetProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Auth.PasswordResetProviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthPasswordResetProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthPasswordResetProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthPasswordResetProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAuthProvidersQueryKey() {
  return ['Auth', '/Auth/Providers'] as const
}

export function getAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthProvidersQueryKey>
  >({
    queryKey: getAuthProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Auth.Providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSessionsQueryKey(args: InferRequestType<typeof client.Sessions.$get>) {
  return ['Sessions', '/Sessions', args] as const
}

export function getSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >({
    queryKey: getSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Sessions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSessionsSessionIdCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdCommandMutationOptions<
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

export function createPostSessionsSessionIdCommandCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdCommandCommandMutationOptions<
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

export function createPostSessionsSessionIdMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdMessageMutationOptions<
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

export function createPostSessionsSessionIdPlaying<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdPlayingMutationOptions<
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

export function createPostSessionsSessionIdPlayingCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdPlayingCommandMutationOptions<
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

export function createPostSessionsSessionIdSystemCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdSystemCommandMutationOptions<
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

export function createPostSessionsSessionIdUserUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdUserUserIdMutationOptions<
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

export function createDeleteSessionsSessionIdUserUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSessionsSessionIdUserUserIdMutationOptions<
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

export function createPostSessionsSessionIdViewing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsSessionIdViewingMutationOptions<
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

export function createPostSessionsCapabilities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsCapabilitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsCapabilitiesFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsCapabilitiesFullMutationOptions<
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

export function createPostSessionsLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsViewing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsViewingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStartupComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStartupConfigurationQueryKey() {
  return ['Startup', '/Startup/Configuration'] as const
}

export function getStartupConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStartupConfigurationQueryKey>
  >({
    queryKey: getStartupConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Startup.Configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStartupConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStartupConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStartupConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostStartupConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStartupFirstUserQueryKey() {
  return ['Startup', '/Startup/FirstUser'] as const
}

export function getStartupFirstUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStartupFirstUserQueryKey>
  >({
    queryKey: getStartupFirstUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Startup.FirstUser.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStartupFirstUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStartupFirstUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStartupFirstUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostStartupRemoteAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupRemoteAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStartupUserQueryKey() {
  return ['Startup', '/Startup/User'] as const
}

export function getStartupUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStartupUserQueryKey>
  >({
    queryKey: getStartupUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Startup.User.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStartupUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStartupUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStartupUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostStartupUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Startup.User.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStudiosQueryKey(args: InferRequestType<typeof client.Studios.$get>) {
  return ['Studios', '/Studios', args] as const
}

export function getStudiosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Studios.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStudiosQueryKey>
  >({
    queryKey: getStudiosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Studios.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStudios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Studios.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStudiosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudiosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStudiosNameQueryKey(
  args: InferRequestType<(typeof client.Studios)[':name']['$get']>,
) {
  return ['Studios', '/Studios/:name', args] as const
}

export function getStudiosNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Studios)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiosNameQueryKey>
  >({
    queryKey: getStudiosNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Studios[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStudiosName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Studios)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiosNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudiosNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFallbackFontFontsQueryKey() {
  return ['FallbackFont', '/FallbackFont/Fonts'] as const
}

export function getFallbackFontFontsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFallbackFontFontsQueryKey>
  >({
    queryKey: getFallbackFontFontsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.FallbackFont.Fonts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFallbackFontFonts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFallbackFontFontsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFallbackFontFontsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFallbackFontFontsNameQueryKey(
  args: InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
) {
  return ['FallbackFont', '/FallbackFont/Fonts/:name', args] as const
}

export function getFallbackFontFontsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFallbackFontFontsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FallbackFont.Fonts[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFallbackFontFontsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFallbackFontFontsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
) {
  return ['Items', '/Items/:itemId/RemoteSearch/Subtitles/:language', args] as const
}

export function getItemsItemIdRemoteSearchSubtitlesLanguageQueryOptions<
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
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].RemoteSearch.Subtitles[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdRemoteSearchSubtitlesLanguage<
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
  args: () => InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdRemoteSearchSubtitlesLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostItemsItemIdRemoteSearchSubtitlesSubtitleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdMutationOptions<
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

export function getProvidersSubtitlesSubtitlesSubtitleIdQueryKey(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>,
) {
  return ['Providers', '/Providers/Subtitles/Subtitles/:subtitleId', args] as const
}

export function getProvidersSubtitlesSubtitlesSubtitleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProvidersSubtitlesSubtitlesSubtitleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Providers.Subtitles.Subtitles[':subtitleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersSubtitlesSubtitlesSubtitleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProvidersSubtitlesSubtitlesSubtitleIdQueryKey>
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
      ...getProvidersSubtitlesSubtitlesSubtitleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/:mediaSourceId/Subtitles/:index/subtitles.m3u8', args] as const
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryOptions<
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
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['subtitles.m3u8'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8<
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
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostVideosItemIdSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosItemIdSubtitlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteVideosItemIdSubtitlesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosItemIdSubtitlesIndexMutationOptions<
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

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
  >,
) {
  return [
    'Videos',
    '/Videos/:routeItemId/:routeMediaSourceId/Subtitles/:routeIndex/:routeStartPositionTicks/Stream.:routeFormat',
    args,
  ] as const
}

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryOptions<
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
  args: InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
          ':routeStartPositionTicks'
        ]['Stream.:routeFormat'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormat<
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
  args: () => InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
  >,
) {
  return [
    'Videos',
    '/Videos/:routeItemId/:routeMediaSourceId/Subtitles/:routeIndex/Stream.:routeFormat',
    args,
  ] as const
}

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryOptions<
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
  args: InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
          'Stream.:routeFormat'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormat<
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
  args: () => InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsSuggestionsQueryKey(
  args: InferRequestType<typeof client.Items.Suggestions.$get>,
) {
  return ['Items', '/Items/Suggestions', args] as const
}

export function getItemsSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.Suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsSuggestionsQueryKey>
  >({
    queryKey: getItemsSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.Suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.Suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsSuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSyncPlayIdQueryKey(
  args: InferRequestType<(typeof client.SyncPlay)[':id']['$get']>,
) {
  return ['SyncPlay', '/SyncPlay/:id', args] as const
}

export function getSyncPlayIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.SyncPlay)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSyncPlayIdQueryKey>
  >({
    queryKey: getSyncPlayIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SyncPlay[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSyncPlayId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.SyncPlay)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncPlayIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncPlayIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSyncPlayBuffering<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayBufferingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Join.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.Join.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayJoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSyncPlayListQueryKey() {
  return ['SyncPlay', '/SyncPlay/List'] as const
}

export function getSyncPlayListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSyncPlayListQueryKey>
  >({
    queryKey: getSyncPlayListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.SyncPlay.List.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSyncPlayList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSyncPlayListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncPlayListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSyncPlayMovePlaylistItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayMovePlaylistItemMutationOptions<
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

export function createPostSyncPlayNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.New.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.New.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayNextItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayNextItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayPauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ping.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.Ping.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayPreviousItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayPreviousItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayReady<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayReadyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayRemoveFromPlaylist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayRemoveFromPlaylistMutationOptions<
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

export function createPostSyncPlaySeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Seek.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.Seek.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySeekMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlaySetIgnoreWait<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetIgnoreWait.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetIgnoreWaitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlaySetNewQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetNewQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlaySetPlaylistItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetPlaylistItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlaySetRepeatMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetRepeatMode.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetRepeatModeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlaySetShuffleMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetShuffleMode.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetShuffleModeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Stop.$post>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncPlayUnpause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayUnpauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSystemEndpointQueryKey() {
  return ['System', '/System/Endpoint'] as const
}

export function getSystemEndpointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemEndpointQueryKey>
  >({
    queryKey: getSystemEndpointQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Endpoint.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemEndpointQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemInfoQueryKey() {
  return ['System', '/System/Info'] as const
}

export function getSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >({
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemInfoPublicQueryKey() {
  return ['System', '/System/Info/Public'] as const
}

export function getSystemInfoPublicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemInfoPublicQueryKey>
  >({
    queryKey: getSystemInfoPublicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Info.Public.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemInfoPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemInfoStorageQueryKey() {
  return ['System', '/System/Info/Storage'] as const
}

export function getSystemInfoStorageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemInfoStorageQueryKey>
  >({
    queryKey: getSystemInfoStorageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Info.Storage.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemInfoStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoStorageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoStorageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemLogsQueryKey() {
  return ['System', '/System/Logs'] as const
}

export function getSystemLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemLogsQueryKey>
  >({
    queryKey: getSystemLogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemLogsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemLogsLogQueryKey(
  args: InferRequestType<typeof client.System.Logs.Log.$get>,
) {
  return ['System', '/System/Logs/Log', args] as const
}

export function getSystemLogsLogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.System.Logs.Log.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemLogsLogQueryKey>
  >({
    queryKey: getSystemLogsLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Logs.Log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemLogsLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.System.Logs.Log.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemLogsLogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemLogsLogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSystemPingQueryKey() {
  return ['System', '/System/Ping'] as const
}

export function getSystemPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemPingQueryKey>
  >({
    queryKey: getSystemPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.Ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSystemPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemRestartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemShutdownMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGetUtcTimeQueryKey() {
  return ['GetUtcTime', '/GetUtcTime'] as const
}

export function getGetUtcTimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetUtcTimeQueryKey>
  >({
    queryKey: getGetUtcTimeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.GetUtcTime.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetUtcTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetUtcTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetUtcTimeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTrailersQueryKey(args: InferRequestType<typeof client.Trailers.$get>) {
  return ['Trailers', '/Trailers', args] as const
}

export function getTrailersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Trailers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrailersQueryKey>
  >({
    queryKey: getTrailersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Trailers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTrailers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Trailers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTrailersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrailersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVideosItemIdTrickplayWidthIndexJpgQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/Trickplay/:width/:index.jpg', args] as const
}

export function getVideosItemIdTrickplayWidthIndexJpgQueryOptions<
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
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosItemIdTrickplayWidthIndexJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].Trickplay[':width'][':index.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosItemIdTrickplayWidthIndexJpg<
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
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosItemIdTrickplayWidthIndexJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVideosItemIdTrickplayWidthTilesM3u8QueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/Trickplay/:width/tiles.m3u8', args] as const
}

export function getVideosItemIdTrickplayWidthTilesM3u8QueryOptions<
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
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosItemIdTrickplayWidthTilesM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].Trickplay[':width']['tiles.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosItemIdTrickplayWidthTilesM3u8<
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
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosItemIdTrickplayWidthTilesM3u8QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShowsSeriesIdEpisodesQueryKey(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
) {
  return ['Shows', '/Shows/:seriesId/Episodes', args] as const
}

export function getShowsSeriesIdEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShowsSeriesIdEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shows[':seriesId'].Episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShowsSeriesIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getShowsSeriesIdEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShowsSeriesIdSeasonsQueryKey(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
) {
  return ['Shows', '/Shows/:seriesId/Seasons', args] as const
}

export function getShowsSeriesIdSeasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getShowsSeriesIdSeasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shows[':seriesId'].Seasons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShowsSeriesIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getShowsSeriesIdSeasonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShowsNextUpQueryKey(args: InferRequestType<typeof client.Shows.NextUp.$get>) {
  return ['Shows', '/Shows/NextUp', args] as const
}

export function getShowsNextUpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Shows.NextUp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShowsNextUpQueryKey>
  >({
    queryKey: getShowsNextUpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shows.NextUp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShowsNextUp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Shows.NextUp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShowsNextUpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsNextUpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getShowsUpcomingQueryKey(
  args: InferRequestType<typeof client.Shows.Upcoming.$get>,
) {
  return ['Shows', '/Shows/Upcoming', args] as const
}

export function getShowsUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Shows.Upcoming.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsUpcomingQueryKey>
  >({
    queryKey: getShowsUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shows.Upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShowsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Shows.Upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShowsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAudioItemIdUniversalQueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/universal', args] as const
}

export function getAudioItemIdUniversalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAudioItemIdUniversalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].universal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAudioItemIdUniversal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAudioItemIdUniversalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadAudioItemIdUniversal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadAudioItemIdUniversalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.Users.$get>) {
  return ['Users', '/Users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.Users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['$get']>,
) {
  return ['Users', '/Users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersAuthenticateByName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Users.AuthenticateByName.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Users.AuthenticateByName.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersAuthenticateByNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersAuthenticateWithQuickConnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersAuthenticateWithQuickConnectMutationOptions<
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

export function createPostUsersConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Users.ForgotPassword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersForgotPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersForgotPasswordPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.Pin.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.Users.ForgotPassword.Pin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersForgotPasswordPinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeQueryKey() {
  return ['Users', '/Users/Me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.Me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.New.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Users.New.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersNewMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersPublicQueryKey() {
  return ['Users', '/Users/Public'] as const
}

export function getUsersPublicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersPublicQueryKey>
  >({
    queryKey: getUsersPublicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.Public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdIntrosQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>,
) {
  return ['Items', '/Items/:itemId/Intros', args] as const
}

export function getItemsItemIdIntrosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Intros']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdIntrosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].Intros.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdIntros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Intros']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdIntrosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdLocalTrailersQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>,
) {
  return ['Items', '/Items/:itemId/LocalTrailers', args] as const
}

export function getItemsItemIdLocalTrailersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdLocalTrailersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].LocalTrailers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdLocalTrailers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdLocalTrailersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsItemIdSpecialFeaturesQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>,
) {
  return ['Items', '/Items/:itemId/SpecialFeatures', args] as const
}

export function getItemsItemIdSpecialFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItemsItemIdSpecialFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].SpecialFeatures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItemsItemIdSpecialFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getItemsItemIdSpecialFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItemsLatestQueryKey(args: InferRequestType<typeof client.Items.Latest.$get>) {
  return ['Items', '/Items/Latest', args] as const
}

export function getItemsLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.Latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsLatestQueryKey>
  >({
    queryKey: getItemsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.Latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.Latest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemsLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsRootQueryKey(args: InferRequestType<typeof client.Items.Root.$get>) {
  return ['Items', '/Items/Root', args] as const
}

export function getItemsRootQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Items.Root.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsRootQueryKey>
  >({
    queryKey: getItemsRootQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.Root.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsRoot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.Root.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getItemsRootQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsRootQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUserFavoriteItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserFavoriteItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserFavoriteItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserFavoriteItemsItemIdMutationOptions<
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

export function createPostUserItemsItemIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserItemsItemIdRatingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserItemsItemIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserItemsItemIdRatingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserViewsQueryKey(args: InferRequestType<typeof client.UserViews.$get>) {
  return ['UserViews', '/UserViews', args] as const
}

export function getUserViewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.UserViews.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserViewsQueryKey>
  >({
    queryKey: getUserViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.UserViews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserViews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.UserViews.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserViewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserViewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserViewsGroupingOptionsQueryKey(
  args: InferRequestType<typeof client.UserViews.GroupingOptions.$get>,
) {
  return ['UserViews', '/UserViews/GroupingOptions', args] as const
}

export function getUserViewsGroupingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.UserViews.GroupingOptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserViewsGroupingOptionsQueryKey>
  >({
    queryKey: getUserViewsGroupingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.UserViews.GroupingOptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserViewsGroupingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.UserViews.GroupingOptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserViewsGroupingOptionsQueryKey>
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
      ...getUserViewsGroupingOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
) {
  return ['Videos', '/Videos/:videoId/:mediaSourceId/Attachments/:index', args] as const
}

export function getVideosVideoIdMediaSourceIdAttachmentsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':videoId'][':mediaSourceId'].Attachments[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosVideoIdMediaSourceIdAttachmentsIndex<
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
  args: () => InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosVideoIdMediaSourceIdAttachmentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getVideosItemIdAdditionalPartsQueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/AdditionalParts', args] as const
}

export function getVideosItemIdAdditionalPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosItemIdAdditionalPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].AdditionalParts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosItemIdAdditionalParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosItemIdAdditionalPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteVideosItemIdAlternateSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosItemIdAlternateSourcesMutationOptions<
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

export function getVideosItemIdStreamQueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/stream', args] as const
}

export function getVideosItemIdStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosItemIdStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosItemIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosItemIdStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createHeadVideosItemIdStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadVideosItemIdStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideosItemIdStreamContainerQueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/stream.:container', args] as const
}

export function getVideosItemIdStreamContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVideosItemIdStreamContainerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId']['stream.:container'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosItemIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVideosItemIdStreamContainerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createHeadVideosItemIdStreamContainer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadVideosItemIdStreamContainerMutationOptions<
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

export function createPostVideosMergeVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosMergeVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getYearsQueryKey(args: InferRequestType<typeof client.Years.$get>) {
  return ['Years', '/Years', args] as const
}

export function getYearsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Years.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getYearsQueryKey>
  >({
    queryKey: getYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Years.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createYears<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Years.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getYearsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getYearsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getYearsYearQueryKey(
  args: InferRequestType<(typeof client.Years)[':year']['$get']>,
) {
  return ['Years', '/Years/:year', args] as const
}

export function getYearsYearQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Years)[':year']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYearsYearQueryKey>
  >({
    queryKey: getYearsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Years[':year'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createYearsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Years)[':year']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getYearsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getYearsYearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
