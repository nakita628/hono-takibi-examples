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

export function getAlbumsIdQueryKey(args: InferRequestType<(typeof client.albums)[':id']['$get']>) {
  return ['albums', '/albums/:id', args] as const
}

export function getAlbumsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.albums)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdQueryKey>
  >({
    queryKey: getAlbumsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.albums[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.albums)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlbumsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlbumsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAlbumsQueryKey(args: InferRequestType<typeof client.albums.$get>) {
  return ['albums', '/albums', args] as const
}

export function getAlbumsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.albums.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlbumsQueryKey>
  >({
    queryKey: getAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.albums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlbums<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.albums.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlbumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAlbumsIdTracksQueryKey(
  args: InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
) {
  return ['albums', '/albums/:id/tracks', args] as const
}

export function getAlbumsIdTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdTracksQueryKey>
  >({
    queryKey: getAlbumsIdTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.albums[':id'].tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAlbumsIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlbumsIdTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlbumsIdTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getArtistsIdQueryKey(
  args: InferRequestType<(typeof client.artists)[':id']['$get']>,
) {
  return ['artists', '/artists/:id', args] as const
}

export function getArtistsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.artists)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdQueryKey>
  >({
    queryKey: getArtistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.artists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectArtistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.artists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getArtistsQueryKey(args: InferRequestType<typeof client.artists.$get>) {
  return ['artists', '/artists', args] as const
}

export function getArtistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.artists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArtistsQueryKey>
  >({
    queryKey: getArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.artists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.artists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
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

export function getArtistsIdAlbumsQueryKey(
  args: InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
) {
  return ['artists', '/artists/:id/albums', args] as const
}

export function getArtistsIdAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdAlbumsQueryKey>
  >({
    queryKey: getArtistsIdAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.artists[':id'].albums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectArtistsIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsIdAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsIdAlbumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getArtistsIdTopTracksQueryKey(
  args: InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
) {
  return ['artists', '/artists/:id/top-tracks', args] as const
}

export function getArtistsIdTopTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdTopTracksQueryKey>
  >({
    queryKey: getArtistsIdTopTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.artists[':id']['top-tracks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectArtistsIdTopTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsIdTopTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArtistsIdTopTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getArtistsIdRelatedArtistsQueryKey(
  args: InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
) {
  return ['artists', '/artists/:id/related-artists', args] as const
}

export function getArtistsIdRelatedArtistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdRelatedArtistsQueryKey>
  >({
    queryKey: getArtistsIdRelatedArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.artists[':id']['related-artists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectArtistsIdRelatedArtists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArtistsIdRelatedArtistsQueryKey>
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
      ...getArtistsIdRelatedArtistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getShowsIdQueryKey(args: InferRequestType<(typeof client.shows)[':id']['$get']>) {
  return ['shows', '/shows/:id', args] as const
}

export function getShowsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.shows)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdQueryKey>
  >({
    queryKey: getShowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getShowsQueryKey(args: InferRequestType<typeof client.shows.$get>) {
  return ['shows', '/shows', args] as const
}

export function getShowsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShowsQueryKey>
  >({
    queryKey: getShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectShows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getShowsIdEpisodesQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
) {
  return ['shows', '/shows/:id/episodes', args] as const
}

export function getShowsIdEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdEpisodesQueryKey>
  >({
    queryKey: getShowsIdEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectShowsIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEpisodesIdQueryKey(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
) {
  return ['episodes', '/episodes/:id', args] as const
}

export function getEpisodesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.episodes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdQueryKey>
  >({
    queryKey: getEpisodesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEpisodesQueryKey(args: InferRequestType<typeof client.episodes.$get>) {
  return ['episodes', '/episodes', args] as const
}

export function getEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.episodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpisodesQueryKey>
  >({
    queryKey: getEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.episodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudiobooksIdQueryKey(
  args: InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
) {
  return ['audiobooks', '/audiobooks/:id', args] as const
}

export function getAudiobooksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiobooksIdQueryKey>
  >({
    queryKey: getAudiobooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiobooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAudiobooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiobooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudiobooksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudiobooksQueryKey(args: InferRequestType<typeof client.audiobooks.$get>) {
  return ['audiobooks', '/audiobooks', args] as const
}

export function getAudiobooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audiobooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiobooksQueryKey>
  >({
    queryKey: getAudiobooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiobooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAudiobooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.audiobooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAudiobooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudiobooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudiobooksIdChaptersQueryKey(
  args: InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
) {
  return ['audiobooks', '/audiobooks/:id/chapters', args] as const
}

export function getAudiobooksIdChaptersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiobooksIdChaptersQueryKey>
  >({
    queryKey: getAudiobooksIdChaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiobooks[':id'].chapters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudiobooksIdChapters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiobooksIdChaptersQueryKey>
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
      ...getAudiobooksIdChaptersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMeAudiobooksQueryKey(args: InferRequestType<typeof client.me.audiobooks.$get>) {
  return ['me', '/me/audiobooks', args] as const
}

export function getMeAudiobooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.audiobooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAudiobooksQueryKey>
  >({
    queryKey: getMeAudiobooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.audiobooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeAudiobooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.audiobooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAudiobooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeAudiobooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMeAudiobooksMutationKey() {
  return ['me', '/me/audiobooks', 'PUT'] as const
}

export function getPutMeAudiobooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.me.audiobooks.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeAudiobooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.audiobooks.$put>) {
      return parseResponse(client.me.audiobooks.$put(args, options))
    },
  })
}

export function injectPutMeAudiobooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.me.audiobooks.$put>,
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
    const mutationDefaults = getPutMeAudiobooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeAudiobooksMutationKey() {
  return ['me', '/me/audiobooks', 'DELETE'] as const
}

export function getDeleteMeAudiobooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.me.audiobooks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeAudiobooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.audiobooks.$delete>) {
      return parseResponse(client.me.audiobooks.$delete(args, options))
    },
  })
}

export function injectDeleteMeAudiobooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.me.audiobooks.$delete>,
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
    const mutationDefaults = getDeleteMeAudiobooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeAudiobooksContainsQueryKey(
  args: InferRequestType<typeof client.me.audiobooks.contains.$get>,
) {
  return ['me', '/me/audiobooks/contains', args] as const
}

export function getMeAudiobooksContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.audiobooks.contains.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAudiobooksContainsQueryKey>
  >({
    queryKey: getMeAudiobooksContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.audiobooks.contains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMeAudiobooksContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.audiobooks.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAudiobooksContainsQueryKey>
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
      ...getMeAudiobooksContainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChaptersIdQueryKey(
  args: InferRequestType<(typeof client.chapters)[':id']['$get']>,
) {
  return ['chapters', '/chapters/:id', args] as const
}

export function getChaptersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.chapters)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChaptersIdQueryKey>
  >({
    queryKey: getChaptersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chapters[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChaptersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chapters)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChaptersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChaptersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChaptersQueryKey(args: InferRequestType<typeof client.chapters.$get>) {
  return ['chapters', '/chapters', args] as const
}

export function getChaptersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chapters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChaptersQueryKey>
  >({
    queryKey: getChaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chapters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chapters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChaptersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChaptersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTracksIdQueryKey(args: InferRequestType<(typeof client.tracks)[':id']['$get']>) {
  return ['tracks', '/tracks/:id', args] as const
}

export function getTracksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tracks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTracksIdQueryKey>
  >({
    queryKey: getTracksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTracksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTracksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTracksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTracksQueryKey(args: InferRequestType<typeof client.tracks.$get>) {
  return ['tracks', '/tracks', args] as const
}

export function getTracksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTracksQueryKey>
  >({
    queryKey: getTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTracks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id', args] as const
}

export function getPlaylistsPlaylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
  >({
    queryKey: getPlaylistsPlaylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsPlaylistIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutPlaylistsPlaylistIdMutationKey() {
  return ['playlists', '/playlists/:playlist_id', 'PUT'] as const
}

export function getPutPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsPlaylistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>) {
      return parseResponse(client.playlists[':playlist_id'].$put(args, options))
    },
  })
}

export function injectPutPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>,
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
    const mutationDefaults = getPutPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdTracksQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/tracks', args] as const
}

export function getPlaylistsPlaylistIdTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdTracksQueryKey>
  >({
    queryKey: getPlaylistsPlaylistIdTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].tracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsPlaylistIdTracksQueryKey>
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
      ...getPlaylistsPlaylistIdTracksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPlaylistsPlaylistIdTracksMutationKey() {
  return ['playlists', '/playlists/:playlist_id/tracks', 'PUT'] as const
}

export function getPutPlaylistsPlaylistIdTracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsPlaylistIdTracksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].tracks.$put(args, options))
    },
  })
}

export function injectPutPlaylistsPlaylistIdTracks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>,
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
    const mutationDefaults = getPutPlaylistsPlaylistIdTracksMutationOptions<
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

export function getPostPlaylistsPlaylistIdTracksMutationKey() {
  return ['playlists', '/playlists/:playlist_id/tracks', 'POST'] as const
}

export function getPostPlaylistsPlaylistIdTracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsPlaylistIdTracksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].tracks.$post(args, options))
    },
  })
}

export function injectPostPlaylistsPlaylistIdTracks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>,
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
    const mutationDefaults = getPostPlaylistsPlaylistIdTracksMutationOptions<
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

export function getDeletePlaylistsPlaylistIdTracksMutationKey() {
  return ['playlists', '/playlists/:playlist_id/tracks', 'DELETE'] as const
}

export function getDeletePlaylistsPlaylistIdTracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsPlaylistIdTracksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].tracks.$delete(args, options))
    },
  })
}

export function injectDeletePlaylistsPlaylistIdTracks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>,
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
    const mutationDefaults = getDeletePlaylistsPlaylistIdTracksMutationOptions<
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

export function getPlaylistsPlaylistIdItemsQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/items', args] as const
}

export function getPlaylistsPlaylistIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
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
        client.playlists[':playlist_id'].items.$get(args, {
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
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
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

export function getPutPlaylistsPlaylistIdItemsMutationKey() {
  return ['playlists', '/playlists/:playlist_id/items', 'PUT'] as const
}

export function getPutPlaylistsPlaylistIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsPlaylistIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$put']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].items.$put(args, options))
    },
  })
}

export function injectPutPlaylistsPlaylistIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$put']>,
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
    const mutationDefaults = getPutPlaylistsPlaylistIdItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPlaylistsPlaylistIdItemsMutationKey() {
  return ['playlists', '/playlists/:playlist_id/items', 'POST'] as const
}

export function getPostPlaylistsPlaylistIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsPlaylistIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$post']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].items.$post(args, options))
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
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$post']>,
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
  return ['playlists', '/playlists/:playlist_id/items', 'DELETE'] as const
}

export function getDeletePlaylistsPlaylistIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsPlaylistIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$delete']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].items.$delete(args, options))
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
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$delete']>,
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

export function getMePlaylistsQueryKey(args: InferRequestType<typeof client.me.playlists.$get>) {
  return ['me', '/me/playlists', args] as const
}

export function getMePlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlaylistsQueryKey>
  >({
    queryKey: getMePlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.playlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePlaylistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMePlaylistsMutationKey() {
  return ['me', '/me/playlists', 'POST'] as const
}

export function getPostMePlaylistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.me.playlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMePlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.playlists.$post>) {
      return parseResponse(client.me.playlists.$post(args, options))
    },
  })
}

export function injectPostMePlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.me.playlists.$post>,
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
    const mutationDefaults = getPostMePlaylistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMeLibraryMutationKey() {
  return ['me', '/me/library', 'PUT'] as const
}

export function getPutMeLibraryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.library.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeLibraryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.library.$put>) {
      return parseResponse(client.me.library.$put(args, options))
    },
  })
}

export function injectPutMeLibrary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.me.library.$put>,
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
    const mutationDefaults = getPutMeLibraryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeLibraryMutationKey() {
  return ['me', '/me/library', 'DELETE'] as const
}

export function getDeleteMeLibraryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.me.library.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeLibraryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.library.$delete>) {
      return parseResponse(client.me.library.$delete(args, options))
    },
  })
}

