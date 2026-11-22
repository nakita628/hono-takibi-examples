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

export function getBenchmarksKey() {
  return ['benchmarks'] as const
}

export function getConstantsKey() {
  return ['constants'] as const
}

export function getDistributionsKey() {
  return ['distributions'] as const
}

export function getExplorerKey() {
  return ['explorer'] as const
}

export function getFindMatchesKey() {
  return ['findMatches'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getHeroStatsKey() {
  return ['heroStats'] as const
}

export function getHeroesKey() {
  return ['heroes'] as const
}

export function getLeaguesKey() {
  return ['leagues'] as const
}

export function getLiveKey() {
  return ['live'] as const
}

export function getMatchesKey() {
  return ['matches'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getParsedMatchesKey() {
  return ['parsedMatches'] as const
}

export function getPlayersKey() {
  return ['players'] as const
}

export function getProMatchesKey() {
  return ['proMatches'] as const
}

export function getProPlayersKey() {
  return ['proPlayers'] as const
}

export function getPublicMatchesKey() {
  return ['publicMatches'] as const
}

export function getRankingsKey() {
  return ['rankings'] as const
}

export function getRecordsKey() {
  return ['records'] as const
}

export function getRequestKey() {
  return ['request'] as const
}

export function getScenariosKey() {
  return ['scenarios'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTopPlayersKey() {
  return ['topPlayers'] as const
}

export function getMatchesMatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matches)[':match_id']['$get']>>,
) {
  return ['matches', '/matches/:match_id', toValue(args)] as const
}

export function getMatchesMatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matches)[':match_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatchesMatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matches[':match_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matches)[':match_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMatchesMatchIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesMatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatchesMatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matches[':match_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['$get']>>,
) {
  return ['players', '/players/:account_id', toValue(args)] as const
}

export function getPlayersAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdWlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>>,
) {
  return ['players', '/players/:account_id/wl', toValue(args)] as const
}

export function getPlayersAccountIdWlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdWlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].wl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdWl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdWlQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdWlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdWlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].wl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdRecentMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>
  >,
) {
  return ['players', '/players/:account_id/recentMatches', toValue(args)] as const
}

export function getPlayersAccountIdRecentMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdRecentMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].recentMatches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdRecentMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdRecentMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdRecentMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdRecentMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].recentMatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>
  >,
) {
  return ['players', '/players/:account_id/matches', toValue(args)] as const
}

export function getPlayersAccountIdMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdHeroesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>
  >,
) {
  return ['players', '/players/:account_id/heroes', toValue(args)] as const
}

export function getPlayersAccountIdHeroesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdHeroesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].heroes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdHeroes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdHeroesQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdHeroesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdHeroesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].heroes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdPeersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>>,
) {
  return ['players', '/players/:account_id/peers', toValue(args)] as const
}

export function getPlayersAccountIdPeersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdPeersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].peers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdPeers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdPeersQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdPeersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdPeersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].peers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdProsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>>,
) {
  return ['players', '/players/:account_id/pros', toValue(args)] as const
}

export function getPlayersAccountIdProsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdProsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].pros.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdPros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdProsQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdProsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdProsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].pros.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdTotalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>
  >,
) {
  return ['players', '/players/:account_id/totals', toValue(args)] as const
}

export function getPlayersAccountIdTotalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdTotalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].totals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdTotalsQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdTotalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdTotalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].totals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdCountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>
  >,
) {
  return ['players', '/players/:account_id/counts', toValue(args)] as const
}

export function getPlayersAccountIdCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].counts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdCountsQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdHistogramsFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
  >,
) {
  return ['players', '/players/:account_id/histograms/:field', toValue(args)] as const
}

export function getPlayersAccountIdHistogramsFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdHistogramsFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].histograms[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdHistogramsField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
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
                  ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdHistogramsFieldQueryKey>
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
            ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdHistogramsFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdHistogramsFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].histograms[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdWardmapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>
  >,
) {
  return ['players', '/players/:account_id/wardmap', toValue(args)] as const
}

export function getPlayersAccountIdWardmapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdWardmapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].wardmap.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdWardmap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdWardmapQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdWardmapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdWardmapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].wardmap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdWordcloudQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>
  >,
) {
  return ['players', '/players/:account_id/wordcloud', toValue(args)] as const
}

export function getPlayersAccountIdWordcloudQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdWordcloudQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].wordcloud.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdWordcloud<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdWordcloudQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdWordcloudQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdWordcloudQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].wordcloud.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdRatingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>
  >,
) {
  return ['players', '/players/:account_id/ratings', toValue(args)] as const
}

export function getPlayersAccountIdRatingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdRatingsQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayersAccountIdRankingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>
  >,
) {
  return ['players', '/players/:account_id/rankings', toValue(args)] as const
}

export function getPlayersAccountIdRankingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersAccountIdRankingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':account_id'].rankings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersAccountIdRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersAccountIdRankingsQueryKey>
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
          Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdRankingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersAccountIdRankingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':account_id'].rankings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlayersAccountIdRefreshMutationKey() {
  return ['players', '/players/:account_id/refresh', 'POST'] as const
}

export function getPostPlayersAccountIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.players)[':account_id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.players)[':account_id']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlayersAccountIdRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.players)[':account_id']['refresh']['$post']>,
    ) {
      return parseResponse(client.players[':account_id'].refresh.$post(args, options))
    },
  })
}

export function usePostPlayersAccountIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':account_id']['refresh']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.players)[':account_id']['refresh']['$post']>,
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
  const mutationDefaults = getPostPlayersAccountIdRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getTopPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topPlayers.$get>>,
) {
  return ['topPlayers', '/topPlayers', toValue(args)] as const
}

export function getTopPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topPlayers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topPlayers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topPlayers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
          >,
          ReturnType<typeof getTopPlayersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topPlayers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProPlayersQueryKey() {
  return ['proPlayers', '/proPlayers'] as const
}

export function getProPlayersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProPlayersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proPlayers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
          >,
          ReturnType<typeof getProPlayersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProPlayersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.proPlayers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proMatches.$get>>,
) {
  return ['proMatches', '/proMatches', toValue(args)] as const
}

export function getProMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proMatches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proMatches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proMatches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
          >,
          ReturnType<typeof getProMatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.proMatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publicMatches.$get>>,
) {
  return ['publicMatches', '/publicMatches', toValue(args)] as const
}

export function getPublicMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publicMatches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publicMatches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publicMatches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
          >,
          ReturnType<typeof getPublicMatchesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publicMatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParsedMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parsedMatches.$get>>,
) {
  return ['parsedMatches', '/parsedMatches', toValue(args)] as const
}

export function getParsedMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parsedMatches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParsedMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parsedMatches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useParsedMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parsedMatches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
          >,
          ReturnType<typeof getParsedMatchesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParsedMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParsedMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parsedMatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExplorerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.explorer.$get>>,
) {
  return ['explorer', '/explorer', toValue(args)] as const
}

export function getExplorerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.explorer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExplorerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.explorer.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExplorer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.explorer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>
          >,
          ReturnType<typeof getExplorerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExplorerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExplorerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.explorer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataQueryKey() {
  return ['metadata', '/metadata'] as const
}

export function getMetadataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetadataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
          >,
          ReturnType<typeof getMetadataQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetadataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistributionsQueryKey() {
  return ['distributions', '/distributions'] as const
}

export function getDistributionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDistributionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distributions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
          >,
          ReturnType<typeof getDistributionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDistributionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.distributions.$get(undefined, {
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
  return ['search', '/search', toValue(args)] as const
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

export function getRankingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rankings.$get>>,
) {
  return ['rankings', '/rankings', toValue(args)] as const
}

export function getRankingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rankings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRankingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rankings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRankings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rankings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
          >,
          ReturnType<typeof getRankingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRankingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRankingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rankings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBenchmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benchmarks.$get>>,
) {
  return ['benchmarks', '/benchmarks', toValue(args)] as const
}

