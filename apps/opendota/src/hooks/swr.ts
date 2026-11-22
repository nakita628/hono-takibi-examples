import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetMatchesMatchIdKey(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
) {
  return ['matches', '/matches/:match_id', args] as const
}

export function useGetMatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMatchesMatchIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches[':match_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatchesMatchId<TError = unknown>(
  args: InferRequestType<(typeof client.matches)[':match_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMatchesMatchIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.matches)[':match_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matches[':match_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdKey(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
) {
  return ['players', '/players/:account_id', args] as const
}

export function useGetPlayersAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
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
        ? getGetPlayersAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
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
        ? getGetPlayersAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdWlKey(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
) {
  return ['players', '/players/:account_id/wl', args] as const
}

export function useGetPlayersAccountIdWl<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
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
        ? getGetPlayersAccountIdWlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].wl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdWl<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['wl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
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
        ? getGetPlayersAccountIdWlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].wl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdRecentMatchesKey(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
) {
  return ['players', '/players/:account_id/recentMatches', args] as const
}

export function useGetPlayersAccountIdRecentMatches<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
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
        ? getGetPlayersAccountIdRecentMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.players[':account_id'].recentMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdRecentMatches<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['recentMatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
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
        ? getGetPlayersAccountIdRecentMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['recentMatches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.players[':account_id'].recentMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdMatchesKey(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
) {
  return ['players', '/players/:account_id/matches', args] as const
}

export function useGetPlayersAccountIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
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
        ? getGetPlayersAccountIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
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
        ? getGetPlayersAccountIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdHeroesKey(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
) {
  return ['players', '/players/:account_id/heroes', args] as const
}

export function useGetPlayersAccountIdHeroes<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
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
        ? getGetPlayersAccountIdHeroesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].heroes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdHeroes<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['heroes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
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
        ? getGetPlayersAccountIdHeroesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['heroes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].heroes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdPeersKey(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
) {
  return ['players', '/players/:account_id/peers', args] as const
}

export function useGetPlayersAccountIdPeers<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
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
        ? getGetPlayersAccountIdPeersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].peers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdPeers<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['peers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
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
        ? getGetPlayersAccountIdPeersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['peers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].peers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdProsKey(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
) {
  return ['players', '/players/:account_id/pros', args] as const
}

export function useGetPlayersAccountIdPros<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
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
        ? getGetPlayersAccountIdProsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].pros.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdPros<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['pros']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
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
        ? getGetPlayersAccountIdProsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['pros']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].pros.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdTotalsKey(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
) {
  return ['players', '/players/:account_id/totals', args] as const
}

export function useGetPlayersAccountIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
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
        ? getGetPlayersAccountIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdTotals<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['totals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
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
        ? getGetPlayersAccountIdTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['totals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdCountsKey(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
) {
  return ['players', '/players/:account_id/counts', args] as const
}

export function useGetPlayersAccountIdCounts<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
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
        ? getGetPlayersAccountIdCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdCounts<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
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
        ? getGetPlayersAccountIdCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdHistogramsFieldKey(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
) {
  return ['players', '/players/:account_id/histograms/:field', args] as const
}

export function useGetPlayersAccountIdHistogramsField<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
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
        ? getGetPlayersAccountIdHistogramsFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.players[':account_id'].histograms[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdHistogramsField<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
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
        ? getGetPlayersAccountIdHistogramsFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.players)[':account_id']['histograms'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.players[':account_id'].histograms[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdWardmapKey(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
) {
  return ['players', '/players/:account_id/wardmap', args] as const
}

export function useGetPlayersAccountIdWardmap<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
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
        ? getGetPlayersAccountIdWardmapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].wardmap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdWardmap<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['wardmap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
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
        ? getGetPlayersAccountIdWardmapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wardmap']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].wardmap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdWordcloudKey(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
) {
  return ['players', '/players/:account_id/wordcloud', args] as const
}

export function useGetPlayersAccountIdWordcloud<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
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
        ? getGetPlayersAccountIdWordcloudKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].wordcloud.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdWordcloud<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['wordcloud']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
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
        ? getGetPlayersAccountIdWordcloudKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['wordcloud']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].wordcloud.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdRatingsKey(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
) {
  return ['players', '/players/:account_id/ratings', args] as const
}

