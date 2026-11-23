import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAlbumsIdInstantMixKey(
  args: InferRequestType<(typeof client.Albums)[':id']['InstantMix']['$get']>,
) {
  return ['Albums', '/Albums/:id/InstantMix', args] as const
}

export function useGetAlbumsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Albums)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>
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
        ? getGetAlbumsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Albums[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlbumsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Albums)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>
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
        ? getGetAlbumsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Albums[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlbumsItemIdSimilarKey(
  args: InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
) {
  return ['Albums', '/Albums/:itemId/Similar', args] as const
}

export function useGetAlbumsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
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
        ? getGetAlbumsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Albums[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlbumsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
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
        ? getGetAlbumsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Albums[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsKey(args: InferRequestType<typeof client.Artists.$get>) {
  return ['Artists', '/Artists', args] as const
}

export function useGetArtists<TError = unknown>(
  args: InferRequestType<typeof client.Artists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArtistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Artists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetArtists<TError = unknown>(
  args: InferRequestType<typeof client.Artists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArtistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Artists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetArtistsAlbumArtistsKey(
  args: InferRequestType<typeof client.Artists.AlbumArtists.$get>,
) {
  return ['Artists', '/Artists/AlbumArtists', args] as const
}

export function useGetArtistsAlbumArtists<TError = unknown>(
  args: InferRequestType<typeof client.Artists.AlbumArtists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
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
        ? getGetArtistsAlbumArtistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists.AlbumArtists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsAlbumArtists<TError = unknown>(
  args: InferRequestType<typeof client.Artists.AlbumArtists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
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
        ? getGetArtistsAlbumArtistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists.AlbumArtists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsIdInstantMixKey(
  args: InferRequestType<(typeof client.Artists)[':id']['InstantMix']['$get']>,
) {
  return ['Artists', '/Artists/:id/InstantMix', args] as const
}

export function useGetArtistsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Artists)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
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
        ? getGetArtistsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Artists)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
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
        ? getGetArtistsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsItemIdSimilarKey(
  args: InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
) {
  return ['Artists', '/Artists/:itemId/Similar', args] as const
}

export function useGetArtistsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
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
        ? getGetArtistsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
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
        ? getGetArtistsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsNameKey(
  args: InferRequestType<(typeof client.Artists)[':name']['$get']>,
) {
  return ['Artists', '/Artists/:name', args] as const
}

export function useGetArtistsName<TError = unknown>(
  args: InferRequestType<(typeof client.Artists)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetArtistsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsName<TError = unknown>(
  args: InferRequestType<(typeof client.Artists)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetArtistsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Artists[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsNameImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Artists', '/Artists/:name/Images/:imageType/:imageIndex', args] as const
}

export function useGetArtistsNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetArtistsNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Artists[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetArtistsNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Artists[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadArtistsNameImagesImageTypeImageIndexKey() {
  return ['Artists', '/Artists/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadArtistsNameImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadArtistsNameImagesImageTypeImageIndexKey()
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
            (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Artists[':name'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAudioItemIdHlsSegmentIdStreamAacKey(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
  >,
) {
  return ['Audio', '/Audio/:itemId/hls/:segmentId/stream.aac', args] as const
}

export function useGetAudioItemIdHlsSegmentIdStreamAac<TError = unknown>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAudioItemIdHlsSegmentIdStreamAacKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Audio[':itemId'].hls[':segmentId']['stream.aac'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdHlsSegmentIdStreamAac<TError = unknown>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.aac']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAudioItemIdHlsSegmentIdStreamAacKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Audio[':itemId'].hls[':segmentId']['stream.aac'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAudioItemIdHlsSegmentIdStreamMp3Key(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
  >,
) {
  return ['Audio', '/Audio/:itemId/hls/:segmentId/stream.mp3', args] as const
}

export function useGetAudioItemIdHlsSegmentIdStreamMp3<TError = unknown>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAudioItemIdHlsSegmentIdStreamMp3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Audio[':itemId'].hls[':segmentId']['stream.mp3'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdHlsSegmentIdStreamMp3<TError = unknown>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls'][':segmentId']['stream.mp3']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAudioItemIdHlsSegmentIdStreamMp3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Audio[':itemId'].hls[':segmentId']['stream.mp3'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAudioItemIdHls1PlaylistIdSegmentIdContainerKey(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
) {
  return ['Audio', '/Audio/:itemId/hls1/:playlistId/:segmentId.{container}', args] as const
}

export function useGetAudioItemIdHls1PlaylistIdSegmentIdContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAudioItemIdHls1PlaylistIdSegmentIdContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Audio[':itemId'].hls1[':playlistId'][':segmentId.{container}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdHls1PlaylistIdSegmentIdContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAudioItemIdHls1PlaylistIdSegmentIdContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Audio[':itemId'].hls1[':playlistId'][':segmentId.{container}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAudioItemIdMainM3u8Key(
  args: InferRequestType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/main.m3u8', args] as const
}

export function useGetAudioItemIdMainM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
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
        ? getGetAudioItemIdMainM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId']['main.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdMainM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
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
        ? getGetAudioItemIdMainM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['main.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId']['main.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudioItemIdMasterM3u8Key(
  args: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/master.m3u8', args] as const
}

export function useGetAudioItemIdMasterM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
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
        ? getGetAudioItemIdMasterM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId']['master.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdMasterM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
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
        ? getGetAudioItemIdMasterM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId']['master.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadAudioItemIdMasterM3u8Key() {
  return ['Audio', '/Audio/:itemId/master.m3u8', 'HEAD'] as const
}

export function useHeadAudioItemIdMasterM3u8<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadAudioItemIdMasterM3u8Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Audio)[':itemId']['master.m3u8']['$head']> },
      ) => parseResponse(client.Audio[':itemId']['master.m3u8'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudioItemIdStreamKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/stream', args] as const
}

export function useGetAudioItemIdStream<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
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
        ? getGetAudioItemIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId'].stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdStream<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
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
        ? getGetAudioItemIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId'].stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadAudioItemIdStreamKey() {
  return ['Audio', '/Audio/:itemId/stream', 'HEAD'] as const
}

export function useHeadAudioItemIdStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Audio)[':itemId']['stream']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadAudioItemIdStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$head']> },
      ) => parseResponse(client.Audio[':itemId'].stream.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudioItemIdStreamContainerKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/stream.{container}', args] as const
}

export function useGetAudioItemIdStreamContainer<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
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
        ? getGetAudioItemIdStreamContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Audio[':itemId']['stream.{container}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdStreamContainer<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
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
        ? getGetAudioItemIdStreamContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Audio[':itemId']['stream.{container}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadAudioItemIdStreamContainerKey() {
  return ['Audio', '/Audio/:itemId/stream.{container}', 'HEAD'] as const
}

export function useHeadAudioItemIdStreamContainer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadAudioItemIdStreamContainerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Audio)[':itemId']['stream.{container}']['$head']>
        },
      ) => parseResponse(client.Audio[':itemId']['stream.{container}'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudioItemIdUniversalKey(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
) {
  return ['Audio', '/Audio/:itemId/universal', args] as const
}

export function useGetAudioItemIdUniversal<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
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
        ? getGetAudioItemIdUniversalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId'].universal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioItemIdUniversal<TError = unknown>(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
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
        ? getGetAudioItemIdUniversalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Audio[':itemId'].universal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadAudioItemIdUniversalKey() {
  return ['Audio', '/Audio/:itemId/universal', 'HEAD'] as const
}

export function useHeadAudioItemIdUniversal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Audio)[':itemId']['universal']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadAudioItemIdUniversalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$head']> },
      ) => parseResponse(client.Audio[':itemId'].universal.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthKeysKey() {
  return ['Auth', '/Auth/Keys'] as const
}

export function useGetAuthKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Auth.Keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Auth.Keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthKeysKey() {
  return ['Auth', '/Auth/Keys', 'POST'] as const
}

export function usePostAuthKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Auth.Keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Auth.Keys.$post> }) =>
        parseResponse(client.Auth.Keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthKeysKeyKey() {
  return ['Auth', '/Auth/Keys/:key', 'DELETE'] as const
}

export function useDeleteAuthKeysKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Auth.Keys)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Auth.Keys)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthKeysKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Auth.Keys)[':key']['$delete']> },
      ) => parseResponse(client.Auth.Keys[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthPasswordResetProvidersKey() {
  return ['Auth', '/Auth/PasswordResetProviders'] as const
}

export function useGetAuthPasswordResetProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthPasswordResetProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Auth.PasswordResetProviders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthPasswordResetProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthPasswordResetProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Auth.PasswordResetProviders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthProvidersKey() {
  return ['Auth', '/Auth/Providers'] as const
}

export function useGetAuthProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Auth.Providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Auth.Providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrandingConfigurationKey() {
  return ['Branding', '/Branding/Configuration'] as const
}

export function useGetBrandingConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBrandingConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Branding.Configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandingConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBrandingConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Branding.Configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrandingCssKey() {
  return ['Branding', '/Branding/Css'] as const
}

export function useGetBrandingCss<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingCssKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Branding.Css.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandingCss<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingCssKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Branding.Css.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrandingCssCssKey() {
  return ['Branding', '/Branding/Css.css'] as const
}

export function useGetBrandingCssCss<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingCssCssKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Branding['Css.css'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrandingCssCss<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingCssCssKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Branding['Css.css'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsKey(args: InferRequestType<typeof client.Channels.$get>) {
  return ['Channels', '/Channels', args] as const
}

export function useGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.Channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.Channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetChannelsFeaturesKey() {
  return ['Channels', '/Channels/Features'] as const
}

export function useGetChannelsFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels.Features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels.Features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsItemsLatestKey(
  args: InferRequestType<typeof client.Channels.Items.Latest.$get>,
) {
  return ['Channels', '/Channels/Items/Latest', args] as const
}

export function useGetChannelsItemsLatest<TError = unknown>(
  args: InferRequestType<typeof client.Channels.Items.Latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
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
        ? getGetChannelsItemsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels.Items.Latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsItemsLatest<TError = unknown>(
  args: InferRequestType<typeof client.Channels.Items.Latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
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
        ? getGetChannelsItemsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels.Items.Latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdFeaturesKey(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
) {
  return ['Channels', '/Channels/:channelId/Features', args] as const
}

export function useGetChannelsChannelIdFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
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
        ? getGetChannelsChannelIdFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels[':channelId'].Features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
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
        ? getGetChannelsChannelIdFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels[':channelId'].Features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdItemsKey(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
) {
  return ['Channels', '/Channels/:channelId/Items', args] as const
}

export function useGetChannelsChannelIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
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
        ? getGetChannelsChannelIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels[':channelId'].Items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
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
        ? getGetChannelsChannelIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Channels[':channelId'].Items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsKey() {
  return ['Collections', '/Collections', 'POST'] as const
}

export function usePostCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Collections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Collections.$post> }) =>
        parseResponse(client.Collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionIdItemsKey() {
  return ['Collections', '/Collections/:collectionId/Items', 'POST'] as const
}

export function usePostCollectionsCollectionIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Collections)[':collectionId']['Items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$post']>
        },
      ) => parseResponse(client.Collections[':collectionId'].Items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionIdItemsKey() {
  return ['Collections', '/Collections/:collectionId/Items', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Collections)[':collectionId']['Items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$delete']>
        },
      ) => parseResponse(client.Collections[':collectionId'].Items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesKey(args: InferRequestType<typeof client.Devices.$get>) {
  return ['Devices', '/Devices', args] as const
}

export function useGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.Devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.Devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteDevicesKey() {
  return ['Devices', '/Devices', 'DELETE'] as const
}

export function useDeleteDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Devices.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Devices.$delete> }) =>
        parseResponse(client.Devices.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesInfoKey(args: InferRequestType<typeof client.Devices.Info.$get>) {
  return ['Devices', '/Devices/Info', args] as const
}

export function useGetDevicesInfo<TError = unknown>(
  args: InferRequestType<typeof client.Devices.Info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Devices.Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesInfo<TError = unknown>(
  args: InferRequestType<typeof client.Devices.Info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Devices.Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevicesOptionsKey(
  args: InferRequestType<typeof client.Devices.Options.$get>,
) {
  return ['Devices', '/Devices/Options', args] as const
}

export function useGetDevicesOptions<TError = unknown>(
  args: InferRequestType<typeof client.Devices.Options.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesOptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Devices.Options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesOptions<TError = unknown>(
  args: InferRequestType<typeof client.Devices.Options.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesOptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Devices.Options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDevicesOptionsKey() {
  return ['Devices', '/Devices/Options', 'POST'] as const
}

export function usePostDevicesOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Devices.Options.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevicesOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Devices.Options.$post> }) =>
        parseResponse(client.Devices.Options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisplayPreferencesDisplayPreferencesIdKey(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
) {
  return ['DisplayPreferences', '/DisplayPreferences/:displayPreferencesId', args] as const
}

export function useGetDisplayPreferencesDisplayPreferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
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
        ? getGetDisplayPreferencesDisplayPreferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.DisplayPreferences[':displayPreferencesId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisplayPreferencesDisplayPreferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
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
        ? getGetDisplayPreferencesDisplayPreferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.DisplayPreferences[':displayPreferencesId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDisplayPreferencesDisplayPreferencesIdKey() {
  return ['DisplayPreferences', '/DisplayPreferences/:displayPreferencesId', 'POST'] as const
}

export function usePostDisplayPreferencesDisplayPreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisplayPreferencesDisplayPreferencesIdKey()
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
            (typeof client.DisplayPreferences)[':displayPreferencesId']['$post']
          >
        },
      ) =>
        parseResponse(client.DisplayPreferences[':displayPreferencesId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDlnaProfileInfosKey() {
  return ['Dlna', '/Dlna/ProfileInfos'] as const
}

export function useGetDlnaProfileInfos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDlnaProfileInfosKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.ProfileInfos.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaProfileInfos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDlnaProfileInfosKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.ProfileInfos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.ProfileInfos.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDlnaProfilesKey() {
  return ['Dlna', '/Dlna/Profiles', 'POST'] as const
}

export function usePostDlnaProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Dlna.Profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDlnaProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Dlna.Profiles.$post> }) =>
        parseResponse(client.Dlna.Profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDlnaProfilesDefaultKey() {
  return ['Dlna', '/Dlna/Profiles/Default'] as const
}

export function useGetDlnaProfilesDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDlnaProfilesDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.Profiles.Default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaProfilesDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDlnaProfilesDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Dlna.Profiles.Default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.Profiles.Default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaProfilesProfileIdKey(
  args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$get']>,
) {
  return ['Dlna', '/Dlna/Profiles/:profileId', args] as const
}

export function useGetDlnaProfilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>
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
        ? getGetDlnaProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.Profiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaProfilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>
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
        ? getGetDlnaProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.Profiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDlnaProfilesProfileIdKey() {
  return ['Dlna', '/Dlna/Profiles/:profileId', 'POST'] as const
}

export function usePostDlnaProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDlnaProfilesProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$post']> },
      ) => parseResponse(client.Dlna.Profiles[':profileId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDlnaProfilesProfileIdKey() {
  return ['Dlna', '/Dlna/Profiles/:profileId', 'DELETE'] as const
}

export function useDeleteDlnaProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDlnaProfilesProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Dlna.Profiles)[':profileId']['$delete']> },
      ) => parseResponse(client.Dlna.Profiles[':profileId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDlnaIconsFileNameKey(
  args: InferRequestType<(typeof client.Dlna.icons)[':fileName']['$get']>,
) {
  return ['Dlna', '/Dlna/icons/:fileName', args] as const
}

export function useGetDlnaIconsFileName<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna.icons)[':fileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
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
        ? getGetDlnaIconsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.icons[':fileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaIconsFileName<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna.icons)[':fileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
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
        ? getGetDlnaIconsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Dlna.icons)[':fileName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna.icons[':fileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdConnectionManagerKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager', args] as const
}

export function useGetDlnaServerIdConnectionManager<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
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
        ? getGetDlnaServerIdConnectionManagerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].ConnectionManager.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdConnectionManager<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
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
        ? getGetDlnaServerIdConnectionManagerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ConnectionManager']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].ConnectionManager.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdConnectionManagerConnectionManagerKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager/ConnectionManager', args] as const
}

export function useGetDlnaServerIdConnectionManagerConnectionManager<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdConnectionManagerConnectionManagerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ConnectionManager.ConnectionManager.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdConnectionManagerConnectionManager<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdConnectionManagerConnectionManagerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ConnectionManager.ConnectionManager.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdConnectionManagerConnectionManagerXmlKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager/ConnectionManager.xml', args] as const
}