export function getBenchmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benchmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBenchmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.benchmarks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBenchmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.benchmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
          >,
          ReturnType<typeof getBenchmarksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBenchmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBenchmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.benchmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':jobId']['$get']>>,
) {
  return ['request', '/request/:jobId', toValue(args)] as const
}

export function getRequestJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.request[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getRequestJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.request[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRequestMatchIdMutationKey() {
  return ['request', '/request/:match_id', 'POST'] as const
}

export function getPostRequestMatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':match_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':match_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestMatchIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':match_id']['$post']>) {
      return parseResponse(client.request[':match_id'].$post(args, options))
    },
  })
}

export function usePostRequestMatchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.request)[':match_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.request)[':match_id']['$post']>,
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
  const mutationDefaults = getPostRequestMatchIdMutationOptions<TError, TOnMutateResult>(
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

export function getFindMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findMatches.$get>>,
) {
  return ['findMatches', '/findMatches', toValue(args)] as const
}

export function getFindMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findMatches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.findMatches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFindMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findMatches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
          >,
          ReturnType<typeof getFindMatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFindMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.findMatches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroesQueryKey() {
  return ['heroes', '/heroes'] as const
}

export function getHeroesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHeroesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHeroes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
          ReturnType<typeof getHeroesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeroesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHeroesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.heroes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroStatsQueryKey() {
  return ['heroStats', '/heroStats'] as const
}

export function getHeroStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHeroStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroStats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHeroStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
          >,
          ReturnType<typeof getHeroStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeroStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHeroStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.heroStats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroesHeroIdMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>>,
) {
  return ['heroes', '/heroes/:hero_id/matches', toValue(args)] as const
}

export function getHeroesHeroIdMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHeroesHeroIdMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroes[':hero_id'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHeroesHeroIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHeroesHeroIdMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHeroesHeroIdMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHeroesHeroIdMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.heroes[':hero_id'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroesHeroIdMatchupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>,
) {
  return ['heroes', '/heroes/:hero_id/matchups', toValue(args)] as const
}

export function getHeroesHeroIdMatchupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHeroesHeroIdMatchupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroes[':hero_id'].matchups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHeroesHeroIdMatchups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHeroesHeroIdMatchupsQueryKey>
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
          Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHeroesHeroIdMatchupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHeroesHeroIdMatchupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.heroes[':hero_id'].matchups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroesHeroIdDurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>>,
) {
  return ['heroes', '/heroes/:hero_id/durations', toValue(args)] as const
}

export function getHeroesHeroIdDurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHeroesHeroIdDurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroes[':hero_id'].durations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHeroesHeroIdDurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHeroesHeroIdDurationsQueryKey>
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
          Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHeroesHeroIdDurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHeroesHeroIdDurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.heroes[':hero_id'].durations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroesHeroIdPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>>,
) {
  return ['heroes', '/heroes/:hero_id/players', toValue(args)] as const
}

export function getHeroesHeroIdPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHeroesHeroIdPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroes[':hero_id'].players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHeroesHeroIdPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHeroesHeroIdPlayersQueryKey>
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
          Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHeroesHeroIdPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHeroesHeroIdPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.heroes[':hero_id'].players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeroesHeroIdItemPopularityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>
  >,
) {
  return ['heroes', '/heroes/:hero_id/itemPopularity', toValue(args)] as const
}

export function getHeroesHeroIdItemPopularityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHeroesHeroIdItemPopularityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heroes[':hero_id'].itemPopularity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHeroesHeroIdItemPopularity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHeroesHeroIdItemPopularityQueryKey>
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
          Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHeroesHeroIdItemPopularityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHeroesHeroIdItemPopularityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.heroes[':hero_id'].itemPopularity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesQueryKey() {
  return ['leagues', '/leagues'] as const
}