export function useGetPlayersAccountIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
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
        ? getGetPlayersAccountIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
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
        ? getGetPlayersAccountIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayersAccountIdRankingsKey(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
) {
  return ['players', '/players/:account_id/rankings', args] as const
}

export function useGetPlayersAccountIdRankings<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
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
        ? getGetPlayersAccountIdRankingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].rankings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersAccountIdRankings<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':account_id']['rankings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
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
        ? getGetPlayersAccountIdRankingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':account_id']['rankings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':account_id'].rankings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlayersAccountIdRefreshKey() {
  return ['players', '/players/:account_id/refresh', 'POST'] as const
}

export function usePostPlayersAccountIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.players)[':account_id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.players)[':account_id']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlayersAccountIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.players)[':account_id']['refresh']['$post']> },
      ) => parseResponse(client.players[':account_id'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTopPlayersKey(args: InferRequestType<typeof client.topPlayers.$get>) {
  return ['topPlayers', '/topPlayers', args] as const
}

export function useGetTopPlayers<TError = unknown>(
  args: InferRequestType<typeof client.topPlayers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topPlayers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopPlayers<TError = unknown>(
  args: InferRequestType<typeof client.topPlayers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topPlayers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topPlayers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProPlayersKey() {
  return ['proPlayers', '/proPlayers'] as const
}

export function useGetProPlayers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProPlayersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proPlayers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProPlayers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProPlayersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proPlayers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proPlayers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProMatchesKey(args: InferRequestType<typeof client.proMatches.$get>) {
  return ['proMatches', '/proMatches', args] as const
}

export function useGetProMatches<TError = unknown>(
  args: InferRequestType<typeof client.proMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProMatches<TError = unknown>(
  args: InferRequestType<typeof client.proMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proMatches.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicMatchesKey(args: InferRequestType<typeof client.publicMatches.$get>) {
  return ['publicMatches', '/publicMatches', args] as const
}

export function useGetPublicMatches<TError = unknown>(
  args: InferRequestType<typeof client.publicMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.publicMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicMatches<TError = unknown>(
  args: InferRequestType<typeof client.publicMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicMatches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.publicMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParsedMatchesKey(args: InferRequestType<typeof client.parsedMatches.$get>) {
  return ['parsedMatches', '/parsedMatches', args] as const
}

export function useGetParsedMatches<TError = unknown>(
  args: InferRequestType<typeof client.parsedMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParsedMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parsedMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParsedMatches<TError = unknown>(
  args: InferRequestType<typeof client.parsedMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParsedMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parsedMatches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parsedMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExplorerKey(args: InferRequestType<typeof client.explorer.$get>) {
  return ['explorer', '/explorer', args] as const
}

export function useGetExplorer<TError = unknown>(
  args: InferRequestType<typeof client.explorer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExplorerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.explorer.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetExplorer<TError = unknown>(
  args: InferRequestType<typeof client.explorer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExplorerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.explorer.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.explorer.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMetadataKey() {
  return ['metadata', '/metadata'] as const
}

export function useGetMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistributionsKey() {
  return ['distributions', '/distributions'] as const
}

export function useGetDistributions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDistributionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistributions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDistributionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRankingsKey(args: InferRequestType<typeof client.rankings.$get>) {
  return ['rankings', '/rankings', args] as const
}

export function useGetRankings<TError = unknown>(
  args: InferRequestType<typeof client.rankings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRankingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rankings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRankings<TError = unknown>(
  args: InferRequestType<typeof client.rankings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRankingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rankings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBenchmarksKey(args: InferRequestType<typeof client.benchmarks.$get>) {
  return ['benchmarks', '/benchmarks', args] as const
}

export function useGetBenchmarks<TError = unknown>(
  args: InferRequestType<typeof client.benchmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBenchmarksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benchmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBenchmarks<TError = unknown>(
  args: InferRequestType<typeof client.benchmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBenchmarksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.benchmarks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.benchmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequestJobIdKey(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
) {
  return ['request', '/request/:jobId', args] as const
}

export function useGetRequestJobId<TError = unknown>(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRequestJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestJobId<TError = unknown>(
  args: InferRequestType<(typeof client.request)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRequestJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRequestMatchIdKey() {
  return ['request', '/request/:match_id', 'POST'] as const
}

export function usePostRequestMatchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':match_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':match_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestMatchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.request)[':match_id']['$post']> },
      ) => parseResponse(client.request[':match_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindMatchesKey(args: InferRequestType<typeof client.findMatches.$get>) {
  return ['findMatches', '/findMatches', args] as const
}

export function useGetFindMatches<TError = unknown>(
  args: InferRequestType<typeof client.findMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFindMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindMatches<TError = unknown>(
  args: InferRequestType<typeof client.findMatches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFindMatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findMatches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findMatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroesKey() {
  return ['heroes', '/heroes'] as const
}

export function useGetHeroes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeroesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeroesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroStatsKey() {
  return ['heroStats', '/heroStats'] as const
}

export function useGetHeroStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeroStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroStats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeroStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heroStats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroStats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroesHeroIdMatchesKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/matches', args] as const
}

export function useGetHeroesHeroIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
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
        ? getGetHeroesHeroIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroesHeroIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
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
        ? getGetHeroesHeroIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroesHeroIdMatchupsKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/matchups', args] as const
}

export function useGetHeroesHeroIdMatchups<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
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
        ? getGetHeroesHeroIdMatchupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].matchups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroesHeroIdMatchups<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['matchups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
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
        ? getGetHeroesHeroIdMatchupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['matchups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].matchups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroesHeroIdDurationsKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/durations', args] as const
}

export function useGetHeroesHeroIdDurations<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
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
        ? getGetHeroesHeroIdDurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].durations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroesHeroIdDurations<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['durations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
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
        ? getGetHeroesHeroIdDurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['durations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].durations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroesHeroIdPlayersKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/players', args] as const
}

export function useGetHeroesHeroIdPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
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
        ? getGetHeroesHeroIdPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroesHeroIdPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
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
        ? getGetHeroesHeroIdPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['players']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeroesHeroIdItemPopularityKey(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
) {
  return ['heroes', '/heroes/:hero_id/itemPopularity', args] as const
}

export function useGetHeroesHeroIdItemPopularity<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
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
        ? getGetHeroesHeroIdItemPopularityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].itemPopularity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeroesHeroIdItemPopularity<TError = unknown>(
  args: InferRequestType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
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
        ? getGetHeroesHeroIdItemPopularityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.heroes)[':hero_id']['itemPopularity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heroes[':hero_id'].itemPopularity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesKey() {
  return ['leagues', '/leagues'] as const
}

export function useGetLeagues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLeaguesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeagues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLeaguesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leagues.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
) {
  return ['leagues', '/leagues/:league_id', args] as const
}

export function useGetLeaguesLeagueId<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
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
        ? getGetLeaguesLeagueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueId<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
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
        ? getGetLeaguesLeagueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.leagues)[':league_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdMatchesKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
) {
  return ['leagues', '/leagues/:league_id/matches', args] as const
}

export function useGetLeaguesLeagueIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
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
        ? getGetLeaguesLeagueIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
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
        ? getGetLeaguesLeagueIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdMatchIdsKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
) {
  return ['leagues', '/leagues/:league_id/matchIds', args] as const
}

export function useGetLeaguesLeagueIdMatchIds<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
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
        ? getGetLeaguesLeagueIdMatchIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].matchIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdMatchIds<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['matchIds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
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
        ? getGetLeaguesLeagueIdMatchIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['matchIds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].matchIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLeaguesLeagueIdTeamsKey(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
) {
  return ['leagues', '/leagues/:league_id/teams', args] as const
}

export function useGetLeaguesLeagueIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
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
        ? getGetLeaguesLeagueIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLeaguesLeagueIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.leagues)[':league_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
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
        ? getGetLeaguesLeagueIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.leagues)[':league_id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.leagues[':league_id'].teams.$get(args, clientOptions)),
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

export function getGetTeamsTeamIdKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
) {
  return ['teams', '/teams/:team_id', args] as const
}

export function useGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdMatchesKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
) {
  return ['teams', '/teams/:team_id/matches', args] as const
}

export function useGetTeamsTeamIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
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
        ? getGetTeamsTeamIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdMatches<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['matches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
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
        ? getGetTeamsTeamIdMatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['matches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].matches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdPlayersKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
) {
  return ['teams', '/teams/:team_id/players', args] as const
}

export function useGetTeamsTeamIdPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
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
        ? getGetTeamsTeamIdPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdPlayers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['players']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
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
        ? getGetTeamsTeamIdPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['players']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdHeroesKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
) {
  return ['teams', '/teams/:team_id/heroes', args] as const
}

export function useGetTeamsTeamIdHeroes<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
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
        ? getGetTeamsTeamIdHeroesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].heroes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdHeroes<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['heroes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
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
        ? getGetTeamsTeamIdHeroesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['heroes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].heroes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordsFieldKey(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
) {
  return ['records', '/records/:field', args] as const
}

export function useGetRecordsField<TError = unknown>(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecordsFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.records[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordsField<TError = unknown>(
  args: InferRequestType<(typeof client.records)[':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecordsFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.records)[':field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.records[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiveKey() {
  return ['live', '/live'] as const
}

export function useGetLive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetLiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.live.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetLiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.live.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScenariosItemTimingsKey(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
) {
  return ['scenarios', '/scenarios/itemTimings', args] as const
}

export function useGetScenariosItemTimings<TError = unknown>(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
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
        ? getGetScenariosItemTimingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenarios.itemTimings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenariosItemTimings<TError = unknown>(
  args: InferRequestType<typeof client.scenarios.itemTimings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
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
        ? getGetScenariosItemTimingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.itemTimings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenarios.itemTimings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScenariosLaneRolesKey(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
) {
  return ['scenarios', '/scenarios/laneRoles', args] as const
}

export function useGetScenariosLaneRoles<TError = unknown>(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
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
        ? getGetScenariosLaneRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenarios.laneRoles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenariosLaneRoles<TError = unknown>(
  args: InferRequestType<typeof client.scenarios.laneRoles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
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
        ? getGetScenariosLaneRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.laneRoles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenarios.laneRoles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScenariosMiscKey(args: InferRequestType<typeof client.scenarios.misc.$get>) {
  return ['scenarios', '/scenarios/misc', args] as const
}

export function useGetScenariosMisc<TError = unknown>(
  args: InferRequestType<typeof client.scenarios.misc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScenariosMiscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenarios.misc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScenariosMisc<TError = unknown>(
  args: InferRequestType<typeof client.scenarios.misc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScenariosMiscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scenarios.misc.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scenarios.misc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchemaKey() {
  return ['schema', '/schema'] as const
}

export function useGetSchema<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchema<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConstantsResourceKey(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
) {
  return ['constants', '/constants/:resource', args] as const
}

export function useGetConstantsResource<TError = unknown>(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
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
        ? getGetConstantsResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.constants[':resource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConstantsResource<TError = unknown>(
  args: InferRequestType<(typeof client.constants)[':resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
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
        ? getGetConstantsResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.constants)[':resource']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.constants[':resource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
