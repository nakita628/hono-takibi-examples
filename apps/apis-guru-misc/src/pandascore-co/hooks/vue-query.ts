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

export function getAdditionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.additions.$get>>,
) {
  return ['additions', '/additions', toValue(args)] as const
}

export function getAdditionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.additions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdditionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.additions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdditions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.additions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>
          >,
          ReturnType<typeof getAdditionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.additions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdditionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.additions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
) {
  return ['changes', '/changes', toValue(args)] as const
}

export function getChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
          >,
          ReturnType<typeof getChangesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deletions.$get>>,
) {
  return ['deletions', '/deletions', toValue(args)] as const
}

export function getDeletionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deletions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeletionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deletions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeletions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deletions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>
          >,
          ReturnType<typeof getDeletionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeletionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeletionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deletions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIncidentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
) {
  return ['incidents', '/incidents', toValue(args)] as const
}

export function getIncidentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIncidentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.incidents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
          >,
          ReturnType<typeof getIncidentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIncidentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIncidentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.incidents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.leagues.$get>>,
) {
  return ['leagues', '/leagues', toValue(args)] as const
}

export function getLeaguesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.leagues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLeagues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.leagues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
          >,
          ReturnType<typeof getLeaguesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeaguesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>>,
) {
  return ['leagues', '/leagues/:league_id_or_slug', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>
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
                  ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesPastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/past', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugMatchesPastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesPastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.past.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
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
                    (typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']
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
                    (typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesPastQueryKey>
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
            ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['past']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesPastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesPastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].matches.past.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesRunningQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/running', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugMatchesRunningQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesRunningQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.running.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
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
                    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
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
                    (typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesRunningQueryKey>
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
            ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['running']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesRunningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesRunningQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].matches.running.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/matches/upcoming', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugMatchesUpcomingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].matches.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
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
                    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
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
                    (typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey>
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
            ReturnType<(typeof client.leagues)[':league_id_or_slug']['matches']['upcoming']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugMatchesUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].matches.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/series', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdOrSlugTournamentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id_or_slug/tournaments', toValue(args)] as const
}

export function getLeaguesLeagueIdOrSlugTournamentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdOrSlugTournamentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id_or_slug'].tournaments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdOrSlugTournamentsQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id_or_slug']['tournaments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdOrSlugTournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdOrSlugTournamentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id_or_slug'].tournaments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLivesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lives.$get>>,
) {
  return ['lives', '/lives', toValue(args)] as const
}

export function getLivesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lives.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
          ReturnType<typeof getLivesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.$get>>,
) {
  return ['matches', '/matches', toValue(args)] as const
}

export function getMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>
          >,
          ReturnType<typeof getMatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchesPastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.past.$get>>,
) {
  return ['matches', '/matches/past', toValue(args)] as const
}

export function getMatchesPastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.past.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesPastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches.past.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMatchesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.past.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>
          >,
          ReturnType<typeof getMatchesPastQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.past.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMatchesPastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesPastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches.past.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchesRunningQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.running.$get>>,
) {
  return ['matches', '/matches/running', toValue(args)] as const
}

export function getMatchesRunningQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.running.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesRunningQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches.running.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMatchesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.running.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>
            >
          >,
          ReturnType<typeof getMatchesRunningQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.running.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesRunningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesRunningQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches.running.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchesUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.upcoming.$get>>,
) {
  return ['matches', '/matches/upcoming', toValue(args)] as const
}

export function getMatchesUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMatchesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matches.upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getMatchesUpcomingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matches.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchesMatchIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>>,
) {
  return ['matches', '/matches/:match_id_or_slug', toValue(args)] as const
}

export function getMatchesMatchIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesMatchIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches[':match_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matches)[':match_id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMatchesMatchIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesMatchIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesMatchIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches[':match_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMatchesMatchIdOrSlugOpponentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>
  >,
) {
  return ['matches', '/matches/:match_id_or_slug/opponents', toValue(args)] as const
}

export function getMatchesMatchIdOrSlugOpponentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesMatchIdOrSlugOpponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches[':match_id_or_slug'].opponents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>
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
                  ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMatchesMatchIdOrSlugOpponentsQueryKey>
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
          Awaited<ReturnType<(typeof client.matches)[':match_id_or_slug']['opponents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesMatchIdOrSlugOpponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesMatchIdOrSlugOpponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches[':match_id_or_slug'].opponents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.players.$get>>,
) {
  return ['players', '/players', toValue(args)] as const
}

export function getPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.players.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.players.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
          >,
          ReturnType<typeof getPlayersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersPlayerIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>>,
) {
  return ['players', '/players/:player_id_or_slug', toValue(args)] as const
}