export function getLeaguesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLeaguesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
      queryKey: getLeaguesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id']['$get']>>,
) {
  return ['leagues', '/leagues/:league_id', toValue(args)] as const
}

export function getLeaguesLeagueIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaguesLeagueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdMatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id/matches', toValue(args)] as const
}

export function getLeaguesLeagueIdMatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaguesLeagueIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdMatchIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>
  >,
) {
  return ['leagues', '/leagues/:league_id/matchIds', toValue(args)] as const
}

export function getLeaguesLeagueIdMatchIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdMatchIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id'].matchIds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaguesLeagueIdMatchIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdMatchIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdMatchIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdMatchIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id'].matchIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>>,
) {
  return ['leagues', '/leagues/:league_id/teams', toValue(args)] as const
}

export function getLeaguesLeagueIdTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLeaguesLeagueIdTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.leagues[':league_id'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLeaguesLeagueIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLeaguesLeagueIdTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLeaguesLeagueIdTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.leagues[':league_id'].teams.$get(toValue(args), {
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

export function getTeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
) {
  return ['teams', '/teams/:team_id', toValue(args)] as const
}

export function getTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdMatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>>,
) {
  return ['teams', '/teams/:team_id/matches', toValue(args)] as const
}

export function getTeamsTeamIdMatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdMatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].matches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdMatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdMatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].matches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>>,
) {
  return ['teams', '/teams/:team_id/players', toValue(args)] as const
}

export function getTeamsTeamIdPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdPlayersQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdHeroesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>>,
) {
  return ['teams', '/teams/:team_id/heroes', toValue(args)] as const
}

export function getTeamsTeamIdHeroesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdHeroesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].heroes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdHeroes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdHeroesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdHeroesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdHeroesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].heroes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecordsFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.records)[':field']['$get']>>,
) {
  return ['records', '/records/:field', toValue(args)] as const
}

export function getRecordsFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.records)[':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordsFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.records[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordsField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.records)[':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
            >
          >,
          ReturnType<typeof getRecordsFieldQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordsFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.records[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveQueryKey() {
  return ['live', '/live'] as const
}

export function getLiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.live.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLive<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
          ReturnType<typeof getLiveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.live.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScenariosItemTimingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.itemTimings.$get>>,
) {
  return ['scenarios', '/scenarios/itemTimings', toValue(args)] as const
}

export function getScenariosItemTimingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.itemTimings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenariosItemTimingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenarios.itemTimings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenariosItemTimings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.itemTimings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
            >
          >,
          ReturnType<typeof getScenariosItemTimingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenariosItemTimingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenariosItemTimingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenarios.itemTimings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScenariosLaneRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.laneRoles.$get>>,
) {
  return ['scenarios', '/scenarios/laneRoles', toValue(args)] as const
}

export function getScenariosLaneRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.laneRoles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenariosLaneRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenarios.laneRoles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenariosLaneRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.laneRoles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
            >
          >,
          ReturnType<typeof getScenariosLaneRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScenariosLaneRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenariosLaneRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenarios.laneRoles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScenariosMiscQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.misc.$get>>,
) {
  return ['scenarios', '/scenarios/misc', toValue(args)] as const
}

export function getScenariosMiscQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.misc.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScenariosMiscQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scenarios.misc.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScenariosMisc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scenarios.misc.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
          >,
          ReturnType<typeof getScenariosMiscQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScenariosMiscQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScenariosMiscQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scenarios.misc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaQueryKey() {
  return ['schema', '/schema'] as const
}

export function getSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
          ReturnType<typeof getSchemaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConstantsResourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.constants)[':resource']['$get']>>,
) {
  return ['constants', '/constants/:resource', toValue(args)] as const
}

export function getConstantsResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.constants)[':resource']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConstantsResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.constants[':resource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConstantsResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.constants)[':resource']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConstantsResourceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConstantsResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConstantsResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.constants[':resource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