export function injectDeleteMeLibrary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.me.library.$delete>,
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
    const mutationDefaults = getDeleteMeLibraryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeLibraryContainsQueryKey(
  args: InferRequestType<typeof client.me.library.contains.$get>,
) {
  return ['me', '/me/library/contains', args] as const
}

export function getMeLibraryContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.library.contains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeLibraryContainsQueryKey>
  >({
    queryKey: getMeLibraryContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.library.contains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeLibraryContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.library.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeLibraryContainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeLibraryContainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeAlbumsQueryKey(args: InferRequestType<typeof client.me.albums.$get>) {
  return ['me', '/me/albums', args] as const
}

export function getMeAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.albums.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsQueryKey>
  >({
    queryKey: getMeAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.albums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.albums.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeAlbumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMeAlbumsMutationKey() {
  return ['me', '/me/albums', 'PUT'] as const
}

export function getPutMeAlbumsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.albums.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeAlbumsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.albums.$put>) {
      return parseResponse(client.me.albums.$put(args, options))
    },
  })
}

export function injectPutMeAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.me.albums.$put>,
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
    const mutationDefaults = getPutMeAlbumsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeAlbumsMutationKey() {
  return ['me', '/me/albums', 'DELETE'] as const
}

export function getDeleteMeAlbumsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$delete>>>>>,
    TError,
    InferRequestType<typeof client.me.albums.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeAlbumsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.albums.$delete>) {
      return parseResponse(client.me.albums.$delete(args, options))
    },
  })
}

