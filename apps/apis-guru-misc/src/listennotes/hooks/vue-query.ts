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

export function getBestPodcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.best_podcasts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['best_podcasts', '/best_podcasts', keyArgs] as const
}

export function getBestPodcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.best_podcasts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBestPodcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.best_podcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBestPodcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.best_podcasts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
          >,
          ReturnType<typeof getBestPodcastsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.best_podcasts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBestPodcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBestPodcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.best_podcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCuratedPodcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.curated_podcasts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['curated_podcasts', '/curated_podcasts', keyArgs] as const
}

export function getCuratedPodcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.curated_podcasts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCuratedPodcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curated_podcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCuratedPodcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.curated_podcasts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>
            >
          >,
          ReturnType<typeof getCuratedPodcastsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curated_podcasts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCuratedPodcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCuratedPodcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.curated_podcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCuratedPodcastsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['curated_podcasts', '/curated_podcasts/:id', keyArgs] as const
}

export function getCuratedPodcastsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCuratedPodcastsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curated_podcasts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCuratedPodcastsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.curated_podcasts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCuratedPodcastsIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.curated_podcasts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCuratedPodcastsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCuratedPodcastsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.curated_podcasts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episodes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.episodes.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.episodes)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['episodes', '/episodes/:id', keyArgs] as const
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

export function getEpisodesIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['episodes', '/episodes/:id/recommendations', keyArgs] as const
}

export function getEpisodesIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodesIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episodes[':id'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.episodes)[':id']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpisodesIdRecommendationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.episodes)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodesIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodesIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episodes[':id'].recommendations.$get(toValue(args), {
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['genres', '/genres', keyArgs] as const
}

export function getGenresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenres<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJustListenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.just_listen.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['just_listen', '/just_listen', keyArgs] as const
}

export function getJustListenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.just_listen.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJustListenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.just_listen.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJustListen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.just_listen.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>
          >,
          ReturnType<typeof getJustListenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.just_listen.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJustListenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJustListenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.just_listen.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['languages', '/languages', keyArgs] as const
}

export function getLanguagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.languages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.languages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          ReturnType<typeof getLanguagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.languages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['playlists', '/playlists', keyArgs] as const
}

export function getPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          ReturnType<typeof getPlaylistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['playlists', '/playlists/:id', keyArgs] as const
}

export function getPlaylistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPlaylistsIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.podcasts.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.podcasts.submit.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.podcasts.submit.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.podcasts)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['podcasts', '/podcasts/:id', keyArgs] as const
}

export function getPodcastsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.podcasts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPodcastsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.podcasts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePodcastsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.podcasts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPodcastsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPodcastsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPodcastsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.podcasts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['podcasts', '/podcasts/:id/audience', keyArgs] as const
}

export function getPodcastsIdAudienceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPodcastsIdAudienceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.podcasts[':id'].audience.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePodcastsIdAudience<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.podcasts)[':id']['audience']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPodcastsIdAudienceQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.podcasts)[':id']['audience']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPodcastsIdAudienceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPodcastsIdAudienceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.podcasts[':id'].audience.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPodcastsIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['podcasts', '/podcasts/:id/recommendations', keyArgs] as const
}

export function getPodcastsIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPodcastsIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.podcasts[':id'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.podcasts)[':id']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPodcastsIdRecommendationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.podcasts)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPodcastsIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPodcastsIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.podcasts[':id'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['regions', '/regions', keyArgs] as const
}

export function getRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          ReturnType<typeof getRegionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRelatedSearchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.related_searches.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['related_searches', '/related_searches', keyArgs] as const
}

export function getRelatedSearchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.related_searches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelatedSearchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.related_searches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelatedSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.related_searches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>
            >
          >,
          ReturnType<typeof getRelatedSearchesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.related_searches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRelatedSearchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelatedSearchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.related_searches.$get(toValue(args), {
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
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search', keyArgs] as const
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

export function getSpellcheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spellcheck.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['spellcheck', '/spellcheck', keyArgs] as const
}

export function getSpellcheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spellcheck.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpellcheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spellcheck.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpellcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spellcheck.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>
          >,
          ReturnType<typeof getSpellcheckQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spellcheck.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpellcheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpellcheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spellcheck.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendingSearchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trending_searches.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['trending_searches', '/trending_searches', keyArgs] as const
}

export function getTrendingSearchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trending_searches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendingSearchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trending_searches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendingSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trending_searches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>
            >
          >,
          ReturnType<typeof getTrendingSearchesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trending_searches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingSearchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendingSearchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trending_searches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTypeaheadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.typeahead.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['typeahead', '/typeahead', keyArgs] as const
}

export function getTypeaheadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.typeahead.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTypeaheadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.typeahead.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTypeahead<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.typeahead.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>
          >,
          ReturnType<typeof getTypeaheadQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typeahead.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTypeaheadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTypeaheadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.typeahead.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
