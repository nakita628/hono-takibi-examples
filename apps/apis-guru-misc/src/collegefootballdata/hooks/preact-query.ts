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

export function getCalendarKey() {
  return ['calendar'] as const
}

export function getCoachesKey() {
  return ['coaches'] as const
}

export function getConferencesKey() {
  return ['conferences'] as const
}

export function getDraftKey() {
  return ['draft'] as const
}

export function getDrivesKey() {
  return ['drives'] as const
}

export function getGameKey() {
  return ['game'] as const
}

export function getGamesKey() {
  return ['games'] as const
}

export function getLinesKey() {
  return ['lines'] as const
}

export function getLiveKey() {
  return ['live'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getPlayKey() {
  return ['play'] as const
}

export function getPlayerKey() {
  return ['player'] as const
}

export function getPlaysKey() {
  return ['plays'] as const
}

export function getPpaKey() {
  return ['ppa'] as const
}

export function getRankingsKey() {
  return ['rankings'] as const
}

export function getRatingsKey() {
  return ['ratings'] as const
}

export function getRecordsKey() {
  return ['records'] as const
}

export function getRecruitingKey() {
  return ['recruiting'] as const
}

export function getRosterKey() {
  return ['roster'] as const
}

export function getScoreboardKey() {
  return ['scoreboard'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getTalentKey() {
  return ['talent'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getVenuesKey() {
  return ['venues'] as const
}

export function getCalendarQueryKey(args: InferRequestType<typeof client.calendar.$get>) {
  return ['calendar', '/calendar', args] as const
}

export function getCalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCalendarQueryKey>
  >({
    queryKey: getCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.calendar.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCalendarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.calendar.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCalendarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCoachesQueryKey(args: InferRequestType<typeof client.coaches.$get>) {
  return ['coaches', '/coaches', args] as const
}

export function getCoachesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.coaches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCoachesQueryKey>
  >({
    queryKey: getCoachesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.coaches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCoaches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.coaches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCoachesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCoachesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCoaches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.coaches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCoachesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCoachesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConferencesQueryKey() {
  return ['conferences', '/conferences'] as const
}

export function getConferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConferencesQueryKey>
  >({
    queryKey: getConferencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.conferences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDraftPicksQueryKey(args: InferRequestType<typeof client.draft.picks.$get>) {
  return ['draft', '/draft/picks', args] as const
}

export function getDraftPicksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.draft.picks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDraftPicksQueryKey>
  >({
    queryKey: getDraftPicksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.draft.picks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDraftPicks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.draft.picks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDraftPicksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDraftPicksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDraftPicks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.draft.picks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDraftPicksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDraftPicksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDraftPositionsQueryKey() {
  return ['draft', '/draft/positions'] as const
}

export function getDraftPositionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDraftPositionsQueryKey>
  >({
    queryKey: getDraftPositionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.draft.positions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDraftPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDraftPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDraftPositionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDraftPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDraftPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDraftPositionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDraftTeamsQueryKey() {
  return ['draft', '/draft/teams'] as const
}

export function getDraftTeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDraftTeamsQueryKey>
  >({
    queryKey: getDraftTeamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.draft.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDraftTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDraftTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDraftTeamsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDraftTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDraftTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDraftTeamsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDrivesQueryKey(args: InferRequestType<typeof client.drives.$get>) {
  return ['drives', '/drives', args] as const
}

export function getDrivesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.drives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDrivesQueryKey>
  >({
    queryKey: getDrivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDrives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.drives.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDrivesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDrives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.drives.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDrivesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGameBoxAdvancedQueryKey(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
) {
  return ['game', '/game/box/advanced', args] as const
}

export function getGameBoxAdvancedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.game.box.advanced.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGameBoxAdvancedQueryKey>
  >({
    queryKey: getGameBoxAdvancedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.game.box.advanced.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGameBoxAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGameBoxAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGameBoxAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGameBoxAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGameBoxAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGameBoxAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getGamesMediaQueryKey(args: InferRequestType<typeof client.games.media.$get>) {
  return ['games', '/games/media', args] as const
}

export function getGamesMediaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.media.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesMediaQueryKey>
  >({
    queryKey: getGamesMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesMedia<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.media.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesMedia<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.media.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesPlayersQueryKey(args: InferRequestType<typeof client.games.players.$get>) {
  return ['games', '/games/players', args] as const
}

export function getGamesPlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.players.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesPlayersQueryKey>
  >({
    queryKey: getGamesPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.players.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.players.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesTeamsQueryKey(args: InferRequestType<typeof client.games.teams.$get>) {
  return ['games', '/games/teams', args] as const
}

export function getGamesTeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesTeamsQueryKey>
  >({
    queryKey: getGamesTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGamesWeatherQueryKey(args: InferRequestType<typeof client.games.weather.$get>) {
  return ['games', '/games/weather', args] as const
}

export function getGamesWeatherQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.weather.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesWeatherQueryKey>
  >({
    queryKey: getGamesWeatherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.weather.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesWeather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.weather.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesWeatherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesWeatherQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesWeather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.weather.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesWeatherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesWeatherQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLinesQueryKey(args: InferRequestType<typeof client.lines.$get>) {
  return ['lines', '/lines', args] as const
}

export function getLinesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinesQueryKey>
  >({
    queryKey: getLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLines<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lines.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLines<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lines.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLivePlaysQueryKey(args: InferRequestType<typeof client.live.plays.$get>) {
  return ['live', '/live/plays', args] as const
}

export function getLivePlaysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.live.plays.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivePlaysQueryKey>
  >({
    queryKey: getLivePlaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.live.plays.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLivePlays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.live.plays.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLivePlaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLivePlaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLivePlays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.live.plays.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLivePlaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLivePlaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsWpQueryKey(args: InferRequestType<typeof client.metrics.wp.$get>) {
  return ['metrics', '/metrics/wp', args] as const
}

export function getMetricsWpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.wp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsWpQueryKey>
  >({
    queryKey: getMetricsWpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.wp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetricsWp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.wp.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsWpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsWpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetricsWp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.wp.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsWpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsWpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsWpPregameQueryKey(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
) {
  return ['metrics', '/metrics/wp/pregame', args] as const
}

export function getMetricsWpPregameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.wp.pregame.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWpPregameQueryKey>
  >({
    queryKey: getMetricsWpPregameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.wp.pregame.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetricsWpPregame<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsWpPregameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsWpPregameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetricsWpPregame<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsWpPregameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsWpPregameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayStatTypesQueryKey() {
  return ['play', '/play/stat/types'] as const
}

export function getPlayStatTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayStatTypesQueryKey>
  >({
    queryKey: getPlayStatTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.play.stat.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayStatTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayStatTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayStatTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayStatTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayStatTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayStatTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayStatsQueryKey(args: InferRequestType<typeof client.play.stats.$get>) {
  return ['play', '/play/stats', args] as const
}

export function getPlayStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.play.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayStatsQueryKey>
  >({
    queryKey: getPlayStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.play.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.play.stats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.play.stats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayTypesQueryKey() {
  return ['play', '/play/types'] as const
}

export function getPlayTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayTypesQueryKey>
  >({
    queryKey: getPlayTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.play.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayerPortalQueryKey(args: InferRequestType<typeof client.player.portal.$get>) {
  return ['player', '/player/portal', args] as const
}

export function getPlayerPortalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.player.portal.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayerPortalQueryKey>
  >({
    queryKey: getPlayerPortalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.player.portal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayerPortal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.portal.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerPortalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayerPortalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayerPortal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.portal.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerPortalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayerPortalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayerReturningQueryKey(
  args: InferRequestType<typeof client.player.returning.$get>,
) {
  return ['player', '/player/returning', args] as const
}

export function getPlayerReturningQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.player.returning.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayerReturningQueryKey>
  >({
    queryKey: getPlayerReturningQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.player.returning.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayerReturning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.returning.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerReturningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayerReturningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayerReturning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.returning.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerReturningQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayerReturningQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayerSearchQueryKey(args: InferRequestType<typeof client.player.search.$get>) {
  return ['player', '/player/search', args] as const
}

export function getPlayerSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.player.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayerSearchQueryKey>
  >({
    queryKey: getPlayerSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.player.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayerSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayerSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayerSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayerSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlayerUsageQueryKey(args: InferRequestType<typeof client.player.usage.$get>) {
  return ['player', '/player/usage', args] as const
}

export function getPlayerUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.player.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayerUsageQueryKey>
  >({
    queryKey: getPlayerUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.player.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlayerUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.usage.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlayerUsageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlayerUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.player.usage.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlayerUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlayerUsageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlaysQueryKey(args: InferRequestType<typeof client.plays.$get>) {
  return ['plays', '/plays', args] as const
}

export function getPlaysQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plays.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaysQueryKey>
  >({
    queryKey: getPlaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plays.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlays<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.plays.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlays<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.plays.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPpaGamesQueryKey(args: InferRequestType<typeof client.ppa.games.$get>) {
  return ['ppa', '/ppa/games', args] as const
}

export function getPpaGamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ppa.games.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPpaGamesQueryKey>
  >({
    queryKey: getPpaGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ppa.games.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePpaGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.games.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPpaGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPpaGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePpaGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.games.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPpaGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPpaGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPpaPlayersGamesQueryKey(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
) {
  return ['ppa', '/ppa/players/games', args] as const
}

export function getPpaPlayersGamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ppa.players.games.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPpaPlayersGamesQueryKey>
  >({
    queryKey: getPpaPlayersGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ppa.players.games.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePpaPlayersGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPpaPlayersGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPpaPlayersGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePpaPlayersGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPpaPlayersGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPpaPlayersGamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPpaPlayersSeasonQueryKey(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
) {
  return ['ppa', '/ppa/players/season', args] as const
}

export function getPpaPlayersSeasonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ppa.players.season.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPpaPlayersSeasonQueryKey>
  >({
    queryKey: getPpaPlayersSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ppa.players.season.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePpaPlayersSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPpaPlayersSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPpaPlayersSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePpaPlayersSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPpaPlayersSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPpaPlayersSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPpaPredictedQueryKey(args: InferRequestType<typeof client.ppa.predicted.$get>) {
  return ['ppa', '/ppa/predicted', args] as const
}

export function getPpaPredictedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ppa.predicted.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPpaPredictedQueryKey>
  >({
    queryKey: getPpaPredictedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ppa.predicted.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePpaPredicted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.predicted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPpaPredictedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPpaPredictedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePpaPredicted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.predicted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPpaPredictedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPpaPredictedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPpaTeamsQueryKey(args: InferRequestType<typeof client.ppa.teams.$get>) {
  return ['ppa', '/ppa/teams', args] as const
}

export function getPpaTeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ppa.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPpaTeamsQueryKey>
  >({
    queryKey: getPpaTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ppa.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePpaTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPpaTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPpaTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePpaTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ppa.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPpaTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPpaTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getRatingsEloQueryKey(args: InferRequestType<typeof client.ratings.elo.$get>) {
  return ['ratings', '/ratings/elo', args] as const
}

export function getRatingsEloQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ratings.elo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatingsEloQueryKey>
  >({
    queryKey: getRatingsEloQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ratings.elo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRatingsElo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.elo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsEloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRatingsEloQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRatingsElo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.elo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsEloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRatingsEloQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRatingsSpQueryKey(args: InferRequestType<typeof client.ratings.sp.$get>) {
  return ['ratings', '/ratings/sp', args] as const
}

export function getRatingsSpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ratings.sp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatingsSpQueryKey>
  >({
    queryKey: getRatingsSpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ratings.sp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRatingsSp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.sp.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsSpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRatingsSpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRatingsSp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.sp.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsSpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRatingsSpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRatingsSpConferencesQueryKey(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
) {
  return ['ratings', '/ratings/sp/conferences', args] as const
}

export function getRatingsSpConferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRatingsSpConferencesQueryKey>
  >({
    queryKey: getRatingsSpConferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ratings.sp.conferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRatingsSpConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsSpConferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRatingsSpConferencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRatingsSpConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsSpConferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRatingsSpConferencesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRatingsSrsQueryKey(args: InferRequestType<typeof client.ratings.srs.$get>) {
  return ['ratings', '/ratings/srs', args] as const
}

export function getRatingsSrsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ratings.srs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatingsSrsQueryKey>
  >({
    queryKey: getRatingsSrsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ratings.srs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRatingsSrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.srs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsSrsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRatingsSrsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRatingsSrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ratings.srs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRatingsSrsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRatingsSrsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecordsQueryKey(args: InferRequestType<typeof client.records.$get>) {
  return ['records', '/records', args] as const
}

export function getRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecordsQueryKey>
  >({
    queryKey: getRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.records.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.records.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecordsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecruitingGroupsQueryKey(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
) {
  return ['recruiting', '/recruiting/groups', args] as const
}

export function getRecruitingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recruiting.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecruitingGroupsQueryKey>
  >({
    queryKey: getRecruitingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recruiting.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecruitingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecruitingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecruitingGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecruitingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecruitingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecruitingGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecruitingPlayersQueryKey(
  args: InferRequestType<typeof client.recruiting.players.$get>,
) {
  return ['recruiting', '/recruiting/players', args] as const
}

export function getRecruitingPlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recruiting.players.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecruitingPlayersQueryKey>
  >({
    queryKey: getRecruitingPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recruiting.players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecruitingPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recruiting.players.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecruitingPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecruitingPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecruitingPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recruiting.players.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecruitingPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecruitingPlayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecruitingTeamsQueryKey(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
) {
  return ['recruiting', '/recruiting/teams', args] as const
}

export function getRecruitingTeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recruiting.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecruitingTeamsQueryKey>
  >({
    queryKey: getRecruitingTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recruiting.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecruitingTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecruitingTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecruitingTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecruitingTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecruitingTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecruitingTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRosterQueryKey(args: InferRequestType<typeof client.roster.$get>) {
  return ['roster', '/roster', args] as const
}

export function getRosterQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roster.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRosterQueryKey>
  >({
    queryKey: getRosterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roster.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.roster.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRosterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRosterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.roster.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRosterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRosterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getScoreboardQueryKey(args: InferRequestType<typeof client.scoreboard.$get>) {
  return ['scoreboard', '/scoreboard', args] as const
}

export function getScoreboardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scoreboard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScoreboardQueryKey>
  >({
    queryKey: getScoreboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scoreboard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScoreboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scoreboard.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScoreboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScoreboardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScoreboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scoreboard.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScoreboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScoreboardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatsCategoriesQueryKey() {
  return ['stats', '/stats/categories'] as const
}

export function getStatsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCategoriesQueryKey>
  >({
    queryKey: getStatsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatsGameAdvancedQueryKey(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
) {
  return ['stats', '/stats/game/advanced', args] as const
}

export function getStatsGameAdvancedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.game.advanced.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsGameAdvancedQueryKey>
  >({
    queryKey: getStatsGameAdvancedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.game.advanced.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsGameAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsGameAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsGameAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatsGameAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsGameAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsGameAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatsPlayerSeasonQueryKey(
  args: InferRequestType<typeof client.stats.player.season.$get>,
) {
  return ['stats', '/stats/player/season', args] as const
}

export function getStatsPlayerSeasonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.player.season.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsPlayerSeasonQueryKey>
  >({
    queryKey: getStatsPlayerSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.player.season.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsPlayerSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.player.season.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsPlayerSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsPlayerSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatsPlayerSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.player.season.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsPlayerSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsPlayerSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatsSeasonQueryKey(args: InferRequestType<typeof client.stats.season.$get>) {
  return ['stats', '/stats/season', args] as const
}

export function getStatsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.season.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsSeasonQueryKey>
  >({
    queryKey: getStatsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.season.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.season.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatsSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.season.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatsSeasonAdvancedQueryKey(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
) {
  return ['stats', '/stats/season/advanced', args] as const
}

export function getStatsSeasonAdvancedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsSeasonAdvancedQueryKey>
  >({
    queryKey: getStatsSeasonAdvancedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.season.advanced.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsSeasonAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsSeasonAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsSeasonAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatsSeasonAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsSeasonAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsSeasonAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTalentQueryKey(args: InferRequestType<typeof client.talent.$get>) {
  return ['talent', '/talent', args] as const
}

export function getTalentQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.talent.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTalentQueryKey>
  >({
    queryKey: getTalentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.talent.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTalent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.talent.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTalentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTalentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTalent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.talent.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTalentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTalentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getTeamsFbsQueryKey(args: InferRequestType<typeof client.teams.fbs.$get>) {
  return ['teams', '/teams/fbs', args] as const
}

export function getTeamsFbsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.fbs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsFbsQueryKey>
  >({
    queryKey: getTeamsFbsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.fbs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamsFbs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.fbs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsFbsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsFbsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsFbs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.fbs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsFbsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsFbsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsMatchupQueryKey(args: InferRequestType<typeof client.teams.matchup.$get>) {
  return ['teams', '/teams/matchup', args] as const
}

export function getTeamsMatchupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.matchup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsMatchupQueryKey>
  >({
    queryKey: getTeamsMatchupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.matchup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamsMatchup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.matchup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsMatchupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsMatchupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsMatchup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.matchup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsMatchupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsMatchupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVenuesQueryKey() {
  return ['venues', '/venues'] as const
}

export function getVenuesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVenuesQueryKey>
  >({
    queryKey: getVenuesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.venues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVenues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVenuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVenuesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVenues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVenuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVenuesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
