import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['full']['$get']>>,
) {
  return ['anime', '/anime/:id/full', toValue(args)] as const
}

export function getAnimeIdFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdFullQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['$get']>>,
) {
  return ['anime', '/anime/:id', toValue(args)] as const
}

export function getAnimeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnimeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAnimeIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdCharactersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['characters']['$get']>>,
) {
  return ['anime', '/anime/:id/characters', toValue(args)] as const
}

export function getAnimeIdCharactersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['characters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdCharactersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].characters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['characters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdCharactersQueryKey>
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
          Awaited<ReturnType<(typeof client.anime)[':id']['characters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdCharactersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdCharactersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].characters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdStaffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['staff']['$get']>>,
) {
  return ['anime', '/anime/:id/staff', toValue(args)] as const
}

export function getAnimeIdStaffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['staff']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdStaffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].staff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['staff']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdStaffQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['staff']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdStaffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdStaffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].staff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>>,
) {
  return ['anime', '/anime/:id/episodes', toValue(args)] as const
}

export function getAnimeIdEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdEpisodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['episodes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdEpisodesEpisodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>
  >,
) {
  return ['anime', '/anime/:id/episodes/:episode', toValue(args)] as const
}

export function getAnimeIdEpisodesEpisodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdEpisodesEpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].episodes[':episode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdEpisodesEpisodeQueryKey>
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
          Awaited<ReturnType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdEpisodesEpisodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdEpisodesEpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].episodes[':episode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdNewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['news']['$get']>>,
) {
  return ['anime', '/anime/:id/news', toValue(args)] as const
}

export function getAnimeIdNewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['news']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].news.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['news']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdNewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['news']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].news.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdForumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['forum']['$get']>>,
) {
  return ['anime', '/anime/:id/forum', toValue(args)] as const
}

export function getAnimeIdForumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['forum']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdForumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].forum.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['forum']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdForumQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['forum']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdForumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdForumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].forum.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['videos']['$get']>>,
) {
  return ['anime', '/anime/:id/videos', toValue(args)] as const
}

export function getAnimeIdVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdVideosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['videos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdVideosEpisodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>
  >,
) {
  return ['anime', '/anime/:id/videos/episodes', toValue(args)] as const
}

export function getAnimeIdVideosEpisodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdVideosEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].videos.episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdVideosEpisodesQueryKey>
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
          Awaited<ReturnType<(typeof client.anime)[':id']['videos']['episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdVideosEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdVideosEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].videos.episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdPicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>>,
) {
  return ['anime', '/anime/:id/pictures', toValue(args)] as const
}

export function getAnimeIdPicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdPicturesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['pictures']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>>,
) {
  return ['anime', '/anime/:id/statistics', toValue(args)] as const
}

export function getAnimeIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.anime)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdMoreinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>>,
) {
  return ['anime', '/anime/:id/moreinfo', toValue(args)] as const
}

export function getAnimeIdMoreinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdMoreinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].moreinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdMoreinfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['moreinfo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdMoreinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdMoreinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].moreinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>>,
) {
  return ['anime', '/anime/:id/recommendations', toValue(args)] as const
}

export function getAnimeIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.anime)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdUserupdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>>,
) {
  return ['anime', '/anime/:id/userupdates', toValue(args)] as const
}

export function getAnimeIdUserupdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdUserupdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].userupdates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdUserupdatesQueryKey>
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
          Awaited<ReturnType<(typeof client.anime)[':id']['userupdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdUserupdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdUserupdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].userupdates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>>,
) {
  return ['anime', '/anime/:id/reviews', toValue(args)] as const
}

export function getAnimeIdReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdReviewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['reviews']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdRelationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['relations']['$get']>>,
) {
  return ['anime', '/anime/:id/relations', toValue(args)] as const
}

