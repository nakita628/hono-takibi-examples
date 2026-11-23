import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnimeKey() {
  return ['anime'] as const
}

export function getCharactersKey() {
  return ['characters'] as const
}

export function getClubsKey() {
  return ['clubs'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getMagazinesKey() {
  return ['magazines'] as const
}

export function getMangaKey() {
  return ['manga'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getProducersKey() {
  return ['producers'] as const
}

export function getRandomKey() {
  return ['random'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getSchedulesKey() {
  return ['schedules'] as const
}

export function getSeasonsKey() {
  return ['seasons'] as const
}

export function getTopKey() {
  return ['top'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWatchKey() {
  return ['watch'] as const
}

export function getAnimeIdFullQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['full']['$get']>,
) {
  return ['anime', '/anime/:id/full', args] as const
}

export function getAnimeIdFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdFullQueryKey>
  >({
    queryKey: getAnimeIdFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].full.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdQueryKey(args: InferRequestType<(typeof client.anime)[':id']['$get']>) {
  return ['anime', '/anime/:id', args] as const
}

export function getAnimeIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.anime)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdQueryKey>
  >({
    queryKey: getAnimeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdCharactersQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['characters']['$get']>,
) {
  return ['anime', '/anime/:id/characters', args] as const
}

export function getAnimeIdCharactersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['characters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdCharactersQueryKey>
  >({
    queryKey: getAnimeIdCharactersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].characters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['characters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['characters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdStaffQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['staff']['$get']>,
) {
  return ['anime', '/anime/:id/staff', args] as const
}

export function getAnimeIdStaffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['staff']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdStaffQueryKey>
  >({
    queryKey: getAnimeIdStaffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].staff.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['staff']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdStaffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['staff']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdStaffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdEpisodesQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>,
) {
  return ['anime', '/anime/:id/episodes', args] as const
}

export function getAnimeIdEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdEpisodesQueryKey>
  >({
    queryKey: getAnimeIdEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdEpisodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdEpisodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdEpisodesEpisodeQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>,
) {
  return ['anime', '/anime/:id/episodes/:episode', args] as const
}

export function getAnimeIdEpisodesEpisodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdEpisodesEpisodeQueryKey>
  >({
    queryKey: getAnimeIdEpisodesEpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].episodes[':episode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdEpisodesEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdEpisodesEpisodeQueryKey>
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
      ...getAnimeIdEpisodesEpisodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnimeIdEpisodesEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdEpisodesEpisodeQueryKey>
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
      ...getAnimeIdEpisodesEpisodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnimeIdNewsQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['news']['$get']>,
) {
  return ['anime', '/anime/:id/news', args] as const
}

export function getAnimeIdNewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['news']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdNewsQueryKey>
  >({
    queryKey: getAnimeIdNewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].news.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['news']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdNewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['news']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdNewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdForumQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['forum']['$get']>,
) {
  return ['anime', '/anime/:id/forum', args] as const
}

export function getAnimeIdForumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['forum']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdForumQueryKey>
  >({
    queryKey: getAnimeIdForumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].forum.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['forum']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdForumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdForumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['forum']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdForumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdForumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdVideosQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['$get']>,
) {
  return ['anime', '/anime/:id/videos', args] as const
}

export function getAnimeIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdVideosQueryKey>
  >({
    queryKey: getAnimeIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdVideosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdVideosEpisodesQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>,
) {
  return ['anime', '/anime/:id/videos/episodes', args] as const
}

export function getAnimeIdVideosEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdVideosEpisodesQueryKey>
  >({
    queryKey: getAnimeIdVideosEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].videos.episodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdVideosEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdVideosEpisodesQueryKey>
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
      ...getAnimeIdVideosEpisodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnimeIdVideosEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdVideosEpisodesQueryKey>
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
      ...getAnimeIdVideosEpisodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnimeIdPicturesQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>,
) {
  return ['anime', '/anime/:id/pictures', args] as const
}

export function getAnimeIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdPicturesQueryKey>
  >({
    queryKey: getAnimeIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].pictures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdStatisticsQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>,
) {
  return ['anime', '/anime/:id/statistics', args] as const
}

export function getAnimeIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdStatisticsQueryKey>
  >({
    queryKey: getAnimeIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdMoreinfoQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>,
) {
  return ['anime', '/anime/:id/moreinfo', args] as const
}

export function getAnimeIdMoreinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdMoreinfoQueryKey>
  >({
    queryKey: getAnimeIdMoreinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].moreinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdMoreinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdMoreinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdMoreinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdMoreinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>,
) {
  return ['anime', '/anime/:id/recommendations', args] as const
}

export function getAnimeIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdRecommendationsQueryKey>
  >({
    queryKey: getAnimeIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdRecommendationsQueryKey>
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
      ...getAnimeIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnimeIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdRecommendationsQueryKey>
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
      ...getAnimeIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnimeIdUserupdatesQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>,
) {
  return ['anime', '/anime/:id/userupdates', args] as const
}

export function getAnimeIdUserupdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdUserupdatesQueryKey>
  >({
    queryKey: getAnimeIdUserupdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].userupdates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdUserupdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdUserupdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdUserupdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdUserupdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdReviewsQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>,
) {
  return ['anime', '/anime/:id/reviews', args] as const
}

export function getAnimeIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdReviewsQueryKey>
  >({
    queryKey: getAnimeIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].reviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdRelationsQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['relations']['$get']>,
) {
  return ['anime', '/anime/:id/relations', args] as const
}

export function getAnimeIdRelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdRelationsQueryKey>
  >({
    queryKey: getAnimeIdRelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].relations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['relations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdRelationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['relations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdRelationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdThemesQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['themes']['$get']>,
) {
  return ['anime', '/anime/:id/themes', args] as const
}

export function getAnimeIdThemesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['themes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdThemesQueryKey>
  >({
    queryKey: getAnimeIdThemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].themes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['themes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdThemesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['themes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdThemesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdExternalQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['external']['$get']>,
) {
  return ['anime', '/anime/:id/external', args] as const
}

export function getAnimeIdExternalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdExternalQueryKey>
  >({
    queryKey: getAnimeIdExternalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].external.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnimeIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['external']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['external']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeIdStreamingQueryKey(
  args: InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>,
) {
  return ['anime', '/anime/:id/streaming', args] as const
}

export function getAnimeIdStreamingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdStreamingQueryKey>
  >({
    queryKey: getAnimeIdStreamingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime[':id'].streaming.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnimeIdStreaming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdStreamingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeIdStreamingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnimeIdStreaming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnimeIdStreamingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeIdStreamingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersIdFullQueryKey(
  args: InferRequestType<(typeof client.characters)[':id']['full']['$get']>,
) {
  return ['characters', '/characters/:id/full', args] as const
}

export function getCharactersIdFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdFullQueryKey>
  >({
    queryKey: getCharactersIdFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters[':id'].full.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCharactersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharactersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersIdQueryKey(
  args: InferRequestType<(typeof client.characters)[':id']['$get']>,
) {
  return ['characters', '/characters/:id', args] as const
}

export function getCharactersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdQueryKey>
  >({
    queryKey: getCharactersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCharactersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharactersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersIdAnimeQueryKey(
  args: InferRequestType<(typeof client.characters)[':id']['anime']['$get']>,
) {
  return ['characters', '/characters/:id/anime', args] as const
}

export function getCharactersIdAnimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['anime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdAnimeQueryKey>
  >({
    queryKey: getCharactersIdAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters[':id'].anime.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCharactersIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['anime']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersIdAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharactersIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['anime']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersIdAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersIdMangaQueryKey(
  args: InferRequestType<(typeof client.characters)[':id']['manga']['$get']>,
) {
  return ['characters', '/characters/:id/manga', args] as const
}

export function getCharactersIdMangaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['manga']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdMangaQueryKey>
  >({
    queryKey: getCharactersIdMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters[':id'].manga.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCharactersIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['manga']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersIdMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharactersIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['manga']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersIdMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersIdVoicesQueryKey(
  args: InferRequestType<(typeof client.characters)[':id']['voices']['$get']>,
) {
  return ['characters', '/characters/:id/voices', args] as const
}

export function getCharactersIdVoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['voices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdVoicesQueryKey>
  >({
    queryKey: getCharactersIdVoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters[':id'].voices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCharactersIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['voices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdVoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersIdVoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharactersIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['voices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdVoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersIdVoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersIdPicturesQueryKey(
  args: InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>,
) {
  return ['characters', '/characters/:id/pictures', args] as const
}

export function getCharactersIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdPicturesQueryKey>
  >({
    queryKey: getCharactersIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters[':id'].pictures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCharactersIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharactersIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClubsIdQueryKey(args: InferRequestType<(typeof client.clubs)[':id']['$get']>) {
  return ['clubs', '/clubs/:id', args] as const
}

export function getClubsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.clubs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdQueryKey>
  >({
    queryKey: getClubsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clubs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClubsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClubsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClubsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClubsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClubsIdMembersQueryKey(
  args: InferRequestType<(typeof client.clubs)[':id']['members']['$get']>,
) {
  return ['clubs', '/clubs/:id/members', args] as const
}

export function getClubsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdMembersQueryKey>
  >({
    queryKey: getClubsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clubs[':id'].members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClubsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClubsIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClubsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClubsIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClubsIdStaffQueryKey(
  args: InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>,
) {
  return ['clubs', '/clubs/:id/staff', args] as const
}

export function getClubsIdStaffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdStaffQueryKey>
  >({
    queryKey: getClubsIdStaffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clubs[':id'].staff.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClubsIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClubsIdStaffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClubsIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClubsIdStaffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClubsIdRelationsQueryKey(
  args: InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>,
) {
  return ['clubs', '/clubs/:id/relations', args] as const
}

export function getClubsIdRelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdRelationsQueryKey>
  >({
    queryKey: getClubsIdRelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clubs[':id'].relations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClubsIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClubsIdRelationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClubsIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClubsIdRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClubsIdRelationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenresAnimeQueryKey(args: InferRequestType<typeof client.genres.anime.$get>) {
  return ['genres', '/genres/anime', args] as const
}

export function getGenresAnimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.genres.anime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresAnimeQueryKey>
  >({
    queryKey: getGenresAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres.anime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenresAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.genres.anime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGenresAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenresAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenresAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.genres.anime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGenresAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenresAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenresMangaQueryKey(args: InferRequestType<typeof client.genres.manga.$get>) {
  return ['genres', '/genres/manga', args] as const
}

export function getGenresMangaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.genres.manga.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresMangaQueryKey>
  >({
    queryKey: getGenresMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres.manga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenresManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.genres.manga.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGenresMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenresMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenresManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.genres.manga.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGenresMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenresMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMagazinesQueryKey(args: InferRequestType<typeof client.magazines.$get>) {
  return ['magazines', '/magazines', args] as const
}

export function getMagazinesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.magazines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMagazinesQueryKey>
  >({
    queryKey: getMagazinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.magazines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMagazines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.magazines.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMagazinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMagazinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMagazines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.magazines.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMagazinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMagazinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdFullQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['full']['$get']>,
) {
  return ['manga', '/manga/:id/full', args] as const
}

export function getMangaIdFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdFullQueryKey>
  >({
    queryKey: getMangaIdFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].full.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdQueryKey(args: InferRequestType<(typeof client.manga)[':id']['$get']>) {
  return ['manga', '/manga/:id', args] as const
}

export function getMangaIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.manga)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdQueryKey>
  >({
    queryKey: getMangaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdCharactersQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['characters']['$get']>,
) {
  return ['manga', '/manga/:id/characters', args] as const
}

export function getMangaIdCharactersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['characters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdCharactersQueryKey>
  >({
    queryKey: getMangaIdCharactersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].characters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMangaIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['characters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['characters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdNewsQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['news']['$get']>,
) {
  return ['manga', '/manga/:id/news', args] as const
}

export function getMangaIdNewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['news']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdNewsQueryKey>
  >({
    queryKey: getMangaIdNewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].news.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['news']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdNewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['news']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdNewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdNewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdForumQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['forum']['$get']>,
) {
  return ['manga', '/manga/:id/forum', args] as const
}

export function getMangaIdForumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['forum']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdForumQueryKey>
  >({
    queryKey: getMangaIdForumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].forum.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['forum']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdForumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdForumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['forum']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdForumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdForumQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdPicturesQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>,
) {
  return ['manga', '/manga/:id/pictures', args] as const
}

export function getMangaIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdPicturesQueryKey>
  >({
    queryKey: getMangaIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].pictures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdStatisticsQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>,
) {
  return ['manga', '/manga/:id/statistics', args] as const
}

export function getMangaIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdStatisticsQueryKey>
  >({
    queryKey: getMangaIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMangaIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdMoreinfoQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>,
) {
  return ['manga', '/manga/:id/moreinfo', args] as const
}

export function getMangaIdMoreinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdMoreinfoQueryKey>
  >({
    queryKey: getMangaIdMoreinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].moreinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdMoreinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdMoreinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdMoreinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdMoreinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>,
) {
  return ['manga', '/manga/:id/recommendations', args] as const
}

export function getMangaIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdRecommendationsQueryKey>
  >({
    queryKey: getMangaIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMangaIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdRecommendationsQueryKey>
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
      ...getMangaIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMangaIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdRecommendationsQueryKey>
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
      ...getMangaIdRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMangaIdUserupdatesQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>,
) {
  return ['manga', '/manga/:id/userupdates', args] as const
}

export function getMangaIdUserupdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdUserupdatesQueryKey>
  >({
    queryKey: getMangaIdUserupdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].userupdates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMangaIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdUserupdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdUserupdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdUserupdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdUserupdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdReviewsQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>,
) {
  return ['manga', '/manga/:id/reviews', args] as const
}

export function getMangaIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdReviewsQueryKey>
  >({
    queryKey: getMangaIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].reviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdRelationsQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['relations']['$get']>,
) {
  return ['manga', '/manga/:id/relations', args] as const
}

export function getMangaIdRelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdRelationsQueryKey>
  >({
    queryKey: getMangaIdRelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].relations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMangaIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['relations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdRelationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['relations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdRelationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaIdExternalQueryKey(
  args: InferRequestType<(typeof client.manga)[':id']['external']['$get']>,
) {
  return ['manga', '/manga/:id/external', args] as const
}

export function getMangaIdExternalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdExternalQueryKey>
  >({
    queryKey: getMangaIdExternalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga[':id'].external.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMangaIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['external']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaIdExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMangaIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.manga)[':id']['external']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMangaIdExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaIdExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdFullQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['full']['$get']>,
) {
  return ['people', '/people/:id/full', args] as const
}

export function getPeopleIdFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdFullQueryKey>
  >({
    queryKey: getPeopleIdFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].full.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdQueryKey(args: InferRequestType<(typeof client.people)[':id']['$get']>) {
  return ['people', '/people/:id', args] as const
}

export function getPeopleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.people)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >({
    queryKey: getPeopleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdAnimeQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['anime']['$get']>,
) {
  return ['people', '/people/:id/anime', args] as const
}

export function getPeopleIdAnimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['anime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdAnimeQueryKey>
  >({
    queryKey: getPeopleIdAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].anime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['anime']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['anime']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdVoicesQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['voices']['$get']>,
) {
  return ['people', '/people/:id/voices', args] as const
}

export function getPeopleIdVoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['voices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdVoicesQueryKey>
  >({
    queryKey: getPeopleIdVoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].voices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['voices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdVoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdVoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['voices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdVoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdVoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdMangaQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['manga']['$get']>,
) {
  return ['people', '/people/:id/manga', args] as const
}

export function getPeopleIdMangaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['manga']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdMangaQueryKey>
  >({
    queryKey: getPeopleIdMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].manga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['manga']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['manga']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdPicturesQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['pictures']['$get']>,
) {
  return ['people', '/people/:id/pictures', args] as const
}

export function getPeopleIdPicturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdPicturesQueryKey>
  >({
    queryKey: getPeopleIdPicturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].pictures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePeopleIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['pictures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdPicturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdPicturesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProducersIdQueryKey(
  args: InferRequestType<(typeof client.producers)[':id']['$get']>,
) {
  return ['producers', '/producers/:id', args] as const
}

export function getProducersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProducersIdQueryKey>
  >({
    queryKey: getProducersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.producers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProducersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProducersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProducersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProducersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProducersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProducersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProducersIdFullQueryKey(
  args: InferRequestType<(typeof client.producers)[':id']['full']['$get']>,
) {
  return ['producers', '/producers/:id/full', args] as const
}

export function getProducersIdFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProducersIdFullQueryKey>
  >({
    queryKey: getProducersIdFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.producers[':id'].full.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProducersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProducersIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProducersIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProducersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProducersIdFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProducersIdFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProducersIdExternalQueryKey(
  args: InferRequestType<(typeof client.producers)[':id']['external']['$get']>,
) {
  return ['producers', '/producers/:id/external', args] as const
}

export function getProducersIdExternalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProducersIdExternalQueryKey>
  >({
    queryKey: getProducersIdExternalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.producers[':id'].external.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProducersIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['external']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProducersIdExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProducersIdExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProducersIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.producers)[':id']['external']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProducersIdExternalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProducersIdExternalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRandomAnimeQueryKey() {
  return ['random', '/random/anime'] as const
}

export function getRandomAnimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRandomAnimeQueryKey>
  >({
    queryKey: getRandomAnimeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.random.anime.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRandomAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRandomAnimeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRandomAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRandomAnimeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRandomMangaQueryKey() {
  return ['random', '/random/manga'] as const
}

export function getRandomMangaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRandomMangaQueryKey>
  >({
    queryKey: getRandomMangaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.random.manga.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRandomManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRandomMangaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRandomManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRandomMangaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRandomCharactersQueryKey() {
  return ['random', '/random/characters'] as const
}

export function getRandomCharactersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRandomCharactersQueryKey>
  >({
    queryKey: getRandomCharactersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.random.characters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRandomCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRandomCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRandomCharactersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRandomCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRandomCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRandomCharactersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRandomPeopleQueryKey() {
  return ['random', '/random/people'] as const
}

export function getRandomPeopleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRandomPeopleQueryKey>
  >({
    queryKey: getRandomPeopleQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.random.people.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRandomPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRandomPeopleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRandomPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRandomPeopleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRandomUsersQueryKey() {
  return ['random', '/random/users'] as const
}

export function getRandomUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRandomUsersQueryKey>
  >({
    queryKey: getRandomUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.random.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRandomUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRandomUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRandomUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRandomUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRandomUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecommendationsAnimeQueryKey(
  args: InferRequestType<typeof client.recommendations.anime.$get>,
) {
  return ['recommendations', '/recommendations/anime', args] as const
}

export function getRecommendationsAnimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.anime.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsAnimeQueryKey>
  >({
    queryKey: getRecommendationsAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations.anime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecommendationsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.anime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecommendationsAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecommendationsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.anime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecommendationsAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecommendationsMangaQueryKey(
  args: InferRequestType<typeof client.recommendations.manga.$get>,
) {
  return ['recommendations', '/recommendations/manga', args] as const
}

export function getRecommendationsMangaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.manga.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsMangaQueryKey>
  >({
    queryKey: getRecommendationsMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations.manga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecommendationsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.manga.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecommendationsMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecommendationsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.manga.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecommendationsMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReviewsAnimeQueryKey(args: InferRequestType<typeof client.reviews.anime.$get>) {
  return ['reviews', '/reviews/anime', args] as const
}

export function getReviewsAnimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reviews.anime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsAnimeQueryKey>
  >({
    queryKey: getReviewsAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews.anime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReviewsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reviews.anime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReviewsAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReviewsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reviews.anime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReviewsAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReviewsMangaQueryKey(args: InferRequestType<typeof client.reviews.manga.$get>) {
  return ['reviews', '/reviews/manga', args] as const
}

export function getReviewsMangaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reviews.manga.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsMangaQueryKey>
  >({
    queryKey: getReviewsMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews.manga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReviewsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reviews.manga.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReviewsMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReviewsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reviews.manga.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReviewsMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSchedulesQueryKey(args: InferRequestType<typeof client.schedules.$get>) {
  return ['schedules', '/schedules', args] as const
}

export function getSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >({
    queryKey: getSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnimeQueryKey(args: InferRequestType<typeof client.anime.$get>) {
  return ['anime', '/anime', args] as const
}

export function getAnimeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnimeQueryKey>
  >({
    queryKey: getAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMangaQueryKey(args: InferRequestType<typeof client.manga.$get>) {
  return ['manga', '/manga', args] as const
}

export function getMangaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.manga.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMangaQueryKey>
  >({
    queryKey: getMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.manga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManga<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.manga.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManga<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.manga.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleQueryKey(args: InferRequestType<typeof client.people.$get>) {
  return ['people', '/people', args] as const
}

export function getPeopleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >({
    queryKey: getPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.people.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.people.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCharactersQueryKey(args: InferRequestType<typeof client.characters.$get>) {
  return ['characters', '/characters', args] as const
}

export function getCharactersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.characters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCharactersQueryKey>
  >({
    queryKey: getCharactersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.characters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.characters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.characters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserbyidIdQueryKey(
  args: InferRequestType<(typeof client.users.userbyid)[':id']['$get']>,
) {
  return ['users', '/users/userbyid/:id', args] as const
}

export function getUsersUserbyidIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.userbyid)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserbyidIdQueryKey>
  >({
    queryKey: getUsersUserbyidIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.userbyid[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserbyidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.userbyid)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserbyidIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserbyidIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserbyidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.userbyid)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserbyidIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserbyidIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClubsQueryKey(args: InferRequestType<typeof client.clubs.$get>) {
  return ['clubs', '/clubs', args] as const
}

export function getClubsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clubs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClubsQueryKey>
  >({
    queryKey: getClubsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clubs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClubs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clubs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClubs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clubs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProducersQueryKey(args: InferRequestType<typeof client.producers.$get>) {
  return ['producers', '/producers', args] as const
}

export function getProducersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.producers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProducersQueryKey>
  >({
    queryKey: getProducersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.producers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProducers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.producers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProducersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProducersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProducers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.producers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProducersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProducersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeasonsNowQueryKey(args: InferRequestType<typeof client.seasons.now.$get>) {
  return ['seasons', '/seasons/now', args] as const
}

export function getSeasonsNowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.seasons.now.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonsNowQueryKey>
  >({
    queryKey: getSeasonsNowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.seasons.now.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeasonsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.seasons.now.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsNowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeasonsNowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeasonsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.seasons.now.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsNowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeasonsNowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeasonsYearSeasonQueryKey(
  args: InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>,
) {
  return ['seasons', '/seasons/:year/:season', args] as const
}

export function getSeasonsYearSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonsYearSeasonQueryKey>
  >({
    queryKey: getSeasonsYearSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.seasons[':year'][':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeasonsYearSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsYearSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeasonsYearSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeasonsYearSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsYearSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeasonsYearSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeasonsQueryKey() {
  return ['seasons', '/seasons'] as const
}

export function getSeasonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonsQueryKey>
  >({
    queryKey: getSeasonsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.seasons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeasonsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeasonsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeasonsUpcomingQueryKey(
  args: InferRequestType<typeof client.seasons.upcoming.$get>,
) {
  return ['seasons', '/seasons/upcoming', args] as const
}

export function getSeasonsUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.seasons.upcoming.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonsUpcomingQueryKey>
  >({
    queryKey: getSeasonsUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.seasons.upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeasonsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.seasons.upcoming.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeasonsUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeasonsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.seasons.upcoming.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeasonsUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopAnimeQueryKey(args: InferRequestType<typeof client.top.anime.$get>) {
  return ['top', '/top/anime', args] as const
}

export function getTopAnimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.top.anime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopAnimeQueryKey>
  >({
    queryKey: getTopAnimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top.anime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.anime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.anime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopAnimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopMangaQueryKey(args: InferRequestType<typeof client.top.manga.$get>) {
  return ['top', '/top/manga', args] as const
}

export function getTopMangaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.top.manga.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopMangaQueryKey>
  >({
    queryKey: getTopMangaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top.manga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.manga.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.manga.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopMangaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopPeopleQueryKey(args: InferRequestType<typeof client.top.people.$get>) {
  return ['top', '/top/people', args] as const
}

export function getTopPeopleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.top.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopPeopleQueryKey>
  >({
    queryKey: getTopPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.people.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.people.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopCharactersQueryKey(
  args: InferRequestType<typeof client.top.characters.$get>,
) {
  return ['top', '/top/characters', args] as const
}

export function getTopCharactersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.top.characters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTopCharactersQueryKey>
  >({
    queryKey: getTopCharactersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top.characters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.characters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.characters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopCharactersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopCharactersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopReviewsQueryKey(args: InferRequestType<typeof client.top.reviews.$get>) {
  return ['top', '/top/reviews', args] as const
}

export function getTopReviewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.top.reviews.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopReviewsQueryKey>
  >({
    queryKey: getTopReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top.reviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.reviews.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.top.reviews.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameFullQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['full']['$get']>,
) {
  return ['users', '/users/:username/full', args] as const
}

export function getUsersUsernameFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameFullQueryKey>
  >({
    queryKey: getUsersUsernameFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].full.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['full']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsernameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['full']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameFullQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
) {
  return ['users', '/users/:username', args] as const
}

export function getUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameQueryKey>
  >({
    queryKey: getUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameStatisticsQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['statistics']['$get']>,
) {
  return ['users', '/users/:username/statistics', args] as const
}

export function getUsersUsernameStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameStatisticsQueryKey>
  >({
    queryKey: getUsersUsernameStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameStatisticsQueryKey>
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
      ...getUsersUsernameStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameStatisticsQueryKey>
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
      ...getUsersUsernameStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUsernameFavoritesQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['favorites']['$get']>,
) {
  return ['users', '/users/:username/favorites', args] as const
}

export function getUsersUsernameFavoritesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameFavoritesQueryKey>
  >({
    queryKey: getUsersUsernameFavoritesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].favorites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['favorites']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameFavoritesQueryKey>
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
      ...getUsersUsernameFavoritesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['favorites']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameFavoritesQueryKey>
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
      ...getUsersUsernameFavoritesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUsernameUserupdatesQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>,
) {
  return ['users', '/users/:username/userupdates', args] as const
}

export function getUsersUsernameUserupdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameUserupdatesQueryKey>
  >({
    queryKey: getUsersUsernameUserupdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].userupdates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameUserupdatesQueryKey>
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
      ...getUsersUsernameUserupdatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameUserupdatesQueryKey>
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
      ...getUsersUsernameUserupdatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUsernameAboutQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['about']['$get']>,
) {
  return ['users', '/users/:username/about', args] as const
}

export function getUsersUsernameAboutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['about']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameAboutQueryKey>
  >({
    queryKey: getUsersUsernameAboutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].about.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameAbout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['about']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameAboutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsernameAbout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['about']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameAboutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameHistoryQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['history']['$get']>,
) {
  return ['users', '/users/:username/history', args] as const
}

export function getUsersUsernameHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameHistoryQueryKey>
  >({
    queryKey: getUsersUsernameHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsernameHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameFriendsQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['friends']['$get']>,
) {
  return ['users', '/users/:username/friends', args] as const
}

export function getUsersUsernameFriendsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['friends']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameFriendsQueryKey>
  >({
    queryKey: getUsersUsernameFriendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].friends.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['friends']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameFriendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameFriendsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsernameFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['friends']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameFriendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameFriendsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameAnimelistQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['animelist']['$get']>,
) {
  return ['users', '/users/:username/animelist', args] as const
}

export function getUsersUsernameAnimelistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['animelist']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameAnimelistQueryKey>
  >({
    queryKey: getUsersUsernameAnimelistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].animelist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameAnimelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['animelist']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameAnimelistQueryKey>
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
      ...getUsersUsernameAnimelistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameAnimelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['animelist']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameAnimelistQueryKey>
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
      ...getUsersUsernameAnimelistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUsernameMangalistQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>,
) {
  return ['users', '/users/:username/mangalist', args] as const
}

export function getUsersUsernameMangalistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameMangalistQueryKey>
  >({
    queryKey: getUsersUsernameMangalistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].mangalist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameMangalist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameMangalistQueryKey>
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
      ...getUsersUsernameMangalistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameMangalist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameMangalistQueryKey>
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
      ...getUsersUsernameMangalistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUsernameReviewsQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['reviews']['$get']>,
) {
  return ['users', '/users/:username/reviews', args] as const
}

export function getUsersUsernameReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameReviewsQueryKey>
  >({
    queryKey: getUsersUsernameReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsernameReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameRecommendationsQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>,
) {
  return ['users', '/users/:username/recommendations', args] as const
}

export function getUsersUsernameRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameRecommendationsQueryKey>
  >({
    queryKey: getUsersUsernameRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameRecommendationsQueryKey>
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
      ...getUsersUsernameRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameRecommendationsQueryKey>
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
      ...getUsersUsernameRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUsernameClubsQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['clubs']['$get']>,
) {
  return ['users', '/users/:username/clubs', args] as const
}

export function getUsersUsernameClubsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['clubs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameClubsQueryKey>
  >({
    queryKey: getUsersUsernameClubsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].clubs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameClubs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['clubs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameClubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUsernameClubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUsernameClubs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['clubs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameClubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUsernameClubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUsernameExternalQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['external']['$get']>,
) {
  return ['users', '/users/:username/external', args] as const
}

export function getUsersUsernameExternalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameExternalQueryKey>
  >({
    queryKey: getUsersUsernameExternalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].external.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUsernameExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['external']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameExternalQueryKey>
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
      ...getUsersUsernameExternalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUsernameExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['external']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameExternalQueryKey>
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
      ...getUsersUsernameExternalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWatchEpisodesQueryKey() {
  return ['watch', '/watch/episodes'] as const
}

export function getWatchEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWatchEpisodesQueryKey>
  >({
    queryKey: getWatchEpisodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.watch.episodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWatchEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWatchEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWatchEpisodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWatchEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWatchEpisodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWatchEpisodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWatchEpisodesPopularQueryKey() {
  return ['watch', '/watch/episodes/popular'] as const
}

export function getWatchEpisodesPopularQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWatchEpisodesPopularQueryKey>
  >({
    queryKey: getWatchEpisodesPopularQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.watch.episodes.popular.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWatchEpisodesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchEpisodesPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWatchEpisodesPopularQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWatchEpisodesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchEpisodesPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWatchEpisodesPopularQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWatchPromosQueryKey(args: InferRequestType<typeof client.watch.promos.$get>) {
  return ['watch', '/watch/promos', args] as const
}

export function getWatchPromosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.watch.promos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWatchPromosQueryKey>
  >({
    queryKey: getWatchPromosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.watch.promos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWatchPromos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.watch.promos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWatchPromosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWatchPromosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWatchPromos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.watch.promos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWatchPromosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWatchPromosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWatchPromosPopularQueryKey() {
  return ['watch', '/watch/promos/popular'] as const
}

export function getWatchPromosPopularQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWatchPromosPopularQueryKey>
  >({
    queryKey: getWatchPromosPopularQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.watch.promos.popular.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWatchPromosPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchPromosPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWatchPromosPopularQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWatchPromosPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchPromosPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWatchPromosPopularQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