export function injectDeleteMeAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.me.albums.$delete>,
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
    const mutationDefaults = getDeleteMeAlbumsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeAlbumsContainsQueryKey(
  args: InferRequestType<typeof client.me.albums.contains.$get>,
) {
  return ['me', '/me/albums/contains', args] as const
}

export function getMeAlbumsContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.albums.contains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsContainsQueryKey>
  >({
    queryKey: getMeAlbumsContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.albums.contains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeAlbumsContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.albums.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAlbumsContainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeAlbumsContainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeTracksQueryKey(args: InferRequestType<typeof client.me.tracks.$get>) {
  return ['me', '/me/tracks', args] as const
}

export function getMeTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTracksQueryKey>
  >({
    queryKey: getMeTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMeTracksMutationKey() {
  return ['me', '/me/tracks', 'PUT'] as const
}

export function getPutMeTracksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.tracks.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeTracksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.tracks.$put>) {
      return parseResponse(client.me.tracks.$put(args, options))
    },
  })
}

export function injectPutMeTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.me.tracks.$put>,
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
    const mutationDefaults = getPutMeTracksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeTracksMutationKey() {
  return ['me', '/me/tracks', 'DELETE'] as const
}

export function getDeleteMeTracksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$delete>>>>>,
    TError,
    InferRequestType<typeof client.me.tracks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeTracksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.tracks.$delete>) {
      return parseResponse(client.me.tracks.$delete(args, options))
    },
  })
}