export function getAnimeIdRelationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['relations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdRelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].relations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['relations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdRelationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['relations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdRelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdRelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].relations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdThemesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['themes']['$get']>>,
) {
  return ['anime', '/anime/:id/themes', toValue(args)] as const
}

export function getAnimeIdThemesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['themes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdThemesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].themes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['themes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdThemesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['themes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdThemesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdThemesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].themes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdExternalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['external']['$get']>>,
) {
  return ['anime', '/anime/:id/external', toValue(args)] as const
}

export function getAnimeIdExternalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['external']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdExternalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].external.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['external']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdExternalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['external']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdExternalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdExternalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].external.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeIdStreamingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>>,
) {
  return ['anime', '/anime/:id/streaming', toValue(args)] as const
}

export function getAnimeIdStreamingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeIdStreamingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime[':id'].streaming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimeIdStreaming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnimeIdStreamingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anime)[':id']['streaming']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnimeIdStreamingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeIdStreamingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime[':id'].streaming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersIdFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['full']['$get']>>,
) {
  return ['characters', '/characters/:id/full', toValue(args)] as const
}

export function getCharactersIdFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersIdFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters[':id'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharactersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCharactersIdFullQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersIdFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters[':id'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['$get']>>,
) {
  return ['characters', '/characters/:id', toValue(args)] as const
}

export function getCharactersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharactersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCharactersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersIdAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['anime']['$get']>>,
) {
  return ['characters', '/characters/:id/anime', toValue(args)] as const
}

export function getCharactersIdAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['anime']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersIdAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters[':id'].anime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharactersIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['anime']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCharactersIdAnimeQueryKey>
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
          Awaited<ReturnType<(typeof client.characters)[':id']['anime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersIdAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters[':id'].anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersIdMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['manga']['$get']>>,
) {
  return ['characters', '/characters/:id/manga', toValue(args)] as const
}

export function getCharactersIdMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['manga']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersIdMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters[':id'].manga.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharactersIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['manga']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCharactersIdMangaQueryKey>
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
          Awaited<ReturnType<(typeof client.characters)[':id']['manga']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersIdMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters[':id'].manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersIdVoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['voices']['$get']>>,
) {
  return ['characters', '/characters/:id/voices', toValue(args)] as const
}

export function getCharactersIdVoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['voices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersIdVoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters[':id'].voices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharactersIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['voices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCharactersIdVoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.characters)[':id']['voices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdVoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersIdVoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters[':id'].voices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersIdPicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>>,
) {
  return ['characters', '/characters/:id/pictures', toValue(args)] as const
}

export function getCharactersIdPicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters[':id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCharactersIdPicturesQueryKey>
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
          Awaited<ReturnType<(typeof client.characters)[':id']['pictures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharactersIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters[':id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClubsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['$get']>>,
) {
  return ['clubs', '/clubs/:id', toValue(args)] as const
}

export function getClubsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClubsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clubs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClubsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getClubsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClubsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clubs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClubsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['members']['$get']>>,
) {
  return ['clubs', '/clubs/:id/members', toValue(args)] as const
}

export function getClubsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClubsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clubs[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClubsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClubsIdMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClubsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clubs[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClubsIdStaffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>>,
) {
  return ['clubs', '/clubs/:id/staff', toValue(args)] as const
}

export function getClubsIdStaffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClubsIdStaffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clubs[':id'].staff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClubsIdStaff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClubsIdStaffQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['staff']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdStaffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClubsIdStaffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clubs[':id'].staff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClubsIdRelationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>>,
) {
  return ['clubs', '/clubs/:id/relations', toValue(args)] as const
}

export function getClubsIdRelationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClubsIdRelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clubs[':id'].relations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClubsIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClubsIdRelationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clubs)[':id']['relations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClubsIdRelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClubsIdRelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clubs[':id'].relations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.anime.$get>>,
) {
  return ['genres', '/genres/anime', toValue(args)] as const
}

export function getGenresAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.anime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres.anime.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenresAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.anime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>
          >,
          ReturnType<typeof getGenresAnimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres.anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.manga.$get>>,
) {
  return ['genres', '/genres/manga', toValue(args)] as const
}

export function getGenresMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.manga.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres.manga.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenresManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.manga.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>
          >,
          ReturnType<typeof getGenresMangaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres.manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMagazinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazines.$get>>,
) {
  return ['magazines', '/magazines', toValue(args)] as const
}

