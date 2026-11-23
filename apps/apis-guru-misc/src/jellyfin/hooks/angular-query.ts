import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getBrandingKey() {
  return ['Branding'] as const
}

export function getChannelsKey() {
  return ['Channels'] as const
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

export function getDlnaKey() {
  return ['Dlna'] as const
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

export function getImagesKey() {
  return ['Images'] as const
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

export function getMoviesKey() {
  return ['Movies'] as const
}

export function getMusicGenresKey() {
  return ['MusicGenres'] as const
}

export function getNotificationsKey() {
  return ['Notifications'] as const
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

export function getAlbumsIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Albums)[':id']['InstantMix']['$get']>,
) {
  return ['Albums', '/Albums/:id/InstantMix', args] as const
}

export function getAlbumsIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Albums)[':id']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdInstantMixQueryKey>
  >({
    queryKey: getAlbumsIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Albums[':id'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAlbumsIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Albums)[':id']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlbumsIdInstantMixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlbumsIdInstantMixQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAlbumsItemIdSimilar<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlbumsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectArtists<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectArtistsAlbumArtists<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsAlbumArtistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getArtistsIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Artists)[':id']['InstantMix']['$get']>,
) {
  return ['Artists', '/Artists/:id/InstantMix', args] as const
}

export function getArtistsIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Artists)[':id']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdInstantMixQueryKey>
  >({
    queryKey: getArtistsIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Artists[':id'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectArtistsIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Artists)[':id']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsIdInstantMixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsIdInstantMixQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectArtistsItemIdSimilar<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getArtistsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectArtistsName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectArtistsNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getArtistsNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadArtistsNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}

export function getAudioItemIdHlsSegmentIdStreamAacQueryKey(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
  >,
) {
  return ['Audio', '/Audio/:itemId/hls/:segmentId/stream.aac', args] as const
}

export function getAudioItemIdHlsSegmentIdStreamAacQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdHlsSegmentIdStreamAacQueryKey>
  >({
    queryKey: getAudioItemIdHlsSegmentIdStreamAacQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].hls[':segmentId']['stream.aac'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioItemIdHlsSegmentIdStreamAac<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioItemIdHlsSegmentIdStreamAacQueryKey>
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
      ...getAudioItemIdHlsSegmentIdStreamAacQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAudioItemIdHlsSegmentIdStreamMp3QueryKey(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
  >,
) {
  return ['Audio', '/Audio/:itemId/hls/:segmentId/stream.mp3', args] as const
}

export function getAudioItemIdHlsSegmentIdStreamMp3QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdHlsSegmentIdStreamMp3QueryKey>
  >({
    queryKey: getAudioItemIdHlsSegmentIdStreamMp3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].hls[':segmentId']['stream.mp3'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioItemIdHlsSegmentIdStreamMp3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioItemIdHlsSegmentIdStreamMp3QueryKey>
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
      ...getAudioItemIdHlsSegmentIdStreamMp3QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAudioItemIdHls1PlaylistIdSegmentIdContainerQueryKey(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
) {
  return ['Audio', '/Audio/:itemId/hls1/:playlistId/:segmentId.{container}', args] as const
}

export function getAudioItemIdHls1PlaylistIdSegmentIdContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdHls1PlaylistIdSegmentIdContainerQueryKey>
  >({
    queryKey: getAudioItemIdHls1PlaylistIdSegmentIdContainerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId'].hls1[':playlistId'][':segmentId.{container}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioItemIdHls1PlaylistIdSegmentIdContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioItemIdHls1PlaylistIdSegmentIdContainerQueryKey>
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
      ...getAudioItemIdHls1PlaylistIdSegmentIdContainerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAudioItemIdMainM3u8QueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/main.m3u8', args] as const
}

export function getAudioItemIdMainM3u8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdMainM3u8QueryKey>
  >({
    queryKey: getAudioItemIdMainM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId']['main.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioItemIdMainM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioItemIdMainM3u8QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioItemIdMainM3u8QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudioItemIdMasterM3u8QueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/master.m3u8', args] as const
}

export function getAudioItemIdMasterM3u8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdMasterM3u8QueryKey>
  >({
    queryKey: getAudioItemIdMasterM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Audio[':itemId']['master.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioItemIdMasterM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioItemIdMasterM3u8QueryKey>
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
      ...getAudioItemIdMasterM3u8QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getHeadAudioItemIdMasterM3u8MutationKey() {
  return ['Audio', '/Audio/:itemId/master.m3u8', 'HEAD'] as const
}

export function getHeadAudioItemIdMasterM3u8MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadAudioItemIdMasterM3u8MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>,
    ) {
      return parseResponse(client.Audio[':itemId']['master.m3u8'].$head(args, options))
    },
  })
}

export function injectHeadAudioItemIdMasterM3u8<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadAudioItemIdMasterM3u8MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAudioItemIdStream<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioItemIdStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHeadAudioItemIdStream<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadAudioItemIdStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAudioItemIdStreamContainerQueryKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/stream.{container}', args] as const
}

export function getAudioItemIdStreamContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
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
        client.Audio[':itemId']['stream.{container}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioItemIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAudioItemIdStreamContainerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getHeadAudioItemIdStreamContainerMutationKey() {
  return ['Audio', '/Audio/:itemId/stream.{container}', 'HEAD'] as const
}

export function getHeadAudioItemIdStreamContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadAudioItemIdStreamContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>,
    ) {
      return parseResponse(client.Audio[':itemId']['stream.{container}'].$head(args, options))
    },
  })
}

export function injectHeadAudioItemIdStreamContainer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectAudioItemIdUniversal<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAudioItemIdUniversalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadAudioItemIdUniversal<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadAudioItemIdUniversalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAuthKeys<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAuthKeys<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAuthKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthKeysKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAuthPasswordResetProviders<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthPasswordResetProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectAuthProviders<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectBrandingConfiguration<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectBrandingCss<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingCssQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectBrandingCssCss<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrandingCssCssQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectChannels<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChannelsFeatures<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsFeaturesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectChannelsItemsLatest<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsItemsLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChannelsChannelIdFeatures<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelIdFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChannelsChannelIdItems<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCollections<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCollectionsCollectionIdItems<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteCollectionsCollectionIdItems<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDevices<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteDevices<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDevicesInfo<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDevicesOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesOptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDevicesOptions<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicesOptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDisplayPreferencesDisplayPreferencesId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDisplayPreferencesDisplayPreferencesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDisplayPreferencesDisplayPreferencesId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}

export function getDlnaProfileInfosQueryKey() {
  return ['Dlna', '/Dlna/ProfileInfos'] as const
}

export function getDlnaProfileInfosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaProfileInfosQueryKey>
  >({
    queryKey: getDlnaProfileInfosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna.ProfileInfos.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaProfileInfos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaProfileInfosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDlnaProfileInfosQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostDlnaProfilesMutationKey() {
  return ['Dlna', '/Dlna/Profiles', 'POST'] as const
}

export function getPostDlnaProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Dlna.Profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDlnaProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Dlna.Profiles.$post>) {
      return parseResponse(client.Dlna.Profiles.$post(args, options))
    },
  })
}

export function injectPostDlnaProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Dlna.Profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDlnaProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDlnaProfilesDefaultQueryKey() {
  return ['Dlna', '/Dlna/Profiles/Default'] as const
}

export function getDlnaProfilesDefaultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaProfilesDefaultQueryKey>
  >({
    queryKey: getDlnaProfilesDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna.Profiles.Default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaProfilesDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaProfilesDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDlnaProfilesDefaultQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDlnaProfilesProfileIdQueryKey(
  args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$get']>,
) {
  return ['Dlna', '/Dlna/Profiles/:profileId', args] as const
}

export function getDlnaProfilesProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaProfilesProfileIdQueryKey>
  >({
    queryKey: getDlnaProfilesProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna.Profiles[':profileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaProfilesProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaProfilesProfileIdQueryKey>
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
      ...getDlnaProfilesProfileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDlnaProfilesProfileIdMutationKey() {
  return ['Dlna', '/Dlna/Profiles/:profileId', 'POST'] as const
}

export function getPostDlnaProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDlnaProfilesProfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$post']>) {
      return parseResponse(client.Dlna.Profiles[':profileId'].$post(args, options))
    },
  })
}

export function injectPostDlnaProfilesProfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDlnaProfilesProfileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteDlnaProfilesProfileIdMutationKey() {
  return ['Dlna', '/Dlna/Profiles/:profileId', 'DELETE'] as const
}

export function getDeleteDlnaProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDlnaProfilesProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>,
    ) {
      return parseResponse(client.Dlna.Profiles[':profileId'].$delete(args, options))
    },
  })
}

export function injectDeleteDlnaProfilesProfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDlnaProfilesProfileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDlnaIconsFileNameQueryKey(
  args: InferRequestType<(typeof client.Dlna.icons)[':fileName']['$get']>,
) {
  return ['Dlna', '/Dlna/icons/:fileName', args] as const
}

export function getDlnaIconsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna.icons)[':fileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaIconsFileNameQueryKey>
  >({
    queryKey: getDlnaIconsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna.icons[':fileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaIconsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna.icons)[':fileName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaIconsFileNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDlnaIconsFileNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDlnaServerIdConnectionManagerQueryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager', args] as const
}

export function getDlnaServerIdConnectionManagerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdConnectionManagerQueryKey>
  >({
    queryKey: getDlnaServerIdConnectionManagerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].ConnectionManager.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdConnectionManager<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdConnectionManagerQueryKey>
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
      ...getDlnaServerIdConnectionManagerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdConnectionManagerConnectionManagerQueryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager/ConnectionManager', args] as const
}

export function getDlnaServerIdConnectionManagerConnectionManagerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdConnectionManagerConnectionManagerQueryKey>
  >({
    queryKey: getDlnaServerIdConnectionManagerConnectionManagerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].ConnectionManager.ConnectionManager.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdConnectionManagerConnectionManager<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdConnectionManagerConnectionManagerQueryKey>
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
      ...getDlnaServerIdConnectionManagerConnectionManagerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdConnectionManagerConnectionManagerXmlQueryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager/ConnectionManager.xml', args] as const
}

export function getDlnaServerIdConnectionManagerConnectionManagerXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdConnectionManagerConnectionManagerXmlQueryKey>
  >({
    queryKey: getDlnaServerIdConnectionManagerConnectionManagerXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].ConnectionManager['ConnectionManager.xml'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdConnectionManagerConnectionManagerXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdConnectionManagerConnectionManagerXmlQueryKey>
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
      ...getDlnaServerIdConnectionManagerConnectionManagerXmlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDlnaServerIdConnectionManagerControlMutationKey() {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager/Control', 'POST'] as const
}

export function getPostDlnaServerIdConnectionManagerControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDlnaServerIdConnectionManagerControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']
      >,
    ) {
      return parseResponse(client.Dlna[':serverId'].ConnectionManager.Control.$post(args, options))
    },
  })
}

export function injectPostDlnaServerIdConnectionManagerControl<
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
                  (typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDlnaServerIdConnectionManagerControlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDlnaServerIdContentDirectoryQueryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory', args] as const
}

export function getDlnaServerIdContentDirectoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdContentDirectoryQueryKey>
  >({
    queryKey: getDlnaServerIdContentDirectoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].ContentDirectory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdContentDirectory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdContentDirectoryQueryKey>
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
      ...getDlnaServerIdContentDirectoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdContentDirectoryContentDirectoryQueryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory/ContentDirectory', args] as const
}

export function getDlnaServerIdContentDirectoryContentDirectoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdContentDirectoryContentDirectoryQueryKey>
  >({
    queryKey: getDlnaServerIdContentDirectoryContentDirectoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].ContentDirectory.ContentDirectory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdContentDirectoryContentDirectory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdContentDirectoryContentDirectoryQueryKey>
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
      ...getDlnaServerIdContentDirectoryContentDirectoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdContentDirectoryContentDirectoryXmlQueryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory/ContentDirectory.xml', args] as const
}

export function getDlnaServerIdContentDirectoryContentDirectoryXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdContentDirectoryContentDirectoryXmlQueryKey>
  >({
    queryKey: getDlnaServerIdContentDirectoryContentDirectoryXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].ContentDirectory['ContentDirectory.xml'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdContentDirectoryContentDirectoryXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdContentDirectoryContentDirectoryXmlQueryKey>
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
      ...getDlnaServerIdContentDirectoryContentDirectoryXmlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDlnaServerIdContentDirectoryControlMutationKey() {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory/Control', 'POST'] as const
}

export function getPostDlnaServerIdContentDirectoryControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDlnaServerIdContentDirectoryControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']
      >,
    ) {
      return parseResponse(client.Dlna[':serverId'].ContentDirectory.Control.$post(args, options))
    },
  })
}

export function injectPostDlnaServerIdContentDirectoryControl<
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
                  (typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDlnaServerIdContentDirectoryControlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDlnaServerIdMediaReceiverRegistrarQueryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/MediaReceiverRegistrar', args] as const
}

export function getDlnaServerIdMediaReceiverRegistrarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdMediaReceiverRegistrarQueryKey>
  >({
    queryKey: getDlnaServerIdMediaReceiverRegistrarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].MediaReceiverRegistrar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdMediaReceiverRegistrar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdMediaReceiverRegistrarQueryKey>
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
      ...getDlnaServerIdMediaReceiverRegistrarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDlnaServerIdMediaReceiverRegistrarControlMutationKey() {
  return ['Dlna', '/Dlna/:serverId/MediaReceiverRegistrar/Control', 'POST'] as const
}

export function getPostDlnaServerIdMediaReceiverRegistrarControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDlnaServerIdMediaReceiverRegistrarControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
      >,
    ) {
      return parseResponse(
        client.Dlna[':serverId'].MediaReceiverRegistrar.Control.$post(args, options),
      )
    },
  })
}

export function injectPostDlnaServerIdMediaReceiverRegistrarControl<
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
                  (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDlnaServerIdMediaReceiverRegistrarControlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarQueryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/MediaReceiverRegistrar/MediaReceiverRegistrar', args] as const
}

export function getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarQueryKey>
  >({
    queryKey: getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].MediaReceiverRegistrar.MediaReceiverRegistrar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarQueryKey>
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
      ...getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlQueryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
  >,
) {
  return [
    'Dlna',
    '/Dlna/:serverId/MediaReceiverRegistrar/MediaReceiverRegistrar.xml',
    args,
  ] as const
}