export function useGetDlnaServerIdConnectionManagerConnectionManagerXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdConnectionManagerConnectionManagerXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ConnectionManager['ConnectionManager.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdConnectionManagerConnectionManagerXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ConnectionManager']['ConnectionManager.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdConnectionManagerConnectionManagerXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ConnectionManager['ConnectionManager.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDlnaServerIdConnectionManagerControlKey() {
  return ['Dlna', '/Dlna/:serverId/ConnectionManager/Control', 'POST'] as const
}

export function usePostDlnaServerIdConnectionManagerControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDlnaServerIdConnectionManagerControlKey()
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
            (typeof client.Dlna)[':serverId']['ConnectionManager']['Control']['$post']
          >
        },
      ) =>
        parseResponse(client.Dlna[':serverId'].ConnectionManager.Control.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDlnaServerIdContentDirectoryKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory', args] as const
}

export function useGetDlnaServerIdContentDirectory<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
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
        ? getGetDlnaServerIdContentDirectoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].ContentDirectory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdContentDirectory<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
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
        ? getGetDlnaServerIdContentDirectoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['ContentDirectory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].ContentDirectory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdContentDirectoryContentDirectoryKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory/ContentDirectory', args] as const
}

export function useGetDlnaServerIdContentDirectoryContentDirectory<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdContentDirectoryContentDirectoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ContentDirectory.ContentDirectory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdContentDirectoryContentDirectory<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdContentDirectoryContentDirectoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ContentDirectory.ContentDirectory.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdContentDirectoryContentDirectoryXmlKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory/ContentDirectory.xml', args] as const
}

export function useGetDlnaServerIdContentDirectoryContentDirectoryXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdContentDirectoryContentDirectoryXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ContentDirectory['ContentDirectory.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdContentDirectoryContentDirectoryXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['ContentDirectory']['ContentDirectory.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdContentDirectoryContentDirectoryXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].ContentDirectory['ContentDirectory.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDlnaServerIdContentDirectoryControlKey() {
  return ['Dlna', '/Dlna/:serverId/ContentDirectory/Control', 'POST'] as const
}

export function usePostDlnaServerIdContentDirectoryControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDlnaServerIdContentDirectoryControlKey()
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
            (typeof client.Dlna)[':serverId']['ContentDirectory']['Control']['$post']
          >
        },
      ) =>
        parseResponse(client.Dlna[':serverId'].ContentDirectory.Control.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDlnaServerIdMediaReceiverRegistrarKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/MediaReceiverRegistrar', args] as const
}

export function useGetDlnaServerIdMediaReceiverRegistrar<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
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
        ? getGetDlnaServerIdMediaReceiverRegistrarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].MediaReceiverRegistrar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdMediaReceiverRegistrar<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
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
        ? getGetDlnaServerIdMediaReceiverRegistrarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].MediaReceiverRegistrar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDlnaServerIdMediaReceiverRegistrarControlKey() {
  return ['Dlna', '/Dlna/:serverId/MediaReceiverRegistrar/Control', 'POST'] as const
}

export function usePostDlnaServerIdMediaReceiverRegistrarControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDlnaServerIdMediaReceiverRegistrarControlKey()
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
            (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['Control']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Dlna[':serverId'].MediaReceiverRegistrar.Control.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarKey(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
  >,
) {
  return ['Dlna', '/Dlna/:serverId/MediaReceiverRegistrar/MediaReceiverRegistrar', args] as const
}

export function useGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrar<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].MediaReceiverRegistrar.MediaReceiverRegistrar.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrar<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].MediaReceiverRegistrar.MediaReceiverRegistrar.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlKey(
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

export function useGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].MediaReceiverRegistrar['MediaReceiverRegistrar.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXml<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Dlna)[':serverId']['MediaReceiverRegistrar']['MediaReceiverRegistrar.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Dlna[':serverId'].MediaReceiverRegistrar['MediaReceiverRegistrar.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdDescriptionKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/description', args] as const
}

export function useGetDlnaServerIdDescription<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
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
        ? getGetDlnaServerIdDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna[':serverId'].description.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdDescription<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
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
        ? getGetDlnaServerIdDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Dlna[':serverId'].description.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdDescriptionXmlKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/description.xml', args] as const
}

export function useGetDlnaServerIdDescriptionXml<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
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
        ? getGetDlnaServerIdDescriptionXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId']['description.xml'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdDescriptionXml<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
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
        ? getGetDlnaServerIdDescriptionXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['description.xml']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId']['description.xml'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDlnaServerIdIconsFileNameKey(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>,
) {
  return ['Dlna', '/Dlna/:serverId/icons/:fileName', args] as const
}

