import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
) {
  return ['matches', '/matches/:match_id', args] as const
}

export function getMatchesMatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatchesMatchIdQueryKey>
  >({
    queryKey: getMatchesMatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matches[':match_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesMatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatchesMatchIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatchesMatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatchesMatchIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatchesMatchIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayersAccountIdQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
) {
  return ['players', '/players/:account_id', args] as const
}

export function getPlayersAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersAccountIdQueryKey>
  >({
    queryKey: getPlayersAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlayersAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayersAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayersAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlayersAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayersAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayersAccountIdWlQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
) {
  return ['players', '/players/:account_id/wl', args] as const
}

export function getPlayersAccountIdWlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdWlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].wl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdWlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayersAccountIdWlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdWl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayersAccountIdWlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayersAccountIdRecentMatchesQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
) {
  return ['players', '/players/:account_id/recentMatches', args] as const
}

export function getPlayersAccountIdRecentMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdRecentMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].recentMatches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdRecentMatchesQueryKey>
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
      ...getPlayersAccountIdRecentMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdRecentMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdRecentMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdMatchesQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
) {
  return ['players', '/players/:account_id/matches', args] as const
}

export function getPlayersAccountIdMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdMatchesQueryKey>
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
      ...getPlayersAccountIdMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdHeroesQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
) {
  return ['players', '/players/:account_id/heroes', args] as const
}

export function getPlayersAccountIdHeroesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdHeroesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].heroes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdHeroesQueryKey>
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
      ...getPlayersAccountIdHeroesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdHeroes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdHeroesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdPeersQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
) {
  return ['players', '/players/:account_id/peers', args] as const
}

export function getPlayersAccountIdPeersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].peers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdPeersQueryKey>
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
      ...getPlayersAccountIdPeersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdPeers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdPeersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdProsQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
) {
  return ['players', '/players/:account_id/pros', args] as const
}

export function getPlayersAccountIdProsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdProsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].pros.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdProsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayersAccountIdProsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdPros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayersAccountIdProsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayersAccountIdTotalsQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
) {
  return ['players', '/players/:account_id/totals', args] as const
}

export function getPlayersAccountIdTotalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].totals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdTotalsQueryKey>
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
      ...getPlayersAccountIdTotalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdTotalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdCountsQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
) {
  return ['players', '/players/:account_id/counts', args] as const
}

export function getPlayersAccountIdCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].counts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdCountsQueryKey>
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
      ...getPlayersAccountIdCountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdCountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdHistogramsFieldQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
) {
  return ['players', '/players/:account_id/histograms/:field', args] as const
}

export function getPlayersAccountIdHistogramsFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdHistogramsFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].histograms[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdHistogramsFieldQueryKey>
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
      ...getPlayersAccountIdHistogramsFieldQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdHistogramsField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdHistogramsFieldQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdWardmapQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
) {
  return ['players', '/players/:account_id/wardmap', args] as const
}

export function getPlayersAccountIdWardmapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdWardmapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].wardmap.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdWardmapQueryKey>
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
      ...getPlayersAccountIdWardmapQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdWardmap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdWardmapQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdWordcloudQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
) {
  return ['players', '/players/:account_id/wordcloud', args] as const
}

export function getPlayersAccountIdWordcloudQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdWordcloudQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].wordcloud.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdWordcloudQueryKey>
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
      ...getPlayersAccountIdWordcloudQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdWordcloud<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdWordcloudQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdRatingsQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
) {
  return ['players', '/players/:account_id/ratings', args] as const
}

export function getPlayersAccountIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdRatingsQueryKey>
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
      ...getPlayersAccountIdRatingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdRatingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlayersAccountIdRankingsQueryKey(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
) {
  return ['players', '/players/:account_id/rankings', args] as const
}

export function getPlayersAccountIdRankingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlayersAccountIdRankingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':account_id'].rankings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPlayersAccountIdRankingsQueryKey>
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
      ...getPlayersAccountIdRankingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlayersAccountIdRankings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPlayersAccountIdRankingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getTopPlayersQueryKey(args: InferRequestType<typeof client.topPlayers.$get>) {
  return ['topPlayers', '/topPlayers', args] as const
}