export function getMagazinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMagazinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.magazines.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMagazines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>
          >,
          ReturnType<typeof getMagazinesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMagazinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMagazinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.magazines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['full']['$get']>>,
) {
  return ['manga', '/manga/:id/full', toValue(args)] as const
}

export function getMangaIdFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdFullQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['$get']>>,
) {
  return ['manga', '/manga/:id', toValue(args)] as const
}

export function getMangaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMangaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMangaIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdCharactersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['characters']['$get']>>,
) {
  return ['manga', '/manga/:id/characters', toValue(args)] as const
}

export function getMangaIdCharactersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['characters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdCharactersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].characters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdCharacters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['characters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdCharactersQueryKey>
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
          Awaited<ReturnType<(typeof client.manga)[':id']['characters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdCharactersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdCharactersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].characters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdNewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['news']['$get']>>,
) {
  return ['manga', '/manga/:id/news', toValue(args)] as const
}

export function getMangaIdNewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['news']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].news.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['news']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdNewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['news']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].news.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdForumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['forum']['$get']>>,
) {
  return ['manga', '/manga/:id/forum', toValue(args)] as const
}

export function getMangaIdForumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['forum']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdForumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].forum.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdForum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['forum']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdForumQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['forum']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdForumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdForumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].forum.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdPicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>>,
) {
  return ['manga', '/manga/:id/pictures', toValue(args)] as const
}

export function getMangaIdPicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdPicturesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['pictures']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>>,
) {
  return ['manga', '/manga/:id/statistics', toValue(args)] as const
}

export function getMangaIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.manga)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdMoreinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>>,
) {
  return ['manga', '/manga/:id/moreinfo', toValue(args)] as const
}

export function getMangaIdMoreinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdMoreinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].moreinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdMoreinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdMoreinfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['moreinfo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdMoreinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdMoreinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].moreinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>>,
) {
  return ['manga', '/manga/:id/recommendations', toValue(args)] as const
}

export function getMangaIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.manga)[':id']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdUserupdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>>,
) {
  return ['manga', '/manga/:id/userupdates', toValue(args)] as const
}

export function getMangaIdUserupdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdUserupdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].userupdates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdUserupdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdUserupdatesQueryKey>
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
          Awaited<ReturnType<(typeof client.manga)[':id']['userupdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdUserupdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdUserupdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].userupdates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>>,
) {
  return ['manga', '/manga/:id/reviews', toValue(args)] as const
}

export function getMangaIdReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdReviewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['reviews']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdRelationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['relations']['$get']>>,
) {
  return ['manga', '/manga/:id/relations', toValue(args)] as const
}

export function getMangaIdRelationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['relations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdRelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].relations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['relations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdRelationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['relations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdRelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdRelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].relations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaIdExternalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['external']['$get']>>,
) {
  return ['manga', '/manga/:id/external', toValue(args)] as const
}

export function getMangaIdExternalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['external']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaIdExternalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga[':id'].external.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMangaIdExternal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.manga)[':id']['external']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMangaIdExternalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.manga)[':id']['external']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMangaIdExternalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaIdExternalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga[':id'].external.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['full']['$get']>>,
) {
  return ['people', '/people/:id/full', toValue(args)] as const
}

export function getPeopleIdFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdFullQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
) {
  return ['people', '/people/:id', toValue(args)] as const
}

export function getPeopleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPeopleIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['anime']['$get']>>,
) {
  return ['people', '/people/:id/anime', toValue(args)] as const
}

export function getPeopleIdAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['anime']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].anime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdAnime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['anime']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdAnimeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['anime']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdVoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['voices']['$get']>>,
) {
  return ['people', '/people/:id/voices', toValue(args)] as const
}

export function getPeopleIdVoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['voices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdVoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].voices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdVoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['voices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdVoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['voices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdVoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdVoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].voices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['manga']['$get']>>,
) {
  return ['people', '/people/:id/manga', toValue(args)] as const
}

export function getPeopleIdMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['manga']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].manga.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdManga<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['manga']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdMangaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['manga']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdPicturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['pictures']['$get']>>,
) {
  return ['people', '/people/:id/pictures', toValue(args)] as const
}

