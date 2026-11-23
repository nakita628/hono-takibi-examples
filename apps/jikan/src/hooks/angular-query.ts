import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAnimeIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['characters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdCharactersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['staff']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdStaffQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdEpisodesEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnimeIdEpisodesEpisodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAnimeIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['news']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdNewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['forum']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdForumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['videos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdVideosEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnimeIdVideosEpisodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAnimeIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdPicturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdStatisticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdMoreinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnimeIdRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAnimeIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdUserupdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['relations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdRelationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['themes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdThemesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['external']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdExternalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnimeIdStreaming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeIdStreamingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharactersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.characters)[':id']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharactersIdFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharactersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.characters)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharactersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharactersIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.characters)[':id']['anime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharactersIdAnimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharactersIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.characters)[':id']['manga']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharactersIdMangaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharactersIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.characters)[':id']['voices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharactersIdVoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharactersIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCharactersIdPicturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectClubsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clubs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClubsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectClubsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clubs)[':id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClubsIdMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectClubsIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClubsIdStaffQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectClubsIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClubsIdRelationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGenresAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.genres.anime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresAnimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGenresManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.genres.manga.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresMangaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMagazines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.magazines.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMagazinesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['characters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdCharactersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['news']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdNewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['forum']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdForumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdPicturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdStatisticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdMoreinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMangaIdRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMangaIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdUserupdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['relations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdRelationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMangaIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.manga)[':id']['external']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaIdExternalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeopleIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeopleIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['anime']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdAnimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeopleIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['voices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdVoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeopleIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['manga']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdMangaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeopleIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['pictures']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdPicturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectProducersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.producers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProducersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectProducersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.producers)[':id']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProducersIdFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectProducersIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.producers)[':id']['external']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProducersIdExternalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRandomAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRandomAnimeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRandomManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRandomMangaQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRandomCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRandomCharactersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRandomPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRandomPeopleQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRandomUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRandomUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectRecommendationsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recommendations.anime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRecommendationsAnimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRecommendationsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recommendations.manga.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRecommendationsMangaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectReviewsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reviews.anime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewsAnimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectReviewsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reviews.manga.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewsMangaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectManga<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.manga.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMangaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMangaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.people.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.characters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharactersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
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

export function injectUsersUserbyidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users.userbyid)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserbyidIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectClubs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clubs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClubsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectProducers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.producers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProducersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeasonsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.seasons.now.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeasonsNowQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeasonsYearSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeasonsYearSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeasonsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSeasonsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.seasons.upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeasonsUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTopAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.top.anime.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopAnimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTopManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.top.manga.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopMangaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTopPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.top.people.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTopCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.top.characters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopCharactersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTopReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.top.reviews.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUsernameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUsernameFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUsernameStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['statistics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['favorites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameFavoritesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameUserupdatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameAbout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['about']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUsernameAboutQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUsernameHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['friends']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameFriendsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameAnimelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['animelist']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameAnimelistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameMangalist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameMangalistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUsernameClubs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['clubs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUsernameClubsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUsernameExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['external']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUsernameExternalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectWatchEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWatchEpisodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectWatchEpisodesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWatchEpisodesPopularQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectWatchPromos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.watch.promos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWatchPromosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectWatchPromosPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWatchPromosPopularQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