export function getTopPlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.topPlayers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopPlayersQueryKey>
  >({
    queryKey: getTopPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topPlayers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.topPlayers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.topPlayers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProPlayersQueryKey() {
  return ['proPlayers', '/proPlayers'] as const
}

export function getProPlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProPlayersQueryKey>
  >({
    queryKey: getProPlayersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.proPlayers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProPlayersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProPlayersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProMatchesQueryKey(args: InferRequestType<typeof client.proMatches.$get>) {
  return ['proMatches', '/proMatches', args] as const
}

export function getProMatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.proMatches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProMatchesQueryKey>
  >({
    queryKey: getProMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proMatches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.proMatches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.proMatches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPublicMatchesQueryKey(args: InferRequestType<typeof client.publicMatches.$get>) {
  return ['publicMatches', '/publicMatches', args] as const
}

export function getPublicMatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.publicMatches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicMatchesQueryKey>
  >({
    queryKey: getPublicMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publicMatches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublicMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.publicMatches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublicMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublicMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.publicMatches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublicMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getParsedMatchesQueryKey(args: InferRequestType<typeof client.parsedMatches.$get>) {
  return ['parsedMatches', '/parsedMatches', args] as const
}

export function getParsedMatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.parsedMatches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParsedMatchesQueryKey>
  >({
    queryKey: getParsedMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parsedMatches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useParsedMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parsedMatches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getParsedMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getParsedMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseParsedMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parsedMatches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getParsedMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getParsedMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExplorerQueryKey(args: InferRequestType<typeof client.explorer.$get>) {
  return ['explorer', '/explorer', args] as const
}

export function getExplorerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.explorer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExplorerQueryKey>
  >({
    queryKey: getExplorerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.explorer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExplorer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.explorer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExplorerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExplorerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExplorer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.explorer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExplorerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExplorerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetadataQueryKey() {
  return ['metadata', '/metadata'] as const
}

export function getMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetadataQueryKey>
  >({
    queryKey: getMetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDistributionsQueryKey() {
  return ['distributions', '/distributions'] as const
}

export function getDistributionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsQueryKey>
  >({
    queryKey: getDistributionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.distributions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistributionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistributionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRankingsQueryKey(args: InferRequestType<typeof client.rankings.$get>) {
  return ['rankings', '/rankings', args] as const
}

export function getRankingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rankings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRankingsQueryKey>
  >({
    queryKey: getRankingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rankings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRankings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rankings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRankingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRankingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRankings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rankings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRankingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRankingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBenchmarksQueryKey(args: InferRequestType<typeof client.benchmarks.$get>) {
  return ['benchmarks', '/benchmarks', args] as const
}

export function getBenchmarksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.benchmarks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBenchmarksQueryKey>
  >({
    queryKey: getBenchmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.benchmarks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBenchmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.benchmarks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBenchmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBenchmarksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBenchmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.benchmarks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBenchmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBenchmarksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRequestJobIdQueryKey(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
) {
  return ['request', '/request/:jobId', args] as const
}

export function getRequestJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestJobIdQueryKey>
  >({
    queryKey: getRequestJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.request[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRequestJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRequestJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRequestJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRequestJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':match_id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':match_id']['$post']>,
        TOnMutateResult
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

export function getFindMatchesQueryKey(args: InferRequestType<typeof client.findMatches.$get>) {
  return ['findMatches', '/findMatches', args] as const
}

export function getFindMatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.findMatches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFindMatchesQueryKey>
  >({
    queryKey: getFindMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findMatches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFindMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findMatches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindMatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findMatches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeroesQueryKey() {
  return ['heroes', '/heroes'] as const
}

export function getHeroesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeroesQueryKey>
  >({
    queryKey: getHeroesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.heroes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHeroes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHeroesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHeroesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHeroes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHeroesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHeroesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeroStatsQueryKey() {
  return ['heroStats', '/heroStats'] as const
}

export function getHeroStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeroStatsQueryKey>
  >({
    queryKey: getHeroStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.heroStats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHeroStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHeroStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHeroStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHeroStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHeroStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHeroStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeroesHeroIdMatchesQueryKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/matches', args] as const
}

export function getHeroesHeroIdMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHeroesHeroIdMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.heroes[':hero_id'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHeroesHeroIdMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHeroesHeroIdMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHeroesHeroIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHeroesHeroIdMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeroesHeroIdMatchupsQueryKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/matchups', args] as const
}

export function getHeroesHeroIdMatchupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHeroesHeroIdMatchupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.heroes[':hero_id'].matchups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHeroesHeroIdMatchupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHeroesHeroIdMatchupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHeroesHeroIdMatchups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHeroesHeroIdMatchupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeroesHeroIdDurationsQueryKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/durations', args] as const
}

export function getHeroesHeroIdDurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHeroesHeroIdDurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.heroes[':hero_id'].durations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHeroesHeroIdDurationsQueryKey>
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
      ...getHeroesHeroIdDurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHeroesHeroIdDurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHeroesHeroIdDurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeroesHeroIdPlayersQueryKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/players', args] as const
}

export function getHeroesHeroIdPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHeroesHeroIdPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.heroes[':hero_id'].players.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHeroesHeroIdPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHeroesHeroIdPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHeroesHeroIdPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHeroesHeroIdPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeroesHeroIdItemPopularityQueryKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/itemPopularity', args] as const
}

export function getHeroesHeroIdItemPopularityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHeroesHeroIdItemPopularityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.heroes[':hero_id'].itemPopularity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHeroesHeroIdItemPopularityQueryKey>
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
      ...getHeroesHeroIdItemPopularityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHeroesHeroIdItemPopularity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHeroesHeroIdItemPopularityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesQueryKey() {
  return ['leagues', '/leagues'] as const
}

export function getLeaguesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeaguesQueryKey>
  >({
    queryKey: getLeaguesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
    { ...getLeaguesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeagues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>
  >,
  TError = DefaultError,
>(
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
    { ...getLeaguesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLeaguesLeagueIdQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
) {
  return ['leagues', '/leagues/:league_id', args] as const
}

export function getLeaguesLeagueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeaguesLeagueIdQueryKey>
  >({
    queryKey: getLeaguesLeagueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLeaguesLeagueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLeaguesLeagueIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeaguesLeagueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLeaguesLeagueIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLeaguesLeagueIdMatchesQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
) {
  return ['leagues', '/leagues/:league_id/matches', args] as const
}

export function getLeaguesLeagueIdMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLeaguesLeagueIdMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLeaguesLeagueIdMatchesQueryKey>
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
      ...getLeaguesLeagueIdMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getLeaguesLeagueIdMatchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdMatchIdsQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
) {
  return ['leagues', '/leagues/:league_id/matchIds', args] as const
}

export function getLeaguesLeagueIdMatchIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLeaguesLeagueIdMatchIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id'].matchIds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLeaguesLeagueIdMatchIdsQueryKey>
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
      ...getLeaguesLeagueIdMatchIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdMatchIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getLeaguesLeagueIdMatchIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLeaguesLeagueIdTeamsQueryKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
) {
  return ['leagues', '/leagues/:league_id/teams', args] as const
}

export function getLeaguesLeagueIdTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLeaguesLeagueIdTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.leagues[':league_id'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLeaguesLeagueIdTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLeaguesLeagueIdTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeaguesLeagueIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLeaguesLeagueIdTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getTeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
) {
  return ['teams', '/teams/:team_id', args] as const
}

export function getTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >({
    queryKey: getTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdMatchesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
) {
  return ['teams', '/teams/:team_id/matches', args] as const
}

export function getTeamsTeamIdMatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdMatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].matches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeamsTeamIdMatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdMatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdMatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdPlayersQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
) {
  return ['teams', '/teams/:team_id/players', args] as const
}

export function getTeamsTeamIdPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].players.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeamsTeamIdPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIdHeroesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
) {
  return ['teams', '/teams/:team_id/heroes', args] as const
}

export function getTeamsTeamIdHeroesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdHeroesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].heroes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdHeroes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeamsTeamIdHeroesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdHeroesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdHeroes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdHeroesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecordsFieldQueryKey(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
) {
  return ['records', '/records/:field', args] as const
}

export function getRecordsFieldQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordsFieldQueryKey>
  >({
    queryKey: getRecordsFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records[':field'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecordsField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecordsFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecordsField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordsFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecordsFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLiveQueryKey() {
  return ['live', '/live'] as const
}

export function getLiveQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiveQueryKey>
  >({
    queryKey: getLiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.live.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLive<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLive<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScenariosItemTimingsQueryKey(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
) {
  return ['scenarios', '/scenarios/itemTimings', args] as const
}

export function getScenariosItemTimingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScenariosItemTimingsQueryKey>
  >({
    queryKey: getScenariosItemTimingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenarios.itemTimings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScenariosItemTimings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenariosItemTimingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScenariosItemTimingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScenariosItemTimings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenariosItemTimingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScenariosItemTimingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScenariosLaneRolesQueryKey(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
) {
  return ['scenarios', '/scenarios/laneRoles', args] as const
}

export function getScenariosLaneRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scenarios.laneRoles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScenariosLaneRolesQueryKey>
  >({
    queryKey: getScenariosLaneRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenarios.laneRoles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScenariosLaneRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenariosLaneRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScenariosLaneRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScenariosLaneRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScenariosLaneRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScenariosLaneRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScenariosMiscQueryKey(
  args: InferRequestType<typeof client.scenarios.misc.$get>,
) {
  return ['scenarios', '/scenarios/misc', args] as const
}

export function getScenariosMiscQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scenarios.misc.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScenariosMiscQueryKey>
  >({
    queryKey: getScenariosMiscQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scenarios.misc.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScenariosMisc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.misc.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScenariosMiscQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScenariosMiscQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScenariosMisc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scenarios.misc.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScenariosMiscQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScenariosMiscQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSchemaQueryKey() {
  return ['schema', '/schema'] as const
}

export function getSchemaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemaQueryKey>
  >({
    queryKey: getSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.schema.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConstantsResourceQueryKey(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
) {
  return ['constants', '/constants/:resource', args] as const
}

export function getConstantsResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConstantsResourceQueryKey>
  >({
    queryKey: getConstantsResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.constants[':resource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConstantsResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConstantsResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConstantsResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConstantsResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConstantsResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConstantsResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