export function injectDeleteMeTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.me.tracks.$delete>,
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
    const mutationDefaults = getDeleteMeTracksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeTracksContainsQueryKey(
  args: InferRequestType<typeof client.me.tracks.contains.$get>,
) {
  return ['me', '/me/tracks/contains', args] as const
}

export function getMeTracksContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.tracks.contains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeTracksContainsQueryKey>
  >({
    queryKey: getMeTracksContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tracks.contains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeTracksContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.tracks.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeTracksContainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTracksContainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeEpisodesQueryKey(args: InferRequestType<typeof client.me.episodes.$get>) {
  return ['me', '/me/episodes', args] as const
}

export function getMeEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.episodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeEpisodesQueryKey>
  >({
    queryKey: getMeEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.episodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMeEpisodesMutationKey() {
  return ['me', '/me/episodes', 'PUT'] as const
}

export function getPutMeEpisodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.episodes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeEpisodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.episodes.$put>) {
      return parseResponse(client.me.episodes.$put(args, options))
    },
  })
}

export function injectPutMeEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.me.episodes.$put>,
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
    const mutationDefaults = getPutMeEpisodesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeEpisodesMutationKey() {
  return ['me', '/me/episodes', 'DELETE'] as const
}

export function getDeleteMeEpisodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.me.episodes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeEpisodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.episodes.$delete>) {
      return parseResponse(client.me.episodes.$delete(args, options))
    },
  })
}

export function injectDeleteMeEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.me.episodes.$delete>,
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
    const mutationDefaults = getDeleteMeEpisodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeEpisodesContainsQueryKey(
  args: InferRequestType<typeof client.me.episodes.contains.$get>,
) {
  return ['me', '/me/episodes/contains', args] as const
}