export function useGetDlnaServerIdIconsFileName<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
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
        ? getGetDlnaServerIdIconsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].icons[':fileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDlnaServerIdIconsFileName<TError = unknown>(
  args: InferRequestType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
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
        ? getGetDlnaServerIdIconsFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Dlna)[':serverId']['icons'][':fileName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Dlna[':serverId'].icons[':fileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnvironmentDefaultDirectoryBrowserKey() {
  return ['Environment', '/Environment/DefaultDirectoryBrowser'] as const
}

export function useGetEnvironmentDefaultDirectoryBrowser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentDefaultDirectoryBrowserKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Environment.DefaultDirectoryBrowser.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentDefaultDirectoryBrowser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentDefaultDirectoryBrowserKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Environment.DefaultDirectoryBrowser.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnvironmentDirectoryContentsKey(
  args: InferRequestType<typeof client.Environment.DirectoryContents.$get>,
) {
  return ['Environment', '/Environment/DirectoryContents', args] as const
}

export function useGetEnvironmentDirectoryContents<TError = unknown>(
  args: InferRequestType<typeof client.Environment.DirectoryContents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
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
        ? getGetEnvironmentDirectoryContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.DirectoryContents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentDirectoryContents<TError = unknown>(
  args: InferRequestType<typeof client.Environment.DirectoryContents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
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
        ? getGetEnvironmentDirectoryContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.DirectoryContents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnvironmentDrivesKey() {
  return ['Environment', '/Environment/Drives'] as const
}

export function useGetEnvironmentDrives<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentDrivesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.Drives.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentDrives<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentDrivesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.Drives.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnvironmentNetworkSharesKey() {
  return ['Environment', '/Environment/NetworkShares'] as const
}

export function useGetEnvironmentNetworkShares<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentNetworkSharesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.NetworkShares.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentNetworkShares<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentNetworkSharesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.NetworkShares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.NetworkShares.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnvironmentParentPathKey(
  args: InferRequestType<typeof client.Environment.ParentPath.$get>,
) {
  return ['Environment', '/Environment/ParentPath', args] as const
}

export function useGetEnvironmentParentPath<TError = unknown>(
  args: InferRequestType<typeof client.Environment.ParentPath.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
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
        ? getGetEnvironmentParentPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.ParentPath.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentParentPath<TError = unknown>(
  args: InferRequestType<typeof client.Environment.ParentPath.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
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
        ? getGetEnvironmentParentPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Environment.ParentPath.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentValidatePathKey() {
  return ['Environment', '/Environment/ValidatePath', 'POST'] as const
}

export function usePostEnvironmentValidatePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ValidatePath.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Environment.ValidatePath.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentValidatePathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Environment.ValidatePath.$post> },
      ) => parseResponse(client.Environment.ValidatePath.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFallbackFontFontsKey() {
  return ['FallbackFont', '/FallbackFont/Fonts'] as const
}

export function useGetFallbackFontFonts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFallbackFontFontsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FallbackFont.Fonts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFallbackFontFonts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFallbackFontFontsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FallbackFont.Fonts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFallbackFontFontsNameKey(
  args: InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
) {
  return ['FallbackFont', '/FallbackFont/Fonts/:name', args] as const
}

export function useGetFallbackFontFontsName<TError = unknown>(
  args: InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
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
        ? getGetFallbackFontFontsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FallbackFont.Fonts[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFallbackFontFontsName<TError = unknown>(
  args: InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
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
        ? getGetFallbackFontFontsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FallbackFont.Fonts[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenresKey(args: InferRequestType<typeof client.Genres.$get>) {
  return ['Genres', '/Genres', args] as const
}

export function useGetGenres<TError = unknown>(
  args: InferRequestType<typeof client.Genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Genres.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGenres<TError = unknown>(
  args: InferRequestType<typeof client.Genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Genres.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGenresGenreNameKey(
  args: InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
) {
  return ['Genres', '/Genres/:genreName', args] as const
}

export function useGetGenresGenreName<TError = unknown>(
  args: InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
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
        ? getGetGenresGenreNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Genres[':genreName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenresGenreName<TError = unknown>(
  args: InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
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
        ? getGetGenresGenreNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Genres[':genreName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenresNameImagesImageTypeKey(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
) {
  return ['Genres', '/Genres/:name/Images/:imageType', args] as const
}

export function useGetGenresNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
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
        ? getGetGenresNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Genres[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenresNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
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
        ? getGetGenresNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Genres[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadGenresNameImagesImageTypeKey() {
  return ['Genres', '/Genres/:name/Images/:imageType', 'HEAD'] as const
}

export function useHeadGenresNameImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadGenresNameImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>
        },
      ) => parseResponse(client.Genres[':name'].Images[':imageType'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGenresNameImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Genres', '/Genres/:name/Images/:imageType/:imageIndex', args] as const
}

export function useGetGenresNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGenresNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Genres[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenresNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGenresNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Genres[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadGenresNameImagesImageTypeImageIndexKey() {
  return ['Genres', '/Genres/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadGenresNameImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadGenresNameImagesImageTypeImageIndexKey()
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
            (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Genres[':name'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGetUtcTimeKey() {
  return ['GetUtcTime', '/GetUtcTime'] as const
}

export function useGetGetUtcTime<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetUtcTimeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GetUtcTime.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetUtcTime<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetUtcTimeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GetUtcTime.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesGeneralKey() {
  return ['Images', '/Images/General'] as const
}

export function useGetImagesGeneral<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesGeneralKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.General.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesGeneral<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesGeneralKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.General.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.General.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesGeneralNameTypeKey(
  args: InferRequestType<(typeof client.Images.General)[':name'][':type']['$get']>,
) {
  return ['Images', '/Images/General/:name/:type', args] as const
}

export function useGetImagesGeneralNameType<TError = unknown>(
  args: InferRequestType<(typeof client.Images.General)[':name'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
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
        ? getGetImagesGeneralNameTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.General[':name'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesGeneralNameType<TError = unknown>(
  args: InferRequestType<(typeof client.Images.General)[':name'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
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
        ? getGetImagesGeneralNameTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.General)[':name'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.General[':name'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesMediaInfoKey() {
  return ['Images', '/Images/MediaInfo'] as const
}

export function useGetImagesMediaInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesMediaInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.MediaInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesMediaInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesMediaInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.MediaInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.MediaInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesMediaInfoThemeNameKey(
  args: InferRequestType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>,
) {
  return ['Images', '/Images/MediaInfo/:theme/:name', args] as const
}

export function useGetImagesMediaInfoThemeName<TError = unknown>(
  args: InferRequestType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
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
        ? getGetImagesMediaInfoThemeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Images.MediaInfo[':theme'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesMediaInfoThemeName<TError = unknown>(
  args: InferRequestType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
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
        ? getGetImagesMediaInfoThemeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.MediaInfo)[':theme'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Images.MediaInfo[':theme'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesRatingsKey() {
  return ['Images', '/Images/Ratings'] as const
}

export function useGetImagesRatings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesRatingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.Ratings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesRatings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesRatingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Ratings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.Ratings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesRatingsThemeNameKey(
  args: InferRequestType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>,
) {
  return ['Images', '/Images/Ratings/:theme/:name', args] as const
}

export function useGetImagesRatingsThemeName<TError = unknown>(
  args: InferRequestType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
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
        ? getGetImagesRatingsThemeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.Ratings[':theme'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesRatingsThemeName<TError = unknown>(
  args: InferRequestType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
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
        ? getGetImagesRatingsThemeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Images.Ratings)[':theme'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.Ratings[':theme'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagesRemoteKey(args: InferRequestType<typeof client.Images.Remote.$get>) {
  return ['Images', '/Images/Remote', args] as const
}

export function useGetImagesRemote<TError = unknown>(
  args: InferRequestType<typeof client.Images.Remote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesRemoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.Remote.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesRemote<TError = unknown>(
  args: InferRequestType<typeof client.Images.Remote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesRemoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Images.Remote.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Images.Remote.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsKey(args: InferRequestType<typeof client.Items.$get>) {
  return ['Items', '/Items', args] as const
}

export function useGetItems<TError = unknown>(
  args: InferRequestType<typeof client.Items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetItems<TError = unknown>(
  args: InferRequestType<typeof client.Items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteItemsKey() {
  return ['Items', '/Items', 'DELETE'] as const
}

export function useDeleteItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Items.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Items.$delete> }) =>
        parseResponse(client.Items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsCountsKey(args: InferRequestType<typeof client.Items.Counts.$get>) {
  return ['Items', '/Items/Counts', args] as const
}

export function useGetItemsCounts<TError = unknown>(
  args: InferRequestType<typeof client.Items.Counts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsCountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.Counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsCounts<TError = unknown>(
  args: InferRequestType<typeof client.Items.Counts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsCountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.Counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsFiltersKey(args: InferRequestType<typeof client.Items.Filters.$get>) {
  return ['Items', '/Items/Filters', args] as const
}

export function useGetItemsFilters<TError = unknown>(
  args: InferRequestType<typeof client.Items.Filters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsFiltersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.Filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsFilters<TError = unknown>(
  args: InferRequestType<typeof client.Items.Filters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsFiltersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.Filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsFilters2Key(args: InferRequestType<typeof client.Items.Filters2.$get>) {
  return ['Items', '/Items/Filters2', args] as const
}

export function useGetItemsFilters2<TError = unknown>(
  args: InferRequestType<typeof client.Items.Filters2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsFilters2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.Filters2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsFilters2<TError = unknown>(
  args: InferRequestType<typeof client.Items.Filters2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsFilters2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.Filters2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsRemoteSearchApplyItemIdKey() {
  return ['Items', '/Items/RemoteSearch/Apply/:itemId', 'POST'] as const
}

export function usePostItemsRemoteSearchApplyItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchApplyItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']> },
      ) => parseResponse(client.Items.RemoteSearch.Apply[':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchBookKey() {
  return ['Items', '/Items/RemoteSearch/Book', 'POST'] as const
}

export function usePostItemsRemoteSearchBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Book.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.Book.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.Book.$post> },
      ) => parseResponse(client.Items.RemoteSearch.Book.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchBoxSetKey() {
  return ['Items', '/Items/RemoteSearch/BoxSet', 'POST'] as const
}

export function usePostItemsRemoteSearchBoxSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.BoxSet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchBoxSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post> },
      ) => parseResponse(client.Items.RemoteSearch.BoxSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsRemoteSearchImageKey(
  args: InferRequestType<typeof client.Items.RemoteSearch.Image.$get>,
) {
  return ['Items', '/Items/RemoteSearch/Image', args] as const
}

export function useGetItemsRemoteSearchImage<TError = unknown>(
  args: InferRequestType<typeof client.Items.RemoteSearch.Image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
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
        ? getGetItemsRemoteSearchImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.RemoteSearch.Image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsRemoteSearchImage<TError = unknown>(
  args: InferRequestType<typeof client.Items.RemoteSearch.Image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
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
        ? getGetItemsRemoteSearchImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Image.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items.RemoteSearch.Image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsRemoteSearchMovieKey() {
  return ['Items', '/Items/RemoteSearch/Movie', 'POST'] as const
}

export function usePostItemsRemoteSearchMovie<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Movie.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.Movie.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchMovieKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.Movie.$post> },
      ) => parseResponse(client.Items.RemoteSearch.Movie.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchMusicAlbumKey() {
  return ['Items', '/Items/RemoteSearch/MusicAlbum', 'POST'] as const
}

export function usePostItemsRemoteSearchMusicAlbum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicAlbum.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.MusicAlbum.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchMusicAlbumKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.MusicAlbum.$post> },
      ) => parseResponse(client.Items.RemoteSearch.MusicAlbum.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchMusicArtistKey() {
  return ['Items', '/Items/RemoteSearch/MusicArtist', 'POST'] as const
}

export function usePostItemsRemoteSearchMusicArtist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicArtist.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.MusicArtist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchMusicArtistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.MusicArtist.$post> },
      ) => parseResponse(client.Items.RemoteSearch.MusicArtist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchMusicVideoKey() {
  return ['Items', '/Items/RemoteSearch/MusicVideo', 'POST'] as const
}

export function usePostItemsRemoteSearchMusicVideo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicVideo.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.MusicVideo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchMusicVideoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.MusicVideo.$post> },
      ) => parseResponse(client.Items.RemoteSearch.MusicVideo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchPersonKey() {
  return ['Items', '/Items/RemoteSearch/Person', 'POST'] as const
}

export function usePostItemsRemoteSearchPerson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Person.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.Person.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchPersonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.Person.$post> },
      ) => parseResponse(client.Items.RemoteSearch.Person.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchSeriesKey() {
  return ['Items', '/Items/RemoteSearch/Series', 'POST'] as const
}

export function usePostItemsRemoteSearchSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Series.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.Series.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.Series.$post> },
      ) => parseResponse(client.Items.RemoteSearch.Series.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsRemoteSearchTrailerKey() {
  return ['Items', '/Items/RemoteSearch/Trailer', 'POST'] as const
}

export function usePostItemsRemoteSearchTrailer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Trailer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Items.RemoteSearch.Trailer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsRemoteSearchTrailerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Items.RemoteSearch.Trailer.$post> },
      ) => parseResponse(client.Items.RemoteSearch.Trailer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsIdInstantMixKey(
  args: InferRequestType<(typeof client.Items)[':id']['InstantMix']['$get']>,
) {
  return ['Items', '/Items/:id/InstantMix', args] as const
}

export function useGetItemsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>
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
        ? getGetItemsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>
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
        ? getGetItemsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdKey() {
  return ['Items', '/Items/:itemId', 'POST'] as const
}

export function usePostItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Items)[':itemId']['$post']> },
      ) => parseResponse(client.Items[':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemsItemIdKey() {
  return ['Items', '/Items/:itemId', 'DELETE'] as const
}

export function useDeleteItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Items)[':itemId']['$delete']> },
      ) => parseResponse(client.Items[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdAncestorsKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
) {
  return ['Items', '/Items/:itemId/Ancestors', args] as const
}

export function useGetItemsItemIdAncestors<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
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
        ? getGetItemsItemIdAncestorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Ancestors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdAncestors<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
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
        ? getGetItemsItemIdAncestorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Ancestors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdContentTypeKey() {
  return ['Items', '/Items/:itemId/ContentType', 'POST'] as const
}

export function usePostItemsItemIdContentType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ContentType']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['ContentType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdContentTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Items)[':itemId']['ContentType']['$post']> },
      ) => parseResponse(client.Items[':itemId'].ContentType.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdCriticReviewsKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>,
) {
  return ['Items', '/Items/:itemId/CriticReviews', args] as const
}

export function useGetItemsItemIdCriticReviews<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
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
        ? getGetItemsItemIdCriticReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].CriticReviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdCriticReviews<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
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
        ? getGetItemsItemIdCriticReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['CriticReviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].CriticReviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdDownloadKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
) {
  return ['Items', '/Items/:itemId/Download', args] as const
}

export function useGetItemsItemIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
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
        ? getGetItemsItemIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
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
        ? getGetItemsItemIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdExternalIdInfosKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
) {
  return ['Items', '/Items/:itemId/ExternalIdInfos', args] as const
}

export function useGetItemsItemIdExternalIdInfos<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
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
        ? getGetItemsItemIdExternalIdInfosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ExternalIdInfos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdExternalIdInfos<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
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
        ? getGetItemsItemIdExternalIdInfosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ExternalIdInfos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdFileKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
) {
  return ['Items', '/Items/:itemId/File', args] as const
}

export function useGetItemsItemIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
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
        ? getGetItemsItemIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].File.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
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
        ? getGetItemsItemIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].File.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdImagesKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
) {
  return ['Items', '/Items/:itemId/Images', args] as const
}

export function useGetItemsItemIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
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
        ? getGetItemsItemIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
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
        ? getGetItemsItemIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdImagesImageTypeKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
) {
  return ['Items', '/Items/:itemId/Images/:imageType', args] as const
}

export function useGetItemsItemIdImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
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
        ? getGetItemsItemIdImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Items[':itemId'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
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
        ? getGetItemsItemIdImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Items[':itemId'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdImagesImageTypeKey() {
  return ['Items', '/Items/:itemId/Images/:imageType', 'POST'] as const
}

export function usePostItemsItemIdImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>
        },
      ) => parseResponse(client.Items[':itemId'].Images[':imageType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemsItemIdImagesImageTypeKey() {
  return ['Items', '/Items/:itemId/Images/:imageType', 'DELETE'] as const
}

export function useDeleteItemsItemIdImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemsItemIdImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>
        },
      ) => parseResponse(client.Items[':itemId'].Images[':imageType'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadItemsItemIdImagesImageTypeKey() {
  return ['Items', '/Items/:itemId/Images/:imageType', 'HEAD'] as const
}

export function useHeadItemsItemIdImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadItemsItemIdImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>
        },
      ) => parseResponse(client.Items[':itemId'].Images[':imageType'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', args] as const
}

export function useGetItemsItemIdImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetItemsItemIdImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetItemsItemIdImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdImagesImageTypeImageIndexKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', 'POST'] as const
}

export function usePostItemsItemIdImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdImagesImageTypeImageIndexKey()
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
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemsItemIdImagesImageTypeImageIndexKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', 'DELETE'] as const
}

export function useDeleteItemsItemIdImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemsItemIdImagesImageTypeImageIndexKey()
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
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadItemsItemIdImagesImageTypeImageIndexKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadItemsItemIdImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadItemsItemIdImagesImageTypeImageIndexKey()
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
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostItemsItemIdImagesImageTypeImageIndexIndexKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex/Index', 'POST'] as const
}

export function usePostItemsItemIdImagesImageTypeImageIndexIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdImagesImageTypeImageIndexIndexKey()
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
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].Index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountKey(
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

export function useGetItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][
            ':maxWidth'
          ][':maxHeight'][':percentPlayed'][':unplayedCount'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][
            ':maxWidth'
          ][':maxHeight'][':percentPlayed'][':unplayedCount'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountKey() {
  return [
    'Items',
    '/Items/:itemId/Images/:imageType/:imageIndex/:tag/:format/:maxWidth/:maxHeight/:percentPlayed/:unplayedCount',
    'HEAD',
  ] as const
}

export function useHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountKey()
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
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][
            ':maxWidth'
          ][':maxHeight'][':percentPlayed'][':unplayedCount'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdMetadataEditorKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
) {
  return ['Items', '/Items/:itemId/MetadataEditor', args] as const
}

export function useGetItemsItemIdMetadataEditor<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
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
        ? getGetItemsItemIdMetadataEditorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].MetadataEditor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdMetadataEditor<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
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
        ? getGetItemsItemIdMetadataEditorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].MetadataEditor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdPlaybackInfoKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
) {
  return ['Items', '/Items/:itemId/PlaybackInfo', args] as const
}

export function useGetItemsItemIdPlaybackInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
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
        ? getGetItemsItemIdPlaybackInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].PlaybackInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdPlaybackInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
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
        ? getGetItemsItemIdPlaybackInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].PlaybackInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdPlaybackInfoKey() {
  return ['Items', '/Items/:itemId/PlaybackInfo', 'POST'] as const
}

export function usePostItemsItemIdPlaybackInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdPlaybackInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']> },
      ) => parseResponse(client.Items[':itemId'].PlaybackInfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemsItemIdRefreshKey() {
  return ['Items', '/Items/:itemId/Refresh', 'POST'] as const
}

export function usePostItemsItemIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Refresh']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['Refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Items)[':itemId']['Refresh']['$post']> },
      ) => parseResponse(client.Items[':itemId'].Refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdRemoteImagesKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
) {
  return ['Items', '/Items/:itemId/RemoteImages', args] as const
}

export function useGetItemsItemIdRemoteImages<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
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
        ? getGetItemsItemIdRemoteImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].RemoteImages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdRemoteImages<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
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
        ? getGetItemsItemIdRemoteImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].RemoteImages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdRemoteImagesDownloadKey() {
  return ['Items', '/Items/:itemId/RemoteImages/Download', 'POST'] as const
}

export function usePostItemsItemIdRemoteImagesDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdRemoteImagesDownloadKey()
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
            (typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']
          >
        },
      ) => parseResponse(client.Items[':itemId'].RemoteImages.Download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdRemoteImagesProvidersKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>,
) {
  return ['Items', '/Items/:itemId/RemoteImages/Providers', args] as const
}

export function useGetItemsItemIdRemoteImagesProviders<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
            >
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
        ? getGetItemsItemIdRemoteImagesProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Items[':itemId'].RemoteImages.Providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdRemoteImagesProviders<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
            >
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
        ? getGetItemsItemIdRemoteImagesProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Items[':itemId'].RemoteImages.Providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdRemoteSearchSubtitlesLanguageKey(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
) {
  return ['Items', '/Items/:itemId/RemoteSearch/Subtitles/:language', args] as const
}

export function useGetItemsItemIdRemoteSearchSubtitlesLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetItemsItemIdRemoteSearchSubtitlesLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Items[':itemId'].RemoteSearch.Subtitles[':language'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdRemoteSearchSubtitlesLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetItemsItemIdRemoteSearchSubtitlesLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Items[':itemId'].RemoteSearch.Subtitles[':language'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdKey() {
  return ['Items', '/Items/:itemId/RemoteSearch/Subtitles/:subtitleId', 'POST'] as const
}

export function usePostItemsItemIdRemoteSearchSubtitlesSubtitleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdKey()
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
            (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Items[':itemId'].RemoteSearch.Subtitles[':subtitleId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetItemsItemIdSimilarKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
) {
  return ['Items', '/Items/:itemId/Similar', args] as const
}

export function useGetItemsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
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
        ? getGetItemsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
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
        ? getGetItemsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdThemeMediaKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
) {
  return ['Items', '/Items/:itemId/ThemeMedia', args] as const
}

export function useGetItemsItemIdThemeMedia<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
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
        ? getGetItemsItemIdThemeMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ThemeMedia.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdThemeMedia<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
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
        ? getGetItemsItemIdThemeMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ThemeMedia.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdThemeSongsKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
) {
  return ['Items', '/Items/:itemId/ThemeSongs', args] as const
}

export function useGetItemsItemIdThemeSongs<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
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
        ? getGetItemsItemIdThemeSongsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ThemeSongs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdThemeSongs<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
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
        ? getGetItemsItemIdThemeSongsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ThemeSongs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdThemeVideosKey(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
) {
  return ['Items', '/Items/:itemId/ThemeVideos', args] as const
}

export function useGetItemsItemIdThemeVideos<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
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
        ? getGetItemsItemIdThemeVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ThemeVideos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdThemeVideos<TError = unknown>(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
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
        ? getGetItemsItemIdThemeVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Items[':itemId'].ThemeVideos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLibrariesAvailableOptionsKey(
  args: InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
) {
  return ['Libraries', '/Libraries/AvailableOptions', args] as const
}

export function useGetLibrariesAvailableOptions<TError = unknown>(
  args: InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
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
        ? getGetLibrariesAvailableOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Libraries.AvailableOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibrariesAvailableOptions<TError = unknown>(
  args: InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
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
        ? getGetLibrariesAvailableOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Libraries.AvailableOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLibraryMediaUpdatedKey() {
  return ['Library', '/Library/Media/Updated', 'POST'] as const
}

export function usePostLibraryMediaUpdated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Media.Updated.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.Media.Updated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryMediaUpdatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.Media.Updated.$post> },
      ) => parseResponse(client.Library.Media.Updated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLibraryMediaFoldersKey(
  args: InferRequestType<typeof client.Library.MediaFolders.$get>,
) {
  return ['Library', '/Library/MediaFolders', args] as const
}

export function useGetLibraryMediaFolders<TError = unknown>(
  args: InferRequestType<typeof client.Library.MediaFolders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
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
        ? getGetLibraryMediaFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.MediaFolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryMediaFolders<TError = unknown>(
  args: InferRequestType<typeof client.Library.MediaFolders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
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
        ? getGetLibraryMediaFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.MediaFolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLibraryMoviesAddedKey() {
  return ['Library', '/Library/Movies/Added', 'POST'] as const
}

export function usePostLibraryMoviesAdded<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Movies.Added.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.Movies.Added.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryMoviesAddedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.Movies.Added.$post> },
      ) => parseResponse(client.Library.Movies.Added.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibraryMoviesUpdatedKey() {
  return ['Library', '/Library/Movies/Updated', 'POST'] as const
}

export function usePostLibraryMoviesUpdated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Movies.Updated.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.Movies.Updated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryMoviesUpdatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.Movies.Updated.$post> },
      ) => parseResponse(client.Library.Movies.Updated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLibraryPhysicalPathsKey() {
  return ['Library', '/Library/PhysicalPaths'] as const
}

export function useGetLibraryPhysicalPaths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryPhysicalPathsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.PhysicalPaths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryPhysicalPaths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryPhysicalPathsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.PhysicalPaths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLibraryRefreshKey() {
  return ['Library', '/Library/Refresh'] as const
}

export function useGetLibraryRefresh<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLibraryRefreshKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.Refresh.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryRefresh<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLibraryRefreshKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.Refresh.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLibrarySeriesAddedKey() {
  return ['Library', '/Library/Series/Added', 'POST'] as const
}

export function usePostLibrarySeriesAdded<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Series.Added.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.Series.Added.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibrarySeriesAddedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.Series.Added.$post> },
      ) => parseResponse(client.Library.Series.Added.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibrarySeriesUpdatedKey() {
  return ['Library', '/Library/Series/Updated', 'POST'] as const
}

export function usePostLibrarySeriesUpdated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Series.Updated.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.Series.Updated.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibrarySeriesUpdatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.Series.Updated.$post> },
      ) => parseResponse(client.Library.Series.Updated.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLibraryVirtualFoldersKey() {
  return ['Library', '/Library/VirtualFolders'] as const
}

export function useGetLibraryVirtualFolders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryVirtualFoldersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.VirtualFolders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryVirtualFolders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryVirtualFoldersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Library.VirtualFolders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLibraryVirtualFoldersKey() {
  return ['Library', '/Library/VirtualFolders', 'POST'] as const
}

export function usePostLibraryVirtualFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryVirtualFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.VirtualFolders.$post> },
      ) => parseResponse(client.Library.VirtualFolders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLibraryVirtualFoldersKey() {
  return ['Library', '/Library/VirtualFolders', 'DELETE'] as const
}

export function useDeleteLibraryVirtualFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLibraryVirtualFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.VirtualFolders.$delete> },
      ) => parseResponse(client.Library.VirtualFolders.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibraryVirtualFoldersLibraryOptionsKey() {
  return ['Library', '/Library/VirtualFolders/LibraryOptions', 'POST'] as const
}

export function usePostLibraryVirtualFoldersLibraryOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.LibraryOptions.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.LibraryOptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryVirtualFoldersLibraryOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.Library.VirtualFolders.LibraryOptions.$post> },
      ) => parseResponse(client.Library.VirtualFolders.LibraryOptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibraryVirtualFoldersNameKey() {
  return ['Library', '/Library/VirtualFolders/Name', 'POST'] as const
}

export function usePostLibraryVirtualFoldersName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.Name.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.Name.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryVirtualFoldersNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.VirtualFolders.Name.$post> },
      ) => parseResponse(client.Library.VirtualFolders.Name.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibraryVirtualFoldersPathsKey() {
  return ['Library', '/Library/VirtualFolders/Paths', 'POST'] as const
}

export function usePostLibraryVirtualFoldersPaths<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.Paths.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryVirtualFoldersPathsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.VirtualFolders.Paths.$post> },
      ) => parseResponse(client.Library.VirtualFolders.Paths.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLibraryVirtualFoldersPathsKey() {
  return ['Library', '/Library/VirtualFolders/Paths', 'DELETE'] as const
}

export function useDeleteLibraryVirtualFoldersPaths<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.Paths.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLibraryVirtualFoldersPathsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.VirtualFolders.Paths.$delete> },
      ) => parseResponse(client.Library.VirtualFolders.Paths.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibraryVirtualFoldersPathsUpdateKey() {
  return ['Library', '/Library/VirtualFolders/Paths/Update', 'POST'] as const
}

export function usePostLibraryVirtualFoldersPathsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.Update.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Library.VirtualFolders.Paths.Update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryVirtualFoldersPathsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Library.VirtualFolders.Paths.Update.$post> },
      ) => parseResponse(client.Library.VirtualFolders.Paths.Update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveStreamsCloseKey() {
  return ['LiveStreams', '/LiveStreams/Close', 'POST'] as const
}

export function usePostLiveStreamsClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Close.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.LiveStreams.Close.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveStreamsCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveStreams.Close.$post> }) =>
        parseResponse(client.LiveStreams.Close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveStreamsOpenKey() {
  return ['LiveStreams', '/LiveStreams/Open', 'POST'] as const
}

export function usePostLiveStreamsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Open.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.LiveStreams.Open.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveStreamsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveStreams.Open.$post> }) =>
        parseResponse(client.LiveStreams.Open.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvChannelMappingOptionsKey(
  args: InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
) {
  return ['LiveTv', '/LiveTv/ChannelMappingOptions', args] as const
}

export function useGetLiveTvChannelMappingOptions<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
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
        ? getGetLiveTvChannelMappingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.ChannelMappingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvChannelMappingOptions<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
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
        ? getGetLiveTvChannelMappingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.ChannelMappingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvChannelMappingsKey() {
  return ['LiveTv', '/LiveTv/ChannelMappings', 'POST'] as const
}

export function usePostLiveTvChannelMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.ChannelMappings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvChannelMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.LiveTv.ChannelMappings.$post> },
      ) => parseResponse(client.LiveTv.ChannelMappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvChannelsKey(
  args: InferRequestType<typeof client.LiveTv.Channels.$get>,
) {
  return ['LiveTv', '/LiveTv/Channels', args] as const
}

export function useGetLiveTvChannels<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvChannels<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvChannelsChannelIdKey(
  args: InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Channels/:channelId', args] as const
}

export function useGetLiveTvChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
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
        ? getGetLiveTvChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
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
        ? getGetLiveTvChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvGuideInfoKey() {
  return ['LiveTv', '/LiveTv/GuideInfo'] as const
}

export function useGetLiveTvGuideInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvGuideInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.GuideInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvGuideInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvGuideInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.GuideInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvInfoKey() {
  return ['LiveTv', '/LiveTv/Info'] as const
}

export function useGetLiveTvInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvListingProvidersKey() {
  return ['LiveTv', '/LiveTv/ListingProviders', 'POST'] as const
}

export function usePostLiveTvListingProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.ListingProviders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvListingProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.LiveTv.ListingProviders.$post> },
      ) => parseResponse(client.LiveTv.ListingProviders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLiveTvListingProvidersKey() {
  return ['LiveTv', '/LiveTv/ListingProviders', 'DELETE'] as const
}

export function useDeleteLiveTvListingProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.ListingProviders.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveTvListingProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.LiveTv.ListingProviders.$delete> },
      ) => parseResponse(client.LiveTv.ListingProviders.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvListingProvidersDefaultKey() {
  return ['LiveTv', '/LiveTv/ListingProviders/Default'] as const
}

export function useGetLiveTvListingProvidersDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveTvListingProvidersDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LiveTv.ListingProviders.Default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvListingProvidersDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveTvListingProvidersDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LiveTv.ListingProviders.Default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvListingProvidersLineupsKey(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
) {
  return ['LiveTv', '/LiveTv/ListingProviders/Lineups', args] as const
}

export function useGetLiveTvListingProvidersLineups<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
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
        ? getGetLiveTvListingProvidersLineupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.ListingProviders.Lineups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvListingProvidersLineups<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
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
        ? getGetLiveTvListingProvidersLineupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.ListingProviders.Lineups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvListingProvidersSchedulesDirectCountriesKey() {
  return ['LiveTv', '/LiveTv/ListingProviders/SchedulesDirect/Countries'] as const
}

export function useGetLiveTvListingProvidersSchedulesDirectCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveTvListingProvidersSchedulesDirectCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvListingProvidersSchedulesDirectCountries<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveTvListingProvidersSchedulesDirectCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvLiveRecordingsRecordingIdStreamKey(
  args: InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>,
) {
  return ['LiveTv', '/LiveTv/LiveRecordings/:recordingId/stream', args] as const
}

export function useGetLiveTvLiveRecordingsRecordingIdStream<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
            >
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
        ? getGetLiveTvLiveRecordingsRecordingIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.LiveTv.LiveRecordings[':recordingId'].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvLiveRecordingsRecordingIdStream<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
            >
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
        ? getGetLiveTvLiveRecordingsRecordingIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.LiveTv.LiveRecordings[':recordingId'].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvLiveStreamFilesStreamIdStreamContainerKey(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
  >,
) {
  return ['LiveTv', '/LiveTv/LiveStreamFiles/:streamId/stream.{container}', args] as const
}

export function useGetLiveTvLiveStreamFilesStreamIdStreamContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetLiveTvLiveStreamFilesStreamIdStreamContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.LiveTv.LiveStreamFiles[':streamId']['stream.{container}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvLiveStreamFilesStreamIdStreamContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.{container}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetLiveTvLiveStreamFilesStreamIdStreamContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.LiveTv.LiveStreamFiles[':streamId']['stream.{container}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvProgramsKey(
  args: InferRequestType<typeof client.LiveTv.Programs.$get>,
) {
  return ['LiveTv', '/LiveTv/Programs', args] as const
}

export function useGetLiveTvPrograms<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvProgramsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvPrograms<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvProgramsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvProgramsKey() {
  return ['LiveTv', '/LiveTv/Programs', 'POST'] as const
}

export function usePostLiveTvPrograms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.Programs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvProgramsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveTv.Programs.$post> }) =>
        parseResponse(client.LiveTv.Programs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvProgramsRecommendedKey(
  args: InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
) {
  return ['LiveTv', '/LiveTv/Programs/Recommended', args] as const
}

export function useGetLiveTvProgramsRecommended<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
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
        ? getGetLiveTvProgramsRecommendedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Programs.Recommended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvProgramsRecommended<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
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
        ? getGetLiveTvProgramsRecommendedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Programs.Recommended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvProgramsProgramIdKey(
  args: InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Programs/:programId', args] as const
}

export function useGetLiveTvProgramsProgramId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
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
        ? getGetLiveTvProgramsProgramIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Programs[':programId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvProgramsProgramId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
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
        ? getGetLiveTvProgramsProgramIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Programs[':programId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvRecordingsKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings', args] as const
}

export function useGetLiveTvRecordings<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
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
        ? getGetLiveTvRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvRecordings<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
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
        ? getGetLiveTvRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvRecordingsFoldersKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Folders', args] as const
}

