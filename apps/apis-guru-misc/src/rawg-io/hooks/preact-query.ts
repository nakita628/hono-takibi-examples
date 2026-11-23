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

export function getCreatorRolesKey() {
  return ['creator-roles'] as const
}

export function getCreatorsKey() {
  return ['creators'] as const
}

export function getDevelopersKey() {
  return ['developers'] as const
}

export function getGamesKey() {
  return ['games'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getPlatformsKey() {
  return ['platforms'] as const
}

export function getPublishersKey() {
  return ['publishers'] as const
}

export function getStoresKey() {
  return ['stores'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getCreatorRolesQueryKey(
  args: InferRequestType<(typeof client)['creator-roles']['$get']>,
) {
  return ['creator-roles', '/creator-roles', args] as const
}

export function getCreatorRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['creator-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreatorRolesQueryKey>
  >({
    queryKey: getCreatorRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['creator-roles'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreatorRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['creator-roles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreatorRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreatorRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreatorRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['creator-roles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['creator-roles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreatorRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreatorRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreatorsQueryKey(args: InferRequestType<typeof client.creators.$get>) {
  return ['creators', '/creators', args] as const
}

export function getCreatorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.creators.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreatorsQueryKey>
  >({
    queryKey: getCreatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.creators.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.creators.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCreatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreatorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.creators.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creators.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCreatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreatorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCreatorsIdQueryKey(
  args: InferRequestType<(typeof client.creators)[':id']['$get']>,
) {
  return ['creators', '/creators/:id', args] as const
}

export function getCreatorsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.creators)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreatorsIdQueryKey>
  >({
    queryKey: getCreatorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.creators[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCreatorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.creators)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreatorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCreatorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCreatorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.creators)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.creators)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreatorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCreatorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDevelopersQueryKey(args: InferRequestType<typeof client.developers.$get>) {
  return ['developers', '/developers', args] as const
}

export function getDevelopersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.developers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevelopersQueryKey>
  >({
    queryKey: getDevelopersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.developers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDevelopers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.developers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevelopersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDevelopersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDevelopers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.developers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevelopersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDevelopersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDevelopersIdQueryKey(
  args: InferRequestType<(typeof client.developers)[':id']['$get']>,
) {
  return ['developers', '/developers/:id', args] as const
}

export function getDevelopersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.developers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevelopersIdQueryKey>
  >({
    queryKey: getDevelopersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.developers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDevelopersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.developers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevelopersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDevelopersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDevelopersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.developers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevelopersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDevelopersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesQueryKey(args: InferRequestType<typeof client.games.$get>) {
  return ['games', '/games', args] as const
}

export function getGamesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesQueryKey>
  >({
    queryKey: getGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesGamePkAdditionsQueryKey(
  args: InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>,
) {
  return ['games', '/games/:game_pk/additions', args] as const
}

export function getGamesGamePkAdditionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkAdditionsQueryKey>
  >({
    queryKey: getGamesGamePkAdditionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':game_pk'].additions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesGamePkAdditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkAdditionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesGamePkAdditionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesGamePkAdditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['additions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['additions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkAdditionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesGamePkAdditionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesGamePkDevelopmentTeamQueryKey(
  args: InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>,
) {
  return ['games', '/games/:game_pk/development-team', args] as const
}

export function getGamesGamePkDevelopmentTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkDevelopmentTeamQueryKey>
  >({
    queryKey: getGamesGamePkDevelopmentTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':game_pk']['development-team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesGamePkDevelopmentTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkDevelopmentTeamQueryKey>
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
      ...getGamesGamePkDevelopmentTeamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesGamePkDevelopmentTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['development-team']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['development-team']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkDevelopmentTeamQueryKey>
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
      ...getGamesGamePkDevelopmentTeamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesGamePkGameSeriesQueryKey(
  args: InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>,
) {
  return ['games', '/games/:game_pk/game-series', args] as const
}

export function getGamesGamePkGameSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkGameSeriesQueryKey>
  >({
    queryKey: getGamesGamePkGameSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':game_pk']['game-series'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesGamePkGameSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkGameSeriesQueryKey>
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
      ...getGamesGamePkGameSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesGamePkGameSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['game-series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['game-series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkGameSeriesQueryKey>
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
      ...getGamesGamePkGameSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesGamePkParentGamesQueryKey(
  args: InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>,
) {
  return ['games', '/games/:game_pk/parent-games', args] as const
}

export function getGamesGamePkParentGamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkParentGamesQueryKey>
  >({
    queryKey: getGamesGamePkParentGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':game_pk']['parent-games'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesGamePkParentGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkParentGamesQueryKey>
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
      ...getGamesGamePkParentGamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesGamePkParentGames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['parent-games']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['parent-games']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkParentGamesQueryKey>
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
      ...getGamesGamePkParentGamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesGamePkScreenshotsQueryKey(
  args: InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>,
) {
  return ['games', '/games/:game_pk/screenshots', args] as const
}

export function getGamesGamePkScreenshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkScreenshotsQueryKey>
  >({
    queryKey: getGamesGamePkScreenshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':game_pk'].screenshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesGamePkScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkScreenshotsQueryKey>
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
      ...getGamesGamePkScreenshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesGamePkScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['screenshots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['screenshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkScreenshotsQueryKey>
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
      ...getGamesGamePkScreenshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesGamePkStoresQueryKey(
  args: InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>,
) {
  return ['games', '/games/:game_pk/stores', args] as const
}

export function getGamesGamePkStoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesGamePkStoresQueryKey>
  >({
    queryKey: getGamesGamePkStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':game_pk'].stores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesGamePkStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesGamePkStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesGamePkStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':game_pk']['stores']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':game_pk']['stores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesGamePkStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesGamePkStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdQueryKey(args: InferRequestType<(typeof client.games)[':id']['$get']>) {
  return ['games', '/games/:id', args] as const
}

export function getGamesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.games)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdQueryKey>
  >({
    queryKey: getGamesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdAchievementsQueryKey(
  args: InferRequestType<(typeof client.games)[':id']['achievements']['$get']>,
) {
  return ['games', '/games/:id/achievements', args] as const
}

export function getGamesIdAchievementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['achievements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdAchievementsQueryKey>
  >({
    queryKey: getGamesIdAchievementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].achievements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesIdAchievements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['achievements']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdAchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdAchievementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesIdAchievements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['achievements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['achievements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdAchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdAchievementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdMoviesQueryKey(
  args: InferRequestType<(typeof client.games)[':id']['movies']['$get']>,
) {
  return ['games', '/games/:id/movies', args] as const
}

export function getGamesIdMoviesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdMoviesQueryKey>
  >({
    queryKey: getGamesIdMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].movies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['movies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdMoviesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['movies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['movies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdMoviesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdRedditQueryKey(
  args: InferRequestType<(typeof client.games)[':id']['reddit']['$get']>,
) {
  return ['games', '/games/:id/reddit', args] as const
}

export function getGamesIdRedditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['reddit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdRedditQueryKey>
  >({
    queryKey: getGamesIdRedditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].reddit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesIdReddit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['reddit']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdRedditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdRedditQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesIdReddit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['reddit']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['reddit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdRedditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdRedditQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdSuggestedQueryKey(
  args: InferRequestType<(typeof client.games)[':id']['suggested']['$get']>,
) {
  return ['games', '/games/:id/suggested', args] as const
}

export function getGamesIdSuggestedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['suggested']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdSuggestedQueryKey>
  >({
    queryKey: getGamesIdSuggestedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].suggested.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesIdSuggested<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['suggested']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdSuggestedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdSuggestedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesIdSuggested<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['suggested']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['suggested']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdSuggestedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdSuggestedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdTwitchQueryKey(
  args: InferRequestType<(typeof client.games)[':id']['twitch']['$get']>,
) {
  return ['games', '/games/:id/twitch', args] as const
}

export function getGamesIdTwitchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['twitch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdTwitchQueryKey>
  >({
    queryKey: getGamesIdTwitchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].twitch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesIdTwitch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['twitch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdTwitchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdTwitchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesIdTwitch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['twitch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['twitch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdTwitchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdTwitchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesIdYoutubeQueryKey(
  args: InferRequestType<(typeof client.games)[':id']['youtube']['$get']>,
) {
  return ['games', '/games/:id/youtube', args] as const
}

export function getGamesIdYoutubeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['youtube']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesIdYoutubeQueryKey>
  >({
    queryKey: getGamesIdYoutubeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games[':id'].youtube.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesIdYoutube<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['youtube']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdYoutubeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesIdYoutubeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesIdYoutube<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games)[':id']['youtube']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.games)[':id']['youtube']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesIdYoutubeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesIdYoutubeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenresQueryKey(args: InferRequestType<typeof client.genres.$get>) {
  return ['genres', '/genres', args] as const
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

export function getGenresIdQueryKey(args: InferRequestType<(typeof client.genres)[':id']['$get']>) {
  return ['genres', '/genres/:id', args] as const
}

export function getGenresIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.genres)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGenresIdQueryKey>
  >({
    queryKey: getGenresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenresId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genres)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenresIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenresId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genres)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenresIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformsQueryKey(args: InferRequestType<typeof client.platforms.$get>) {
  return ['platforms', '/platforms', args] as const
}

export function getPlatformsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.platforms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlatformsQueryKey>
  >({
    queryKey: getPlatformsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platforms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlatforms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platforms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatforms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platforms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platforms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformsListsParentsQueryKey(
  args: InferRequestType<typeof client.platforms.lists.parents.$get>,
) {
  return ['platforms', '/platforms/lists/parents', args] as const
}

export function getPlatformsListsParentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platforms.lists.parents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformsListsParentsQueryKey>
  >({
    queryKey: getPlatformsListsParentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platforms.lists.parents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformsListsParents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platforms.lists.parents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformsListsParentsQueryKey>
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
      ...getPlatformsListsParentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformsListsParents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platforms.lists.parents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platforms.lists.parents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformsListsParentsQueryKey>
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
      ...getPlatformsListsParentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformsIdQueryKey(
  args: InferRequestType<(typeof client.platforms)[':id']['$get']>,
) {
  return ['platforms', '/platforms/:id', args] as const
}

export function getPlatformsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platforms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformsIdQueryKey>
  >({
    queryKey: getPlatformsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platforms[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlatformsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platforms)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platforms)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.platforms)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPublishersQueryKey(args: InferRequestType<typeof client.publishers.$get>) {
  return ['publishers', '/publishers', args] as const
}

export function getPublishersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.publishers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublishersQueryKey>
  >({
    queryKey: getPublishersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publishers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.publishers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublishersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublishersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.publishers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publishers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublishersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublishersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPublishersIdQueryKey(
  args: InferRequestType<(typeof client.publishers)[':id']['$get']>,
) {
  return ['publishers', '/publishers/:id', args] as const
}

export function getPublishersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publishers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishersIdQueryKey>
  >({
    queryKey: getPublishersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publishers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublishersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publishers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublishersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublishersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publishers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.publishers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublishersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublishersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoresQueryKey(args: InferRequestType<typeof client.stores.$get>) {
  return ['stores', '/stores', args] as const
}

export function getStoresQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stores.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoresQueryKey>
  >({
    queryKey: getStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStores<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stores.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStores<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stores.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoresIdQueryKey(args: InferRequestType<(typeof client.stores)[':id']['$get']>) {
  return ['stores', '/stores/:id', args] as const
}

export function getStoresIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.stores)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoresIdQueryKey>
  >({
    queryKey: getStoresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stores[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoresId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoresIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoresId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoresIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsIdQueryKey(args: InferRequestType<(typeof client.tags)[':id']['$get']>) {
  return ['tags', '/tags/:id', args] as const
}

export function getTagsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsIdQueryKey>
  >({
    queryKey: getTagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