export function getMeEpisodesContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.episodes.contains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeEpisodesContainsQueryKey>
  >({
    queryKey: getMeEpisodesContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.episodes.contains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeEpisodesContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.episodes.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeEpisodesContainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeEpisodesContainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeShowsQueryKey(args: InferRequestType<typeof client.me.shows.$get>) {
  return ['me', '/me/shows', args] as const
}

export function getMeShowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.shows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeShowsQueryKey>
  >({
    queryKey: getMeShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.shows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeShowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMeShowsMutationKey() {
  return ['me', '/me/shows', 'PUT'] as const
}

export function getPutMeShowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$put>>>>>,
    TError,
    InferRequestType<typeof client.me.shows.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeShowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.shows.$put>) {
      return parseResponse(client.me.shows.$put(args, options))
    },
  })
}

export function injectPutMeShows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$put>>>>>,
        TError,
        InferRequestType<typeof client.me.shows.$put>,
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
    const mutationDefaults = getPutMeShowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeShowsMutationKey() {
  return ['me', '/me/shows', 'DELETE'] as const
}

export function getDeleteMeShowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$delete>>>>>,
    TError,
    InferRequestType<typeof client.me.shows.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeShowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.shows.$delete>) {
      return parseResponse(client.me.shows.$delete(args, options))
    },
  })
}

export function injectDeleteMeShows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.me.shows.$delete>,
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
    const mutationDefaults = getDeleteMeShowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeShowsContainsQueryKey(
  args: InferRequestType<typeof client.me.shows.contains.$get>,
) {
  return ['me', '/me/shows/contains', args] as const
}

export function getMeShowsContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.shows.contains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeShowsContainsQueryKey>
  >({
    queryKey: getMeShowsContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.shows.contains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeShowsContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.shows.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeShowsContainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeShowsContainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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

export function getUsersUserIdPlaylistsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
) {
  return ['users', '/users/:user_id/playlists', args] as const
}

export function getUsersUserIdPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPlaylistsQueryKey>
  >({
    queryKey: getUsersUserIdPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].playlists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPlaylistsQueryKey>
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
      ...getUsersUserIdPlaylistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersUserIdPlaylistsMutationKey() {
  return ['users', '/users/:user_id/playlists', 'POST'] as const
}

export function getPostUsersUserIdPlaylistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['playlists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPlaylistsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].playlists.$post(args, options))
    },
  })
}

export function injectPostUsersUserIdPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['playlists']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdPlaylistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutPlaylistsPlaylistIdFollowersMutationKey() {
  return ['playlists', '/playlists/:playlist_id/followers', 'PUT'] as const
}

export function getPutPlaylistsPlaylistIdFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsPlaylistIdFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].followers.$put(args, options))
    },
  })
}

export function injectPutPlaylistsPlaylistIdFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>,
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
    const mutationDefaults = getPutPlaylistsPlaylistIdFollowersMutationOptions<
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

export function getDeletePlaylistsPlaylistIdFollowersMutationKey() {
  return ['playlists', '/playlists/:playlist_id/followers', 'DELETE'] as const
}

export function getDeletePlaylistsPlaylistIdFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsPlaylistIdFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].followers.$delete(args, options))
    },
  })
}

export function injectDeletePlaylistsPlaylistIdFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>,
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
    const mutationDefaults = getDeletePlaylistsPlaylistIdFollowersMutationOptions<
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

export function getBrowseFeaturedPlaylistsQueryKey(
  args: InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
) {
  return ['browse', '/browse/featured-playlists', args] as const
}

