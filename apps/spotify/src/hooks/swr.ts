import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlbumsKey() {
  return ['albums'] as const
}

export function getArtistsKey() {
  return ['artists'] as const
}

export function getAudioAnalysisKey() {
  return ['audio-analysis'] as const
}

export function getAudioFeaturesKey() {
  return ['audio-features'] as const
}

export function getAudiobooksKey() {
  return ['audiobooks'] as const
}

export function getBrowseKey() {
  return ['browse'] as const
}

export function getChaptersKey() {
  return ['chapters'] as const
}

export function getEpisodesKey() {
  return ['episodes'] as const
}

export function getMarketsKey() {
  return ['markets'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getPlaylistsKey() {
  return ['playlists'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getShowsKey() {
  return ['shows'] as const
}

export function getTracksKey() {
  return ['tracks'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetAlbumsIdKey(args: InferRequestType<(typeof client.albums)[':id']['$get']>) {
  return ['albums', '/albums/:id', args] as const
}

export function useGetAlbumsId<TError = unknown>(
  args: InferRequestType<(typeof client.albums)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlbumsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.albums[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlbumsId<TError = unknown>(
  args: InferRequestType<(typeof client.albums)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlbumsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.albums[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlbumsKey(args: InferRequestType<typeof client.albums.$get>) {
  return ['albums', '/albums', args] as const
}

export function useGetAlbums<TError = unknown>(
  args: InferRequestType<typeof client.albums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlbumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.albums.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAlbums<TError = unknown>(
  args: InferRequestType<typeof client.albums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlbumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.albums.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAlbumsIdTracksKey(
  args: InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
) {
  return ['albums', '/albums/:id/tracks', args] as const
}

export function useGetAlbumsIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlbumsIdTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.albums[':id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlbumsIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlbumsIdTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.albums[':id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsIdKey(args: InferRequestType<(typeof client.artists)[':id']['$get']>) {
  return ['artists', '/artists/:id', args] as const
}

export function useGetArtistsId<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArtistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsId<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArtistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsKey(args: InferRequestType<typeof client.artists.$get>) {
  return ['artists', '/artists', args] as const
}

export function useGetArtists<TError = unknown>(
  args: InferRequestType<typeof client.artists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
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
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.artists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetArtists<TError = unknown>(
  args: InferRequestType<typeof client.artists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
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
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.artists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetArtistsIdAlbumsKey(
  args: InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
) {
  return ['artists', '/artists/:id/albums', args] as const
}

export function useGetArtistsIdAlbums<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
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
        ? getGetArtistsIdAlbumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id'].albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsIdAlbums<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
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
        ? getGetArtistsIdAlbumsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id'].albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsIdTopTracksKey(
  args: InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
) {
  return ['artists', '/artists/:id/top-tracks', args] as const
}

export function useGetArtistsIdTopTracks<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
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
        ? getGetArtistsIdTopTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id']['top-tracks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsIdTopTracks<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
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
        ? getGetArtistsIdTopTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id']['top-tracks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArtistsIdRelatedArtistsKey(
  args: InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
) {
  return ['artists', '/artists/:id/related-artists', args] as const
}

export function useGetArtistsIdRelatedArtists<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
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
        ? getGetArtistsIdRelatedArtistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id']['related-artists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArtistsIdRelatedArtists<TError = unknown>(
  args: InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
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
        ? getGetArtistsIdRelatedArtistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.artists[':id']['related-artists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdKey(args: InferRequestType<(typeof client.shows)[':id']['$get']>) {
  return ['shows', '/shows/:id', args] as const
}

export function useGetShowsId<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsId<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsKey(args: InferRequestType<typeof client.shows.$get>) {
  return ['shows', '/shows', args] as const
}

export function useGetShows<TError = unknown>(
  args: InferRequestType<typeof client.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.shows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetShows<TError = unknown>(
  args: InferRequestType<typeof client.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.shows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetShowsIdEpisodesKey(
  args: InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
) {
  return ['shows', '/shows/:id/episodes', args] as const
}

export function useGetShowsIdEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
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
        ? getGetShowsIdEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdEpisodes<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
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
        ? getGetShowsIdEpisodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesIdKey(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
) {
  return ['episodes', '/episodes/:id', args] as const
}

export function useGetEpisodesId<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodesId<TError = unknown>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episodes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpisodesKey(args: InferRequestType<typeof client.episodes.$get>) {
  return ['episodes', '/episodes', args] as const
}

export function useGetEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.episodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.episodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAudiobooksIdKey(
  args: InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
) {
  return ['audiobooks', '/audiobooks/:id', args] as const
}

export function useGetAudiobooksId<TError = unknown>(
  args: InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiobooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiobooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiobooksId<TError = unknown>(
  args: InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiobooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiobooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudiobooksKey(args: InferRequestType<typeof client.audiobooks.$get>) {
  return ['audiobooks', '/audiobooks', args] as const
}

export function useGetAudiobooks<TError = unknown>(
  args: InferRequestType<typeof client.audiobooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiobooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiobooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiobooks<TError = unknown>(
  args: InferRequestType<typeof client.audiobooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiobooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiobooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudiobooksIdChaptersKey(
  args: InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
) {
  return ['audiobooks', '/audiobooks/:id/chapters', args] as const
}

export function useGetAudiobooksIdChapters<TError = unknown>(
  args: InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
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
        ? getGetAudiobooksIdChaptersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiobooks[':id'].chapters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiobooksIdChapters<TError = unknown>(
  args: InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
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
        ? getGetAudiobooksIdChaptersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiobooks[':id'].chapters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeAudiobooksKey(args: InferRequestType<typeof client.me.audiobooks.$get>) {
  return ['me', '/me/audiobooks', args] as const
}

export function useGetMeAudiobooks<TError = unknown>(
  args: InferRequestType<typeof client.me.audiobooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAudiobooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.audiobooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAudiobooks<TError = unknown>(
  args: InferRequestType<typeof client.me.audiobooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAudiobooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.audiobooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeAudiobooksKey() {
  return ['me', '/me/audiobooks', 'PUT'] as const
}

export function usePutMeAudiobooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.audiobooks.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeAudiobooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.audiobooks.$put> }) =>
        parseResponse(client.me.audiobooks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeAudiobooksKey() {
  return ['me', '/me/audiobooks', 'DELETE'] as const
}

export function useDeleteMeAudiobooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.audiobooks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeAudiobooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.audiobooks.$delete> }) =>
        parseResponse(client.me.audiobooks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAudiobooksContainsKey(
  args: InferRequestType<typeof client.me.audiobooks.contains.$get>,
) {
  return ['me', '/me/audiobooks/contains', args] as const
}

export function useGetMeAudiobooksContains<TError = unknown>(
  args: InferRequestType<typeof client.me.audiobooks.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeAudiobooksContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.audiobooks.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAudiobooksContains<TError = unknown>(
  args: InferRequestType<typeof client.me.audiobooks.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeAudiobooksContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.audiobooks.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChaptersIdKey(
  args: InferRequestType<(typeof client.chapters)[':id']['$get']>,
) {
  return ['chapters', '/chapters/:id', args] as const
}

export function useGetChaptersId<TError = unknown>(
  args: InferRequestType<(typeof client.chapters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChaptersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chapters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChaptersId<TError = unknown>(
  args: InferRequestType<(typeof client.chapters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChaptersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chapters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChaptersKey(args: InferRequestType<typeof client.chapters.$get>) {
  return ['chapters', '/chapters', args] as const
}

export function useGetChapters<TError = unknown>(
  args: InferRequestType<typeof client.chapters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChaptersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chapters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChapters<TError = unknown>(
  args: InferRequestType<typeof client.chapters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChaptersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chapters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTracksIdKey(args: InferRequestType<(typeof client.tracks)[':id']['$get']>) {
  return ['tracks', '/tracks/:id', args] as const
}

export function useGetTracksId<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksId<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracksKey(args: InferRequestType<typeof client.tracks.$get>) {
  return ['tracks', '/tracks', args] as const
}

export function useGetTracks<TError = unknown>(
  args: InferRequestType<typeof client.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tracks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTracks<TError = unknown>(
  args: InferRequestType<typeof client.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tracks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetPlaylistsPlaylistIdKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id', args] as const
}

export function useGetPlaylistsPlaylistId<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
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
        ? getGetPlaylistsPlaylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistId<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
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
        ? getGetPlaylistsPlaylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlaylistsPlaylistIdKey() {
  return ['playlists', '/playlists/:playlist_id', 'PUT'] as const
}

export function usePutPlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['$put']> },
      ) => parseResponse(client.playlists[':playlist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdTracksKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/tracks', args] as const
}

export function useGetPlaylistsPlaylistIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
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
        ? getGetPlaylistsPlaylistIdTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
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
        ? getGetPlaylistsPlaylistIdTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlaylistsPlaylistIdTracksKey() {
  return ['playlists', '/playlists/:playlist_id/tracks', 'PUT'] as const
}

export function usePutPlaylistsPlaylistIdTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsPlaylistIdTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$put']> },
      ) => parseResponse(client.playlists[':playlist_id'].tracks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlaylistsPlaylistIdTracksKey() {
  return ['playlists', '/playlists/:playlist_id/tracks', 'POST'] as const
}

export function usePostPlaylistsPlaylistIdTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaylistsPlaylistIdTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$post']> },
      ) => parseResponse(client.playlists[':playlist_id'].tracks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlaylistsPlaylistIdTracksKey() {
  return ['playlists', '/playlists/:playlist_id/tracks', 'DELETE'] as const
}

export function useDeletePlaylistsPlaylistIdTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlaylistsPlaylistIdTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>
        },
      ) => parseResponse(client.playlists[':playlist_id'].tracks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdItemsKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/items', args] as const
}

export function useGetPlaylistsPlaylistIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
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
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
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
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlaylistsPlaylistIdItemsKey() {
  return ['playlists', '/playlists/:playlist_id/items', 'PUT'] as const
}

export function usePutPlaylistsPlaylistIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsPlaylistIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$put']> },
      ) => parseResponse(client.playlists[':playlist_id'].items.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlaylistsPlaylistIdItemsKey() {
  return ['playlists', '/playlists/:playlist_id/items', 'POST'] as const
}

export function usePostPlaylistsPlaylistIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$post']>
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
        }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$post']> },
      ) => parseResponse(client.playlists[':playlist_id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlaylistsPlaylistIdItemsKey() {
  return ['playlists', '/playlists/:playlist_id/items', 'DELETE'] as const
}

export function useDeletePlaylistsPlaylistIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$delete']>
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
        }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$delete']> },
      ) => parseResponse(client.playlists[':playlist_id'].items.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePlaylistsKey(args: InferRequestType<typeof client.me.playlists.$get>) {
  return ['me', '/me/playlists', args] as const
}

export function useGetMePlaylists<TError = unknown>(
  args: InferRequestType<typeof client.me.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlaylists<TError = unknown>(
  args: InferRequestType<typeof client.me.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMePlaylistsKey() {
  return ['me', '/me/playlists', 'POST'] as const
}

export function usePostMePlaylists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.playlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMePlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.playlists.$post> }) =>
        parseResponse(client.me.playlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMeLibraryKey() {
  return ['me', '/me/library', 'PUT'] as const
}

export function usePutMeLibrary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.library.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeLibraryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.library.$put> }) =>
        parseResponse(client.me.library.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeLibraryKey() {
  return ['me', '/me/library', 'DELETE'] as const
}

export function useDeleteMeLibrary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.library.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeLibraryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.library.$delete> }) =>
        parseResponse(client.me.library.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeLibraryContainsKey(
  args: InferRequestType<typeof client.me.library.contains.$get>,
) {
  return ['me', '/me/library/contains', args] as const
}

export function useGetMeLibraryContains<TError = unknown>(
  args: InferRequestType<typeof client.me.library.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeLibraryContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.library.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeLibraryContains<TError = unknown>(
  args: InferRequestType<typeof client.me.library.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeLibraryContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.library.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeAlbumsKey(args: InferRequestType<typeof client.me.albums.$get>) {
  return ['me', '/me/albums', args] as const
}

export function useGetMeAlbums<TError = unknown>(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAlbumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAlbums<TError = unknown>(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeAlbumsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeAlbumsKey() {
  return ['me', '/me/albums', 'PUT'] as const
}

export function usePutMeAlbums<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.albums.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeAlbumsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.albums.$put> }) =>
        parseResponse(client.me.albums.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeAlbumsKey() {
  return ['me', '/me/albums', 'DELETE'] as const
}

export function useDeleteMeAlbums<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.albums.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeAlbumsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.albums.$delete> }) =>
        parseResponse(client.me.albums.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeAlbumsContainsKey(
  args: InferRequestType<typeof client.me.albums.contains.$get>,
) {
  return ['me', '/me/albums/contains', args] as const
}

export function useGetMeAlbumsContains<TError = unknown>(
  args: InferRequestType<typeof client.me.albums.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeAlbumsContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeAlbumsContains<TError = unknown>(
  args: InferRequestType<typeof client.me.albums.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeAlbumsContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.albums.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTracksKey(args: InferRequestType<typeof client.me.tracks.$get>) {
  return ['me', '/me/tracks', args] as const
}

export function useGetMeTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeTracksKey() {
  return ['me', '/me/tracks', 'PUT'] as const
}

export function usePutMeTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.tracks.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.tracks.$put> }) =>
        parseResponse(client.me.tracks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeTracksKey() {
  return ['me', '/me/tracks', 'DELETE'] as const
}

export function useDeleteMeTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.tracks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.tracks.$delete> }) =>
        parseResponse(client.me.tracks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeTracksContainsKey(
  args: InferRequestType<typeof client.me.tracks.contains.$get>,
) {
  return ['me', '/me/tracks/contains', args] as const
}

export function useGetMeTracksContains<TError = unknown>(
  args: InferRequestType<typeof client.me.tracks.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeTracksContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTracksContains<TError = unknown>(
  args: InferRequestType<typeof client.me.tracks.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeTracksContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeEpisodesKey(args: InferRequestType<typeof client.me.episodes.$get>) {
  return ['me', '/me/episodes', args] as const
}

export function useGetMeEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.me.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeEpisodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeEpisodes<TError = unknown>(
  args: InferRequestType<typeof client.me.episodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeEpisodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.episodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeEpisodesKey() {
  return ['me', '/me/episodes', 'PUT'] as const
}

export function usePutMeEpisodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.episodes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeEpisodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.episodes.$put> }) =>
        parseResponse(client.me.episodes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeEpisodesKey() {
  return ['me', '/me/episodes', 'DELETE'] as const
}

export function useDeleteMeEpisodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.me.episodes.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeEpisodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.episodes.$delete> }) =>
        parseResponse(client.me.episodes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeEpisodesContainsKey(
  args: InferRequestType<typeof client.me.episodes.contains.$get>,
) {
  return ['me', '/me/episodes/contains', args] as const
}

export function useGetMeEpisodesContains<TError = unknown>(
  args: InferRequestType<typeof client.me.episodes.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeEpisodesContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.episodes.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeEpisodesContains<TError = unknown>(
  args: InferRequestType<typeof client.me.episodes.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeEpisodesContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.episodes.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeShowsKey(args: InferRequestType<typeof client.me.shows.$get>) {
  return ['me', '/me/shows', args] as const
}

export function useGetMeShows<TError = unknown>(
  args: InferRequestType<typeof client.me.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.shows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeShows<TError = unknown>(
  args: InferRequestType<typeof client.me.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.shows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutMeShowsKey() {
  return ['me', '/me/shows', 'PUT'] as const
}

export function usePutMeShows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.shows.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeShowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.shows.$put> }) =>
        parseResponse(client.me.shows.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeShowsKey() {
  return ['me', '/me/shows', 'DELETE'] as const
}

export function useDeleteMeShows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.shows.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeShowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.shows.$delete> }) =>
        parseResponse(client.me.shows.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeShowsContainsKey(
  args: InferRequestType<typeof client.me.shows.contains.$get>,
) {
  return ['me', '/me/shows/contains', args] as const
}

export function useGetMeShowsContains<TError = unknown>(
  args: InferRequestType<typeof client.me.shows.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeShowsContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.shows.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeShowsContains<TError = unknown>(
  args: InferRequestType<typeof client.me.shows.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeShowsContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.shows.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPlaylistsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
) {
  return ['users', '/users/:user_id/playlists', args] as const
}

export function useGetUsersUserIdPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
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
        ? getGetUsersUserIdPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
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
        ? getGetUsersUserIdPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdPlaylistsKey() {
  return ['users', '/users/:user_id/playlists', 'POST'] as const
}

export function usePostUsersUserIdPlaylists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['playlists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdPlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['playlists']['$post']> },
      ) => parseResponse(client.users[':user_id'].playlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPlaylistsPlaylistIdFollowersKey() {
  return ['playlists', '/playlists/:playlist_id/followers', 'PUT'] as const
}

export function usePutPlaylistsPlaylistIdFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsPlaylistIdFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>
        },
      ) => parseResponse(client.playlists[':playlist_id'].followers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlaylistsPlaylistIdFollowersKey() {
  return ['playlists', '/playlists/:playlist_id/followers', 'DELETE'] as const
}

export function useDeletePlaylistsPlaylistIdFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlaylistsPlaylistIdFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>
        },
      ) => parseResponse(client.playlists[':playlist_id'].followers.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowseFeaturedPlaylistsKey(
  args: InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
) {
  return ['browse', '/browse/featured-playlists', args] as const
}

export function useGetBrowseFeaturedPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
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
        ? getGetBrowseFeaturedPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse['featured-playlists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowseFeaturedPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
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
        ? getGetBrowseFeaturedPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse['featured-playlists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowseCategoriesKey(
  args: InferRequestType<typeof client.browse.categories.$get>,
) {
  return ['browse', '/browse/categories', args] as const
}

export function useGetBrowseCategories<TError = unknown>(
  args: InferRequestType<typeof client.browse.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBrowseCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowseCategories<TError = unknown>(
  args: InferRequestType<typeof client.browse.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBrowseCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowseCategoriesCategoryIdKey(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
) {
  return ['browse', '/browse/categories/:category_id', args] as const
}

export function useGetBrowseCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
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
        ? getGetBrowseCategoriesCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse.categories[':category_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowseCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
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
        ? getGetBrowseCategoriesCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse.categories[':category_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowseCategoriesCategoryIdPlaylistsKey(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>,
) {
  return ['browse', '/browse/categories/:category_id/playlists', args] as const
}

export function useGetBrowseCategoriesCategoryIdPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
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
        ? getGetBrowseCategoriesCategoryIdPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browse.categories[':category_id'].playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowseCategoriesCategoryIdPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
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
        ? getGetBrowseCategoriesCategoryIdPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.browse.categories[':category_id'].playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdImagesKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/images', args] as const
}

export function useGetPlaylistsPlaylistIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
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
        ? getGetPlaylistsPlaylistIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
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
        ? getGetPlaylistsPlaylistIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlaylistsPlaylistIdImagesKey() {
  return ['playlists', '/playlists/:playlist_id/images', 'PUT'] as const
}

export function usePutPlaylistsPlaylistIdImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsPlaylistIdImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$put']> },
      ) => parseResponse(client.playlists[':playlist_id'].images.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrowseNewReleasesKey(
  args: InferRequestType<(typeof client.browse)['new-releases']['$get']>,
) {
  return ['browse', '/browse/new-releases', args] as const
}

export function useGetBrowseNewReleases<TError = unknown>(
  args: InferRequestType<(typeof client.browse)['new-releases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBrowseNewReleasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse['new-releases'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowseNewReleases<TError = unknown>(
  args: InferRequestType<(typeof client.browse)['new-releases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBrowseNewReleasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browse['new-releases'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowingKey(args: InferRequestType<typeof client.me.following.$get>) {
  return ['me', '/me/following', args] as const
}

export function useGetMeFollowing<TError = unknown>(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowing<TError = unknown>(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeFollowingKey() {
  return ['me', '/me/following', 'PUT'] as const
}

export function usePutMeFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.following.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.following.$put> }) =>
        parseResponse(client.me.following.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeFollowingKey() {
  return ['me', '/me/following', 'DELETE'] as const
}

export function useDeleteMeFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.following.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.following.$delete> }) =>
        parseResponse(client.me.following.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeFollowingContainsKey(
  args: InferRequestType<typeof client.me.following.contains.$get>,
) {
  return ['me', '/me/following/contains', args] as const
}

export function useGetMeFollowingContains<TError = unknown>(
  args: InferRequestType<typeof client.me.following.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeFollowingContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowingContains<TError = unknown>(
  args: InferRequestType<typeof client.me.following.contains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeFollowingContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.following.contains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdFollowersContainsKey(
  args: InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
) {
  return ['playlists', '/playlists/:playlist_id/followers/contains', args] as const
}

export function useGetPlaylistsPlaylistIdFollowersContains<TError = unknown>(
  args: InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
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
        ? getGetPlaylistsPlaylistIdFollowersContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.playlists[':playlist_id'].followers.contains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdFollowersContains<TError = unknown>(
  args: InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
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
        ? getGetPlaylistsPlaylistIdFollowersContainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.playlists[':playlist_id'].followers.contains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAudioFeaturesKey(
  args: InferRequestType<(typeof client)['audio-features']['$get']>,
) {
  return ['audio-features', '/audio-features', args] as const
}

export function useGetAudioFeatures<TError = unknown>(
  args: InferRequestType<(typeof client)['audio-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudioFeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audio-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioFeatures<TError = unknown>(
  args: InferRequestType<(typeof client)['audio-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudioFeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audio-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudioFeaturesIdKey(
  args: InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
) {
  return ['audio-features', '/audio-features/:id', args] as const
}

export function useGetAudioFeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
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
        ? getGetAudioFeaturesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audio-features'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioFeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
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
        ? getGetAudioFeaturesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audio-features'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudioAnalysisIdKey(
  args: InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
) {
  return ['audio-analysis', '/audio-analysis/:id', args] as const
}

export function useGetAudioAnalysisId<TError = unknown>(
  args: InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
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
        ? getGetAudioAnalysisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audio-analysis'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioAnalysisId<TError = unknown>(
  args: InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
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
        ? getGetAudioAnalysisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audio-analysis'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecommendationsKey(
  args: InferRequestType<typeof client.recommendations.$get>,
) {
  return ['recommendations', '/recommendations', args] as const
}

export function useGetRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecommendationsAvailableGenreSeedsKey() {
  return ['recommendations', '/recommendations/available-genre-seeds'] as const
}

export function useGetRecommendationsAvailableGenreSeeds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
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
        ? getGetRecommendationsAvailableGenreSeedsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.recommendations['available-genre-seeds'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecommendationsAvailableGenreSeeds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
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
        ? getGetRecommendationsAvailableGenreSeedsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.recommendations['available-genre-seeds'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMePlayerKey(args: InferRequestType<typeof client.me.player.$get>) {
  return ['me', '/me/player', args] as const
}

export function useGetMePlayer<TError = unknown>(
  args: InferRequestType<typeof client.me.player.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlayerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlayer<TError = unknown>(
  args: InferRequestType<typeof client.me.player.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlayerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMePlayerKey() {
  return ['me', '/me/player', 'PUT'] as const
}

export function usePutMePlayer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.$put> }) =>
        parseResponse(client.me.player.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePlayerDevicesKey() {
  return ['me', '/me/player/devices'] as const
}

export function useGetMePlayerDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlayerDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player.devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlayerDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlayerDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player.devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePlayerCurrentlyPlayingKey(
  args: InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
) {
  return ['me', '/me/player/currently-playing', args] as const
}

export function useGetMePlayerCurrentlyPlaying<TError = unknown>(
  args: InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
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
        ? getGetMePlayerCurrentlyPlayingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player['currently-playing'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlayerCurrentlyPlaying<TError = unknown>(
  args: InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
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
        ? getGetMePlayerCurrentlyPlayingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player['currently-playing'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMePlayerPlayKey() {
  return ['me', '/me/player/play', 'PUT'] as const
}

export function usePutMePlayerPlay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.play.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.play.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerPlayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.play.$put> }) =>
        parseResponse(client.me.player.play.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePlayerPauseKey() {
  return ['me', '/me/player/pause', 'PUT'] as const
}

export function usePutMePlayerPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.pause.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.pause.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.pause.$put> }) =>
        parseResponse(client.me.player.pause.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMePlayerNextKey() {
  return ['me', '/me/player/next', 'POST'] as const
}

export function usePostMePlayerNext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.next.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.next.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMePlayerNextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.next.$post> }) =>
        parseResponse(client.me.player.next.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMePlayerPreviousKey() {
  return ['me', '/me/player/previous', 'POST'] as const
}

export function usePostMePlayerPrevious<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.player.previous.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.previous.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMePlayerPreviousKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.previous.$post> }) =>
        parseResponse(client.me.player.previous.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePlayerSeekKey() {
  return ['me', '/me/player/seek', 'PUT'] as const
}

export function usePutMePlayerSeek<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.seek.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.seek.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerSeekKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.seek.$put> }) =>
        parseResponse(client.me.player.seek.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePlayerRepeatKey() {
  return ['me', '/me/player/repeat', 'PUT'] as const
}

export function usePutMePlayerRepeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.repeat.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.repeat.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerRepeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.repeat.$put> }) =>
        parseResponse(client.me.player.repeat.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePlayerVolumeKey() {
  return ['me', '/me/player/volume', 'PUT'] as const
}

export function usePutMePlayerVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.volume.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.volume.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.volume.$put> }) =>
        parseResponse(client.me.player.volume.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMePlayerShuffleKey() {
  return ['me', '/me/player/shuffle', 'PUT'] as const
}

export function usePutMePlayerShuffle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.shuffle.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.shuffle.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePlayerShuffleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.shuffle.$put> }) =>
        parseResponse(client.me.player.shuffle.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMePlayerRecentlyPlayedKey(
  args: InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
) {
  return ['me', '/me/player/recently-played', args] as const
}

export function useGetMePlayerRecentlyPlayed<TError = unknown>(
  args: InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
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
        ? getGetMePlayerRecentlyPlayedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player['recently-played'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlayerRecentlyPlayed<TError = unknown>(
  args: InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
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
        ? getGetMePlayerRecentlyPlayedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player['recently-played'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePlayerQueueKey() {
  return ['me', '/me/player/queue'] as const
}

export function useGetMePlayerQueue<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlayerQueueKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player.queue.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlayerQueue<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlayerQueueKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.player.queue.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMePlayerQueueKey() {
  return ['me', '/me/player/queue', 'POST'] as const
}

export function usePostMePlayerQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.player.queue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMePlayerQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.player.queue.$post> }) =>
        parseResponse(client.me.player.queue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketsKey() {
  return ['markets', '/markets'] as const
}

export function useGetMarkets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.markets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarkets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.markets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTopArtistsKey(args: InferRequestType<typeof client.me.top.artists.$get>) {
  return ['me', '/me/top/artists', args] as const
}

export function useGetMeTopArtists<TError = unknown>(
  args: InferRequestType<typeof client.me.top.artists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTopArtistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.top.artists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTopArtists<TError = unknown>(
  args: InferRequestType<typeof client.me.top.artists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTopArtistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.top.artists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTopTracksKey(args: InferRequestType<typeof client.me.top.tracks.$get>) {
  return ['me', '/me/top/tracks', args] as const
}

export function useGetMeTopTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.top.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTopTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.top.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTopTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.top.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTopTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.top.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