export function getPlayersPlayerIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersPlayerIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':player_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':player_id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersPlayerIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersPlayerIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersPlayerIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':player_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersPlayerIdOrSlugMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>
  >,
) {
  return ['players', '/players/:player_id_or_slug/matches', toValue(args)] as const
}

export function getPlayersPlayerIdOrSlugMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersPlayerIdOrSlugMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':player_id_or_slug'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>
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
                  ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPlayersPlayerIdOrSlugMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':player_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersPlayerIdOrSlugMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersPlayerIdOrSlugMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':player_id_or_slug'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
) {
  return ['series', '/series', toValue(args)] as const
}

export function getSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          ReturnType<typeof getSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesPastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.past.$get>>,
) {
  return ['series', '/series/past', toValue(args)] as const
}

export function getSeriesPastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.past.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesPastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.past.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeriesPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.past.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>
          >,
          ReturnType<typeof getSeriesPastQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.past.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesPastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesPastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.past.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesRunningQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.running.$get>>,
) {
  return ['series', '/series/running', toValue(args)] as const
}

export function getSeriesRunningQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.running.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesRunningQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.running.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.running.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
          >,
          ReturnType<typeof getSeriesRunningQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.running.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesRunningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesRunningQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.running.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.upcoming.$get>>,
) {
  return ['series', '/series/upcoming', toValue(args)] as const
}

export function getSeriesUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getSeriesUpcomingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>>,
) {
  return ['series', '/series/:serie_id_or_slug', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesSerieIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':serie_id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>
  >,
) {
  return ['series', '/series/:serie_id_or_slug/matches', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesPastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
  >,
) {
  return ['series', '/series/:serie_id_or_slug/matches/past', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugMatchesPastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugMatchesPastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.past.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugMatchesPastQueryKey>
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
            ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['past']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesPastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugMatchesPastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].matches.past.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesRunningQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
  >,
) {
  return ['series', '/series/:serie_id_or_slug/matches/running', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugMatchesRunningQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugMatchesRunningQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.running.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
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
                    (typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']
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
                    (typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugMatchesRunningQueryKey>
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
            ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['running']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesRunningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugMatchesRunningQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].matches.running.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugMatchesUpcomingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
  >,
) {
  return ['series', '/series/:serie_id_or_slug/matches/upcoming', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugMatchesUpcomingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugMatchesUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].matches.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
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
                    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
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
                    (typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugMatchesUpcomingQueryKey>
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
            ReturnType<(typeof client.series)[':serie_id_or_slug']['matches']['upcoming']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugMatchesUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugMatchesUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].matches.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugPlayersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>
  >,
) {
  return ['series', '/series/:serie_id_or_slug/players', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugPlayersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugPlayersQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['players']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieIdOrSlugTournamentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>
  >,
) {
  return ['series', '/series/:serie_id_or_slug/tournaments', toValue(args)] as const
}

export function getSeriesSerieIdOrSlugTournamentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieIdOrSlugTournamentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie_id_or_slug'].tournaments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSeriesSerieIdOrSlugTournamentsQueryKey>
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
          Awaited<ReturnType<(typeof client.series)[':serie_id_or_slug']['tournaments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieIdOrSlugTournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieIdOrSlugTournamentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie_id_or_slug'].tournaments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
) {
  return ['teams', '/teams', toValue(args)] as const
}

export function getTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          ReturnType<typeof getTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>>,
) {
  return ['teams', '/teams/:team_id_or_slug', toValue(args)] as const
}

export function getTeamsTeamIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdOrSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugLeaguesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>
  >,
) {
  return ['teams', '/teams/:team_id_or_slug/leagues', toValue(args)] as const
}

export function getTeamsTeamIdOrSlugLeaguesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdOrSlugLeaguesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id_or_slug'].leagues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdOrSlugLeaguesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['leagues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugLeaguesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdOrSlugLeaguesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id_or_slug'].leagues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>
  >,
) {
  return ['teams', '/teams/:team_id_or_slug/matches', toValue(args)] as const
}

export function getTeamsTeamIdOrSlugMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdOrSlugMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id_or_slug'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdOrSlugMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdOrSlugMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id_or_slug'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>
  >,
) {
  return ['teams', '/teams/:team_id_or_slug/series', toValue(args)] as const
}

export function getTeamsTeamIdOrSlugSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdOrSlugSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id_or_slug'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdOrSlugSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdOrSlugSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id_or_slug'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdOrSlugTournamentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>
  >,
) {
  return ['teams', '/teams/:team_id_or_slug/tournaments', toValue(args)] as const
}

export function getTeamsTeamIdOrSlugTournamentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdOrSlugTournamentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id_or_slug'].tournaments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>
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
                  ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdOrSlugTournamentsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id_or_slug']['tournaments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdOrSlugTournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdOrSlugTournamentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id_or_slug'].tournaments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.$get>>,
) {
  return ['tournaments', '/tournaments', toValue(args)] as const
}

export function getTournamentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTournaments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>
          >,
          ReturnType<typeof getTournamentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsPastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.past.$get>>,
) {
  return ['tournaments', '/tournaments/past', toValue(args)] as const
}

export function getTournamentsPastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.past.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsPastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments.past.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTournamentsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.past.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>
            >
          >,
          ReturnType<typeof getTournamentsPastQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.past.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsPastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsPastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments.past.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsRunningQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.running.$get>>,
) {
  return ['tournaments', '/tournaments/running', toValue(args)] as const
}

export function getTournamentsRunningQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.running.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsRunningQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments.running.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTournamentsRunning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.running.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>
            >
          >,
          ReturnType<typeof getTournamentsRunningQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.running.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsRunningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsRunningQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments.running.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.upcoming.$get>>,
) {
  return ['tournaments', '/tournaments/upcoming', toValue(args)] as const
}

export function getTournamentsUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTournamentsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tournaments.upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getTournamentsUpcomingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tournaments.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugBracketsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/brackets', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugBracketsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugBracketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].brackets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugBracketsQueryKey>
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
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['brackets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugBracketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugBracketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].brackets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/matches', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugMatchesQueryKey>
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
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['matches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugPlayersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/players', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugPlayersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugPlayersQueryKey>
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
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['players']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugRostersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/rosters', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugRostersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugRostersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].rosters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugRostersQueryKey>
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
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['rosters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugRostersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugRostersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].rosters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugStandingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/standings', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugStandingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugStandingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].standings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
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
                    (typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugStandingsQueryKey>
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
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['standings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugStandingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugStandingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].standings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTournamentsTournamentIdOrSlugTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
  >,
) {
  return ['tournaments', '/tournaments/:tournament_id_or_slug/teams', toValue(args)] as const
}

export function getTournamentsTournamentIdOrSlugTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTournamentsTournamentIdOrSlugTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tournaments[':tournament_id_or_slug'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTournamentsTournamentIdOrSlugTeamsQueryKey>
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
            ReturnType<(typeof client.tournaments)[':tournament_id_or_slug']['teams']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTournamentsTournamentIdOrSlugTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTournamentsTournamentIdOrSlugTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tournaments[':tournament_id_or_slug'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideogamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videogames.$get>>,
) {
  return ['videogames', '/videogames', toValue(args)] as const
}

export function getVideogamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videogames.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideogamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videogames.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideogames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videogames.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>
          >,
          ReturnType<typeof getVideogamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videogames.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideogamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideogamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videogames.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug', toValue(args)] as const
}

export function getVideogamesVideogameIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideogamesVideogameIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideogamesVideogameIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideogamesVideogameIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videogames[':videogame_id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugLeaguesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/leagues', toValue(args)] as const
}

export function getVideogamesVideogameIdOrSlugLeaguesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideogamesVideogameIdOrSlugLeaguesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].leagues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideogamesVideogameIdOrSlugLeaguesQueryKey>
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
            ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['leagues']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugLeaguesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideogamesVideogameIdOrSlugLeaguesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videogames[':videogame_id_or_slug'].leagues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/series', toValue(args)] as const
}

export function getVideogamesVideogameIdOrSlugSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideogamesVideogameIdOrSlugSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideogamesVideogameIdOrSlugSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideogamesVideogameIdOrSlugSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videogames[':videogame_id_or_slug'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugTournamentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/tournaments', toValue(args)] as const
}

export function getVideogamesVideogameIdOrSlugTournamentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideogamesVideogameIdOrSlugTournamentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].tournaments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
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
                    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
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
                    (typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideogamesVideogameIdOrSlugTournamentsQueryKey>
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
            ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['tournaments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugTournamentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideogamesVideogameIdOrSlugTournamentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videogames[':videogame_id_or_slug'].tournaments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideogamesVideogameIdOrSlugVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
  >,
) {
  return ['videogames', '/videogames/:videogame_id_or_slug/versions', toValue(args)] as const
}

export function getVideogamesVideogameIdOrSlugVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideogamesVideogameIdOrSlugVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videogames[':videogame_id_or_slug'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
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
                    (typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']
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
                    (typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideogamesVideogameIdOrSlugVersionsQueryKey>
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
            ReturnType<(typeof client.videogames)[':videogame_id_or_slug']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideogamesVideogameIdOrSlugVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideogamesVideogameIdOrSlugVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videogames[':videogame_id_or_slug'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
