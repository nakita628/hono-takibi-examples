import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetAdditionsKey(args: InferRequestType<typeof client.additions.$get>) {
  return ['additions', '/additions', args] as const
}

export function useGetAdditions<TError = unknown>(
  args: InferRequestType<typeof client.additions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdditionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.additions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdditions<TError = unknown>(
  args: InferRequestType<typeof client.additions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdditionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.additions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChangesKey(args: InferRequestType<typeof client.changes.$get>) {
  return ['changes', '/changes', args] as const
}

export function useGetChanges<TError = unknown>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.changes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChanges<TError = unknown>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.changes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDeletionsKey(args: InferRequestType<typeof client.deletions.$get>) {
  return ['deletions', '/deletions', args] as const
}

export function useGetDeletions<TError = unknown>(
  args: InferRequestType<typeof client.deletions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeletionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deletions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeletions<TError = unknown>(
  args: InferRequestType<typeof client.deletions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeletionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deletions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncidentsKey(args: InferRequestType<typeof client.incidents.$get>) {
  return ['incidents', '/incidents', args] as const
}

export function useGetIncidents<TError = unknown>(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncidents<TError = unknown>(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIncidentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.incidents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesKey(args: InferRequestType<typeof client.leagues.$get>) {
  return ['leagues', '/leagues', args] as const
}

export function useGetLeagues<TError = unknown>(
  args: InferRequestType<typeof client.leagues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLeaguesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.leagues.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLeagues<TError = unknown>(
  args: InferRequestType<typeof client.leagues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLeaguesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.leagues.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLeaguesLeagueIdOrSlugKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug', args] as const
}

export function useGetLeaguesLeagueIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdOrSlugMatchesKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches', args] as const
}

export function useGetLeaguesLeagueIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdOrSlugMatchesPastKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/past', args] as const
}

export function useGetLeaguesLeagueIdOrSlugMatchesPast<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesPastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].matches.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlugMatchesPast<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesPastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].matches.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdOrSlugMatchesRunningKey(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/running', args] as const
}

export function useGetLeaguesLeagueIdOrSlugMatchesRunning<TError = unknown>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesRunningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.leagues[':league_id_or_slug'].matches.running.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlugMatchesRunning<TError = unknown>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesRunningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.leagues[':league_id_or_slug'].matches.running.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdOrSlugMatchesUpcomingKey(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/upcoming', args] as const
}

export function useGetLeaguesLeagueIdOrSlugMatchesUpcoming<TError = unknown>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.leagues[':league_id_or_slug'].matches.upcoming.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlugMatchesUpcoming<TError = unknown>(
  args: InferRequestType<
    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugMatchesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.leagues[':league_id_or_slug'].matches.upcoming.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdOrSlugSeriesKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/series', args] as const
}

export function useGetLeaguesLeagueIdOrSlugSeries<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlugSeries<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdOrSlugTournamentsKey(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
) {
  return ['leagues', '/leagues/:league_id_or_slug/tournaments', args] as const
}

export function useGetLeaguesLeagueIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLeaguesLeagueIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.leagues[':league_id_or_slug'].tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLivesKey(args: InferRequestType<typeof client.lives.$get>) {
  return ['lives', '/lives', args] as const
}

export function useGetLives<TError = unknown>(
  args: InferRequestType<typeof client.lives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLives<TError = unknown>(
  args: InferRequestType<typeof client.lives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMatchesKey(args: InferRequestType<typeof client.matches.$get>) {
  return ['matches', '/matches', args] as const
}

export function useGetMatches<TError = unknown>(
  args: InferRequestType<typeof client.matches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.matches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMatches<TError = unknown>(
  args: InferRequestType<typeof client.matches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.matches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMatchesPastKey(args: InferRequestType<typeof client.matches.past.$get>) {
  return ['matches', '/matches/past', args] as const
}

export function useGetMatchesPast<TError = unknown>(
  args: InferRequestType<typeof client.matches.past.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatchesPastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchesPast<TError = unknown>(
  args: InferRequestType<typeof client.matches.past.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatchesPastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchesRunningKey(
  args: InferRequestType<typeof client.matches.running.$get>,
) {
  return ['matches', '/matches/running', args] as const
}

export function useGetMatchesRunning<TError = unknown>(
  args: InferRequestType<typeof client.matches.running.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatchesRunningKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchesRunning<TError = unknown>(
  args: InferRequestType<typeof client.matches.running.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatchesRunningKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchesUpcomingKey(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
) {
  return ['matches', '/matches/upcoming', args] as const
}

export function useGetMatchesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMatchesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.matches.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMatchesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchesMatchIdOrSlugKey(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
) {
  return ['matches', '/matches/:match_id_or_slug', args] as const
}

export function useGetMatchesMatchIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMatchesMatchIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches[':match_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchesMatchIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMatchesMatchIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches[':match_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMatchesMatchIdOrSlugOpponentsKey(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
) {
  return ['matches', '/matches/:match_id_or_slug/opponents', args] as const
}

export function useGetMatchesMatchIdOrSlugOpponents<TError = unknown>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMatchesMatchIdOrSlugOpponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.matches[':match_id_or_slug'].opponents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchesMatchIdOrSlugOpponents<TError = unknown>(
  args: InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMatchesMatchIdOrSlugOpponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.matches[':match_id_or_slug'].opponents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersKey(args: InferRequestType<typeof client.players.$get>) {
  return ['players', '/players', args] as const
}

export function useGetPlayers<TError = unknown>(
  args: InferRequestType<typeof client.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.players.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlayers<TError = unknown>(
  args: InferRequestType<typeof client.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.players.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlayersPlayerIdOrSlugKey(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
) {
  return ['players', '/players/:player_id_or_slug', args] as const
}

export function useGetPlayersPlayerIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlayersPlayerIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':player_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersPlayerIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlayersPlayerIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':player_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersPlayerIdOrSlugMatchesKey(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
) {
  return ['players', '/players/:player_id_or_slug/matches', args] as const
}

export function useGetPlayersPlayerIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlayersPlayerIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.players[':player_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersPlayerIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlayersPlayerIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.players[':player_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function useGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSeriesPastKey(args: InferRequestType<typeof client.series.past.$get>) {
  return ['series', '/series/past', args] as const
}

export function useGetSeriesPast<TError = unknown>(
  args: InferRequestType<typeof client.series.past.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesPastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesPast<TError = unknown>(
  args: InferRequestType<typeof client.series.past.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesPastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesRunningKey(args: InferRequestType<typeof client.series.running.$get>) {
  return ['series', '/series/running', args] as const
}

export function useGetSeriesRunning<TError = unknown>(
  args: InferRequestType<typeof client.series.running.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesRunningKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesRunning<TError = unknown>(
  args: InferRequestType<typeof client.series.running.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesRunningKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesUpcomingKey(
  args: InferRequestType<typeof client.series.upcoming.$get>,
) {
  return ['series', '/series/upcoming', args] as const
}

export function useGetSeriesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.series.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesUpcomingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.series.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesUpcomingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug', args] as const
}

export function useGetSeriesSerieIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':serie_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':serie_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugMatchesKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/matches', args] as const
}

export function useGetSeriesSerieIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugMatchesPastKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/matches/past', args] as const
}

export function useGetSeriesSerieIdOrSlugMatchesPast<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesPastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].matches.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlugMatchesPast<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesPastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].matches.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugMatchesRunningKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/matches/running', args] as const
}

export function useGetSeriesSerieIdOrSlugMatchesRunning<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesRunningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].matches.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlugMatchesRunning<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesRunningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].matches.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugMatchesUpcomingKey(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
) {
  return ['series', '/series/:serie_id_or_slug/matches/upcoming', args] as const
}

export function useGetSeriesSerieIdOrSlugMatchesUpcoming<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.series[':serie_id_or_slug'].matches.upcoming.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlugMatchesUpcoming<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugMatchesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.series[':serie_id_or_slug'].matches.upcoming.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugPlayersKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/players', args] as const
}

export function useGetSeriesSerieIdOrSlugPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlugPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesSerieIdOrSlugTournamentsKey(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
) {
  return ['series', '/series/:serie_id_or_slug/tournaments', args] as const
}

export function useGetSeriesSerieIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSerieIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSeriesSerieIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':serie_id_or_slug'].tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function useGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTeamsTeamIdOrSlugKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug', args] as const
}

export function useGetTeamsTeamIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdOrSlugLeaguesKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/leagues', args] as const
}

export function useGetTeamsTeamIdOrSlugLeagues<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugLeaguesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].leagues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdOrSlugLeagues<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugLeaguesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].leagues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdOrSlugMatchesKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/matches', args] as const
}

export function useGetTeamsTeamIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdOrSlugSeriesKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/series', args] as const
}

export function useGetTeamsTeamIdOrSlugSeries<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdOrSlugSeries<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id_or_slug'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdOrSlugTournamentsKey(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
) {
  return ['teams', '/teams/:team_id_or_slug/tournaments', args] as const
}

export function useGetTeamsTeamIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':team_id_or_slug'].tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':team_id_or_slug'].tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsKey(args: InferRequestType<typeof client.tournaments.$get>) {
  return ['tournaments', '/tournaments', args] as const
}

export function useGetTournaments<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTournamentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournaments<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTournamentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsPastKey(
  args: InferRequestType<typeof client.tournaments.past.$get>,
) {
  return ['tournaments', '/tournaments/past', args] as const
}

export function useGetTournamentsPast<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.past.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsPastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsPast<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.past.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsPastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.past.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsRunningKey(
  args: InferRequestType<typeof client.tournaments.running.$get>,
) {
  return ['tournaments', '/tournaments/running', args] as const
}

export function useGetTournamentsRunning<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.running.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsRunningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsRunning<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.running.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsRunningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.running.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsUpcomingKey(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
) {
  return ['tournaments', '/tournaments/upcoming', args] as const
}

export function useGetTournamentsUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.tournaments.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tournaments.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug', args] as const
}

export function useGetTournamentsTournamentIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tournaments[':tournament_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tournaments[':tournament_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugBracketsKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/brackets', args] as const
}

export function useGetTournamentsTournamentIdOrSlugBrackets<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugBracketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].brackets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlugBrackets<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugBracketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].brackets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugMatchesKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/matches', args] as const
}

export function useGetTournamentsTournamentIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].matches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlugMatches<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].matches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugPlayersKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/players', args] as const
}

export function useGetTournamentsTournamentIdOrSlugPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].players.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlugPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].players.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugRostersKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/rosters', args] as const
}

export function useGetTournamentsTournamentIdOrSlugRosters<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugRostersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].rosters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlugRosters<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugRostersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].rosters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugStandingsKey(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/standings', args] as const
}

export function useGetTournamentsTournamentIdOrSlugStandings<TError = unknown>(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugStandingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].standings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlugStandings<TError = unknown>(
  args: InferRequestType<
    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugStandingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tournaments[':tournament_id_or_slug'].standings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTournamentsTournamentIdOrSlugTeamsKey(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/teams', args] as const
}

export function useGetTournamentsTournamentIdOrSlugTeams<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tournaments[':tournament_id_or_slug'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTournamentsTournamentIdOrSlugTeams<TError = unknown>(
  args: InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTournamentsTournamentIdOrSlugTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tournaments[':tournament_id_or_slug'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideogamesKey(args: InferRequestType<typeof client.videogames.$get>) {
  return ['videogames', '/videogames', args] as const
}

export function useGetVideogames<TError = unknown>(
  args: InferRequestType<typeof client.videogames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideogamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videogames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideogames<TError = unknown>(
  args: InferRequestType<typeof client.videogames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideogamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videogames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideogamesVideogameIdOrSlugKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug', args] as const
}

export function useGetVideogamesVideogameIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videogames[':videogame_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideogamesVideogameIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videogames[':videogame_id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideogamesVideogameIdOrSlugLeaguesKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/leagues', args] as const
}

export function useGetVideogamesVideogameIdOrSlugLeagues<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugLeaguesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videogames[':videogame_id_or_slug'].leagues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideogamesVideogameIdOrSlugLeagues<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugLeaguesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videogames[':videogame_id_or_slug'].leagues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideogamesVideogameIdOrSlugSeriesKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/series', args] as const
}

export function useGetVideogamesVideogameIdOrSlugSeries<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videogames[':videogame_id_or_slug'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideogamesVideogameIdOrSlugSeries<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videogames[':videogame_id_or_slug'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideogamesVideogameIdOrSlugTournamentsKey(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/tournaments', args] as const
}

export function useGetVideogamesVideogameIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.videogames[':videogame_id_or_slug'].tournaments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideogamesVideogameIdOrSlugTournaments<TError = unknown>(
  args: InferRequestType<
    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugTournamentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.videogames[':videogame_id_or_slug'].tournaments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVideogamesVideogameIdOrSlugVersionsKey(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/versions', args] as const
}

export function useGetVideogamesVideogameIdOrSlugVersions<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.videogames[':videogame_id_or_slug'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideogamesVideogameIdOrSlugVersions<TError = unknown>(
  args: InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideogamesVideogameIdOrSlugVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.videogames[':videogame_id_or_slug'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
