import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBestPodcastsKey() {
  return ['best_podcasts'] as const
}

export function getCuratedPodcastsKey() {
  return ['curated_podcasts'] as const
}

export function getEpisodesKey() {
  return ['episodes'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getJustListenKey() {
  return ['just_listen'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getPlaylistsKey() {
  return ['playlists'] as const
}

export function getPodcastsKey() {
  return ['podcasts'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getRelatedSearchesKey() {
  return ['related_searches'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSpellcheckKey() {
  return ['spellcheck'] as const
}

export function getTrendingSearchesKey() {
  return ['trending_searches'] as const
}

export function getTypeaheadKey() {
  return ['typeahead'] as const
}

export function getBestPodcastsQueryKey(args: InferRequestType<typeof client.best_podcasts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['best_podcasts', '/best_podcasts', keyArgs] as const
}

export function getBestPodcastsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.best_podcasts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBestPodcastsQueryKey>
  >({
    queryKey: getBestPodcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.best_podcasts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBestPodcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.best_podcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBestPodcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBestPodcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBestPodcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.best_podcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBestPodcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBestPodcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCuratedPodcastsQueryKey(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['curated_podcasts', '/curated_podcasts', keyArgs] as const
}

export function getCuratedPodcastsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.curated_podcasts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCuratedPodcastsQueryKey>
  >({
    queryKey: getCuratedPodcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.curated_podcasts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCuratedPodcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCuratedPodcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCuratedPodcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCuratedPodcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.curated_podcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCuratedPodcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCuratedPodcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCuratedPodcastsIdQueryKey(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['curated_podcasts', '/curated_podcasts/:id', keyArgs] as const
}

export function getCuratedPodcastsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCuratedPodcastsIdQueryKey>
  >({
    queryKey: getCuratedPodcastsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.curated_podcasts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCuratedPodcastsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCuratedPodcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCuratedPodcastsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCuratedPodcastsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCuratedPodcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCuratedPodcastsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEpisodesMutationKey() {
  return ['episodes', '/episodes', 'POST'] as const
}

export function getPostEpisodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$post>>>>>,
    TError,
    InferRequestType<typeof client.episodes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEpisodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.episodes.$post>) {
      return parseResponse(client.episodes.$post(args, options))
    },
  })
}

export function usePostEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.episodes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEpisodesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEpisodesIdQueryKey(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['episodes', '/episodes/:id', keyArgs] as const
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

export function useEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEpisodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEpisodesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.episodes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEpisodesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEpisodesIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['episodes', '/episodes/:id/recommendations', keyArgs] as const
}

export function getEpisodesIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdRecommendationsQueryKey>
  >({
    queryKey: getEpisodesIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episodes[':id'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEpisodesIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEpisodesIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEpisodesIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodesIdRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEpisodesIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenresQueryKey(args: InferRequestType<typeof client.genres.$get>) {
  const { header: _, ...keyArgs } = args
  return ['genres', '/genres', keyArgs] as const
}

export function getGenresQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.genres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresQueryKey>
  >({
    queryKey: getGenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenres<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.genres.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenres<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.genres.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJustListenQueryKey(args: InferRequestType<typeof client.just_listen.$get>) {
  const { header: _, ...keyArgs } = args
  return ['just_listen', '/just_listen', keyArgs] as const
}

export function getJustListenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.just_listen.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJustListenQueryKey>
  >({
    queryKey: getJustListenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.just_listen.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJustListen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.just_listen.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJustListenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJustListenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJustListen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.just_listen.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJustListenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJustListenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLanguagesQueryKey(args: InferRequestType<typeof client.languages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['languages', '/languages', keyArgs] as const
}

export function getLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >({
    queryKey: getLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.languages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLanguagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlaylistsQueryKey(args: InferRequestType<typeof client.playlists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['playlists', '/playlists', keyArgs] as const
}

export function getPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >({
    queryKey: getPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlaylistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlaylistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlaylistsIdQueryKey(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['playlists', '/playlists/:id', keyArgs] as const
}

export function getPlaylistsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsIdQueryKey>
  >({
    queryKey: getPlaylistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlaylistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlaylistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlaylistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlaylistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPodcastsMutationKey() {
  return ['podcasts', '/podcasts', 'POST'] as const
}

export function getPostPodcastsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.$post>>>>>,
    TError,
    InferRequestType<typeof client.podcasts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPodcastsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.podcasts.$post>) {
      return parseResponse(client.podcasts.$post(args, options))
    },
  })
}

export function usePostPodcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.podcasts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPodcastsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPodcastsSubmitMutationKey() {
  return ['podcasts', '/podcasts/submit', 'POST'] as const
}

export function getPostPodcastsSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.submit.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.podcasts.submit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPodcastsSubmitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.podcasts.submit.$post>) {
      return parseResponse(client.podcasts.submit.$post(args, options))
    },
  })
}

export function usePostPodcastsSubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.submit.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.podcasts.submit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPodcastsSubmitMutationOptions<TError, TOnMutateResult>(
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

export function getPodcastsIdQueryKey(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['podcasts', '/podcasts/:id', keyArgs] as const
}

export function getPodcastsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.podcasts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPodcastsIdQueryKey>
  >({
    queryKey: getPodcastsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.podcasts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePodcastsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPodcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPodcastsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePodcastsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPodcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPodcastsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletePodcastsIdMutationKey() {
  return ['podcasts', '/podcasts/:id', 'DELETE'] as const
}

export function getDeletePodcastsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.podcasts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePodcastsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.podcasts)[':id']['$delete']>) {
      return parseResponse(client.podcasts[':id'].$delete(args, options))
    },
  })
}

export function useDeletePodcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.podcasts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePodcastsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPodcastsIdAudienceQueryKey(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['podcasts', '/podcasts/:id/audience', keyArgs] as const
}

export function getPodcastsIdAudienceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPodcastsIdAudienceQueryKey>
  >({
    queryKey: getPodcastsIdAudienceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.podcasts[':id'].audience.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePodcastsIdAudience<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPodcastsIdAudienceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPodcastsIdAudienceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePodcastsIdAudience<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPodcastsIdAudienceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPodcastsIdAudienceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPodcastsIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['podcasts', '/podcasts/:id/recommendations', keyArgs] as const
}

export function getPodcastsIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPodcastsIdRecommendationsQueryKey>
  >({
    queryKey: getPodcastsIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.podcasts[':id'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePodcastsIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPodcastsIdRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPodcastsIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePodcastsIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPodcastsIdRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPodcastsIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRegionsQueryKey(args: InferRequestType<typeof client.regions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions', keyArgs] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.regions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.regions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.regions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRelatedSearchesQueryKey(
  args: InferRequestType<typeof client.related_searches.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['related_searches', '/related_searches', keyArgs] as const
}

export function getRelatedSearchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.related_searches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRelatedSearchesQueryKey>
  >({
    queryKey: getRelatedSearchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.related_searches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRelatedSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.related_searches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRelatedSearchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRelatedSearchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRelatedSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.related_searches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRelatedSearchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRelatedSearchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search', keyArgs] as const
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

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpellcheckQueryKey(args: InferRequestType<typeof client.spellcheck.$get>) {
  const { header: _, ...keyArgs } = args
  return ['spellcheck', '/spellcheck', keyArgs] as const
}

export function getSpellcheckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spellcheck.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpellcheckQueryKey>
  >({
    queryKey: getSpellcheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spellcheck.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpellcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spellcheck.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpellcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpellcheckQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpellcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spellcheck.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpellcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpellcheckQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTrendingSearchesQueryKey(
  args: InferRequestType<typeof client.trending_searches.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['trending_searches', '/trending_searches', keyArgs] as const
}

export function getTrendingSearchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.trending_searches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingSearchesQueryKey>
  >({
    queryKey: getTrendingSearchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trending_searches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTrendingSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trending_searches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendingSearchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTrendingSearchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTrendingSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trending_searches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendingSearchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTrendingSearchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTypeaheadQueryKey(args: InferRequestType<typeof client.typeahead.$get>) {
  const { header: _, ...keyArgs } = args
  return ['typeahead', '/typeahead', keyArgs] as const
}

export function getTypeaheadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.typeahead.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTypeaheadQueryKey>
  >({
    queryKey: getTypeaheadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.typeahead.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTypeahead<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.typeahead.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTypeaheadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTypeaheadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTypeahead<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.typeahead.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTypeaheadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTypeaheadQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