export function getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlQueryKey>
  >({
    queryKey: getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].MediaReceiverRegistrar['MediaReceiverRegistrar.xml'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlQueryKey>
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
      ...getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdDescriptionQueryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/description', args] as const
}

export function getDlnaServerIdDescriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdDescriptionQueryKey>
  >({
    queryKey: getDlnaServerIdDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].description.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna)[':serverId']['description']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdDescriptionQueryKey>
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
      ...getDlnaServerIdDescriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdDescriptionXmlQueryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/description.xml', args] as const
}

export function getDlnaServerIdDescriptionXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdDescriptionXmlQueryKey>
  >({
    queryKey: getDlnaServerIdDescriptionXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId']['description.xml'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdDescriptionXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdDescriptionXmlQueryKey>
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
      ...getDlnaServerIdDescriptionXmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDlnaServerIdIconsFileNameQueryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/icons/:fileName', args] as const
}

export function getDlnaServerIdIconsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDlnaServerIdIconsFileNameQueryKey>
  >({
    queryKey: getDlnaServerIdIconsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Dlna[':serverId'].icons[':fileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDlnaServerIdIconsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDlnaServerIdIconsFileNameQueryKey>
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
      ...getDlnaServerIdIconsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectEnvironmentDefaultDirectoryBrowser<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvironmentDefaultDirectoryBrowserQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectEnvironmentDirectoryContents<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvironmentDirectoryContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectEnvironmentDrives<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentDrivesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getEnvironmentNetworkSharesQueryKey() {
  return ['Environment', '/Environment/NetworkShares'] as const
}

export function getEnvironmentNetworkSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentNetworkSharesQueryKey>
  >({
    queryKey: getEnvironmentNetworkSharesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Environment.NetworkShares.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEnvironmentNetworkShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentNetworkSharesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentNetworkSharesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectEnvironmentParentPath<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvironmentParentPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEnvironmentValidatePath<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvironmentValidatePathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFallbackFontFonts<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFallbackFontFontsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectFallbackFontFontsName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFallbackFontFontsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGenres<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGenresGenreName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresGenreNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGenresNameImagesImageType<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenresNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadGenresNameImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectGenresNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenresNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadGenresNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectGetUtcTime<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetUtcTimeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getImagesGeneralQueryKey() {
  return ['Images', '/Images/General'] as const
}

export function getImagesGeneralQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesGeneralQueryKey>
  >({
    queryKey: getImagesGeneralQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.General.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectImagesGeneral<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImagesGeneralQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesGeneralQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getImagesGeneralNameTypeQueryKey(
  args: InferRequestType<(typeof client.Images.General)[':name'][':type']['$get']>,
) {
  return ['Images', '/Images/General/:name/:type', args] as const
}

export function getImagesGeneralNameTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.General)[':name'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesGeneralNameTypeQueryKey>
  >({
    queryKey: getImagesGeneralNameTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.General[':name'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectImagesGeneralNameType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.General)[':name'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesGeneralNameTypeQueryKey>
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
      ...getImagesGeneralNameTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getImagesMediaInfoQueryKey() {
  return ['Images', '/Images/MediaInfo'] as const
}

export function getImagesMediaInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesMediaInfoQueryKey>
  >({
    queryKey: getImagesMediaInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.MediaInfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectImagesMediaInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImagesMediaInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesMediaInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getImagesMediaInfoThemeNameQueryKey(
  args: InferRequestType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>,
) {
  return ['Images', '/Images/MediaInfo/:theme/:name', args] as const
}

export function getImagesMediaInfoThemeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesMediaInfoThemeNameQueryKey>
  >({
    queryKey: getImagesMediaInfoThemeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.MediaInfo[':theme'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectImagesMediaInfoThemeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesMediaInfoThemeNameQueryKey>
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
      ...getImagesMediaInfoThemeNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getImagesRatingsQueryKey() {
  return ['Images', '/Images/Ratings'] as const
}

export function getImagesRatingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesRatingsQueryKey>
  >({
    queryKey: getImagesRatingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.Ratings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectImagesRatings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImagesRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesRatingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getImagesRatingsThemeNameQueryKey(
  args: InferRequestType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>,
) {
  return ['Images', '/Images/Ratings/:theme/:name', args] as const
}

export function getImagesRatingsThemeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesRatingsThemeNameQueryKey>
  >({
    queryKey: getImagesRatingsThemeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.Ratings[':theme'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectImagesRatingsThemeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesRatingsThemeNameQueryKey>
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
      ...getImagesRatingsThemeNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getImagesRemoteQueryKey(args: InferRequestType<typeof client.Images.Remote.$get>) {
  return ['Images', '/Images/Remote', args] as const
}

export function getImagesRemoteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Images.Remote.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesRemoteQueryKey>
  >({
    queryKey: getImagesRemoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.Remote.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectImagesRemote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Images.Remote.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImagesRemoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesRemoteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItems<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteItems<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectItemsCounts<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsCountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItemsFilters<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsFiltersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItemsFilters2<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsFilters2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostItemsRemoteSearchApplyItemId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostItemsRemoteSearchBook<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchBookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostItemsRemoteSearchBoxSet<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchBoxSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getItemsRemoteSearchImageQueryKey(
  args: InferRequestType<typeof client.Items.RemoteSearch.Image.$get>,
) {
  return ['Items', '/Items/RemoteSearch/Image', args] as const
}

export function getItemsRemoteSearchImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Items.RemoteSearch.Image.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsRemoteSearchImageQueryKey>
  >({
    queryKey: getItemsRemoteSearchImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items.RemoteSearch.Image.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectItemsRemoteSearchImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Items.RemoteSearch.Image.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsRemoteSearchImageQueryKey>
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
      ...getItemsRemoteSearchImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsRemoteSearchMovie<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchMovieMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostItemsRemoteSearchMusicAlbum<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostItemsRemoteSearchMusicArtist<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostItemsRemoteSearchMusicVideo<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostItemsRemoteSearchPerson<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchPersonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostItemsRemoteSearchSeries<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsRemoteSearchSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostItemsRemoteSearchTrailer<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}

export function getItemsIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Items)[':id']['InstantMix']['$get']>,
) {
  return ['Items', '/Items/:id/InstantMix', args] as const
}

export function getItemsIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':id']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdInstantMixQueryKey>
  >({
    queryKey: getItemsIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':id'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectItemsIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':id']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsIdInstantMixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsIdInstantMixQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsItemIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectItemsItemIdAncestors<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdAncestorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdContentType<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdContentTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getItemsItemIdCriticReviewsQueryKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>,
) {
  return ['Items', '/Items/:itemId/CriticReviews', args] as const
}

export function getItemsItemIdCriticReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdCriticReviewsQueryKey>
  >({
    queryKey: getItemsItemIdCriticReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Items[':itemId'].CriticReviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectItemsItemIdCriticReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsItemIdCriticReviewsQueryKey>
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
      ...getItemsItemIdCriticReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectItemsItemIdDownload<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItemsItemIdExternalIdInfos<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdExternalIdInfosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectItemsItemIdFile<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItemsItemIdImages<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItemsItemIdImagesImageType<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteItemsItemIdImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectHeadItemsItemIdImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectItemsItemIdImagesImageTypeImageIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteItemsItemIdImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectHeadItemsItemIdImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostItemsItemIdImagesImageTypeImageIndexIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectItemsItemIdMetadataEditor<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdMetadataEditorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectItemsItemIdPlaybackInfo<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdPlaybackInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdPlaybackInfo<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdPlaybackInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsItemIdRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectItemsItemIdRemoteImages<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdRemoteImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdRemoteImagesDownload<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectItemsItemIdRemoteImagesProviders<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdRemoteImagesProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectItemsItemIdRemoteSearchSubtitlesLanguage<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdRemoteSearchSubtitlesLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostItemsItemIdRemoteSearchSubtitlesSubtitleId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectItemsItemIdSimilar<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectItemsItemIdThemeMedia<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdThemeMediaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectItemsItemIdThemeSongs<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdThemeSongsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectItemsItemIdThemeVideos<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItemsItemIdThemeVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLibrariesAvailableOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLibrariesAvailableOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLibraryMediaUpdated<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryMediaUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLibraryMediaFolders<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryMediaFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLibraryMoviesAdded<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryMoviesAddedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLibraryMoviesUpdated<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryMoviesUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLibraryPhysicalPaths<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryPhysicalPathsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLibraryRefreshQueryKey() {
  return ['Library', '/Library/Refresh'] as const
}

export function getLibraryRefreshQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryRefreshQueryKey>
  >({
    queryKey: getLibraryRefreshQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Library.Refresh.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLibraryRefresh<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLibraryRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryRefreshQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLibrarySeriesAdded<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibrarySeriesAddedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLibrarySeriesUpdated<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibrarySeriesUpdatedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLibraryVirtualFolders<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryVirtualFoldersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLibraryVirtualFolders<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibraryVirtualFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLibraryVirtualFolders<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLibraryVirtualFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLibraryVirtualFoldersLibraryOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostLibraryVirtualFoldersName<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostLibraryVirtualFoldersPaths<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteLibraryVirtualFoldersPaths<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostLibraryVirtualFoldersPathsUpdate<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostLiveStreamsClose<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveStreamsCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveStreamsOpen<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveStreamsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLiveTvChannelMappingOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvChannelMappingOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLiveTvChannelMappings<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvChannelMappingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLiveTvChannels<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectLiveTvChannelsChannelId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvChannelsChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvGuideInfo<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvGuideInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLiveTvInfo<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLiveTvListingProviders<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvListingProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLiveTvListingProviders<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectLiveTvListingProvidersDefault<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvListingProvidersDefaultQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvListingProvidersLineups<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvListingProvidersLineupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvListingProvidersSchedulesDirectCountries<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvListingProvidersSchedulesDirectCountriesQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvLiveRecordingsRecordingIdStream<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvLiveRecordingsRecordingIdStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
  >,
) {
  return ['LiveTv', '/LiveTv/LiveStreamFiles/:streamId/stream.{container}', args] as const
}

export function getLiveTvLiveStreamFilesStreamIdStreamContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
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
        client.LiveTv.LiveStreamFiles[':streamId']['stream.{container}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLiveTvLiveStreamFilesStreamIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvLiveStreamFilesStreamIdStreamContainerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvPrograms<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvProgramsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLiveTvPrograms<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvProgramsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLiveTvProgramsRecommended<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvProgramsRecommendedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvProgramsProgramId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvProgramsProgramIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvRecordings<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvRecordingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectLiveTvRecordingsFolders<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvRecordingsFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLiveTvRecordingsGroupsQueryKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.Groups.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Groups', args] as const
}

export function getLiveTvRecordingsGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Groups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsGroupsQueryKey>
  >({
    queryKey: getLiveTvRecordingsGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Recordings.Groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLiveTvRecordingsGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Recordings.Groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvRecordingsGroupsQueryKey>
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
      ...getLiveTvRecordingsGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLiveTvRecordingsGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Groups/:groupId', args] as const
}

export function getLiveTvRecordingsGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsGroupsGroupIdQueryKey>
  >({
    queryKey: getLiveTvRecordingsGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Recordings.Groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLiveTvRecordingsGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvRecordingsGroupsGroupIdQueryKey>
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
      ...getLiveTvRecordingsGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLiveTvRecordingsSeriesQueryKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.Series.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Series', args] as const
}

export function getLiveTvRecordingsSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsSeriesQueryKey>
  >({
    queryKey: getLiveTvRecordingsSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.LiveTv.Recordings.Series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLiveTvRecordingsSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.LiveTv.Recordings.Series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiveTvRecordingsSeriesQueryKey>
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
      ...getLiveTvRecordingsSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvRecordingsRecordingId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvRecordingsRecordingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteLiveTvRecordingsRecordingId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectLiveTvSeriesTimers<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvSeriesTimersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLiveTvSeriesTimers<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvSeriesTimersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLiveTvSeriesTimersTimerId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvSeriesTimersTimerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLiveTvSeriesTimersTimerId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteLiveTvSeriesTimersTimerId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectLiveTvTimers<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvTimersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLiveTvTimers<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTimersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLiveTvTimersDefaults<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvTimersDefaultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvTimersTimerId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvTimersTimerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLiveTvTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTimersTimerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLiveTvTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvTimersTimerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLiveTvTunerHosts<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveTvTunerHostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLiveTvTunerHosts<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveTvTunerHostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLiveTvTunerHostsTypes<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveTvTunerHostsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLiveTvTunersDiscover<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvTunersDiscoverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLiveTvTunersDiscvover<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveTvTunersDiscvoverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLiveTvTunersTunerIdReset<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectLocalizationCountries<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocalizationCultures<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationCulturesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocalizationOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocalizationParentalRatings<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocalizationParentalRatingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectMoviesRecommendations<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMoviesItemIdSimilar<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMusicGenresQueryKey(args: InferRequestType<typeof client.MusicGenres.$get>) {
  return ['MusicGenres', '/MusicGenres', args] as const
}

export function getMusicGenresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.MusicGenres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMusicGenresQueryKey>
  >({
    queryKey: getMusicGenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMusicGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.MusicGenres.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMusicGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMusicGenresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMusicGenresGenreName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMusicGenresGenreNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMusicGenresIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:id/InstantMix', args] as const
}

export function getMusicGenresIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresIdInstantMixQueryKey>
  >({
    queryKey: getMusicGenresIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.MusicGenres[':id'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMusicGenresIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMusicGenresIdInstantMixQueryKey>
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
      ...getMusicGenresIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMusicGenresNameImagesImageType<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMusicGenresNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadMusicGenresNameImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectMusicGenresNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMusicGenresNameImagesImageTypeImageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadMusicGenresNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectMusicGenresNameInstantMix<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMusicGenresNameInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNotificationsAdminMutationKey() {
  return ['Notifications', '/Notifications/Admin', 'POST'] as const
}

export function getPostNotificationsAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Admin.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Notifications.Admin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsAdminMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Notifications.Admin.$post>) {
      return parseResponse(client.Notifications.Admin.$post(args, options))
    },
  })
}

export function injectPostNotificationsAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Admin.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Notifications.Admin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsAdminMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNotificationsServicesQueryKey() {
  return ['Notifications', '/Notifications/Services'] as const
}

export function getNotificationsServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsServicesQueryKey>
  >({
    queryKey: getNotificationsServicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Notifications.Services.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsServicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getNotificationsTypesQueryKey() {
  return ['Notifications', '/Notifications/Types'] as const
}

export function getNotificationsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsTypesQueryKey>
  >({
    queryKey: getNotificationsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Notifications.Types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getNotificationsUserIdQueryKey(
  args: InferRequestType<(typeof client.Notifications)[':userId']['$get']>,
) {
  return ['Notifications', '/Notifications/:userId', args] as const
}

export function getNotificationsUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Notifications)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsUserIdQueryKey>
  >({
    queryKey: getNotificationsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Notifications[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Notifications)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostNotificationsUserIdReadMutationKey() {
  return ['Notifications', '/Notifications/:userId/Read', 'POST'] as const
}

export function getPostNotificationsUserIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Read']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Notifications)[':userId']['Read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsUserIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Notifications)[':userId']['Read']['$post']>,
    ) {
      return parseResponse(client.Notifications[':userId'].Read.$post(args, options))
    },
  })
}

export function injectPostNotificationsUserIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Notifications)[':userId']['Read']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Notifications)[':userId']['Read']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsUserIdReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNotificationsUserIdSummaryQueryKey(
  args: InferRequestType<(typeof client.Notifications)[':userId']['Summary']['$get']>,
) {
  return ['Notifications', '/Notifications/:userId/Summary', args] as const
}

export function getNotificationsUserIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Notifications)[':userId']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsUserIdSummaryQueryKey>
  >({
    queryKey: getNotificationsUserIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Notifications[':userId'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsUserIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Notifications)[':userId']['Summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsUserIdSummaryQueryKey>
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
      ...getNotificationsUserIdSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNotificationsUserIdUnreadMutationKey() {
  return ['Notifications', '/Notifications/:userId/Unread', 'POST'] as const
}

export function getPostNotificationsUserIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Unread']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Notifications)[':userId']['Unread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsUserIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Notifications)[':userId']['Unread']['$post']>,
    ) {
      return parseResponse(client.Notifications[':userId'].Unread.$post(args, options))
    },
  })
}

export function injectPostNotificationsUserIdUnread<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Notifications)[':userId']['Unread']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Notifications)[':userId']['Unread']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsUserIdUnreadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPackages<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPackagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPackagesInstalledName<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPackagesInstalledNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePackagesInstallingPackageId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPackagesName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPackagesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPersons<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPersonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPersonsName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPersonsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPersonsNameImagesImageType<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPersonsNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadPersonsNameImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPersonsNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPersonsNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadPersonsNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPlaybackBitrateTest<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaybackBitrateTestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Playlists)[':id']['InstantMix']['$get']>,
) {
  return ['Playlists', '/Playlists/:id/InstantMix', args] as const
}

export function getPlaylistsIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Playlists)[':id']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsIdInstantMixQueryKey>
  >({
    queryKey: getPlaylistsIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Playlists[':id'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Playlists)[':id']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsIdInstantMixQueryKey>
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
      ...getPlaylistsIdInstantMixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPlaylistsPlaylistIdItems<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlaylistsPlaylistIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostPlaylistsPlaylistIdItems<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeletePlaylistsPlaylistIdItems<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostPlaylistsPlaylistIdItemsItemIdMoveNewIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPlugins<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPluginsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostPluginsSecurityInfoMutationKey() {
  return ['Plugins', '/Plugins/SecurityInfo', 'POST'] as const
}

export function getPostPluginsSecurityInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.SecurityInfo.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Plugins.SecurityInfo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsSecurityInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Plugins.SecurityInfo.$post>) {
      return parseResponse(client.Plugins.SecurityInfo.$post(args, options))
    },
  })
}

export function injectPostPluginsSecurityInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.SecurityInfo.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Plugins.SecurityInfo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPluginsSecurityInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePluginsPluginIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPluginsPluginIdConfiguration<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPluginsPluginIdConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostPluginsPluginIdConfiguration<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostPluginsPluginIdManifest<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPluginsPluginIdManifestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePluginsPluginIdVersion<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostPluginsPluginIdVersionDisable<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostPluginsPluginIdVersionEnable<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPluginsPluginIdVersionImage<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPluginsPluginIdVersionImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersSubtitlesSubtitlesIdQueryKey(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>,
) {
  return ['Providers', '/Providers/Subtitles/Subtitles/:id', args] as const
}

export function getProvidersSubtitlesSubtitlesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersSubtitlesSubtitlesIdQueryKey>
  >({
    queryKey: getProvidersSubtitlesSubtitlesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Providers.Subtitles.Subtitles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersSubtitlesSubtitlesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersSubtitlesSubtitlesIdQueryKey>
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
      ...getProvidersSubtitlesSubtitlesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostQuickConnectActivateMutationKey() {
  return ['QuickConnect', '/QuickConnect/Activate', 'POST'] as const
}

export function getPostQuickConnectActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Activate.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectActivateMutationKey(),
    async mutationFn() {
      return parseResponse(client.QuickConnect.Activate.$post(undefined, options))
    },
  })
}

export function injectPostQuickConnectActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Activate.$post>>>
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuickConnectActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostQuickConnectAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuickConnectAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostQuickConnectAvailableMutationKey() {
  return ['QuickConnect', '/QuickConnect/Available', 'POST'] as const
}

export function getPostQuickConnectAvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Available.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.QuickConnect.Available.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectAvailableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.QuickConnect.Available.$post>) {
      return parseResponse(client.QuickConnect.Available.$post(args, options))
    },
  })
}

export function injectPostQuickConnectAvailable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Available.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.QuickConnect.Available.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuickConnectAvailableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectQuickConnectConnect<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuickConnectConnectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostQuickConnectDeauthorizeMutationKey() {
  return ['QuickConnect', '/QuickConnect/Deauthorize', 'POST'] as const
}

export function getPostQuickConnectDeauthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Deauthorize.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectDeauthorizeMutationKey(),
    async mutationFn() {
      return parseResponse(client.QuickConnect.Deauthorize.$post(undefined, options))
    },
  })
}

export function injectPostQuickConnectDeauthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Deauthorize.$post>>>
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuickConnectDeauthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQuickConnectInitiateQueryKey() {
  return ['QuickConnect', '/QuickConnect/Initiate'] as const
}

export function getQuickConnectInitiateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectInitiateQueryKey>
  >({
    queryKey: getQuickConnectInitiateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.QuickConnect.Initiate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuickConnectInitiate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectInitiateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuickConnectInitiateQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getQuickConnectStatusQueryKey() {
  return ['QuickConnect', '/QuickConnect/Status'] as const
}

export function getQuickConnectStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectStatusQueryKey>
  >({
    queryKey: getQuickConnectStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.QuickConnect.Status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuickConnectStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuickConnectStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRepositories<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRepositoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRepositories<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRepositoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectScheduledTasks<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScheduledTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostScheduledTasksRunningTaskId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteScheduledTasksRunningTaskId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectScheduledTasksTaskId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getScheduledTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostScheduledTasksTaskIdTriggers<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectSearchHints<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchHintsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSessions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSessionsCapabilities<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsCapabilitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsCapabilitiesFull<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsLogout<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsPlaying<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsPlayingPing<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsPlayingProgress<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingProgressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsPlayingStopped<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsPlayingStoppedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsViewing<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSessionsViewingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSessionsSessionIdCommand<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdCommandCommand<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdMessage<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdPlaying<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdPlayingCommand<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdSystemCommand<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdUserUserId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectDeleteSessionsSessionIdUserUserId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSessionsSessionIdViewing<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectShowsNextUp<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsNextUpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShowsUpcoming<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShowsItemIdSimilar<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShowsSeriesIdEpisodes<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsSeriesIdEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectShowsSeriesIdSeasons<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsSeriesIdSeasonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSongsIdInstantMixQueryKey(
  args: InferRequestType<(typeof client.Songs)[':id']['InstantMix']['$get']>,
) {
  return ['Songs', '/Songs/:id/InstantMix', args] as const
}

export function getSongsIdInstantMixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Songs)[':id']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSongsIdInstantMixQueryKey>
  >({
    queryKey: getSongsIdInstantMixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Songs[':id'].InstantMix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSongsIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Songs)[':id']['InstantMix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSongsIdInstantMixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSongsIdInstantMixQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStartupComplete<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStartupConfiguration<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStartupConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStartupConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStartupFirstUser<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStartupFirstUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStartupRemoteAccess<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupRemoteAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStartupUser<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStartupUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStartupUser<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartupUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStudios<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudiosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectStudiosName<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudiosNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectStudiosNameImagesImageType<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStudiosNameImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadStudiosNameImagesImageType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectStudiosNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStudiosNameImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHeadStudiosNameImagesImageTypeImageIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSyncPlayBuffering<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayBufferingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayJoin<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayJoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayLeave<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSyncPlayList<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncPlayListQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSyncPlayMovePlaylistItem<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSyncPlayNew<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayNextItem<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayNextItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayPause<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayPauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayPing<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayPreviousItem<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayPreviousItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayQueue<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayReady<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayReadyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayRemoveFromPlaylist<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostSyncPlaySeek<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySeekMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlaySetIgnoreWait<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetIgnoreWaitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlaySetNewQueue<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetNewQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlaySetPlaylistItem<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetPlaylistItemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlaySetRepeatMode<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetRepeatModeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlaySetShuffleMode<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlaySetShuffleModeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayStop<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSyncPlayUnpause<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncPlayUnpauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSystemActivityLogEntries<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSystemActivityLogEntriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSystemConfiguration<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemConfigurationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSystemConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSystemConfigurationMetadataOptionsDefault<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSystemConfigurationMetadataOptionsDefaultQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSystemConfigurationKey<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSystemConfigurationKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSystemConfigurationKey<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemConfigurationKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSystemEndpoint<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemEndpointQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSystemInfo<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSystemInfoPublic<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSystemLogs<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemLogsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSystemLogsLog<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemLogsLogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSystemMediaEncoderPathMutationKey() {
  return ['System', '/System/MediaEncoder/Path', 'POST'] as const
}

export function getPostSystemMediaEncoderPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.MediaEncoder.Path.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.System.MediaEncoder.Path.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemMediaEncoderPathMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.System.MediaEncoder.Path.$post>) {
      return parseResponse(client.System.MediaEncoder.Path.$post(args, options))
    },
  })
}

export function injectPostSystemMediaEncoderPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.System.MediaEncoder.Path.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.System.MediaEncoder.Path.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemMediaEncoderPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSystemPing<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSystemPing<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemRestartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemShutdownMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSystemWakeOnLanInfoQueryKey() {
  return ['System', '/System/WakeOnLanInfo'] as const
}

export function getSystemWakeOnLanInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemWakeOnLanInfoQueryKey>
  >({
    queryKey: getSystemWakeOnLanInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.System.WakeOnLanInfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSystemWakeOnLanInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemWakeOnLanInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemWakeOnLanInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectTrailers<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrailersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTrailersItemIdSimilar<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrailersItemIdSimilarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsers<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersAuthenticateByName<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersAuthenticateByNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersAuthenticateWithQuickConnect<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostUsersForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersForgotPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersForgotPasswordPin<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersForgotPasswordPinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersMe<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersNew<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersNewMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersPublic<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUserId<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostUsersUserIdMutationKey() {
  return ['Users', '/Users/:userId', 'POST'] as const
}

export function getPostUsersUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Users)[':userId']['$post']>) {
      return parseResponse(client.Users[':userId'].$post(args, options))
    },
  })
}

export function injectPostUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$post']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdAuthenticateMutationKey() {
  return ['Users', '/Users/:userId/Authenticate', 'POST'] as const
}

export function getPostUsersUserIdAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Authenticate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Authenticate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['Authenticate']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].Authenticate.$post(args, options))
    },
  })
}