export function getBrowseFeaturedPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseFeaturedPlaylistsQueryKey>
  >({
    queryKey: getBrowseFeaturedPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browse['featured-playlists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBrowseFeaturedPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseFeaturedPlaylistsQueryKey>
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
      ...getBrowseFeaturedPlaylistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBrowseCategoriesQueryKey(
  args: InferRequestType<typeof client.browse.categories.$get>,
) {
  return ['browse', '/browse/categories', args] as const
}

export function getBrowseCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.browse.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseCategoriesQueryKey>
  >({
    queryKey: getBrowseCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browse.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBrowseCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.browse.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrowseCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBrowseCategoriesCategoryIdQueryKey(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
) {
  return ['browse', '/browse/categories/:category_id', args] as const
}

export function getBrowseCategoriesCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseCategoriesCategoryIdQueryKey>
  >({
    queryKey: getBrowseCategoriesCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browse.categories[':category_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBrowseCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseCategoriesCategoryIdQueryKey>
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
      ...getBrowseCategoriesCategoryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBrowseCategoriesCategoryIdPlaylistsQueryKey(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>,
) {
  return ['browse', '/browse/categories/:category_id/playlists', args] as const
}

export function getBrowseCategoriesCategoryIdPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseCategoriesCategoryIdPlaylistsQueryKey>
  >({
    queryKey: getBrowseCategoriesCategoryIdPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browse.categories[':category_id'].playlists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBrowseCategoriesCategoryIdPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.browse.categories)[':category_id']['playlists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseCategoriesCategoryIdPlaylistsQueryKey>
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
      ...getBrowseCategoriesCategoryIdPlaylistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdImagesQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/images', args] as const
}

export function getPlaylistsPlaylistIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdImagesQueryKey>
  >({
    queryKey: getPlaylistsPlaylistIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsPlaylistIdImagesQueryKey>
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
      ...getPlaylistsPlaylistIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPlaylistsPlaylistIdImagesMutationKey() {
  return ['playlists', '/playlists/:playlist_id/images', 'PUT'] as const
}

export function getPutPlaylistsPlaylistIdImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsPlaylistIdImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$put']>,
    ) {
      return parseResponse(client.playlists[':playlist_id'].images.$put(args, options))
    },
  })
}

export function injectPutPlaylistsPlaylistIdImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$put']>,
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
    const mutationDefaults = getPutPlaylistsPlaylistIdImagesMutationOptions<
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

export function getBrowseNewReleasesQueryKey(
  args: InferRequestType<(typeof client.browse)['new-releases']['$get']>,
) {
  return ['browse', '/browse/new-releases', args] as const
}

export function getBrowseNewReleasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.browse)['new-releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseNewReleasesQueryKey>
  >({
    queryKey: getBrowseNewReleasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browse['new-releases'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBrowseNewReleases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.browse)['new-releases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseNewReleasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrowseNewReleasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeFollowingQueryKey(args: InferRequestType<typeof client.me.following.$get>) {
  return ['me', '/me/following', args] as const
}

export function getMeFollowingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.following.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowingQueryKey>
  >({
    queryKey: getMeFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.following.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.following.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFollowingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMeFollowingMutationKey() {
  return ['me', '/me/following', 'PUT'] as const
}

export function getPutMeFollowingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.following.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMeFollowingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.following.$put>) {
      return parseResponse(client.me.following.$put(args, options))
    },
  })
}

export function injectPutMeFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.following.$put>,
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
    const mutationDefaults = getPutMeFollowingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMeFollowingMutationKey() {
  return ['me', '/me/following', 'DELETE'] as const
}

export function getDeleteMeFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.following.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeFollowingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.following.$delete>) {
      return parseResponse(client.me.following.$delete(args, options))
    },
  })
}

export function injectDeleteMeFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.following.$delete>,
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
    const mutationDefaults = getDeleteMeFollowingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeFollowingContainsQueryKey(
  args: InferRequestType<typeof client.me.following.contains.$get>,
) {
  return ['me', '/me/following/contains', args] as const
}

export function getMeFollowingContainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.following.contains.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingContainsQueryKey>
  >({
    queryKey: getMeFollowingContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.following.contains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeFollowingContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.following.contains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingContainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFollowingContainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdFollowersContainsQueryKey(
  args: InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
) {
  return ['playlists', '/playlists/:playlist_id/followers/contains', args] as const
}

export function getPlaylistsPlaylistIdFollowersContainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdFollowersContainsQueryKey>
  >({
    queryKey: getPlaylistsPlaylistIdFollowersContainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].followers.contains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistIdFollowersContains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsPlaylistIdFollowersContainsQueryKey>
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
      ...getPlaylistsPlaylistIdFollowersContainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAudioFeaturesQueryKey(
  args: InferRequestType<(typeof client)['audio-features']['$get']>,
) {
  return ['audio-features', '/audio-features', args] as const
}

export function getAudioFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audio-features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioFeaturesQueryKey>
  >({
    queryKey: getAudioFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['audio-features'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAudioFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['audio-features']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioFeaturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudioFeaturesIdQueryKey(
  args: InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
) {
  return ['audio-features', '/audio-features/:id', args] as const
}

export function getAudioFeaturesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioFeaturesIdQueryKey>
  >({
    queryKey: getAudioFeaturesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['audio-features'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioFeaturesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioFeaturesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioFeaturesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudioAnalysisIdQueryKey(
  args: InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
) {
  return ['audio-analysis', '/audio-analysis/:id', args] as const
}

export function getAudioAnalysisIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioAnalysisIdQueryKey>
  >({
    queryKey: getAudioAnalysisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['audio-analysis'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAudioAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudioAnalysisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioAnalysisIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRecommendationsQueryKey(
  args: InferRequestType<typeof client.recommendations.$get>,
) {
  return ['recommendations', '/recommendations', args] as const
}

export function getRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recommendations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsQueryKey>
  >({
    queryKey: getRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recommendations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecommendationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRecommendationsAvailableGenreSeedsQueryKey() {
  return ['recommendations', '/recommendations/available-genre-seeds'] as const
}

export function getRecommendationsAvailableGenreSeedsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsAvailableGenreSeedsQueryKey>
  >({
    queryKey: getRecommendationsAvailableGenreSeedsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations['available-genre-seeds'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecommendationsAvailableGenreSeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
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
              Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsAvailableGenreSeedsQueryKey>
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
      ...getRecommendationsAvailableGenreSeedsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMePlayerQueryKey(args: InferRequestType<typeof client.me.player.$get>) {
  return ['me', '/me/player', args] as const
}

export function getMePlayerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.player.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlayerQueryKey>
  >({
    queryKey: getMePlayerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.player.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMePlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.player.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePlayerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePlayerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutMePlayerMutationKey() {
  return ['me', '/me/player', 'PUT'] as const
}

export function getPutMePlayerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.$put>) {
      return parseResponse(client.me.player.$put(args, options))
    },
  })
}

export function injectPutMePlayer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.$put>,
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
    const mutationDefaults = getPutMePlayerMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMePlayerDevicesQueryKey() {
  return ['me', '/me/player/devices'] as const
}

export function getMePlayerDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerDevicesQueryKey>
  >({
    queryKey: getMePlayerDevicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.player.devices.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMePlayerDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePlayerDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePlayerDevicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMePlayerCurrentlyPlayingQueryKey(
  args: InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
) {
  return ['me', '/me/player/currently-playing', args] as const
}

export function getMePlayerCurrentlyPlayingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerCurrentlyPlayingQueryKey>
  >({
    queryKey: getMePlayerCurrentlyPlayingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.player['currently-playing'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMePlayerCurrentlyPlaying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePlayerCurrentlyPlayingQueryKey>
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
      ...getMePlayerCurrentlyPlayingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutMePlayerPlayMutationKey() {
  return ['me', '/me/player/play', 'PUT'] as const
}

export function getPutMePlayerPlayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.play.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.play.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerPlayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.play.$put>) {
      return parseResponse(client.me.player.play.$put(args, options))
    },
  })
}

export function injectPutMePlayerPlay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.play.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.play.$put>,
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
    const mutationDefaults = getPutMePlayerPlayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMePlayerPauseMutationKey() {
  return ['me', '/me/player/pause', 'PUT'] as const
}

export function getPutMePlayerPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.pause.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.pause.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerPauseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.pause.$put>) {
      return parseResponse(client.me.player.pause.$put(args, options))
    },
  })
}

export function injectPutMePlayerPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.pause.$put>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.pause.$put>,
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
    const mutationDefaults = getPutMePlayerPauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMePlayerNextMutationKey() {
  return ['me', '/me/player/next', 'POST'] as const
}

export function getPostMePlayerNextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.next.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.next.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMePlayerNextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.next.$post>) {
      return parseResponse(client.me.player.next.$post(args, options))
    },
  })
}

export function injectPostMePlayerNext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.next.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.next.$post>,
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
    const mutationDefaults = getPostMePlayerNextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMePlayerPreviousMutationKey() {
  return ['me', '/me/player/previous', 'POST'] as const
}

export function getPostMePlayerPreviousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.player.previous.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.previous.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMePlayerPreviousMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.previous.$post>) {
      return parseResponse(client.me.player.previous.$post(args, options))
    },
  })
}

export function injectPostMePlayerPrevious<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.previous.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.previous.$post>,
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
    const mutationDefaults = getPostMePlayerPreviousMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMePlayerSeekMutationKey() {
  return ['me', '/me/player/seek', 'PUT'] as const
}

export function getPutMePlayerSeekMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.seek.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.seek.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerSeekMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.seek.$put>) {
      return parseResponse(client.me.player.seek.$put(args, options))
    },
  })
}

export function injectPutMePlayerSeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.seek.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.seek.$put>,
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
    const mutationDefaults = getPutMePlayerSeekMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMePlayerRepeatMutationKey() {
  return ['me', '/me/player/repeat', 'PUT'] as const
}

export function getPutMePlayerRepeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.repeat.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.repeat.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerRepeatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.repeat.$put>) {
      return parseResponse(client.me.player.repeat.$put(args, options))
    },
  })
}