export function getPeopleIdPicturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['pictures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdPicturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].pictures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdPictures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['pictures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdPicturesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['pictures']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdPicturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdPicturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].pictures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProducersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['$get']>>,
) {
  return ['producers', '/producers/:id', toValue(args)] as const
}

export function getProducersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProducersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.producers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProducersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getProducersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProducersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProducersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.producers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProducersIdFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['full']['$get']>>,
) {
  return ['producers', '/producers/:id/full', toValue(args)] as const
}

export function getProducersIdFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProducersIdFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.producers[':id'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProducersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProducersIdFullQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.producers)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProducersIdFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProducersIdFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.producers[':id'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProducersIdExternalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['external']['$get']>>,
) {
  return ['producers', '/producers/:id/external', toValue(args)] as const
}

export function getProducersIdExternalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['external']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProducersIdExternalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.producers[':id'].external.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.producers)[':id']['external']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProducersIdExternalQueryKey>
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
          Awaited<ReturnType<(typeof client.producers)[':id']['external']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProducersIdExternalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProducersIdExternalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.producers[':id'].external.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRandomAnimeQueryKey() {
  return ['random', '/random/anime'] as const
}

export function getRandomAnimeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRandomAnimeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.random.anime.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRandomAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>
          >,
          ReturnType<typeof getRandomAnimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRandomAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRandomAnimeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.random.anime.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRandomMangaQueryKey() {
  return ['random', '/random/manga'] as const
}

export function getRandomMangaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRandomMangaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.random.manga.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRandomManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>
          >,
          ReturnType<typeof getRandomMangaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRandomMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRandomMangaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.random.manga.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRandomCharactersQueryKey() {
  return ['random', '/random/characters'] as const
}

export function getRandomCharactersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRandomCharactersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.random.characters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRandomCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>
            >
          >,
          ReturnType<typeof getRandomCharactersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.characters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRandomCharactersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRandomCharactersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.random.characters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRandomPeopleQueryKey() {
  return ['random', '/random/people'] as const
}

export function getRandomPeopleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRandomPeopleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.random.people.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRandomPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
          >,
          ReturnType<typeof getRandomPeopleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.people.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRandomPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRandomPeopleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.random.people.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRandomUsersQueryKey() {
  return ['random', '/random/users'] as const
}

export function getRandomUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRandomUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.random.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRandomUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>
          >,
          ReturnType<typeof getRandomUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.random.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRandomUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRandomUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.random.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecommendationsAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.anime.$get>>,
) {
  return ['recommendations', '/recommendations/anime', toValue(args)] as const
}

export function getRecommendationsAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.anime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecommendationsAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations.anime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendationsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.anime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>
            >
          >,
          ReturnType<typeof getRecommendationsAnimeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.anime.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecommendationsAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations.anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecommendationsMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.manga.$get>>,
) {
  return ['recommendations', '/recommendations/manga', toValue(args)] as const
}

export function getRecommendationsMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.manga.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecommendationsMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations.manga.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendationsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.manga.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>
            >
          >,
          ReturnType<typeof getRecommendationsMangaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.manga.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecommendationsMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations.manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewsAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.anime.$get>>,
) {
  return ['reviews', '/reviews/anime', toValue(args)] as const
}

export function getReviewsAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.anime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews.anime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.anime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
          >,
          ReturnType<typeof getReviewsAnimeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.anime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews.anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewsMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.manga.$get>>,
) {
  return ['reviews', '/reviews/manga', toValue(args)] as const
}

export function getReviewsMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.manga.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews.manga.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.manga.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
          >,
          ReturnType<typeof getReviewsMangaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.manga.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews.manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
) {
  return ['schedules', '/schedules', toValue(args)] as const
}

export function getSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          ReturnType<typeof getSchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anime.$get>>,
) {
  return ['anime', '/anime', toValue(args)] as const
}

export function getAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anime.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
          ReturnType<typeof getAnimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.manga.$get>>,
) {
  return ['manga', '/manga', toValue(args)] as const
}

