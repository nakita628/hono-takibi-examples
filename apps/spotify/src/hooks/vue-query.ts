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

export function getAlbumsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['$get']>>,
) {
  return ['albums', '/albums/:id', toValue(args)] as const
}

export function getAlbumsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAlbumsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.albums[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.albums.$get>>,
) {
  return ['albums', '/albums', toValue(args)] as const
}

export function getAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.albums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlbums<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.albums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
          ReturnType<typeof getAlbumsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlbumsIdTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>>,
) {
  return ['albums', '/albums/:id/tracks', toValue(args)] as const
}

export function getAlbumsIdTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsIdTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.albums[':id'].tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlbumsIdTracksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.albums)[':id']['tracks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsIdTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsIdTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.albums[':id'].tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['$get']>>,
) {
  return ['artists', '/artists/:id', toValue(args)] as const
}

export function getArtistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.artists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getArtistsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.artists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.artists.$get>>,
) {
  return ['artists', '/artists', toValue(args)] as const
}

export function getArtistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.artists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.artists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.artists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.artists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsIdAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['albums']['$get']>>,
) {
  return ['artists', '/artists/:id/albums', toValue(args)] as const
}

export function getArtistsIdAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['albums']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsIdAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.artists[':id'].albums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['albums']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArtistsIdAlbumsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.artists)[':id']['albums']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsIdAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.artists[':id'].albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsIdTopTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>>,
) {
  return ['artists', '/artists/:id/top-tracks', toValue(args)] as const
}

export function getArtistsIdTopTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsIdTopTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.artists[':id']['top-tracks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsIdTopTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArtistsIdTopTracksQueryKey>
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
          Awaited<ReturnType<(typeof client.artists)[':id']['top-tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdTopTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsIdTopTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.artists[':id']['top-tracks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsIdRelatedArtistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>
  >,
) {
  return ['artists', '/artists/:id/related-artists', toValue(args)] as const
}

export function getArtistsIdRelatedArtistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsIdRelatedArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.artists[':id']['related-artists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsIdRelatedArtists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArtistsIdRelatedArtistsQueryKey>
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
          Awaited<ReturnType<(typeof client.artists)[':id']['related-artists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsIdRelatedArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsIdRelatedArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.artists[':id']['related-artists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
) {
  return ['shows', '/shows/:id', toValue(args)] as const
}

export function getShowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getShowsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.$get>>,
) {
  return ['shows', '/shows', toValue(args)] as const
}

export function getShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
          ReturnType<typeof getShowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>>,
) {
  return ['shows', '/shows/:id/episodes', toValue(args)] as const
}

export function getShowsIdEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdEpisodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['episodes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
) {
  return ['episodes', '/episodes/:id', toValue(args)] as const
}

export function getEpisodesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEpisodesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episodes.$get>>,
) {
  return ['episodes', '/episodes', toValue(args)] as const
}

export function getEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>
          >,
          ReturnType<typeof getEpisodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudiobooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiobooks)[':id']['$get']>>,
) {
  return ['audiobooks', '/audiobooks/:id', toValue(args)] as const
}

export function getAudiobooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiobooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiobooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiobooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudiobooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiobooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAudiobooksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiobooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiobooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiobooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiobooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudiobooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiobooks.$get>>,
) {
  return ['audiobooks', '/audiobooks', toValue(args)] as const
}

export function getAudiobooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiobooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiobooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiobooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAudiobooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiobooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>
          >,
          ReturnType<typeof getAudiobooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiobooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiobooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiobooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiobooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudiobooksIdChaptersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>>,
) {
  return ['audiobooks', '/audiobooks/:id/chapters', toValue(args)] as const
}

export function getAudiobooksIdChaptersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiobooksIdChaptersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiobooks[':id'].chapters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudiobooksIdChapters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudiobooksIdChaptersQueryKey>
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
          Awaited<ReturnType<(typeof client.audiobooks)[':id']['chapters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiobooksIdChaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiobooksIdChaptersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiobooks[':id'].chapters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeAudiobooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.audiobooks.$get>>,
) {
  return ['me', '/me/audiobooks', toValue(args)] as const
}