export function useGetLiveTvRecordingsFolders<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
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
        ? getGetLiveTvRecordingsFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.Folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvRecordingsFolders<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
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
        ? getGetLiveTvRecordingsFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.Folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvRecordingsGroupsKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.Groups.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Groups', args] as const
}

export function useGetLiveTvRecordingsGroups<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
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
        ? getGetLiveTvRecordingsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.Groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvRecordingsGroups<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
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
        ? getGetLiveTvRecordingsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.Groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvRecordingsGroupsGroupIdKey(
  args: InferRequestType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Groups/:groupId', args] as const
}

export function useGetLiveTvRecordingsGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
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
        ? getGetLiveTvRecordingsGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LiveTv.Recordings.Groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvRecordingsGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
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
        ? getGetLiveTvRecordingsGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings.Groups)[':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.LiveTv.Recordings.Groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvRecordingsSeriesKey(
  args: InferRequestType<typeof client.LiveTv.Recordings.Series.$get>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Series', args] as const
}

export function useGetLiveTvRecordingsSeries<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
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
        ? getGetLiveTvRecordingsSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.Series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvRecordingsSeries<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Recordings.Series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
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
        ? getGetLiveTvRecordingsSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings.Series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvRecordingsRecordingIdKey(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Recordings/:recordingId', args] as const
}

export function useGetLiveTvRecordingsRecordingId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
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
        ? getGetLiveTvRecordingsRecordingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings[':recordingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvRecordingsRecordingId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
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
        ? getGetLiveTvRecordingsRecordingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Recordings[':recordingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLiveTvRecordingsRecordingIdKey() {
  return ['LiveTv', '/LiveTv/Recordings/:recordingId', 'DELETE'] as const
}

export function useDeleteLiveTvRecordingsRecordingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveTvRecordingsRecordingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']> },
      ) => parseResponse(client.LiveTv.Recordings[':recordingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvSeriesTimersKey(
  args: InferRequestType<typeof client.LiveTv.SeriesTimers.$get>,
) {
  return ['LiveTv', '/LiveTv/SeriesTimers', args] as const
}

export function useGetLiveTvSeriesTimers<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.SeriesTimers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
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
        ? getGetLiveTvSeriesTimersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.SeriesTimers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvSeriesTimers<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.SeriesTimers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
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
        ? getGetLiveTvSeriesTimersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.SeriesTimers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvSeriesTimersKey() {
  return ['LiveTv', '/LiveTv/SeriesTimers', 'POST'] as const
}

export function usePostLiveTvSeriesTimers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.SeriesTimers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvSeriesTimersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveTv.SeriesTimers.$post> }) =>
        parseResponse(client.LiveTv.SeriesTimers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvSeriesTimersTimerIdKey(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', args] as const
}

export function useGetLiveTvSeriesTimersTimerId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
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
        ? getGetLiveTvSeriesTimersTimerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.SeriesTimers[':timerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvSeriesTimersTimerId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
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
        ? getGetLiveTvSeriesTimersTimerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.SeriesTimers[':timerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvSeriesTimersTimerIdKey() {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', 'POST'] as const
}

export function usePostLiveTvSeriesTimersTimerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvSeriesTimersTimerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']> },
      ) => parseResponse(client.LiveTv.SeriesTimers[':timerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLiveTvSeriesTimersTimerIdKey() {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', 'DELETE'] as const
}

export function useDeleteLiveTvSeriesTimersTimerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveTvSeriesTimersTimerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']> },
      ) => parseResponse(client.LiveTv.SeriesTimers[':timerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvTimersKey(args: InferRequestType<typeof client.LiveTv.Timers.$get>) {
  return ['LiveTv', '/LiveTv/Timers', args] as const
}

export function useGetLiveTvTimers<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Timers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvTimersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Timers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvTimers<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Timers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveTvTimersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Timers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvTimersKey() {
  return ['LiveTv', '/LiveTv/Timers', 'POST'] as const
}

export function usePostLiveTvTimers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.Timers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvTimersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveTv.Timers.$post> }) =>
        parseResponse(client.LiveTv.Timers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvTimersDefaultsKey(
  args: InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
) {
  return ['LiveTv', '/LiveTv/Timers/Defaults', args] as const
}

export function useGetLiveTvTimersDefaults<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
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
        ? getGetLiveTvTimersDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Timers.Defaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvTimersDefaults<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
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
        ? getGetLiveTvTimersDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Timers.Defaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvTimersTimerIdKey(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
) {
  return ['LiveTv', '/LiveTv/Timers/:timerId', args] as const
}

export function useGetLiveTvTimersTimerId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
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
        ? getGetLiveTvTimersTimerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Timers[':timerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvTimersTimerId<TError = unknown>(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
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
        ? getGetLiveTvTimersTimerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Timers[':timerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvTimersTimerIdKey() {
  return ['LiveTv', '/LiveTv/Timers/:timerId', 'POST'] as const
}

export function usePostLiveTvTimersTimerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvTimersTimerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$post']> },
      ) => parseResponse(client.LiveTv.Timers[':timerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLiveTvTimersTimerIdKey() {
  return ['LiveTv', '/LiveTv/Timers/:timerId', 'DELETE'] as const
}

export function useDeleteLiveTvTimersTimerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveTvTimersTimerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$delete']> },
      ) => parseResponse(client.LiveTv.Timers[':timerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveTvTunerHostsKey() {
  return ['LiveTv', '/LiveTv/TunerHosts', 'POST'] as const
}

export function usePostLiveTvTunerHosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.TunerHosts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvTunerHostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveTv.TunerHosts.$post> }) =>
        parseResponse(client.LiveTv.TunerHosts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLiveTvTunerHostsKey() {
  return ['LiveTv', '/LiveTv/TunerHosts', 'DELETE'] as const
}

export function useDeleteLiveTvTunerHosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.LiveTv.TunerHosts.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveTvTunerHostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.LiveTv.TunerHosts.$delete> }) =>
        parseResponse(client.LiveTv.TunerHosts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveTvTunerHostsTypesKey() {
  return ['LiveTv', '/LiveTv/TunerHosts/Types'] as const
}

export function useGetLiveTvTunerHostsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveTvTunerHostsTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.TunerHosts.Types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvTunerHostsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiveTvTunerHostsTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.TunerHosts.Types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvTunersDiscoverKey(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
) {
  return ['LiveTv', '/LiveTv/Tuners/Discover', args] as const
}

export function useGetLiveTvTunersDiscover<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
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
        ? getGetLiveTvTunersDiscoverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Tuners.Discover.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvTunersDiscover<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
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
        ? getGetLiveTvTunersDiscoverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Tuners.Discover.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveTvTunersDiscvoverKey(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
) {
  return ['LiveTv', '/LiveTv/Tuners/Discvover', args] as const
}

export function useGetLiveTvTunersDiscvover<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
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
        ? getGetLiveTvTunersDiscvoverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Tuners.Discvover.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveTvTunersDiscvover<TError = unknown>(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
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
        ? getGetLiveTvTunersDiscvoverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.LiveTv.Tuners.Discvover.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveTvTunersTunerIdResetKey() {
  return ['LiveTv', '/LiveTv/Tuners/:tunerId/Reset', 'POST'] as const
}

export function usePostLiveTvTunersTunerIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveTvTunersTunerIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']> },
      ) => parseResponse(client.LiveTv.Tuners[':tunerId'].Reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocalizationCountriesKey() {
  return ['Localization', '/Localization/Countries'] as const
}

export function useGetLocalizationCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.Countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocalizationCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.Countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocalizationCulturesKey() {
  return ['Localization', '/Localization/Cultures'] as const
}

export function useGetLocalizationCultures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationCulturesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.Cultures.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocalizationCultures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationCulturesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.Cultures.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocalizationOptionsKey() {
  return ['Localization', '/Localization/Options'] as const
}

export function useGetLocalizationOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.Options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocalizationOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.Options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocalizationParentalRatingsKey() {
  return ['Localization', '/Localization/ParentalRatings'] as const
}

export function useGetLocalizationParentalRatings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationParentalRatingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.ParentalRatings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocalizationParentalRatings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLocalizationParentalRatingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Localization.ParentalRatings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesRecommendationsKey(
  args: InferRequestType<typeof client.Movies.Recommendations.$get>,
) {
  return ['Movies', '/Movies/Recommendations', args] as const
}

export function useGetMoviesRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.Movies.Recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
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
        ? getGetMoviesRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Movies.Recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.Movies.Recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
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
        ? getGetMoviesRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Movies.Recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesItemIdSimilarKey(
  args: InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
) {
  return ['Movies', '/Movies/:itemId/Similar', args] as const
}

export function useGetMoviesItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
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
        ? getGetMoviesItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Movies[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
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
        ? getGetMoviesItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Movies[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMusicGenresKey(args: InferRequestType<typeof client.MusicGenres.$get>) {
  return ['MusicGenres', '/MusicGenres', args] as const
}

export function useGetMusicGenres<TError = unknown>(
  args: InferRequestType<typeof client.MusicGenres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMusicGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMusicGenres<TError = unknown>(
  args: InferRequestType<typeof client.MusicGenres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMusicGenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMusicGenresGenreNameKey(
  args: InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:genreName', args] as const
}

export function useGetMusicGenresGenreName<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
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
        ? getGetMusicGenresGenreNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres[':genreName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMusicGenresGenreName<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
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
        ? getGetMusicGenresGenreNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres[':genreName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMusicGenresIdInstantMixKey(
  args: InferRequestType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:id/InstantMix', args] as const
}

export function useGetMusicGenresIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
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
        ? getGetMusicGenresIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMusicGenresIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
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
        ? getGetMusicGenresIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMusicGenresNameImagesImageTypeKey(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType', args] as const
}

export function useGetMusicGenresNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
            >
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
        ? getGetMusicGenresNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.MusicGenres[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMusicGenresNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
            >
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
        ? getGetMusicGenresNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.MusicGenres[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadMusicGenresNameImagesImageTypeKey() {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType', 'HEAD'] as const
}

export function useHeadMusicGenresNameImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadMusicGenresNameImagesImageTypeKey()
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
            (typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']
          >
        },
      ) =>
        parseResponse(client.MusicGenres[':name'].Images[':imageType'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMusicGenresNameImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType/:imageIndex', args] as const
}

export function useGetMusicGenresNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMusicGenresNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMusicGenresNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMusicGenresNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadMusicGenresNameImagesImageTypeImageIndexKey() {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadMusicGenresNameImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadMusicGenresNameImagesImageTypeImageIndexKey()
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
            (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMusicGenresNameInstantMixKey(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
) {
  return ['MusicGenres', '/MusicGenres/:name/InstantMix', args] as const
}

export function useGetMusicGenresNameInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
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
        ? getGetMusicGenresNameInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres[':name'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMusicGenresNameInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
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
        ? getGetMusicGenresNameInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.MusicGenres[':name'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsAdminKey() {
  return ['Notifications', '/Notifications/Admin', 'POST'] as const
}

export function usePostNotificationsAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Admin.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Notifications.Admin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Notifications.Admin.$post> }) =>
        parseResponse(client.Notifications.Admin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsServicesKey() {
  return ['Notifications', '/Notifications/Services'] as const
}

export function useGetNotificationsServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsServicesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications.Services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsServicesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Services.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications.Services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsTypesKey() {
  return ['Notifications', '/Notifications/Types'] as const
}

export function useGetNotificationsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications.Types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Notifications.Types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications.Types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsUserIdKey(
  args: InferRequestType<(typeof client.Notifications)[':userId']['$get']>,
) {
  return ['Notifications', '/Notifications/:userId', args] as const
}

export function useGetNotificationsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.Notifications)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>
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
        ? getGetNotificationsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.Notifications)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>
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
        ? getGetNotificationsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsUserIdReadKey() {
  return ['Notifications', '/Notifications/:userId/Read', 'POST'] as const
}

export function usePostNotificationsUserIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Read']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Notifications)[':userId']['Read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsUserIdReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Notifications)[':userId']['Read']['$post']> },
      ) => parseResponse(client.Notifications[':userId'].Read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsUserIdSummaryKey(
  args: InferRequestType<(typeof client.Notifications)[':userId']['Summary']['$get']>,
) {
  return ['Notifications', '/Notifications/:userId/Summary', args] as const
}

export function useGetNotificationsUserIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Notifications)[':userId']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
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
        ? getGetNotificationsUserIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications[':userId'].Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsUserIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Notifications)[':userId']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
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
        ? getGetNotificationsUserIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Notifications[':userId'].Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsUserIdUnreadKey() {
  return ['Notifications', '/Notifications/:userId/Unread', 'POST'] as const
}

export function usePostNotificationsUserIdUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Notifications)[':userId']['Unread']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Notifications)[':userId']['Unread']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsUserIdUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Notifications)[':userId']['Unread']['$post']> },
      ) => parseResponse(client.Notifications[':userId'].Unread.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPackagesKey() {
  return ['Packages', '/Packages'] as const
}

export function useGetPackages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPackagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Packages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPackages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPackagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Packages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPackagesInstalledNameKey() {
  return ['Packages', '/Packages/Installed/:name', 'POST'] as const
}

export function usePostPackagesInstalledName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Packages.Installed)[':name']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Packages.Installed)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPackagesInstalledNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Packages.Installed)[':name']['$post']> },
      ) => parseResponse(client.Packages.Installed[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePackagesInstallingPackageIdKey() {
  return ['Packages', '/Packages/Installing/:packageId', 'DELETE'] as const
}

export function useDeletePackagesInstallingPackageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Packages.Installing)[':packageId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Packages.Installing)[':packageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePackagesInstallingPackageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Packages.Installing)[':packageId']['$delete']> },
      ) => parseResponse(client.Packages.Installing[':packageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPackagesNameKey(
  args: InferRequestType<(typeof client.Packages)[':name']['$get']>,
) {
  return ['Packages', '/Packages/:name', args] as const
}

export function useGetPackagesName<TError = unknown>(
  args: InferRequestType<(typeof client.Packages)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPackagesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Packages[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPackagesName<TError = unknown>(
  args: InferRequestType<(typeof client.Packages)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPackagesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Packages[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPersonsKey(args: InferRequestType<typeof client.Persons.$get>) {
  return ['Persons', '/Persons', args] as const
}

export function useGetPersons<TError = unknown>(
  args: InferRequestType<typeof client.Persons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPersonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Persons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPersons<TError = unknown>(
  args: InferRequestType<typeof client.Persons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPersonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Persons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPersonsNameKey(
  args: InferRequestType<(typeof client.Persons)[':name']['$get']>,
) {
  return ['Persons', '/Persons/:name', args] as const
}

export function useGetPersonsName<TError = unknown>(
  args: InferRequestType<(typeof client.Persons)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPersonsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Persons[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonsName<TError = unknown>(
  args: InferRequestType<(typeof client.Persons)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPersonsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Persons[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPersonsNameImagesImageTypeKey(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
) {
  return ['Persons', '/Persons/:name/Images/:imageType', args] as const
}

export function useGetPersonsNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
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
        ? getGetPersonsNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Persons[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonsNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
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
        ? getGetPersonsNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Persons[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadPersonsNameImagesImageTypeKey() {
  return ['Persons', '/Persons/:name/Images/:imageType', 'HEAD'] as const
}

export function useHeadPersonsNameImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadPersonsNameImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>
        },
      ) => parseResponse(client.Persons[':name'].Images[':imageType'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPersonsNameImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Persons', '/Persons/:name/Images/:imageType/:imageIndex', args] as const
}

export function useGetPersonsNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPersonsNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Persons[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonsNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPersonsNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Persons[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadPersonsNameImagesImageTypeImageIndexKey() {
  return ['Persons', '/Persons/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadPersonsNameImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadPersonsNameImagesImageTypeImageIndexKey()
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
            (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Persons[':name'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPlaybackBitrateTestKey(
  args: InferRequestType<typeof client.Playback.BitrateTest.$get>,
) {
  return ['Playback', '/Playback/BitrateTest', args] as const
}

export function useGetPlaybackBitrateTest<TError = unknown>(
  args: InferRequestType<typeof client.Playback.BitrateTest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
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
        ? getGetPlaybackBitrateTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Playback.BitrateTest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaybackBitrateTest<TError = unknown>(
  args: InferRequestType<typeof client.Playback.BitrateTest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
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
        ? getGetPlaybackBitrateTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Playback.BitrateTest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlaylistsKey() {
  return ['Playlists', '/Playlists', 'POST'] as const
}

export function usePostPlaylists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playlists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Playlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Playlists.$post> }) =>
        parseResponse(client.Playlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsIdInstantMixKey(
  args: InferRequestType<(typeof client.Playlists)[':id']['InstantMix']['$get']>,
) {
  return ['Playlists', '/Playlists/:id/InstantMix', args] as const
}

export function useGetPlaylistsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Playlists)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
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
        ? getGetPlaylistsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Playlists[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Playlists)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
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
        ? getGetPlaylistsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Playlists[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdItemsKey(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
) {
  return ['Playlists', '/Playlists/:playlistId/Items', args] as const
}

export function useGetPlaylistsPlaylistIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
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
        ? getGetPlaylistsPlaylistIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Playlists[':playlistId'].Items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
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
        ? getGetPlaylistsPlaylistIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Playlists[':playlistId'].Items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlaylistsPlaylistIdItemsKey() {
  return ['Playlists', '/Playlists/:playlistId/Items', 'POST'] as const
}

export function usePostPlaylistsPlaylistIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaylistsPlaylistIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$post']> },
      ) => parseResponse(client.Playlists[':playlistId'].Items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlaylistsPlaylistIdItemsKey() {
  return ['Playlists', '/Playlists/:playlistId/Items', 'DELETE'] as const
}

export function useDeletePlaylistsPlaylistIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlaylistsPlaylistIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$delete']> },
      ) => parseResponse(client.Playlists[':playlistId'].Items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexKey() {
  return ['Playlists', '/Playlists/:playlistId/Items/:itemId/Move/:newIndex', 'POST'] as const
}

export function usePostPlaylistsPlaylistIdItemsItemIdMoveNewIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexKey()
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
            (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Playlists[':playlistId'].Items[':itemId'].Move[':newIndex'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsKey() {
  return ['Plugins', '/Plugins'] as const
}

export function useGetPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Plugins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Plugins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPluginsSecurityInfoKey() {
  return ['Plugins', '/Plugins/SecurityInfo', 'POST'] as const
}

export function usePostPluginsSecurityInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.SecurityInfo.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Plugins.SecurityInfo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsSecurityInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Plugins.SecurityInfo.$post> },
      ) => parseResponse(client.Plugins.SecurityInfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePluginsPluginIdKey() {
  return ['Plugins', '/Plugins/:pluginId', 'DELETE'] as const
}

export function useDeletePluginsPluginId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Plugins)[':pluginId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePluginsPluginIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Plugins)[':pluginId']['$delete']> },
      ) => parseResponse(client.Plugins[':pluginId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsPluginIdConfigurationKey(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
) {
  return ['Plugins', '/Plugins/:pluginId/Configuration', args] as const
}

export function useGetPluginsPluginIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
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
        ? getGetPluginsPluginIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Plugins[':pluginId'].Configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsPluginIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
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
        ? getGetPluginsPluginIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Plugins[':pluginId'].Configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPluginsPluginIdConfigurationKey() {
  return ['Plugins', '/Plugins/:pluginId/Configuration', 'POST'] as const
}

export function usePostPluginsPluginIdConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsPluginIdConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>
        },
      ) => parseResponse(client.Plugins[':pluginId'].Configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPluginsPluginIdManifestKey() {
  return ['Plugins', '/Plugins/:pluginId/Manifest', 'POST'] as const
}

export function usePostPluginsPluginIdManifest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsPluginIdManifestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']> },
      ) => parseResponse(client.Plugins[':pluginId'].Manifest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePluginsPluginIdVersionKey() {
  return ['Plugins', '/Plugins/:pluginId/:version', 'DELETE'] as const
}

export function useDeletePluginsPluginIdVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePluginsPluginIdVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['$delete']> },
      ) => parseResponse(client.Plugins[':pluginId'][':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPluginsPluginIdVersionDisableKey() {
  return ['Plugins', '/Plugins/:pluginId/:version/Disable', 'POST'] as const
}

export function usePostPluginsPluginIdVersionDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsPluginIdVersionDisableKey()
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
            (typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']
          >
        },
      ) => parseResponse(client.Plugins[':pluginId'][':version'].Disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPluginsPluginIdVersionEnableKey() {
  return ['Plugins', '/Plugins/:pluginId/:version/Enable', 'POST'] as const
}

export function usePostPluginsPluginIdVersionEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsPluginIdVersionEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>
        },
      ) => parseResponse(client.Plugins[':pluginId'][':version'].Enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsPluginIdVersionImageKey(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
) {
  return ['Plugins', '/Plugins/:pluginId/:version/Image', args] as const
}

export function useGetPluginsPluginIdVersionImage<TError = unknown>(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
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
        ? getGetPluginsPluginIdVersionImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Plugins[':pluginId'][':version'].Image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsPluginIdVersionImage<TError = unknown>(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
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
        ? getGetPluginsPluginIdVersionImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Plugins[':pluginId'][':version'].Image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersSubtitlesSubtitlesIdKey(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>,
) {
  return ['Providers', '/Providers/Subtitles/Subtitles/:id', args] as const
}

export function useGetProvidersSubtitlesSubtitlesId<TError = unknown>(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
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
        ? getGetProvidersSubtitlesSubtitlesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Providers.Subtitles.Subtitles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersSubtitlesSubtitlesId<TError = unknown>(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
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
        ? getGetProvidersSubtitlesSubtitlesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Providers.Subtitles.Subtitles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuickConnectActivateKey() {
  return ['QuickConnect', '/QuickConnect/Activate', 'POST'] as const
}

export function usePostQuickConnectActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Activate.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuickConnectActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.QuickConnect.Activate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuickConnectAuthorizeKey() {
  return ['QuickConnect', '/QuickConnect/Authorize', 'POST'] as const
}

export function usePostQuickConnectAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.QuickConnect.Authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuickConnectAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.QuickConnect.Authorize.$post> },
      ) => parseResponse(client.QuickConnect.Authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuickConnectAvailableKey() {
  return ['QuickConnect', '/QuickConnect/Available', 'POST'] as const
}

export function usePostQuickConnectAvailable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Available.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.QuickConnect.Available.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuickConnectAvailableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.QuickConnect.Available.$post> },
      ) => parseResponse(client.QuickConnect.Available.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuickConnectConnectKey(
  args: InferRequestType<typeof client.QuickConnect.Connect.$get>,
) {
  return ['QuickConnect', '/QuickConnect/Connect', args] as const
}

export function useGetQuickConnectConnect<TError = unknown>(
  args: InferRequestType<typeof client.QuickConnect.Connect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
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
        ? getGetQuickConnectConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.QuickConnect.Connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuickConnectConnect<TError = unknown>(
  args: InferRequestType<typeof client.QuickConnect.Connect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
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
        ? getGetQuickConnectConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.QuickConnect.Connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuickConnectDeauthorizeKey() {
  return ['QuickConnect', '/QuickConnect/Deauthorize', 'POST'] as const
}

export function usePostQuickConnectDeauthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Deauthorize.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuickConnectDeauthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.QuickConnect.Deauthorize.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuickConnectInitiateKey() {
  return ['QuickConnect', '/QuickConnect/Initiate'] as const
}

export function useGetQuickConnectInitiate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuickConnectInitiateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.QuickConnect.Initiate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuickConnectInitiate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuickConnectInitiateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.QuickConnect.Initiate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuickConnectStatusKey() {
  return ['QuickConnect', '/QuickConnect/Status'] as const
}

export function useGetQuickConnectStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuickConnectStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.QuickConnect.Status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuickConnectStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuickConnectStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.QuickConnect.Status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesKey() {
  return ['Repositories', '/Repositories'] as const
}

export function useGetRepositories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRepositoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Repositories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRepositoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Repositories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesKey() {
  return ['Repositories', '/Repositories', 'POST'] as const
}

export function usePostRepositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Repositories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Repositories.$post> }) =>
        parseResponse(client.Repositories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduledTasksKey(args: InferRequestType<typeof client.ScheduledTasks.$get>) {
  return ['ScheduledTasks', '/ScheduledTasks', args] as const
}

export function useGetScheduledTasks<TError = unknown>(
  args: InferRequestType<typeof client.ScheduledTasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduledTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ScheduledTasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduledTasks<TError = unknown>(
  args: InferRequestType<typeof client.ScheduledTasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduledTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ScheduledTasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScheduledTasksRunningTaskIdKey() {
  return ['ScheduledTasks', '/ScheduledTasks/Running/:taskId', 'POST'] as const
}

export function usePostScheduledTasksRunningTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduledTasksRunningTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']> },
      ) => parseResponse(client.ScheduledTasks.Running[':taskId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScheduledTasksRunningTaskIdKey() {
  return ['ScheduledTasks', '/ScheduledTasks/Running/:taskId', 'DELETE'] as const
}

export function useDeleteScheduledTasksRunningTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScheduledTasksRunningTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']> },
      ) => parseResponse(client.ScheduledTasks.Running[':taskId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduledTasksTaskIdKey(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
) {
  return ['ScheduledTasks', '/ScheduledTasks/:taskId', args] as const
}

export function useGetScheduledTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
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
        ? getGetScheduledTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ScheduledTasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduledTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
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
        ? getGetScheduledTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ScheduledTasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScheduledTasksTaskIdTriggersKey() {
  return ['ScheduledTasks', '/ScheduledTasks/:taskId/Triggers', 'POST'] as const
}

export function usePostScheduledTasksTaskIdTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduledTasksTaskIdTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>
        },
      ) => parseResponse(client.ScheduledTasks[':taskId'].Triggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchHintsKey(args: InferRequestType<typeof client.Search.Hints.$get>) {
  return ['Search', '/Search/Hints', args] as const
}

export function useGetSearchHints<TError = unknown>(
  args: InferRequestType<typeof client.Search.Hints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchHintsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Hints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchHints<TError = unknown>(
  args: InferRequestType<typeof client.Search.Hints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchHintsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Hints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSessionsKey(args: InferRequestType<typeof client.Sessions.$get>) {
  return ['Sessions', '/Sessions', args] as const
}

export function useGetSessions<TError = unknown>(
  args: InferRequestType<typeof client.Sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Sessions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSessions<TError = unknown>(
  args: InferRequestType<typeof client.Sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Sessions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSessionsCapabilitiesKey() {
  return ['Sessions', '/Sessions/Capabilities', 'POST'] as const
}

export function usePostSessionsCapabilities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Capabilities.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Capabilities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsCapabilitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Sessions.Capabilities.$post> },
      ) => parseResponse(client.Sessions.Capabilities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsCapabilitiesFullKey() {
  return ['Sessions', '/Sessions/Capabilities/Full', 'POST'] as const
}

export function usePostSessionsCapabilitiesFull<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Capabilities.Full.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Capabilities.Full.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsCapabilitiesFullKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Sessions.Capabilities.Full.$post> },
      ) => parseResponse(client.Sessions.Capabilities.Full.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsLogoutKey() {
  return ['Sessions', '/Sessions/Logout', 'POST'] as const
}

export function usePostSessionsLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Logout.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.Sessions.Logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsPlayingKey() {
  return ['Sessions', '/Sessions/Playing', 'POST'] as const
}

export function usePostSessionsPlaying<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Playing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsPlayingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Sessions.Playing.$post> }) =>
        parseResponse(client.Sessions.Playing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsPlayingPingKey() {
  return ['Sessions', '/Sessions/Playing/Ping', 'POST'] as const
}

export function usePostSessionsPlayingPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Ping.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Playing.Ping.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsPlayingPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Sessions.Playing.Ping.$post> },
      ) => parseResponse(client.Sessions.Playing.Ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsPlayingProgressKey() {
  return ['Sessions', '/Sessions/Playing/Progress', 'POST'] as const
}

export function usePostSessionsPlayingProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Progress.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Playing.Progress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsPlayingProgressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Sessions.Playing.Progress.$post> },
      ) => parseResponse(client.Sessions.Playing.Progress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsPlayingStoppedKey() {
  return ['Sessions', '/Sessions/Playing/Stopped', 'POST'] as const
}

export function usePostSessionsPlayingStopped<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Stopped.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Playing.Stopped.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsPlayingStoppedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Sessions.Playing.Stopped.$post> },
      ) => parseResponse(client.Sessions.Playing.Stopped.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsViewingKey() {
  return ['Sessions', '/Sessions/Viewing', 'POST'] as const
}

export function usePostSessionsViewing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Viewing.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Sessions.Viewing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsViewingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Sessions.Viewing.$post> }) =>
        parseResponse(client.Sessions.Viewing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdCommandKey() {
  return ['Sessions', '/Sessions/:sessionId/Command', 'POST'] as const
}

export function usePostSessionsSessionIdCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Command']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdCommandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Sessions)[':sessionId']['Command']['$post']> },
      ) => parseResponse(client.Sessions[':sessionId'].Command.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdCommandCommandKey() {
  return ['Sessions', '/Sessions/:sessionId/Command/:command', 'POST'] as const
}

export function usePostSessionsSessionIdCommandCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Command'][':command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdCommandCommandKey()
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
            (typeof client.Sessions)[':sessionId']['Command'][':command']['$post']
          >
        },
      ) =>
        parseResponse(client.Sessions[':sessionId'].Command[':command'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdMessageKey() {
  return ['Sessions', '/Sessions/:sessionId/Message', 'POST'] as const
}

export function usePostSessionsSessionIdMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Message']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Sessions)[':sessionId']['Message']['$post']> },
      ) => parseResponse(client.Sessions[':sessionId'].Message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdPlayingKey() {
  return ['Sessions', '/Sessions/:sessionId/Playing', 'POST'] as const
}

export function usePostSessionsSessionIdPlaying<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdPlayingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Sessions)[':sessionId']['Playing']['$post']> },
      ) => parseResponse(client.Sessions[':sessionId'].Playing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdPlayingCommandKey() {
  return ['Sessions', '/Sessions/:sessionId/Playing/:command', 'POST'] as const
}

export function usePostSessionsSessionIdPlayingCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdPlayingCommandKey()
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
            (typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']
          >
        },
      ) =>
        parseResponse(client.Sessions[':sessionId'].Playing[':command'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdSystemCommandKey() {
  return ['Sessions', '/Sessions/:sessionId/System/:command', 'POST'] as const
}

export function usePostSessionsSessionIdSystemCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['System'][':command']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdSystemCommandKey()
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
            (typeof client.Sessions)[':sessionId']['System'][':command']['$post']
          >
        },
      ) =>
        parseResponse(client.Sessions[':sessionId'].System[':command'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdUserUserIdKey() {
  return ['Sessions', '/Sessions/:sessionId/User/:userId', 'POST'] as const
}

export function usePostSessionsSessionIdUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>
        },
      ) => parseResponse(client.Sessions[':sessionId'].User[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSessionsSessionIdUserUserIdKey() {
  return ['Sessions', '/Sessions/:sessionId/User/:userId', 'DELETE'] as const
}

export function useDeleteSessionsSessionIdUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSessionsSessionIdUserUserIdKey()
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
            (typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']
          >
        },
      ) => parseResponse(client.Sessions[':sessionId'].User[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdViewingKey() {
  return ['Sessions', '/Sessions/:sessionId/Viewing', 'POST'] as const
}

export function usePostSessionsSessionIdViewing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdViewingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']> },
      ) => parseResponse(client.Sessions[':sessionId'].Viewing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShowsNextUpKey(args: InferRequestType<typeof client.Shows.NextUp.$get>) {
  return ['Shows', '/Shows/NextUp', args] as const
}

export function useGetShowsNextUp<TError = unknown>(
  args: InferRequestType<typeof client.Shows.NextUp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsNextUpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows.NextUp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsNextUp<TError = unknown>(
  args: InferRequestType<typeof client.Shows.NextUp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsNextUpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows.NextUp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsUpcomingKey(args: InferRequestType<typeof client.Shows.Upcoming.$get>) {
  return ['Shows', '/Shows/Upcoming', args] as const
}

export function useGetShowsUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.Shows.Upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsUpcomingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows.Upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.Shows.Upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsUpcomingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows.Upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsItemIdSimilarKey(
  args: InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
) {
  return ['Shows', '/Shows/:itemId/Similar', args] as const
}

export function useGetShowsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
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
        ? getGetShowsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
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
        ? getGetShowsItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsSeriesIdEpisodesKey(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
) {
  return ['Shows', '/Shows/:seriesId/Episodes', args] as const
}

export function useGetShowsSeriesIdEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
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
        ? getGetShowsSeriesIdEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows[':seriesId'].Episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsSeriesIdEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
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
        ? getGetShowsSeriesIdEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows[':seriesId'].Episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsSeriesIdSeasonsKey(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
) {
  return ['Shows', '/Shows/:seriesId/Seasons', args] as const
}

export function useGetShowsSeriesIdSeasons<TError = unknown>(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
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
        ? getGetShowsSeriesIdSeasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows[':seriesId'].Seasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsSeriesIdSeasons<TError = unknown>(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
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
        ? getGetShowsSeriesIdSeasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Shows[':seriesId'].Seasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSongsIdInstantMixKey(
  args: InferRequestType<(typeof client.Songs)[':id']['InstantMix']['$get']>,
) {
  return ['Songs', '/Songs/:id/InstantMix', args] as const
}

export function useGetSongsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Songs)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>
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
        ? getGetSongsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Songs[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSongsIdInstantMix<TError = unknown>(
  args: InferRequestType<(typeof client.Songs)[':id']['InstantMix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>
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
        ? getGetSongsIdInstantMixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Songs)[':id']['InstantMix']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Songs[':id'].InstantMix.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStartupCompleteKey() {
  return ['Startup', '/Startup/Complete', 'POST'] as const
}

export function usePostStartupComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Complete.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartupCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.Startup.Complete.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStartupConfigurationKey() {
  return ['Startup', '/Startup/Configuration'] as const
}

export function useGetStartupConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStartupConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Startup.Configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStartupConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStartupConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Startup.Configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStartupConfigurationKey() {
  return ['Startup', '/Startup/Configuration', 'POST'] as const
}

export function usePostStartupConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Startup.Configuration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartupConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Startup.Configuration.$post> },
      ) => parseResponse(client.Startup.Configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStartupFirstUserKey() {
  return ['Startup', '/Startup/FirstUser'] as const
}

export function useGetStartupFirstUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStartupFirstUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Startup.FirstUser.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStartupFirstUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStartupFirstUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Startup.FirstUser.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStartupRemoteAccessKey() {
  return ['Startup', '/Startup/RemoteAccess', 'POST'] as const
}

export function usePostStartupRemoteAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Startup.RemoteAccess.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Startup.RemoteAccess.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartupRemoteAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Startup.RemoteAccess.$post> },
      ) => parseResponse(client.Startup.RemoteAccess.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStartupUserKey() {
  return ['Startup', '/Startup/User'] as const
}

export function useGetStartupUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStartupUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Startup.User.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStartupUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStartupUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Startup.User.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStartupUserKey() {
  return ['Startup', '/Startup/User', 'POST'] as const
}

export function usePostStartupUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Startup.User.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartupUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Startup.User.$post> }) =>
        parseResponse(client.Startup.User.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiosKey(args: InferRequestType<typeof client.Studios.$get>) {
  return ['Studios', '/Studios', args] as const
}

export function useGetStudios<TError = unknown>(
  args: InferRequestType<typeof client.Studios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStudiosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Studios.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStudios<TError = unknown>(
  args: InferRequestType<typeof client.Studios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStudiosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Studios.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStudiosNameKey(
  args: InferRequestType<(typeof client.Studios)[':name']['$get']>,
) {
  return ['Studios', '/Studios/:name', args] as const
}

export function useGetStudiosName<TError = unknown>(
  args: InferRequestType<(typeof client.Studios)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudiosNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Studios[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiosName<TError = unknown>(
  args: InferRequestType<(typeof client.Studios)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudiosNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Studios[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiosNameImagesImageTypeKey(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
) {
  return ['Studios', '/Studios/:name/Images/:imageType', args] as const
}

export function useGetStudiosNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
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
        ? getGetStudiosNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Studios[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiosNameImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
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
        ? getGetStudiosNameImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Studios[':name'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadStudiosNameImagesImageTypeKey() {
  return ['Studios', '/Studios/:name/Images/:imageType', 'HEAD'] as const
}

export function useHeadStudiosNameImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadStudiosNameImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>
        },
      ) => parseResponse(client.Studios[':name'].Images[':imageType'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiosNameImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Studios', '/Studios/:name/Images/:imageType/:imageIndex', args] as const
}

export function useGetStudiosNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetStudiosNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Studios[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiosNameImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetStudiosNameImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Studios[':name'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadStudiosNameImagesImageTypeImageIndexKey() {
  return ['Studios', '/Studios/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadStudiosNameImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadStudiosNameImagesImageTypeImageIndexKey()
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
            (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Studios[':name'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayBufferingKey() {
  return ['SyncPlay', '/SyncPlay/Buffering', 'POST'] as const
}

export function usePostSyncPlayBuffering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Buffering.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.Buffering.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayBufferingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.Buffering.$post> }) =>
        parseResponse(client.SyncPlay.Buffering.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayJoinKey() {
  return ['SyncPlay', '/SyncPlay/Join', 'POST'] as const
}

export function usePostSyncPlayJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Join.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.Join.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.Join.$post> }) =>
        parseResponse(client.SyncPlay.Join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayLeaveKey() {
  return ['SyncPlay', '/SyncPlay/Leave', 'POST'] as const
}

export function usePostSyncPlayLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Leave.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.SyncPlay.Leave.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncPlayListKey() {
  return ['SyncPlay', '/SyncPlay/List'] as const
}

export function useGetSyncPlayList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSyncPlayListKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.SyncPlay.List.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncPlayList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSyncPlayListKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.SyncPlay.List.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncPlayMovePlaylistItemKey() {
  return ['SyncPlay', '/SyncPlay/MovePlaylistItem', 'POST'] as const
}

export function usePostSyncPlayMovePlaylistItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.MovePlaylistItem.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.MovePlaylistItem.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayMovePlaylistItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.MovePlaylistItem.$post> },
      ) => parseResponse(client.SyncPlay.MovePlaylistItem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayNewKey() {
  return ['SyncPlay', '/SyncPlay/New', 'POST'] as const
}

export function usePostSyncPlayNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.New.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.New.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.New.$post> }) =>
        parseResponse(client.SyncPlay.New.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayNextItemKey() {
  return ['SyncPlay', '/SyncPlay/NextItem', 'POST'] as const
}

export function usePostSyncPlayNextItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.NextItem.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.NextItem.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayNextItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.NextItem.$post> }) =>
        parseResponse(client.SyncPlay.NextItem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayPauseKey() {
  return ['SyncPlay', '/SyncPlay/Pause', 'POST'] as const
}

export function usePostSyncPlayPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Pause.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.SyncPlay.Pause.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayPingKey() {
  return ['SyncPlay', '/SyncPlay/Ping', 'POST'] as const
}

export function usePostSyncPlayPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ping.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.Ping.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.Ping.$post> }) =>
        parseResponse(client.SyncPlay.Ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayPreviousItemKey() {
  return ['SyncPlay', '/SyncPlay/PreviousItem', 'POST'] as const
}

export function usePostSyncPlayPreviousItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.PreviousItem.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.PreviousItem.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayPreviousItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.PreviousItem.$post> },
      ) => parseResponse(client.SyncPlay.PreviousItem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayQueueKey() {
  return ['SyncPlay', '/SyncPlay/Queue', 'POST'] as const
}

export function usePostSyncPlayQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Queue.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.Queue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.Queue.$post> }) =>
        parseResponse(client.SyncPlay.Queue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayReadyKey() {
  return ['SyncPlay', '/SyncPlay/Ready', 'POST'] as const
}

export function usePostSyncPlayReady<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ready.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.Ready.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayReadyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.Ready.$post> }) =>
        parseResponse(client.SyncPlay.Ready.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayRemoveFromPlaylistKey() {
  return ['SyncPlay', '/SyncPlay/RemoveFromPlaylist', 'POST'] as const
}

export function usePostSyncPlayRemoveFromPlaylist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.RemoveFromPlaylist.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.RemoveFromPlaylist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayRemoveFromPlaylistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.RemoveFromPlaylist.$post> },
      ) => parseResponse(client.SyncPlay.RemoveFromPlaylist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlaySeekKey() {
  return ['SyncPlay', '/SyncPlay/Seek', 'POST'] as const
}

export function usePostSyncPlaySeek<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Seek.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.Seek.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlaySeekKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SyncPlay.Seek.$post> }) =>
        parseResponse(client.SyncPlay.Seek.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlaySetIgnoreWaitKey() {
  return ['SyncPlay', '/SyncPlay/SetIgnoreWait', 'POST'] as const
}

export function usePostSyncPlaySetIgnoreWait<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetIgnoreWait.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlaySetIgnoreWaitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post> },
      ) => parseResponse(client.SyncPlay.SetIgnoreWait.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlaySetNewQueueKey() {
  return ['SyncPlay', '/SyncPlay/SetNewQueue', 'POST'] as const
}

export function usePostSyncPlaySetNewQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetNewQueue.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.SetNewQueue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlaySetNewQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.SetNewQueue.$post> },
      ) => parseResponse(client.SyncPlay.SetNewQueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlaySetPlaylistItemKey() {
  return ['SyncPlay', '/SyncPlay/SetPlaylistItem', 'POST'] as const
}

export function usePostSyncPlaySetPlaylistItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetPlaylistItem.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.SetPlaylistItem.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlaySetPlaylistItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.SetPlaylistItem.$post> },
      ) => parseResponse(client.SyncPlay.SetPlaylistItem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlaySetRepeatModeKey() {
  return ['SyncPlay', '/SyncPlay/SetRepeatMode', 'POST'] as const
}

export function usePostSyncPlaySetRepeatMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetRepeatMode.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlaySetRepeatModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post> },
      ) => parseResponse(client.SyncPlay.SetRepeatMode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlaySetShuffleModeKey() {
  return ['SyncPlay', '/SyncPlay/SetShuffleMode', 'POST'] as const
}

export function usePostSyncPlaySetShuffleMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetShuffleMode.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlaySetShuffleModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post> },
      ) => parseResponse(client.SyncPlay.SetShuffleMode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayStopKey() {
  return ['SyncPlay', '/SyncPlay/Stop', 'POST'] as const
}

export function usePostSyncPlayStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Stop.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.SyncPlay.Stop.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPlayUnpauseKey() {
  return ['SyncPlay', '/SyncPlay/Unpause', 'POST'] as const
}

export function usePostSyncPlayUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Unpause.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPlayUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.SyncPlay.Unpause.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemActivityLogEntriesKey(
  args: InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
) {
  return ['System', '/System/ActivityLog/Entries', args] as const
}

export function useGetSystemActivityLogEntries<TError = unknown>(
  args: InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
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
        ? getGetSystemActivityLogEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.ActivityLog.Entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemActivityLogEntries<TError = unknown>(
  args: InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
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
        ? getGetSystemActivityLogEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.ActivityLog.Entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemConfigurationKey() {
  return ['System', '/System/Configuration'] as const
}

export function useGetSystemConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemConfigurationKey() {
  return ['System', '/System/Configuration', 'POST'] as const
}

export function usePostSystemConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.System.Configuration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.System.Configuration.$post> },
      ) => parseResponse(client.System.Configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemConfigurationMetadataOptionsDefaultKey() {
  return ['System', '/System/Configuration/MetadataOptions/Default'] as const
}

export function useGetSystemConfigurationMetadataOptionsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConfigurationMetadataOptionsDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.System.Configuration.MetadataOptions.Default.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemConfigurationMetadataOptionsDefault<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemConfigurationMetadataOptionsDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.System.Configuration.MetadataOptions.Default.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSystemConfigurationKeyKey(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
) {
  return ['System', '/System/Configuration/:key', args] as const
}

export function useGetSystemConfigurationKey<TError = unknown>(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
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
        ? getGetSystemConfigurationKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Configuration[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemConfigurationKey<TError = unknown>(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
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
        ? getGetSystemConfigurationKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Configuration[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemConfigurationKeyKey() {
  return ['System', '/System/Configuration/:key', 'POST'] as const
}

export function usePostSystemConfigurationKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.System.Configuration)[':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemConfigurationKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.System.Configuration)[':key']['$post']> },
      ) => parseResponse(client.System.Configuration[':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemEndpointKey() {
  return ['System', '/System/Endpoint'] as const
}

export function useGetSystemEndpoint<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemEndpointKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Endpoint.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemEndpoint<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemEndpointKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Endpoint.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemInfoKey() {
  return ['System', '/System/Info'] as const
}

export function useGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemInfoPublicKey() {
  return ['System', '/System/Info/Public'] as const
}

export function useGetSystemInfoPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Info.Public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemInfoPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Info.Public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemLogsKey() {
  return ['System', '/System/Logs'] as const
}

export function useGetSystemLogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemLogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemLogsLogKey(args: InferRequestType<typeof client.System.Logs.Log.$get>) {
  return ['System', '/System/Logs/Log', args] as const
}

export function useGetSystemLogsLog<TError = unknown>(
  args: InferRequestType<typeof client.System.Logs.Log.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLogsLogKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Logs.Log.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemLogsLog<TError = unknown>(
  args: InferRequestType<typeof client.System.Logs.Log.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLogsLogKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Logs.Log.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemMediaEncoderPathKey() {
  return ['System', '/System/MediaEncoder/Path', 'POST'] as const
}

export function usePostSystemMediaEncoderPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.MediaEncoder.Path.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.System.MediaEncoder.Path.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemMediaEncoderPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.System.MediaEncoder.Path.$post> },
      ) => parseResponse(client.System.MediaEncoder.Path.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemPingKey() {
  return ['System', '/System/Ping'] as const
}

export function useGetSystemPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.Ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemPingKey() {
  return ['System', '/System/Ping', 'POST'] as const
}

export function usePostSystemPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.System.Ping.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemRestartKey() {
  return ['System', '/System/Restart', 'POST'] as const
}

export function usePostSystemRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Restart.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.System.Restart.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemShutdownKey() {
  return ['System', '/System/Shutdown', 'POST'] as const
}

export function usePostSystemShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Shutdown.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemShutdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.System.Shutdown.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemWakeOnLanInfoKey() {
  return ['System', '/System/WakeOnLanInfo'] as const
}

export function useGetSystemWakeOnLanInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemWakeOnLanInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.WakeOnLanInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemWakeOnLanInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemWakeOnLanInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.WakeOnLanInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.System.WakeOnLanInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrailersKey(args: InferRequestType<typeof client.Trailers.$get>) {
  return ['Trailers', '/Trailers', args] as const
}

export function useGetTrailers<TError = unknown>(
  args: InferRequestType<typeof client.Trailers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrailersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Trailers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTrailers<TError = unknown>(
  args: InferRequestType<typeof client.Trailers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrailersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Trailers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTrailersItemIdSimilarKey(
  args: InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
) {
  return ['Trailers', '/Trailers/:itemId/Similar', args] as const
}

export function useGetTrailersItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
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
        ? getGetTrailersItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Trailers[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrailersItemIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
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
        ? getGetTrailersItemIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Trailers[':itemId'].Similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.Users.$get>) {
  return ['Users', '/Users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersAuthenticateByNameKey() {
  return ['Users', '/Users/AuthenticateByName', 'POST'] as const
}

export function usePostUsersAuthenticateByName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Users.AuthenticateByName.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Users.AuthenticateByName.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersAuthenticateByNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Users.AuthenticateByName.$post> },
      ) => parseResponse(client.Users.AuthenticateByName.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersAuthenticateWithQuickConnectKey() {
  return ['Users', '/Users/AuthenticateWithQuickConnect', 'POST'] as const
}

export function usePostUsersAuthenticateWithQuickConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Users.AuthenticateWithQuickConnect.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Users.AuthenticateWithQuickConnect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersAuthenticateWithQuickConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Users.AuthenticateWithQuickConnect.$post> },
      ) => parseResponse(client.Users.AuthenticateWithQuickConnect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersForgotPasswordKey() {
  return ['Users', '/Users/ForgotPassword', 'POST'] as const
}

export function usePostUsersForgotPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Users.ForgotPassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersForgotPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Users.ForgotPassword.$post> },
      ) => parseResponse(client.Users.ForgotPassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersForgotPasswordPinKey() {
  return ['Users', '/Users/ForgotPassword/Pin', 'POST'] as const
}

export function usePostUsersForgotPasswordPin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.Pin.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.Users.ForgotPassword.Pin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersForgotPasswordPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Users.ForgotPassword.Pin.$post> },
      ) => parseResponse(client.Users.ForgotPassword.Pin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['Users', '/Users/Me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersNewKey() {
  return ['Users', '/Users/New', 'POST'] as const
}

export function usePostUsersNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.New.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Users.New.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Users.New.$post> }) =>
        parseResponse(client.Users.New.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersPublicKey() {
  return ['Users', '/Users/Public'] as const
}

export function useGetUsersPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.Users)[':userId']['$get']>,
) {
  return ['Users', '/Users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdKey() {
  return ['Users', '/Users/:userId', 'POST'] as const
}

export function usePostUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Users)[':userId']['$post']> },
      ) => parseResponse(client.Users[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['Users', '/Users/:userId', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Users)[':userId']['$delete']> },
      ) => parseResponse(client.Users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdAuthenticateKey() {
  return ['Users', '/Users/:userId/Authenticate', 'POST'] as const
}

export function usePostUsersUserIdAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Authenticate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Authenticate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Users)[':userId']['Authenticate']['$post']> },
      ) => parseResponse(client.Users[':userId'].Authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdConfigurationKey() {
  return ['Users', '/Users/:userId/Configuration', 'POST'] as const
}

export function usePostUsersUserIdConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Configuration']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Users)[':userId']['Configuration']['$post']> },
      ) => parseResponse(client.Users[':userId'].Configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdEasyPasswordKey() {
  return ['Users', '/Users/:userId/EasyPassword', 'POST'] as const
}

export function usePostUsersUserIdEasyPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['EasyPassword']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['EasyPassword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdEasyPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Users)[':userId']['EasyPassword']['$post']> },
      ) => parseResponse(client.Users[':userId'].EasyPassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdFavoriteItemsItemIdKey() {
  return ['Users', '/Users/:userId/FavoriteItems/:itemId', 'POST'] as const
}

export function usePostUsersUserIdFavoriteItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdFavoriteItemsItemIdKey()
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
            (typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$post']
          >
        },
      ) =>
        parseResponse(client.Users[':userId'].FavoriteItems[':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdFavoriteItemsItemIdKey() {
  return ['Users', '/Users/:userId/FavoriteItems/:itemId', 'DELETE'] as const
}

export function useDeleteUsersUserIdFavoriteItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdFavoriteItemsItemIdKey()
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
            (typeof client.Users)[':userId']['FavoriteItems'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(client.Users[':userId'].FavoriteItems[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdGroupingOptionsKey(
  args: InferRequestType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>,
) {
  return ['Users', '/Users/:userId/GroupingOptions', args] as const
}

export function useGetUsersUserIdGroupingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
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
        ? getGetUsersUserIdGroupingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].GroupingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdGroupingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
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
        ? getGetUsersUserIdGroupingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['GroupingOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].GroupingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdImagesImageTypeKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>,
) {
  return ['Users', '/Users/:userId/Images/:imageType', args] as const
}

export function useGetUsersUserIdImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
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
        ? getGetUsersUserIdImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Users[':userId'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdImagesImageType<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
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
        ? getGetUsersUserIdImagesImageTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Users[':userId'].Images[':imageType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdImagesImageTypeKey() {
  return ['Users', '/Users/:userId/Images/:imageType', 'POST'] as const
}

export function usePostUsersUserIdImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$post']>
        },
      ) => parseResponse(client.Users[':userId'].Images[':imageType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdImagesImageTypeKey() {
  return ['Users', '/Users/:userId/Images/:imageType', 'DELETE'] as const
}

export function useDeleteUsersUserIdImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$delete']>
        },
      ) => parseResponse(client.Users[':userId'].Images[':imageType'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadUsersUserIdImagesImageTypeKey() {
  return ['Users', '/Users/:userId/Images/:imageType', 'HEAD'] as const
}

export function useHeadUsersUserIdImagesImageType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadUsersUserIdImagesImageTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType']['$head']>
        },
      ) => parseResponse(client.Users[':userId'].Images[':imageType'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdImagesImageTypeImageIndexKey(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
  >,
) {
  return ['Users', '/Users/:userId/Images/:imageType/:imageIndex', args] as const
}

export function useGetUsersUserIdImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Users[':userId'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdImagesImageTypeImageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdImagesImageTypeImageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Users[':userId'].Images[':imageType'][':imageIndex'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadUsersUserIdImagesImageTypeImageIndexKey() {
  return ['Users', '/Users/:userId/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function useHeadUsersUserIdImagesImageTypeImageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadUsersUserIdImagesImageTypeImageIndexKey()
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
            (typeof client.Users)[':userId']['Images'][':imageType'][':imageIndex']['$head']
          >
        },
      ) =>
        parseResponse(
          client.Users[':userId'].Images[':imageType'][':imageIndex'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdImagesImageTypeIndexKey() {
  return ['Users', '/Users/:userId/Images/:imageType/:index', 'POST'] as const
}

export function usePostUsersUserIdImagesImageTypeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdImagesImageTypeIndexKey()
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
            (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Users[':userId'].Images[':imageType'][':index'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdImagesImageTypeIndexKey() {
  return ['Users', '/Users/:userId/Images/:imageType/:index', 'DELETE'] as const
}

export function useDeleteUsersUserIdImagesImageTypeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdImagesImageTypeIndexKey()
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
            (typeof client.Users)[':userId']['Images'][':imageType'][':index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Users[':userId'].Images[':imageType'][':index'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdItemsKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['$get']>,
) {
  return ['Users', '/Users/:userId/Items', args] as const
}

export function useGetUsersUserIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>
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
        ? getGetUsersUserIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>
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
        ? getGetUsersUserIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdItemsLatestKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/Latest', args] as const
}

export function useGetUsersUserIdItemsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
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
        ? getGetUsersUserIdItemsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.Latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
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
        ? getGetUsersUserIdItemsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.Latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdItemsResumeKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/Resume', args] as const
}

export function useGetUsersUserIdItemsResume<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
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
        ? getGetUsersUserIdItemsResumeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.Resume.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsResume<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
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
        ? getGetUsersUserIdItemsResumeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Resume']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.Resume.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdItemsRootKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Root']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/Root', args] as const
}

export function useGetUsersUserIdItemsRoot<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Root']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
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
        ? getGetUsersUserIdItemsRootKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.Root.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsRoot<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items']['Root']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
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
        ? getGetUsersUserIdItemsRootKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items']['Root']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items.Root.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdItemsItemIdKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/:itemId', args] as const
}

export function useGetUsersUserIdItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
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
        ? getGetUsersUserIdItemsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
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
        ? getGetUsersUserIdItemsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Items[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdItemsItemIdIntrosKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>,
) {
  return ['Users', '/Users/:userId/Items/:itemId/Intros', args] as const
}

export function useGetUsersUserIdItemsItemIdIntros<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>
            >
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
        ? getGetUsersUserIdItemsItemIdIntrosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Users[':userId'].Items[':itemId'].Intros.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsItemIdIntros<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>
            >
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
        ? getGetUsersUserIdItemsItemIdIntrosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Users)[':userId']['Items'][':itemId']['Intros']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Users[':userId'].Items[':itemId'].Intros.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdItemsItemIdLocalTrailersKey(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
  >,
) {
  return ['Users', '/Users/:userId/Items/:itemId/LocalTrailers', args] as const
}

export function useGetUsersUserIdItemsItemIdLocalTrailers<TError = unknown>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdItemsItemIdLocalTrailersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Users[':userId'].Items[':itemId'].LocalTrailers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsItemIdLocalTrailers<TError = unknown>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['LocalTrailers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdItemsItemIdLocalTrailersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Users[':userId'].Items[':itemId'].LocalTrailers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdItemsItemIdRatingKey() {
  return ['Users', '/Users/:userId/Items/:itemId/Rating', 'POST'] as const
}

export function usePostUsersUserIdItemsItemIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdItemsItemIdRatingKey()
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
            (typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$post']
          >
        },
      ) => parseResponse(client.Users[':userId'].Items[':itemId'].Rating.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdItemsItemIdRatingKey() {
  return ['Users', '/Users/:userId/Items/:itemId/Rating', 'DELETE'] as const
}

export function useDeleteUsersUserIdItemsItemIdRating<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdItemsItemIdRatingKey()
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
            (typeof client.Users)[':userId']['Items'][':itemId']['Rating']['$delete']
          >
        },
      ) =>
        parseResponse(client.Users[':userId'].Items[':itemId'].Rating.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdItemsItemIdSpecialFeaturesKey(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
  >,
) {
  return ['Users', '/Users/:userId/Items/:itemId/SpecialFeatures', args] as const
}

export function useGetUsersUserIdItemsItemIdSpecialFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdItemsItemIdSpecialFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Users[':userId'].Items[':itemId'].SpecialFeatures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdItemsItemIdSpecialFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.Users)[':userId']['Items'][':itemId']['SpecialFeatures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdItemsItemIdSpecialFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Users[':userId'].Items[':itemId'].SpecialFeatures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdPasswordKey() {
  return ['Users', '/Users/:userId/Password', 'POST'] as const
}

export function usePostUsersUserIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Users)[':userId']['Password']['$post']> },
      ) => parseResponse(client.Users[':userId'].Password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdPlayedItemsItemIdKey() {
  return ['Users', '/Users/:userId/PlayedItems/:itemId', 'POST'] as const
}

export function usePostUsersUserIdPlayedItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPlayedItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$post']>
        },
      ) => parseResponse(client.Users[':userId'].PlayedItems[':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdPlayedItemsItemIdKey() {
  return ['Users', '/Users/:userId/PlayedItems/:itemId', 'DELETE'] as const
}

export function useDeleteUsersUserIdPlayedItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdPlayedItemsItemIdKey()
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
            (typeof client.Users)[':userId']['PlayedItems'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(client.Users[':userId'].PlayedItems[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdPlayingItemsItemIdKey() {
  return ['Users', '/Users/:userId/PlayingItems/:itemId', 'POST'] as const
}

export function usePostUsersUserIdPlayingItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPlayingItemsItemIdKey()
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
            (typeof client.Users)[':userId']['PlayingItems'][':itemId']['$post']
          >
        },
      ) => parseResponse(client.Users[':userId'].PlayingItems[':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdPlayingItemsItemIdKey() {
  return ['Users', '/Users/:userId/PlayingItems/:itemId', 'DELETE'] as const
}

export function useDeleteUsersUserIdPlayingItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdPlayingItemsItemIdKey()
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
            (typeof client.Users)[':userId']['PlayingItems'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(client.Users[':userId'].PlayingItems[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdPlayingItemsItemIdProgressKey() {
  return ['Users', '/Users/:userId/PlayingItems/:itemId/Progress', 'POST'] as const
}

export function usePostUsersUserIdPlayingItemsItemIdProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPlayingItemsItemIdProgressKey()
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
            (typeof client.Users)[':userId']['PlayingItems'][':itemId']['Progress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Users[':userId'].PlayingItems[':itemId'].Progress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdPolicyKey() {
  return ['Users', '/Users/:userId/Policy', 'POST'] as const
}

export function usePostUsersUserIdPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Policy']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Users)[':userId']['Policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Users)[':userId']['Policy']['$post']> },
      ) => parseResponse(client.Users[':userId'].Policy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdSuggestionsKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Suggestions']['$get']>,
) {
  return ['Users', '/Users/:userId/Suggestions', args] as const
}

export function useGetUsersUserIdSuggestions<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Suggestions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
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
        ? getGetUsersUserIdSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdSuggestions<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Suggestions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
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
        ? getGetUsersUserIdSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Suggestions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdViewsKey(
  args: InferRequestType<(typeof client.Users)[':userId']['Views']['$get']>,
) {
  return ['Users', '/Users/:userId/Views', args] as const
}

export function useGetUsersUserIdViews<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>
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
        ? getGetUsersUserIdViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Views.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdViews<TError = unknown>(
  args: InferRequestType<(typeof client.Users)[':userId']['Views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>
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
        ? getGetUsersUserIdViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users[':userId'].Views.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosActiveEncodingsKey() {
  return ['Videos', '/Videos/ActiveEncodings', 'DELETE'] as const
}

export function useDeleteVideosActiveEncodings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Videos.ActiveEncodings.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Videos.ActiveEncodings.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosActiveEncodingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Videos.ActiveEncodings.$delete> },
      ) => parseResponse(client.Videos.ActiveEncodings.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVideosMergeVersionsKey() {
  return ['Videos', '/Videos/MergeVersions', 'POST'] as const
}

export function usePostVideosMergeVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Videos.MergeVersions.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.Videos.MergeVersions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosMergeVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.Videos.MergeVersions.$post> },
      ) => parseResponse(client.Videos.MergeVersions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosItemIdAdditionalPartsKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/AdditionalParts', args] as const
}

export function useGetVideosItemIdAdditionalParts<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
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
        ? getGetVideosItemIdAdditionalPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId'].AdditionalParts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdAdditionalParts<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
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
        ? getGetVideosItemIdAdditionalPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId'].AdditionalParts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosItemIdAlternateSourcesKey() {
  return ['Videos', '/Videos/:itemId/AlternateSources', 'DELETE'] as const
}

export function useDeleteVideosItemIdAlternateSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosItemIdAlternateSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>
        },
      ) => parseResponse(client.Videos[':itemId'].AlternateSources.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVideosItemIdSubtitlesKey() {
  return ['Videos', '/Videos/:itemId/Subtitles', 'POST'] as const
}

export function usePostVideosItemIdSubtitles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosItemIdSubtitlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Videos)[':itemId']['Subtitles']['$post']> },
      ) => parseResponse(client.Videos[':itemId'].Subtitles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosItemIdSubtitlesIndexKey() {
  return ['Videos', '/Videos/:itemId/Subtitles/:index', 'DELETE'] as const
}

export function useDeleteVideosItemIdSubtitlesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosItemIdSubtitlesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>
        },
      ) => parseResponse(client.Videos[':itemId'].Subtitles[':index'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosItemIdHlsPlaylistIdStreamM3u8Key(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/hls/:playlistId/stream.m3u8', args] as const
}

export function useGetVideosItemIdHlsPlaylistIdStreamM3u8<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdHlsPlaylistIdStreamM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'].hls[':playlistId']['stream.m3u8'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdHlsPlaylistIdStreamM3u8<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId']['stream.m3u8']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdHlsPlaylistIdStreamM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'].hls[':playlistId']['stream.m3u8'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/hls/:playlistId/:segmentId.{segmentContainer}', args] as const
}

export function useGetVideosItemIdHlsPlaylistIdSegmentIdSegmentContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'].hls[':playlistId'][':segmentId.{segmentContainer}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdHlsPlaylistIdSegmentIdSegmentContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls'][':playlistId'][':segmentId.{segmentContainer}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'].hls[':playlistId'][':segmentId.{segmentContainer}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdHls1PlaylistIdSegmentIdContainerKey(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/hls1/:playlistId/:segmentId.{container}', args] as const
}

export function useGetVideosItemIdHls1PlaylistIdSegmentIdContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdHls1PlaylistIdSegmentIdContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'].hls1[':playlistId'][':segmentId.{container}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdHls1PlaylistIdSegmentIdContainer<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['hls1'][':playlistId'][':segmentId.{container}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdHls1PlaylistIdSegmentIdContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'].hls1[':playlistId'][':segmentId.{container}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdLiveM3u8Key(
  args: InferRequestType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/live.m3u8', args] as const
}

export function useGetVideosItemIdLiveM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
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
        ? getGetVideosItemIdLiveM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId']['live.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdLiveM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
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
        ? getGetVideosItemIdLiveM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['live.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId']['live.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdMainM3u8Key(
  args: InferRequestType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/main.m3u8', args] as const
}

export function useGetVideosItemIdMainM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
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
        ? getGetVideosItemIdMainM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId']['main.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdMainM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
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
        ? getGetVideosItemIdMainM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['main.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId']['main.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdMasterM3u8Key(
  args: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/master.m3u8', args] as const
}

export function useGetVideosItemIdMasterM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
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
        ? getGetVideosItemIdMasterM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId']['master.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdMasterM3u8<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
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
        ? getGetVideosItemIdMasterM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId']['master.m3u8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadVideosItemIdMasterM3u8Key() {
  return ['Videos', '/Videos/:itemId/master.m3u8', 'HEAD'] as const
}

export function useHeadVideosItemIdMasterM3u8<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadVideosItemIdMasterM3u8Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Videos)[':itemId']['master.m3u8']['$head']> },
      ) => parseResponse(client.Videos[':itemId']['master.m3u8'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosItemIdStreamKey(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/stream', args] as const
}

export function useGetVideosItemIdStream<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
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
        ? getGetVideosItemIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId'].stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdStream<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
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
        ? getGetVideosItemIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Videos[':itemId'].stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadVideosItemIdStreamKey() {
  return ['Videos', '/Videos/:itemId/stream', 'HEAD'] as const
}

export function useHeadVideosItemIdStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Videos)[':itemId']['stream']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadVideosItemIdStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$head']> },
      ) => parseResponse(client.Videos[':itemId'].stream.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatKey(
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

export function useGetVideosItemIdMediaSourceIdSubtitlesIndexStreamFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['Stream.{format}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdMediaSourceIdSubtitlesIndexStreamFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['Stream.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['Stream.{format}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Key(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
) {
  return ['Videos', '/Videos/:itemId/:mediaSourceId/Subtitles/:index/subtitles.m3u8', args] as const
}

export function useGetVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['subtitles.m3u8'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['subtitles.m3u8'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatKey(
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

export function useGetVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index'][':startPositionTicks'][
            'Stream.{format}'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index'][':startPositionTicks']['Stream.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index'][':startPositionTicks'][
            'Stream.{format}'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideosItemIdStreamContainerKey(
  args: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>,
) {
  return ['Videos', '/Videos/:itemId/:stream.{container}', args] as const
}

export function useGetVideosItemIdStreamContainer<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
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
        ? getGetVideosItemIdStreamContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Videos[':itemId'][':stream.{container}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosItemIdStreamContainer<TError = unknown>(
  args: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
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
        ? getGetVideosItemIdStreamContainerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Videos[':itemId'][':stream.{container}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadVideosItemIdStreamContainerKey() {
  return ['Videos', '/Videos/:itemId/:stream.{container}', 'HEAD'] as const
}

export function useHeadVideosItemIdStreamContainer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadVideosItemIdStreamContainerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Videos)[':itemId'][':stream.{container}']['$head']>
        },
      ) => parseResponse(client.Videos[':itemId'][':stream.{container}'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdMediaSourceIdAttachmentsIndexKey(
  args: InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
) {
  return ['Videos', '/Videos/:videoId/:mediaSourceId/Attachments/:index', args] as const
}

export function useGetVideosVideoIdMediaSourceIdAttachmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosVideoIdMediaSourceIdAttachmentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':videoId'][':mediaSourceId'].Attachments[':index'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdMediaSourceIdAttachmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVideosVideoIdMediaSourceIdAttachmentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Videos[':videoId'][':mediaSourceId'].Attachments[':index'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetYearsKey(args: InferRequestType<typeof client.Years.$get>) {
  return ['Years', '/Years', args] as const
}

export function useGetYears<TError = unknown>(
  args: InferRequestType<typeof client.Years.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetYearsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Years.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetYears<TError = unknown>(
  args: InferRequestType<typeof client.Years.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetYearsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Years.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetYearsYearKey(args: InferRequestType<(typeof client.Years)[':year']['$get']>) {
  return ['Years', '/Years/:year', args] as const
}

export function useGetYearsYear<TError = unknown>(
  args: InferRequestType<(typeof client.Years)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetYearsYearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Years[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYearsYear<TError = unknown>(
  args: InferRequestType<(typeof client.Years)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetYearsYearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Years[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebConfigurationPageKey(
  args: InferRequestType<typeof client.web.ConfigurationPage.$get>,
) {
  return ['web', '/web/ConfigurationPage', args] as const
}

export function useGetWebConfigurationPage<TError = unknown>(
  args: InferRequestType<typeof client.web.ConfigurationPage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
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
        ? getGetWebConfigurationPageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web.ConfigurationPage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebConfigurationPage<TError = unknown>(
  args: InferRequestType<typeof client.web.ConfigurationPage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
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
        ? getGetWebConfigurationPageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web.ConfigurationPage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebConfigurationPagesKey(
  args: InferRequestType<typeof client.web.ConfigurationPages.$get>,
) {
  return ['web', '/web/ConfigurationPages', args] as const
}

export function useGetWebConfigurationPages<TError = unknown>(
  args: InferRequestType<typeof client.web.ConfigurationPages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
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
        ? getGetWebConfigurationPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web.ConfigurationPages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebConfigurationPages<TError = unknown>(
  args: InferRequestType<typeof client.web.ConfigurationPages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
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
        ? getGetWebConfigurationPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web.ConfigurationPages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