export function getMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.manga.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.manga.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManga<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.manga.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
          ReturnType<typeof getMangaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
) {
  return ['people', '/people', toValue(args)] as const
}

export function getPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          ReturnType<typeof getPeopleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharactersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.characters.$get>>,
) {
  return ['characters', '/characters', toValue(args)] as const
}

export function getCharactersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.characters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharactersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.characters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.characters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>
          >,
          ReturnType<typeof getCharactersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.characters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCharactersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharactersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.characters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserbyidIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.userbyid)[':id']['$get']>>,
) {
  return ['users', '/users/userbyid/:id', toValue(args)] as const
}

export function getUsersUserbyidIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.userbyid)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserbyidIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.userbyid[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserbyidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.userbyid)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserbyidIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.userbyid)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserbyidIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserbyidIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.userbyid[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClubsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clubs.$get>>,
) {
  return ['clubs', '/clubs', toValue(args)] as const
}

export function getClubsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clubs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClubsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clubs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClubs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clubs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
          ReturnType<typeof getClubsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clubs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClubsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClubsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clubs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProducersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.producers.$get>>,
) {
  return ['producers', '/producers', toValue(args)] as const
}

export function getProducersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.producers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProducersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.producers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.producers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>
          >,
          ReturnType<typeof getProducersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.producers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProducersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProducersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.producers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonsNowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.now.$get>>,
) {
  return ['seasons', '/seasons/now', toValue(args)] as const
}

export function getSeasonsNowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.now.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonsNowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seasons.now.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeasonsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.now.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>
          >,
          ReturnType<typeof getSeasonsNowQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.now.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonsNowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonsNowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.seasons.now.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonsYearSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>>,
) {
  return ['seasons', '/seasons/:year/:season', toValue(args)] as const
}

export function getSeasonsYearSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonsYearSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seasons[':year'][':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeasonsYearSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeasonsYearSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client.seasons)[':year'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonsYearSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonsYearSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.seasons[':year'][':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonsQueryKey() {
  return ['seasons', '/seasons'] as const
}

export function getSeasonsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSeasonsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seasons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeasons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>
          >,
          ReturnType<typeof getSeasonsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSeasonsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.seasons.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonsUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.upcoming.$get>>,
) {
  return ['seasons', '/seasons/upcoming', toValue(args)] as const
}

export function getSeasonsUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonsUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seasons.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeasonsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.seasons.upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getSeasonsUpcomingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seasons.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonsUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonsUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.seasons.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopAnimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.anime.$get>>,
) {
  return ['top', '/top/anime', toValue(args)] as const
}

export function getTopAnimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.anime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopAnimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top.anime.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopAnime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.anime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>
          >,
          ReturnType<typeof getTopAnimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.anime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopAnimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopAnimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top.anime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopMangaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.manga.$get>>,
) {
  return ['top', '/top/manga', toValue(args)] as const
}

export function getTopMangaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.manga.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopMangaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top.manga.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopManga<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.manga.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>
          >,
          ReturnType<typeof getTopMangaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.manga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopMangaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopMangaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top.manga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.people.$get>>,
) {
  return ['top', '/top/people', toValue(args)] as const
}

export function getTopPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopPeople<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>
          >,
          ReturnType<typeof getTopPeopleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopCharactersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.characters.$get>>,
) {
  return ['top', '/top/characters', toValue(args)] as const
}

export function getTopCharactersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.characters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopCharactersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top.characters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTopCharacters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.characters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
          >,
          ReturnType<typeof getTopCharactersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.characters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTopCharactersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopCharactersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top.characters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.reviews.$get>>,
) {
  return ['top', '/top/reviews', toValue(args)] as const
}

export function getTopReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.reviews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top.reviews.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top.reviews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>
          >,
          ReturnType<typeof getTopReviewsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top.reviews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top.reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['full']['$get']>>,
) {
  return ['users', '/users/:username/full', toValue(args)] as const
}

export function getUsersUsernameFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsernameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameFullQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
) {
  return ['users', '/users/:username', toValue(args)] as const
}

export function getUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['statistics']['$get']>
  >,
) {
  return ['users', '/users/:username/statistics', toValue(args)] as const
}