export function injectPutMePlayerRepeat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.repeat.$put>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.repeat.$put>,
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
    const mutationDefaults = getPutMePlayerRepeatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMePlayerVolumeMutationKey() {
  return ['me', '/me/player/volume', 'PUT'] as const
}

export function getPutMePlayerVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.volume.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.volume.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerVolumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.volume.$put>) {
      return parseResponse(client.me.player.volume.$put(args, options))
    },
  })
}

export function injectPutMePlayerVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.volume.$put>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.volume.$put>,
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
    const mutationDefaults = getPutMePlayerVolumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutMePlayerShuffleMutationKey() {
  return ['me', '/me/player/shuffle', 'PUT'] as const
}

export function getPutMePlayerShuffleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.shuffle.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.shuffle.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePlayerShuffleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.shuffle.$put>) {
      return parseResponse(client.me.player.shuffle.$put(args, options))
    },
  })
}

export function injectPutMePlayerShuffle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.shuffle.$put>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.shuffle.$put>,
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
    const mutationDefaults = getPutMePlayerShuffleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMePlayerRecentlyPlayedQueryKey(
  args: InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
) {
  return ['me', '/me/player/recently-played', args] as const
}

export function getMePlayerRecentlyPlayedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerRecentlyPlayedQueryKey>
  >({
    queryKey: getMePlayerRecentlyPlayedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.player['recently-played'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMePlayerRecentlyPlayed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMePlayerRecentlyPlayedQueryKey>
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
      ...getMePlayerRecentlyPlayedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMePlayerQueueQueryKey() {
  return ['me', '/me/player/queue'] as const
}

export function getMePlayerQueueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerQueueQueryKey>
  >({
    queryKey: getMePlayerQueueQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.player.queue.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMePlayerQueue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePlayerQueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePlayerQueueQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostMePlayerQueueMutationKey() {
  return ['me', '/me/player/queue', 'POST'] as const
}

export function getPostMePlayerQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.me.player.queue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMePlayerQueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.player.queue.$post>) {
      return parseResponse(client.me.player.queue.$post(args, options))
    },
  })
}

export function injectPostMePlayerQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.player.queue.$post>,
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
    const mutationDefaults = getPostMePlayerQueueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketsQueryKey() {
  return ['markets', '/markets'] as const
}

export function getMarketsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketsQueryKey>
  >({
    queryKey: getMarketsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.markets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMarkets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMarketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMeTopArtistsQueryKey(args: InferRequestType<typeof client.me.top.artists.$get>) {
  return ['me', '/me/top/artists', args] as const
}

export function getMeTopArtistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.top.artists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopArtistsQueryKey>
  >({
    queryKey: getMeTopArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.top.artists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeTopArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.top.artists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeTopArtistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTopArtistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeTopTracksQueryKey(args: InferRequestType<typeof client.me.top.tracks.$get>) {
  return ['me', '/me/top/tracks', args] as const
}

export function getMeTopTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.top.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopTracksQueryKey>
  >({
    queryKey: getMeTopTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.top.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeTopTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.top.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeTopTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTopTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