export function getMeAudiobooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.audiobooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAudiobooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.audiobooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeAudiobooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.audiobooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
          >,
          ReturnType<typeof getMeAudiobooksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAudiobooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAudiobooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.audiobooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeAudiobooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.audiobooks.$put>,
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
  const mutationDefaults = getPutMeAudiobooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeAudiobooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.me.audiobooks.$delete>,
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
  const mutationDefaults = getDeleteMeAudiobooksMutationOptions<TError, TOnMutateResult>(
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

export function getMeAudiobooksContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.audiobooks.contains.$get>>,
) {
  return ['me', '/me/audiobooks/contains', toValue(args)] as const
}

export function getMeAudiobooksContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.audiobooks.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAudiobooksContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.audiobooks.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeAudiobooksContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.audiobooks.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeAudiobooksContainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.audiobooks.contains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAudiobooksContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAudiobooksContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.audiobooks.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChaptersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chapters)[':id']['$get']>>,
) {
  return ['chapters', '/chapters/:id', toValue(args)] as const
}

export function getChaptersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chapters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChaptersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chapters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChaptersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chapters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChaptersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chapters)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChaptersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChaptersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chapters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChaptersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chapters.$get>>,
) {
  return ['chapters', '/chapters', toValue(args)] as const
}

export function getChaptersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chapters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChaptersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chapters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chapters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>
          >,
          ReturnType<typeof getChaptersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chapters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChaptersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chapters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':id']['$get']>>,
) {
  return ['tracks', '/tracks/:id', toValue(args)] as const
}

export function getTracksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTracksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTracksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracks.$get>>,
) {
  return ['tracks', '/tracks', toValue(args)] as const
}

export function getTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTracks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
          ReturnType<typeof getTracksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>>,
) {
  return ['playlists', '/playlists/:playlist_id', toValue(args)] as const
}

export function getPlaylistsPlaylistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
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
          client.playlists[':playlist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
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

export function getPlaylistsPlaylistIdTracksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>
  >,
) {
  return ['playlists', '/playlists/:playlist_id/tracks', toValue(args)] as const
}

export function getPlaylistsPlaylistIdTracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdTracksQueryKey>
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
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':playlist_id'].tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPlaylistsPlaylistIdTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPlaylistsPlaylistIdTracksMutationOptions<TError, TOnMutateResult>(
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

export function usePostPlaylistsPlaylistIdTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlaylistsPlaylistIdTracksMutationOptions<TError, TOnMutateResult>(
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

export function useDeletePlaylistsPlaylistIdTracks<
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
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>,
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
  const mutationDefaults = getDeletePlaylistsPlaylistIdTracksMutationOptions<
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

export function getPlaylistsPlaylistIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>
  >,
) {
  return ['playlists', '/playlists/:playlist_id/items', toValue(args)] as const
}

export function getPlaylistsPlaylistIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].items.$get(toValue(args), {
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
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
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
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['items']['$get']>>
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
          client.playlists[':playlist_id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPlaylistsPlaylistIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPlaylistsPlaylistIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function usePostPlaylistsPlaylistIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function useDeletePlaylistsPlaylistIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function getMePlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.playlists.$get>>,
) {
  return ['me', '/me/playlists', toValue(args)] as const
}

export function getMePlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.playlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.playlists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.playlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
          >,
          ReturnType<typeof getMePlaylistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMePlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.me.playlists.$post>,
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
  const mutationDefaults = getPostMePlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMeLibrary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.library.$put>,
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
  const mutationDefaults = getPutMeLibraryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeLibrary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.me.library.$delete>,
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
  const mutationDefaults = getDeleteMeLibraryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeLibraryContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.library.contains.$get>>,
) {
  return ['me', '/me/library/contains', toValue(args)] as const
}

export function getMeLibraryContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.library.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeLibraryContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.library.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeLibraryContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.library.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeLibraryContainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.library.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeLibraryContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeLibraryContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.library.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.$get>>,
) {
  return ['me', '/me/albums', toValue(args)] as const
}