export function getUsersUsernameStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameFavoritesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['favorites']['$get']>>,
) {
  return ['users', '/users/:username/favorites', toValue(args)] as const
}

export function getUsersUsernameFavoritesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['favorites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameFavoritesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].favorites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['favorites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameFavoritesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['favorites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameFavoritesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameFavoritesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].favorites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameUserupdatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>
  >,
) {
  return ['users', '/users/:username/userupdates', toValue(args)] as const
}

export function getUsersUsernameUserupdatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameUserupdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].userupdates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameUserupdatesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['userupdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameUserupdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameUserupdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].userupdates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameAboutQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['about']['$get']>>,
) {
  return ['users', '/users/:username/about', toValue(args)] as const
}

export function getUsersUsernameAboutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['about']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameAboutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].about.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsernameAbout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['about']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameAboutQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['about']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameAboutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].about.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['history']['$get']>>,
) {
  return ['users', '/users/:username/history', toValue(args)] as const
}

export function getUsersUsernameHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameFriendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['friends']['$get']>>,
) {
  return ['users', '/users/:username/friends', toValue(args)] as const
}

export function getUsersUsernameFriendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['friends']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameFriendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].friends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['friends']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameFriendsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['friends']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameFriendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameFriendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].friends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameAnimelistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['animelist']['$get']>>,
) {
  return ['users', '/users/:username/animelist', toValue(args)] as const
}

export function getUsersUsernameAnimelistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['animelist']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameAnimelistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].animelist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['animelist']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameAnimelistQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['animelist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameAnimelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameAnimelistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].animelist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameMangalistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>>,
) {
  return ['users', '/users/:username/mangalist', toValue(args)] as const
}

export function getUsersUsernameMangalistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameMangalistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].mangalist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameMangalistQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['mangalist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameMangalistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameMangalistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].mangalist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['reviews']['$get']>>,
) {
  return ['users', '/users/:username/reviews', toValue(args)] as const
}

export function getUsersUsernameReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameReviewsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>
  >,
) {
  return ['users', '/users/:username/recommendations', toValue(args)] as const
}

export function getUsersUsernameRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameClubsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['clubs']['$get']>>,
) {
  return ['users', '/users/:username/clubs', toValue(args)] as const
}

export function getUsersUsernameClubsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['clubs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameClubsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].clubs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsernameClubs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['clubs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameClubsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['clubs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameClubsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameClubsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].clubs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameExternalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['external']['$get']>>,
) {
  return ['users', '/users/:username/external', toValue(args)] as const
}

export function getUsersUsernameExternalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['external']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameExternalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].external.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['external']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUsernameExternalQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['external']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameExternalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameExternalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].external.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchEpisodesQueryKey() {
  return ['watch', '/watch/episodes'] as const
}

export function getWatchEpisodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWatchEpisodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watch.episodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWatchEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
          >,
          ReturnType<typeof getWatchEpisodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWatchEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWatchEpisodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.watch.episodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchEpisodesPopularQueryKey() {
  return ['watch', '/watch/episodes/popular'] as const
}

export function getWatchEpisodesPopularQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWatchEpisodesPopularQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watch.episodes.popular.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWatchEpisodesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>
            >
          >,
          ReturnType<typeof getWatchEpisodesPopularQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.watch.episodes.popular.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWatchEpisodesPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWatchEpisodesPopularQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.watch.episodes.popular.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchPromosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watch.promos.$get>>,
) {
  return ['watch', '/watch/promos', toValue(args)] as const
}

export function getWatchPromosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watch.promos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWatchPromosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watch.promos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWatchPromos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watch.promos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>
          >,
          ReturnType<typeof getWatchPromosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWatchPromosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWatchPromosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.watch.promos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchPromosPopularQueryKey() {
  return ['watch', '/watch/promos/popular'] as const
}

export function getWatchPromosPopularQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWatchPromosPopularQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watch.promos.popular.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWatchPromosPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>
            >
          >,
          ReturnType<typeof getWatchPromosPopularQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watch.promos.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWatchPromosPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWatchPromosPopularQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.watch.promos.popular.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
