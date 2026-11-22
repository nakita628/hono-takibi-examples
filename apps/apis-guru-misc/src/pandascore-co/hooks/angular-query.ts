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

export function injectAdditions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.additions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdditionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.changes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeletions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deletions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeletionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.incidents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIncidentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectLeagues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.leagues.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLeaguesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLeaguesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlugMatchesPast<
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
  args: () => InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugMatchesPastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlugMatchesRunning<
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
  args: () => InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugMatchesRunningQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlugMatchesUpcoming<
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
  args: () => InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugMatchesUpcomingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLeaguesLeagueIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLeaguesLeagueIdOrSlugTournamentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectLives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lives.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLivesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.matches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMatchesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.matches.past.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMatchesPastQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMatchesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.matches.running.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMatchesRunningQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMatchesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.matches.upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMatchesUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMatchesMatchIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMatchesMatchIdOrSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMatchesMatchIdOrSlugOpponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMatchesMatchIdOrSlugOpponentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.players.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPlayersPlayerIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlayersPlayerIdOrSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPlayersPlayerIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlayersPlayerIdOrSlugMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeriesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.past.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesPastQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeriesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.running.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesRunningQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeriesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesSerieIdOrSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSeriesSerieIdOrSlugMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlugMatchesPast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSeriesSerieIdOrSlugMatchesPastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlugMatchesRunning<
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
  args: () => InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSeriesSerieIdOrSlugMatchesRunningQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlugMatchesUpcoming<
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
  args: () => InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSeriesSerieIdOrSlugMatchesUpcomingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlugPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSeriesSerieIdOrSlugPlayersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSeriesSerieIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSeriesSerieIdOrSlugTournamentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTeamsTeamIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdOrSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTeamsTeamIdOrSlugLeagues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTeamsTeamIdOrSlugLeaguesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTeamsTeamIdOrSlugMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTeamsTeamIdOrSlugMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTeamsTeamIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTeamsTeamIdOrSlugSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTeamsTeamIdOrSlugTournaments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTeamsTeamIdOrSlugTournamentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTournaments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tournaments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTournamentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTournamentsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tournaments.past.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTournamentsPastQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTournamentsRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tournaments.running.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTournamentsRunningQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTournamentsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tournaments.upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTournamentsUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlugBrackets<
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
  args: () => InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugBracketsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlugMatches<
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
  args: () => InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugMatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlugPlayers<
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
  args: () => InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugPlayersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlugRosters<
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
  args: () => InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugRostersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlugStandings<
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
  args: () => InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugStandingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectTournamentsTournamentIdOrSlugTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTournamentsTournamentIdOrSlugTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVideogames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videogames.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideogamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVideogamesVideogameIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideogamesVideogameIdOrSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVideogamesVideogameIdOrSlugLeagues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideogamesVideogameIdOrSlugLeaguesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVideogamesVideogameIdOrSlugSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['series']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideogamesVideogameIdOrSlugSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVideogamesVideogameIdOrSlugTournaments<
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
  args: () => InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideogamesVideogameIdOrSlugTournamentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectVideogamesVideogameIdOrSlugVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideogamesVideogameIdOrSlugVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