export function getMeAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.albums.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>
          >,
          ReturnType<typeof getMeAlbumsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.albums.$put>,
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
  const mutationDefaults = getPutMeAlbumsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeAlbums<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.me.albums.$delete>,
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
  const mutationDefaults = getDeleteMeAlbumsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeAlbumsContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.contains.$get>>,
) {
  return ['me', '/me/albums/contains', toValue(args)] as const
}

export function getMeAlbumsContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeAlbumsContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.albums.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeAlbumsContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.albums.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeAlbumsContainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.albums.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAlbumsContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeAlbumsContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.albums.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.$get>>,
) {
  return ['me', '/me/tracks', toValue(args)] as const
}

export function getMeTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tracks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
          >,
          ReturnType<typeof getMeTracksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.tracks.$put>,
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
  const mutationDefaults = getPutMeTracksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.me.tracks.$delete>,
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
  const mutationDefaults = getDeleteMeTracksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeTracksContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.contains.$get>>,
) {
  return ['me', '/me/tracks/contains', toValue(args)] as const
}

export function getMeTracksContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTracksContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tracks.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeTracksContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeTracksContainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeTracksContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTracksContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tracks.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.episodes.$get>>,
) {
  return ['me', '/me/episodes', toValue(args)] as const
}

export function getMeEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.episodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.episodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.episodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>
          >,
          ReturnType<typeof getMeEpisodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.episodes.$put>,
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
  const mutationDefaults = getPutMeEpisodesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.me.episodes.$delete>,
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
  const mutationDefaults = getDeleteMeEpisodesMutationOptions<TError, TOnMutateResult>(
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

export function getMeEpisodesContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.episodes.contains.$get>>,
) {
  return ['me', '/me/episodes/contains', toValue(args)] as const
}

export function getMeEpisodesContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.episodes.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeEpisodesContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.episodes.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeEpisodesContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.episodes.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeEpisodesContainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.episodes.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeEpisodesContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeEpisodesContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.episodes.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.shows.$get>>,
) {
  return ['me', '/me/shows', toValue(args)] as const
}

export function getMeShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.shows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.shows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.shows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>
          >,
          ReturnType<typeof getMeShowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeShows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.me.shows.$put>,
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
  const mutationDefaults = getPutMeShowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeShows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.me.shows.$delete>,
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
  const mutationDefaults = getDeleteMeShowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeShowsContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.shows.contains.$get>>,
) {
  return ['me', '/me/shows/contains', toValue(args)] as const
}

export function getMeShowsContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.shows.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeShowsContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.shows.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeShowsContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.shows.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeShowsContainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.shows.contains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeShowsContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeShowsContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.shows.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>>,
) {
  return ['users', '/users/:user_id/playlists', toValue(args)] as const
}

export function getUsersUserIdPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].playlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPlaylistsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserIdPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdPlaylistsMutationOptions<TError, TOnMutateResult>(
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

export function usePutPlaylistsPlaylistIdFollowers<
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
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>,
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
  const mutationDefaults = getPutPlaylistsPlaylistIdFollowersMutationOptions<
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

export function useDeletePlaylistsPlaylistIdFollowers<
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
                  ReturnType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>,
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
  const mutationDefaults = getDeletePlaylistsPlaylistIdFollowersMutationOptions<
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

export function getBrowseFeaturedPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browse)['featured-playlists']['$get']>>,
) {
  return ['browse', '/browse/featured-playlists', toValue(args)] as const
}

export function getBrowseFeaturedPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browse)['featured-playlists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowseFeaturedPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browse['featured-playlists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowseFeaturedPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browse)['featured-playlists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowseFeaturedPlaylistsQueryKey>
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
          Awaited<ReturnType<(typeof client.browse)['featured-playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseFeaturedPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowseFeaturedPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browse['featured-playlists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowseCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browse.categories.$get>>,
) {
  return ['browse', '/browse/categories', toValue(args)] as const
}

export function getBrowseCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browse.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowseCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browse.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowseCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browse.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>
            >
          >,
          ReturnType<typeof getBrowseCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browse.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowseCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browse.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowseCategoriesCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>
  >,
) {
  return ['browse', '/browse/categories/:category_id', toValue(args)] as const
}