export function injectPostUsersUserIdAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Authenticate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Authenticate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdAuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdConfigurationMutationKey() {
  return ['Users', '/Users/:userId/Configuration', 'POST'] as const
}

export function getPostUsersUserIdConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Configuration']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['Configuration']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].Configuration.$post(args, options))
    },
  })
}

export function injectPostUsersUserIdConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Users)[':userId']['Configuration']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Configuration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdEasyPasswordMutationKey() {
  return ['Users', '/Users/:userId/EasyPassword', 'POST'] as const
}

export function getPostUsersUserIdEasyPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['EasyPassword']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['EasyPassword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdEasyPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['EasyPassword']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].EasyPassword.$post(args, options))
    },
  })
}

export function injectPostUsersUserIdEasyPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Users)[':userId']['EasyPassword']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['EasyPassword']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdEasyPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdFavoriteItemsItemIdMutationKey() {
  return ['Users', '/Users/:userId/FavoriteItems/:itemId', 'POST'] as const
}

export function getPostUsersUserIdFavoriteItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdFavoriteItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].FavoriteItems[':itemId'].$post(args, options))
    },
  })
}

export function injectPostUsersUserIdFavoriteItemsItemId<
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
                ReturnType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdFavoriteItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersUserIdFavoriteItemsItemIdMutationKey() {
  return ['Users', '/Users/:userId/FavoriteItems/:itemId', 'DELETE'] as const
}

export function getDeleteUsersUserIdFavoriteItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdFavoriteItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(client.Users[':userId'].FavoriteItems[':itemId'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersUserIdFavoriteItemsItemId<
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
                ReturnType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdFavoriteItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUserIdGroupingOptionsQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>,
) {
  return ['Users', '/Users/:userId/GroupingOptions', args] as const
}

export function getUsersUserIdGroupingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGroupingOptionsQueryKey>
  >({
    queryKey: getUsersUserIdGroupingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].GroupingOptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdGroupingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGroupingOptionsQueryKey>
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
      ...getUsersUserIdGroupingOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdImagesImageTypeQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>,
) {
  return ['Users', '/Users/:userId/Images/:imageType', args] as const
}

export function getUsersUserIdImagesImageTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdImagesImageTypeQueryKey>
  >({
    queryKey: getUsersUserIdImagesImageTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Images[':imageType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdImagesImageTypeQueryKey>
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
      ...getUsersUserIdImagesImageTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersUserIdImagesImageTypeMutationKey() {
  return ['Users', '/Users/:userId/Images/:imageType', 'POST'] as const
}

export function getPostUsersUserIdImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].Images[':imageType'].$post(args, options))
    },
  })
}

export function injectPostUsersUserIdImagesImageType<
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
                  ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdImagesImageTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersUserIdImagesImageTypeMutationKey() {
  return ['Users', '/Users/:userId/Images/:imageType', 'DELETE'] as const
}

export function getDeleteUsersUserIdImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>,
    ) {
      return parseResponse(client.Users[':userId'].Images[':imageType'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersUserIdImagesImageType<
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
                  ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdImagesImageTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getHeadUsersUserIdImagesImageTypeMutationKey() {
  return ['Users', '/Users/:userId/Images/:imageType', 'HEAD'] as const
}

export function getHeadUsersUserIdImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadUsersUserIdImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>,
    ) {
      return parseResponse(client.Users[':userId'].Images[':imageType'].$head(args, options))
    },
  })
}

export function injectHeadUsersUserIdImagesImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadUsersUserIdImagesImageTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUserIdImagesImageTypeImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Users', '/Users/:userId/Images/:imageType/:imageIndex', args] as const
}

export function getUsersUserIdImagesImageTypeImageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdImagesImageTypeImageIndexQueryKey>
  >({
    queryKey: getUsersUserIdImagesImageTypeImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Images[':imageType'][':imageIndex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdImagesImageTypeImageIndexQueryKey>
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
      ...getUsersUserIdImagesImageTypeImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getHeadUsersUserIdImagesImageTypeImageIndexMutationKey() {
  return ['Users', '/Users/:userId/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadUsersUserIdImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadUsersUserIdImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.Users[':userId'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function injectHeadUsersUserIdImagesImageTypeImageIndex<
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
                  (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadUsersUserIdImagesImageTypeImageIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdImagesImageTypeIndexMutationKey() {
  return ['Users', '/Users/:userId/Images/:imageType/:index', 'POST'] as const
}

export function getPostUsersUserIdImagesImageTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdImagesImageTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']
      >,
    ) {
      return parseResponse(
        client.Users[':userId'].Images[':imageType'][':index'].$post(args, options),
      )
    },
  })
}

export function injectPostUsersUserIdImagesImageTypeIndex<
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
                    (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdImagesImageTypeIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersUserIdImagesImageTypeIndexMutationKey() {
  return ['Users', '/Users/:userId/Images/:imageType/:index', 'DELETE'] as const
}

export function getDeleteUsersUserIdImagesImageTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdImagesImageTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']
      >,
    ) {
      return parseResponse(
        client.Users[':userId'].Images[':imageType'][':index'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersUserIdImagesImageTypeIndex<
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
                    (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdImagesImageTypeIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['$get']>,
) {
  return ['Users', '/Users/:userId/Items', args] as const
}

export function getUsersUserIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsQueryKey>
  >({
    queryKey: getUsersUserIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdItemsLatestQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/Latest', args] as const
}

export function getUsersUserIdItemsLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsLatestQueryKey>
  >({
    queryKey: getUsersUserIdItemsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items.Latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsLatestQueryKey>
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
      ...getUsersUserIdItemsLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsResumeQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/Resume', args] as const
}

export function getUsersUserIdItemsResumeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsResumeQueryKey>
  >({
    queryKey: getUsersUserIdItemsResumeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items.Resume.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsResume<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsResumeQueryKey>
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
      ...getUsersUserIdItemsResumeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsRootQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Root']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/Root', args] as const
}

export function getUsersUserIdItemsRootQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Root']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsRootQueryKey>
  >({
    queryKey: getUsersUserIdItemsRootQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items.Root.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsRoot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Items']['Root']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsRootQueryKey>
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
      ...getUsersUserIdItemsRootQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsItemIdQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/:itemId', args] as const
}

export function getUsersUserIdItemsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsItemIdQueryKey>
  >({
    queryKey: getUsersUserIdItemsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsItemIdQueryKey>
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
      ...getUsersUserIdItemsItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsItemIdIntrosQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/:itemId/Intros', args] as const
}

export function getUsersUserIdItemsItemIdIntrosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsItemIdIntrosQueryKey>
  >({
    queryKey: getUsersUserIdItemsItemIdIntrosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items[':itemId'].Intros.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsItemIdIntros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsItemIdIntrosQueryKey>
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
      ...getUsersUserIdItemsItemIdIntrosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsItemIdLocalTrailersQueryKey(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
  >,
) {
  return ['Users', '/Users/:userId/Items/:itemId/LocalTrailers', args] as const
}

export function getUsersUserIdItemsItemIdLocalTrailersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsItemIdLocalTrailersQueryKey>
  >({
    queryKey: getUsersUserIdItemsItemIdLocalTrailersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items[':itemId'].LocalTrailers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsItemIdLocalTrailers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsItemIdLocalTrailersQueryKey>
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
      ...getUsersUserIdItemsItemIdLocalTrailersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersUserIdItemsItemIdRatingMutationKey() {
  return ['Users', '/Users/:userId/Items/:itemId/Rating', 'POST'] as const
}

export function getPostUsersUserIdItemsItemIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdItemsItemIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']
      >,
    ) {
      return parseResponse(client.Users[':userId'].Items[':itemId'].Rating.$post(args, options))
    },
  })
}

export function injectPostUsersUserIdItemsItemIdRating<
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
                ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdItemsItemIdRatingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersUserIdItemsItemIdRatingMutationKey() {
  return ['Users', '/Users/:userId/Items/:itemId/Rating', 'DELETE'] as const
}

export function getDeleteUsersUserIdItemsItemIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdItemsItemIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']
      >,
    ) {
      return parseResponse(client.Users[':userId'].Items[':itemId'].Rating.$delete(args, options))
    },
  })
}

export function injectDeleteUsersUserIdItemsItemIdRating<
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
                  (typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdItemsItemIdRatingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUserIdItemsItemIdSpecialFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
  >,
) {
  return ['Users', '/Users/:userId/Items/:itemId/SpecialFeatures', args] as const
}

export function getUsersUserIdItemsItemIdSpecialFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdItemsItemIdSpecialFeaturesQueryKey>
  >({
    queryKey: getUsersUserIdItemsItemIdSpecialFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Items[':itemId'].SpecialFeatures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdItemsItemIdSpecialFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdItemsItemIdSpecialFeaturesQueryKey>
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
      ...getUsersUserIdItemsItemIdSpecialFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersUserIdPasswordMutationKey() {
  return ['Users', '/Users/:userId/Password', 'POST'] as const
}

export function getPostUsersUserIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['Password']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].Password.$post(args, options))
    },
  })
}

export function injectPostUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Users)[':userId']['Password']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['Password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdPlayedItemsItemIdMutationKey() {
  return ['Users', '/Users/:userId/PlayedItems/:itemId', 'POST'] as const
}

export function getPostUsersUserIdPlayedItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPlayedItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].PlayedItems[':itemId'].$post(args, options))
    },
  })
}

export function injectPostUsersUserIdPlayedItemsItemId<
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
                ReturnType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPlayedItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersUserIdPlayedItemsItemIdMutationKey() {
  return ['Users', '/Users/:userId/PlayedItems/:itemId', 'DELETE'] as const
}

export function getDeleteUsersUserIdPlayedItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdPlayedItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>,
    ) {
      return parseResponse(client.Users[':userId'].PlayedItems[':itemId'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersUserIdPlayedItemsItemId<
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
                ReturnType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdPlayedItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdPlayingItemsItemIdMutationKey() {
  return ['Users', '/Users/:userId/PlayingItems/:itemId', 'POST'] as const
}

export function getPostUsersUserIdPlayingItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPlayingItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']>,
    ) {
      return parseResponse(client.Users[':userId'].PlayingItems[':itemId'].$post(args, options))
    },
  })
}

export function injectPostUsersUserIdPlayingItemsItemId<
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
                  ReturnType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPlayingItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersUserIdPlayingItemsItemIdMutationKey() {
  return ['Users', '/Users/:userId/PlayingItems/:itemId', 'DELETE'] as const
}

export function getDeleteUsersUserIdPlayingItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdPlayingItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(client.Users[':userId'].PlayingItems[':itemId'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersUserIdPlayingItemsItemId<
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
                  ReturnType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdPlayingItemsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUserIdPlayingItemsItemIdProgressMutationKey() {
  return ['Users', '/Users/:userId/PlayingItems/:itemId/Progress', 'POST'] as const
}

export function getPostUsersUserIdPlayingItemsItemIdProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPlayingItemsItemIdProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
      >,
    ) {
      return parseResponse(
        client.Users[':userId'].PlayingItems[':itemId'].Progress.$post(args, options),
      )
    },
  })
}

export function injectPostUsersUserIdPlayingItemsItemIdProgress<
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
                    (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPlayingItemsItemIdProgressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersUserIdPolicy<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUserIdSuggestionsQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Suggestions']['$get']>,
) {
  return ['Users', '/Users/:userId/Suggestions', args] as const
}

export function getUsersUserIdSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Suggestions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSuggestionsQueryKey>
  >({
    queryKey: getUsersUserIdSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Suggestions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Suggestions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdSuggestionsQueryKey>
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
      ...getUsersUserIdSuggestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdViewsQueryKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Views']['$get']>,
) {
  return ['Users', '/Users/:userId/Views', args] as const
}

export function getUsersUserIdViewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users)[':userId']['Views']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdViewsQueryKey>
  >({
    queryKey: getUsersUserIdViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users[':userId'].Views.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users)[':userId']['Views']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdViewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdViewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteVideosActiveEncodingsMutationKey() {
  return ['Videos', '/Videos/ActiveEncodings', 'DELETE'] as const
}

export function getDeleteVideosActiveEncodingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Videos.ActiveEncodings.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Videos.ActiveEncodings.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosActiveEncodingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Videos.ActiveEncodings.$delete>) {
      return parseResponse(client.Videos.ActiveEncodings.$delete(args, options))
    },
  })
}

export function injectDeleteVideosActiveEncodings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Videos.ActiveEncodings.$delete>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.Videos.ActiveEncodings.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosActiveEncodingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVideosMergeVersions<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosMergeVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectVideosItemIdAdditionalParts<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosItemIdAdditionalPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteVideosItemIdAlternateSources<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectPostVideosItemIdSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosItemIdSubtitlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVideosItemIdSubtitlesIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}

export function getVideosItemIdHlsPlaylistIdStreamM3u8QueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/hls/:playlistId/stream.m3u8', args] as const
}

export function getVideosItemIdHlsPlaylistIdStreamM3u8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdHlsPlaylistIdStreamM3u8QueryKey>
  >({
    queryKey: getVideosItemIdHlsPlaylistIdStreamM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].hls[':playlistId']['stream.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdHlsPlaylistIdStreamM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdHlsPlaylistIdStreamM3u8QueryKey>
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
      ...getVideosItemIdHlsPlaylistIdStreamM3u8QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/hls/:playlistId/:segmentId.{segmentContainer}', args] as const
}

export function getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerQueryKey>
  >({
    queryKey: getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].hls[':playlistId'][':segmentId.{segmentContainer}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdHlsPlaylistIdSegmentIdSegmentContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerQueryKey>
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
      ...getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdHls1PlaylistIdSegmentIdContainerQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/hls1/:playlistId/:segmentId.{container}', args] as const
}

export function getVideosItemIdHls1PlaylistIdSegmentIdContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdHls1PlaylistIdSegmentIdContainerQueryKey>
  >({
    queryKey: getVideosItemIdHls1PlaylistIdSegmentIdContainerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'].hls1[':playlistId'][':segmentId.{container}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdHls1PlaylistIdSegmentIdContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdHls1PlaylistIdSegmentIdContainerQueryKey>
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
      ...getVideosItemIdHls1PlaylistIdSegmentIdContainerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdLiveM3u8QueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/live.m3u8', args] as const
}

export function getVideosItemIdLiveM3u8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdLiveM3u8QueryKey>
  >({
    queryKey: getVideosItemIdLiveM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId']['live.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdLiveM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdLiveM3u8QueryKey>
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
      ...getVideosItemIdLiveM3u8QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdMainM3u8QueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/main.m3u8', args] as const
}

export function getVideosItemIdMainM3u8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdMainM3u8QueryKey>
  >({
    queryKey: getVideosItemIdMainM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId']['main.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdMainM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdMainM3u8QueryKey>
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
      ...getVideosItemIdMainM3u8QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdMasterM3u8QueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/master.m3u8', args] as const
}

export function getVideosItemIdMasterM3u8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdMasterM3u8QueryKey>
  >({
    queryKey: getVideosItemIdMasterM3u8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId']['master.m3u8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdMasterM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdMasterM3u8QueryKey>
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
      ...getVideosItemIdMasterM3u8QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getHeadVideosItemIdMasterM3u8MutationKey() {
  return ['Videos', '/Videos/:itemId/master.m3u8', 'HEAD'] as const
}

export function getHeadVideosItemIdMasterM3u8MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadVideosItemIdMasterM3u8MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>,
    ) {
      return parseResponse(client.Videos[':itemId']['master.m3u8'].$head(args, options))
    },
  })
}

export function injectHeadVideosItemIdMasterM3u8<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadVideosItemIdMasterM3u8MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectVideosItemIdStream<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosItemIdStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHeadVideosItemIdStream<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadVideosItemIdStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
  >,
) {
  return [
    'Videos',
    '/Videos/:itemId/:mediaSourceId/Subtitles/:index/Stream.{format}',
    args,
  ] as const
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatQueryKey>
  >({
    queryKey: getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['Stream.{format}'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectVideosItemIdMediaSourceIdSubtitlesIndexStreamFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatQueryKey>
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
      ...getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatQueryKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
  >,
) {
  return [
    'Videos',
    '/Videos/:itemId/:mediaSourceId/Subtitles/:index/:startPositionTicks/Stream.{format}',
    args,
  ] as const
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatQueryKey
    >
  >({
    queryKey:
      getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index'][':startPositionTicks'][
          'Stream.{format}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatQueryKey
        >
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
      ...getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVideosItemIdStreamContainerQueryKey(
  args: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/:stream.{container}', args] as const
}

export function getVideosItemIdStreamContainerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
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
        client.Videos[':itemId'][':stream.{container}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVideosItemIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosItemIdStreamContainerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getHeadVideosItemIdStreamContainerMutationKey() {
  return ['Videos', '/Videos/:itemId/:stream.{container}', 'HEAD'] as const
}

export function getHeadVideosItemIdStreamContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadVideosItemIdStreamContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>,
    ) {
      return parseResponse(client.Videos[':itemId'][':stream.{container}'].$head(args, options))
    },
  })
}

export function injectHeadVideosItemIdStreamContainer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
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

export function injectVideosVideoIdMediaSourceIdAttachmentsIndex<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosVideoIdMediaSourceIdAttachmentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectYears<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getYearsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectYearsYear<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getYearsYearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectWebConfigurationPage<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebConfigurationPageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectWebConfigurationPages<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebConfigurationPagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
