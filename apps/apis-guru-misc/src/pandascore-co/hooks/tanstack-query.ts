import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdditionsKey() {
  return ['additions'] as const
}

export function getChangesKey() {
  return ['changes'] as const
}

export function getDeletionsKey() {
  return ['deletions'] as const
}

export function getIncidentsKey() {
  return ['incidents'] as const
}

export function getLeaguesKey() {
  return ['leagues'] as const
}

export function getLivesKey() {
  return ['lives'] as const
}

export function getMatchesKey() {
  return ['matches'] as const
}

export function getPlayersKey() {
  return ['players'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTournamentsKey() {
  return ['tournaments'] as const
}

export function getVideogamesKey() {
  return ['videogames'] as const
}

export function getAdditionsQueryKey(args: InferRequestType<typeof client.additions.$get>) {
  return ['additions', '/additions', args] as const
}

export function getAdditionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.additions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdditionsQueryKey>
  >({
    queryKey: getAdditionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.additions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdditions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.additions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdditionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdditionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdditions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.additions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdditionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdditionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChangesQueryKey(args: InferRequestType<typeof client.changes.$get>) {
  return ['changes', '/changes', args] as const
}

export function getChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangesQueryKey>
  >({
    queryKey: getChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletionsQueryKey(args: InferRequestType<typeof client.deletions.$get>) {
  return ['deletions', '/deletions', args] as const
}

export function getDeletionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deletions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeletionsQueryKey>
  >({
    queryKey: getDeletionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deletions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeletions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deletions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeletionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeletionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeletions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deletions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeletionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeletionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIncidentsQueryKey(args: InferRequestType<typeof client.incidents.$get>) {
  return ['incidents', '/incidents', args] as const
}

export function getIncidentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.incidents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIncidentsQueryKey>
  >({
    queryKey: getIncidentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.incidents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIncidentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIncidentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIncidentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIncidentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLeaguesQueryKey(args: InferRequestType<typeof client.leagues.$get>) {
  return ['leagues', '/leagues', args] as const
}

export function getLeaguesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.leagues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeaguesQueryKey>
  >({
    queryKey: getLeaguesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLeagues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.leagues.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLeaguesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLeaguesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeagues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.leagues.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLeaguesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLeaguesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug', args] as const
}

export function getLeaguesLeagueIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugQueryKey>
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
      ...getLeaguesLeagueIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugQueryKey>
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
      ...getLeaguesLeagueIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches', args] as const
}

export function getLeaguesLeagueIdOrSlugMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesPastQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/past', args] as const
}

export function getLeaguesLeagueIdOrSlugMatchesPastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesPastQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugMatchesPastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.past.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlugMatchesPast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesPastQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesPastQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlugMatchesPast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesPastQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesPastQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesRunningQueryKey(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/running', args] as const
}

export function getLeaguesLeagueIdOrSlugMatchesRunningQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesRunningQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugMatchesRunningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.running.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlugMatchesRunning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesRunningQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesRunningQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlugMatchesRunning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesRunningQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesRunningQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/upcoming', args] as const
}

export function getLeaguesLeagueIdOrSlugMatchesUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.upcoming.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlugMatchesUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesUpcomingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlugMatchesUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey>
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
      ...getLeaguesLeagueIdOrSlugMatchesUpcomingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugSeriesQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/series', args] as const
}

export function getLeaguesLeagueIdOrSlugSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugSeriesQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugSeriesQueryKey>
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
      ...getLeaguesLeagueIdOrSlugSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugSeriesQueryKey>
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
      ...getLeaguesLeagueIdOrSlugSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugTournamentsQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/tournaments', args] as const
}

export function getLeaguesLeagueIdOrSlugTournamentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugTournamentsQueryKey>
  >({
    queryKey: getLeaguesLeagueIdOrSlugTournamentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].tournaments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLeaguesLeagueIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugTournamentsQueryKey>
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
      ...getLeaguesLeagueIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdOrSlugTournamentsQueryKey>
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
      ...getLeaguesLeagueIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLivesQueryKey(args: InferRequestType<typeof client.lives.$get>) {
  return ['lives', '/lives', args] as const
}

export function getLivesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivesQueryKey>
  >({
    queryKey: getLivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lives.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLivesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lives.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLivesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchesQueryKey(args: InferRequestType<typeof client.matches.$get>) {
  return ['matches', '/matches', args] as const
}

export function getMatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.matches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMatchesQueryKey>
  >({
    queryKey: getMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchesPastQueryKey(args: InferRequestType<typeof client.matches.past.$get>) {
  return ['matches', '/matches/past', args] as const
}

export function getMatchesPastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.matches.past.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMatchesPastQueryKey>
  >({
    queryKey: getMatchesPastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches.past.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatchesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.past.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchesPastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.past.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchesPastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchesRunningQueryKey(
  args: InferRequestType<typeof client.matches.running.$get>,
) {
  return ['matches', '/matches/running', args] as const
}

export function getMatchesRunningQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.matches.running.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesRunningQueryKey>
  >({
    queryKey: getMatchesRunningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches.running.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatchesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.running.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesRunningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchesRunningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.running.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesRunningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchesRunningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchesUpcomingQueryKey(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
) {
  return ['matches', '/matches/upcoming', args] as const
}

export function getMatchesUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.matches.upcoming.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesUpcomingQueryKey>
  >({
    queryKey: getMatchesUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches.upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatchesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchesUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchesUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchesMatchIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
) {
  return ['matches', '/matches/:match_id_or_slug', args] as const
}

export function getMatchesMatchIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesMatchIdOrSlugQueryKey>
  >({
    queryKey: getMatchesMatchIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches[':match_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMatchesMatchIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesMatchIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchesMatchIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchesMatchIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesMatchIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchesMatchIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMatchesMatchIdOrSlugOpponentsQueryKey(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
) {
  return ['matches', '/matches/:match_id_or_slug/opponents', args] as const
}

export function getMatchesMatchIdOrSlugOpponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesMatchIdOrSlugOpponentsQueryKey>
  >({
    queryKey: getMatchesMatchIdOrSlugOpponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches[':match_id_or_slug'].opponents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMatchesMatchIdOrSlugOpponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesMatchIdOrSlugOpponentsQueryKey>
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
      ...getMatchesMatchIdOrSlugOpponentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMatchesMatchIdOrSlugOpponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesMatchIdOrSlugOpponentsQueryKey>
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
      ...getMatchesMatchIdOrSlugOpponentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersQueryKey(args: InferRequestType<typeof client.players.$get>) {
  return ['players', '/players', args] as const
}

export function getPlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.players.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayersQueryKey>
  >({
    queryKey: getPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.players.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.players.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayersPlayerIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
) {
  return ['players', '/players/:player_id_or_slug', args] as const
}

export function getPlayersPlayerIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersPlayerIdOrSlugQueryKey>
  >({
    queryKey: getPlayersPlayerIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':player_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlayersPlayerIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlayersPlayerIdOrSlugQueryKey>
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
      ...getPlayersPlayerIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersPlayerIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlayersPlayerIdOrSlugQueryKey>
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
      ...getPlayersPlayerIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersPlayerIdOrSlugMatchesQueryKey(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
) {
  return ['players', '/players/:player_id_or_slug/matches', args] as const
}

export function getPlayersPlayerIdOrSlugMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersPlayerIdOrSlugMatchesQueryKey>
  >({
    queryKey: getPlayersPlayerIdOrSlugMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':player_id_or_slug'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlayersPlayerIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlayersPlayerIdOrSlugMatchesQueryKey>
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
      ...getPlayersPlayerIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersPlayerIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlayersPlayerIdOrSlugMatchesQueryKey>
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
      ...getPlayersPlayerIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesQueryKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function getSeriesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >({
    queryKey: getSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesPastQueryKey(args: InferRequestType<typeof client.series.past.$get>) {
  return ['series', '/series/past', args] as const
}

export function getSeriesPastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.past.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesPastQueryKey>
  >({
    queryKey: getSeriesPastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.past.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.past.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesPastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.past.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesPastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesRunningQueryKey(
  args: InferRequestType<typeof client.series.running.$get>,
) {
  return ['series', '/series/running', args] as const
}

export function getSeriesRunningQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.running.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesRunningQueryKey>
  >({
    queryKey: getSeriesRunningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.running.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.running.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesRunningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesRunningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.running.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesRunningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesRunningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesUpcomingQueryKey(
  args: InferRequestType<typeof client.series.upcoming.$get>,
) {
  return ['series', '/series/upcoming', args] as const
}

export function getSeriesUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.upcoming.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesUpcomingQueryKey>
  >({
    queryKey: getSeriesUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.upcoming.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.upcoming.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug', args] as const
}

export function getSeriesSerieIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesSerieIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesSerieIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesQueryKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/matches', args] as const
}

export function getSeriesSerieIdOrSlugMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesPastQueryKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/matches/past', args] as const
}

export function getSeriesSerieIdOrSlugMatchesPastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesPastQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugMatchesPastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.past.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlugMatchesPast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesPastQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesPastQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlugMatchesPast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesPastQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesPastQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesRunningQueryKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/matches/running', args] as const
}

export function getSeriesSerieIdOrSlugMatchesRunningQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesRunningQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugMatchesRunningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.running.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlugMatchesRunning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesRunningQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesRunningQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlugMatchesRunning<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesRunningQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesRunningQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesUpcomingQueryKey(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
) {
  return ['series', '/series/:serie_id_or_slug/matches/upcoming', args] as const
}

export function getSeriesSerieIdOrSlugMatchesUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesUpcomingQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugMatchesUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.upcoming.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlugMatchesUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesUpcomingQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesUpcomingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlugMatchesUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugMatchesUpcomingQueryKey>
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
      ...getSeriesSerieIdOrSlugMatchesUpcomingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugPlayersQueryKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/players', args] as const
}

export function getSeriesSerieIdOrSlugPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugPlayersQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].players.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlugPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugPlayersQueryKey>
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
      ...getSeriesSerieIdOrSlugPlayersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlugPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugPlayersQueryKey>
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
      ...getSeriesSerieIdOrSlugPlayersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugTournamentsQueryKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/tournaments', args] as const
}

export function getSeriesSerieIdOrSlugTournamentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugTournamentsQueryKey>
  >({
    queryKey: getSeriesSerieIdOrSlugTournamentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie_id_or_slug'].tournaments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesSerieIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugTournamentsQueryKey>
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
      ...getSeriesSerieIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesSerieIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieIdOrSlugTournamentsQueryKey>
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
      ...getSeriesSerieIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsQueryKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function getTeamsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >({
    queryKey: getTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug', args] as const
}

export function getTeamsTeamIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugQueryKey>
  >({
    queryKey: getTeamsTeamIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugLeaguesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/leagues', args] as const
}

export function getTeamsTeamIdOrSlugLeaguesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugLeaguesQueryKey>
  >({
    queryKey: getTeamsTeamIdOrSlugLeaguesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id_or_slug'].leagues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdOrSlugLeagues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugLeaguesQueryKey>
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
      ...getTeamsTeamIdOrSlugLeaguesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdOrSlugLeagues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugLeaguesQueryKey>
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
      ...getTeamsTeamIdOrSlugLeaguesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugMatchesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/matches', args] as const
}

export function getTeamsTeamIdOrSlugMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugMatchesQueryKey>
  >({
    queryKey: getTeamsTeamIdOrSlugMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id_or_slug'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugMatchesQueryKey>
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
      ...getTeamsTeamIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugMatchesQueryKey>
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
      ...getTeamsTeamIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugSeriesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/series', args] as const
}

export function getTeamsTeamIdOrSlugSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugSeriesQueryKey>
  >({
    queryKey: getTeamsTeamIdOrSlugSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id_or_slug'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugSeriesQueryKey>
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
      ...getTeamsTeamIdOrSlugSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugSeriesQueryKey>
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
      ...getTeamsTeamIdOrSlugSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugTournamentsQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/tournaments', args] as const
}

export function getTeamsTeamIdOrSlugTournamentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugTournamentsQueryKey>
  >({
    queryKey: getTeamsTeamIdOrSlugTournamentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id_or_slug'].tournaments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugTournamentsQueryKey>
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
      ...getTeamsTeamIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdOrSlugTournamentsQueryKey>
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
      ...getTeamsTeamIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsQueryKey(args: InferRequestType<typeof client.tournaments.$get>) {
  return ['tournaments', '/tournaments', args] as const
}

export function getTournamentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tournaments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTournamentsQueryKey>
  >({
    queryKey: getTournamentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTournaments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTournamentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTournaments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTournamentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTournamentsPastQueryKey(
  args: InferRequestType<typeof client.tournaments.past.$get>,
) {
  return ['tournaments', '/tournaments/past', args] as const
}

export function getTournamentsPastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tournaments.past.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsPastQueryKey>
  >({
    queryKey: getTournamentsPastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments.past.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTournamentsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.past.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTournamentsPastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTournamentsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.past.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTournamentsPastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTournamentsRunningQueryKey(
  args: InferRequestType<typeof client.tournaments.running.$get>,
) {
  return ['tournaments', '/tournaments/running', args] as const
}

export function getTournamentsRunningQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tournaments.running.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsRunningQueryKey>
  >({
    queryKey: getTournamentsRunningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments.running.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTournamentsRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.running.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsRunningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTournamentsRunningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTournamentsRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.running.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsRunningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTournamentsRunningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTournamentsUpcomingQueryKey(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
) {
  return ['tournaments', '/tournaments/upcoming', args] as const
}

export function getTournamentsUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tournaments.upcoming.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsUpcomingQueryKey>
  >({
    queryKey: getTournamentsUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments.upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTournamentsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTournamentsUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTournamentsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTournamentsUpcomingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug', args] as const
}

export function getTournamentsTournamentIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugQueryKey>
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
      ...getTournamentsTournamentIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugQueryKey>
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
      ...getTournamentsTournamentIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugBracketsQueryKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/brackets', args] as const
}

export function getTournamentsTournamentIdOrSlugBracketsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugBracketsQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugBracketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].brackets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlugBrackets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugBracketsQueryKey>
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
      ...getTournamentsTournamentIdOrSlugBracketsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlugBrackets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugBracketsQueryKey>
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
      ...getTournamentsTournamentIdOrSlugBracketsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugMatchesQueryKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/matches', args] as const
}

export function getTournamentsTournamentIdOrSlugMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugMatchesQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugMatchesQueryKey>
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
      ...getTournamentsTournamentIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugMatchesQueryKey>
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
      ...getTournamentsTournamentIdOrSlugMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugPlayersQueryKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/players', args] as const
}

export function getTournamentsTournamentIdOrSlugPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugPlayersQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].players.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlugPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugPlayersQueryKey>
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
      ...getTournamentsTournamentIdOrSlugPlayersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlugPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugPlayersQueryKey>
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
      ...getTournamentsTournamentIdOrSlugPlayersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugRostersQueryKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/rosters', args] as const
}

export function getTournamentsTournamentIdOrSlugRostersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugRostersQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugRostersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].rosters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlugRosters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugRostersQueryKey>
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
      ...getTournamentsTournamentIdOrSlugRostersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlugRosters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugRostersQueryKey>
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
      ...getTournamentsTournamentIdOrSlugRostersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugStandingsQueryKey(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/standings', args] as const
}

export function getTournamentsTournamentIdOrSlugStandingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugStandingsQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugStandingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].standings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlugStandings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugStandingsQueryKey>
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
      ...getTournamentsTournamentIdOrSlugStandingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlugStandings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugStandingsQueryKey>
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
      ...getTournamentsTournamentIdOrSlugStandingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugTeamsQueryKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/teams', args] as const
}

export function getTournamentsTournamentIdOrSlugTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugTeamsQueryKey>
  >({
    queryKey: getTournamentsTournamentIdOrSlugTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTournamentsTournamentIdOrSlugTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugTeamsQueryKey>
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
      ...getTournamentsTournamentIdOrSlugTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTournamentsTournamentIdOrSlugTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTournamentsTournamentIdOrSlugTeamsQueryKey>
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
      ...getTournamentsTournamentIdOrSlugTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideogamesQueryKey(args: InferRequestType<typeof client.videogames.$get>) {
  return ['videogames', '/videogames', args] as const
}

export function getVideogamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videogames.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideogamesQueryKey>
  >({
    queryKey: getVideogamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videogames.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVideogames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.videogames.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideogamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideogames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.videogames.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideogamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug', args] as const
}

export function getVideogamesVideogameIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugQueryKey>
  >({
    queryKey: getVideogamesVideogameIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideogamesVideogameIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugQueryKey>
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
      ...getVideogamesVideogameIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideogamesVideogameIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugQueryKey>
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
      ...getVideogamesVideogameIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugLeaguesQueryKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/leagues', args] as const
}

export function getVideogamesVideogameIdOrSlugLeaguesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugLeaguesQueryKey>
  >({
    queryKey: getVideogamesVideogameIdOrSlugLeaguesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].leagues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideogamesVideogameIdOrSlugLeagues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugLeaguesQueryKey>
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
      ...getVideogamesVideogameIdOrSlugLeaguesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideogamesVideogameIdOrSlugLeagues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugLeaguesQueryKey>
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
      ...getVideogamesVideogameIdOrSlugLeaguesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugSeriesQueryKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/series', args] as const
}

export function getVideogamesVideogameIdOrSlugSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugSeriesQueryKey>
  >({
    queryKey: getVideogamesVideogameIdOrSlugSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideogamesVideogameIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugSeriesQueryKey>
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
      ...getVideogamesVideogameIdOrSlugSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideogamesVideogameIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugSeriesQueryKey>
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
      ...getVideogamesVideogameIdOrSlugSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugTournamentsQueryKey(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/tournaments', args] as const
}

export function getVideogamesVideogameIdOrSlugTournamentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugTournamentsQueryKey>
  >({
    queryKey: getVideogamesVideogameIdOrSlugTournamentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].tournaments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideogamesVideogameIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugTournamentsQueryKey>
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
      ...getVideogamesVideogameIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideogamesVideogameIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugTournamentsQueryKey>
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
      ...getVideogamesVideogameIdOrSlugTournamentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugVersionsQueryKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/versions', args] as const
}

export function getVideogamesVideogameIdOrSlugVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugVersionsQueryKey>
  >({
    queryKey: getVideogamesVideogameIdOrSlugVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVideogamesVideogameIdOrSlugVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugVersionsQueryKey>
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
      ...getVideogamesVideogameIdOrSlugVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVideogamesVideogameIdOrSlugVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideogamesVideogameIdOrSlugVersionsQueryKey>
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
      ...getVideogamesVideogameIdOrSlugVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