export function getBrowseCategoriesCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowseCategoriesCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browse.categories[':category_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowseCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowseCategoriesCategoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseCategoriesCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowseCategoriesCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browse.categories[':category_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowseCategoriesCategoryIdPlaylistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
  >,
) {
  return ['browse', '/browse/categories/:category_id/playlists', toValue(args)] as const
}

export function getBrowseCategoriesCategoryIdPlaylistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowseCategoriesCategoryIdPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browse.categories[':category_id'].playlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowseCategoriesCategoryIdPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBrowseCategoriesCategoryIdPlaylistsQueryKey>
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
            ReturnType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseCategoriesCategoryIdPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowseCategoriesCategoryIdPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browse.categories[':category_id'].playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>
  >,
) {
  return ['playlists', '/playlists/:playlist_id/images', toValue(args)] as const
}

export function getPlaylistsPlaylistIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':playlist_id'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPlaylistsPlaylistIdImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPlaylistsPlaylistIdImagesMutationOptions<TError, TOnMutateResult>(
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

export function getBrowseNewReleasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browse)['new-releases']['$get']>>,
) {
  return ['browse', '/browse/new-releases', toValue(args)] as const
}

export function getBrowseNewReleasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browse)['new-releases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowseNewReleasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browse['new-releases'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowseNewReleases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.browse)['new-releases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBrowseNewReleasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.browse)['new-releases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseNewReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowseNewReleasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browse['new-releases'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.$get>>,
) {
  return ['me', '/me/following', toValue(args)] as const
}

export function getMeFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.following.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>
          >,
          ReturnType<typeof getMeFollowingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMeFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.me.following.$put>,
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
  const mutationDefaults = getPutMeFollowingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMeFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeFollowingMutationOptions<TError, TOnMutateResult>(
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

export function getMeFollowingContainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.contains.$get>>,
) {
  return ['me', '/me/following/contains', toValue(args)] as const
}

export function getMeFollowingContainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.contains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.following.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeFollowingContains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.following.contains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
            >
          >,
          ReturnType<typeof getMeFollowingContainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.following.contains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.following.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdFollowersContainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
  >,
) {
  return ['playlists', '/playlists/:playlist_id/followers/contains', toValue(args)] as const
}

export function getPlaylistsPlaylistIdFollowersContainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdFollowersContainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].followers.contains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdFollowersContains<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
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
                    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
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
                    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdFollowersContainsQueryKey>
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
            ReturnType<(typeof client.playlists)[':playlist_id']['followers']['contains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdFollowersContainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdFollowersContainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':playlist_id'].followers.contains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioFeaturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-features']['$get']>>,
) {
  return ['audio-features', '/audio-features', toValue(args)] as const
}

export function getAudioFeaturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-features']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['audio-features'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-features']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
            >
          >,
          ReturnType<typeof getAudioFeaturesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['audio-features'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioFeaturesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-features'][':id']['$get']>>,
) {
  return ['audio-features', '/audio-features/:id', toValue(args)] as const
}

export function getAudioFeaturesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-features'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioFeaturesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['audio-features'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioFeaturesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-features'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioFeaturesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-features'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioFeaturesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioFeaturesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['audio-features'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioAnalysisIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>>,
) {
  return ['audio-analysis', '/audio-analysis/:id', toValue(args)] as const
}

export function getAudioAnalysisIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioAnalysisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['audio-analysis'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioAnalysisIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audio-analysis'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioAnalysisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioAnalysisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['audio-analysis'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.$get>>,
) {
  return ['recommendations', '/recommendations', toValue(args)] as const
}

export function getRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>
            >
          >,
          ReturnType<typeof getRecommendationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecommendationsAvailableGenreSeedsQueryKey() {
  return ['recommendations', '/recommendations/available-genre-seeds'] as const
}

export function getRecommendationsAvailableGenreSeedsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecommendationsAvailableGenreSeedsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations['available-genre-seeds'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendationsAvailableGenreSeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
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
                  ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>
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
                  ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRecommendationsAvailableGenreSeedsQueryKey>
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
          Awaited<ReturnType<(typeof client.recommendations)['available-genre-seeds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsAvailableGenreSeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecommendationsAvailableGenreSeedsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations['available-genre-seeds'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePlayerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.player.$get>>,
) {
  return ['me', '/me/player', toValue(args)] as const
}

export function getMePlayerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.player.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePlayerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.player.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePlayer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.player.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>
          >,
          ReturnType<typeof getMePlayerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlayerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePlayerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.player.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMePlayer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.me.player.$put>,
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
  const mutationDefaults = getPutMePlayerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMePlayerDevicesQueryKey() {
  return ['me', '/me/player/devices'] as const
}

export function getMePlayerDevicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMePlayerDevicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.player.devices.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePlayerDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>
            >
          >,
          ReturnType<typeof getMePlayerDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMePlayerDevicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.player.devices.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePlayerCurrentlyPlayingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.player)['currently-playing']['$get']>>,
) {
  return ['me', '/me/player/currently-playing', toValue(args)] as const
}

export function getMePlayerCurrentlyPlayingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.player)['currently-playing']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePlayerCurrentlyPlayingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.player['currently-playing'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePlayerCurrentlyPlaying<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.player)['currently-playing']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePlayerCurrentlyPlayingQueryKey>
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
          Awaited<ReturnType<(typeof client.me.player)['currently-playing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerCurrentlyPlayingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePlayerCurrentlyPlayingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.player['currently-playing'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMePlayerPlay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.me.player.play.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.me.player.play.$put>,
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
  const mutationDefaults = getPutMePlayerPlayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMePlayerPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMePlayerPauseMutationOptions<TError, TOnMutateResult>(
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

export function usePostMePlayerNext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMePlayerNextMutationOptions<TError, TOnMutateResult>(
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

export function usePostMePlayerPrevious<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMePlayerPreviousMutationOptions<TError, TOnMutateResult>(
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

export function usePutMePlayerSeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.me.player.seek.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.me.player.seek.$put>,
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
  const mutationDefaults = getPutMePlayerSeekMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMePlayerRepeat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMePlayerRepeatMutationOptions<TError, TOnMutateResult>(
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

export function usePutMePlayerVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMePlayerVolumeMutationOptions<TError, TOnMutateResult>(
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

export function usePutMePlayerShuffle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMePlayerShuffleMutationOptions<TError, TOnMutateResult>(
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

export function getMePlayerRecentlyPlayedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.player)['recently-played']['$get']>>,
) {
  return ['me', '/me/player/recently-played', toValue(args)] as const
}

export function getMePlayerRecentlyPlayedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.player)['recently-played']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePlayerRecentlyPlayedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.player['recently-played'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePlayerRecentlyPlayed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.player)['recently-played']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePlayerRecentlyPlayedQueryKey>
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
          Awaited<ReturnType<(typeof client.me.player)['recently-played']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerRecentlyPlayedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePlayerRecentlyPlayedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.player['recently-played'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePlayerQueueQueryKey() {
  return ['me', '/me/player/queue'] as const
}

export function getMePlayerQueueQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMePlayerQueueQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.player.queue.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePlayerQueue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>
            >
          >,
          ReturnType<typeof getMePlayerQueueQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.player.queue.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMePlayerQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMePlayerQueueQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.player.queue.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMePlayerQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMePlayerQueueMutationOptions<TError, TOnMutateResult>(
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

export function getMarketsQueryKey() {
  return ['markets', '/markets'] as const
}

export function getMarketsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.markets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarkets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>
          >,
          ReturnType<typeof getMarketsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.markets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTopArtistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.top.artists.$get>>,
) {
  return ['me', '/me/top/artists', toValue(args)] as const
}

export function getMeTopArtistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.top.artists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTopArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.top.artists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeTopArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.top.artists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
          >,
          ReturnType<typeof getMeTopArtistsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.artists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTopArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.top.artists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTopTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.top.tracks.$get>>,
) {
  return ['me', '/me/top/tracks', toValue(args)] as const
}

export function getMeTopTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.top.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTopTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.top.tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeTopTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.top.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
          >,
          ReturnType<typeof getMeTopTracksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.top.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeTopTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTopTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.top.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
