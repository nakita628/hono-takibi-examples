import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createCoaches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.coaches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCoachesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCoachesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConferencesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDraftPicks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.draft.picks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDraftPicksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDraftPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDraftPositionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDraftTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDraftTeamsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDrives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.drives.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDrivesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGameBoxAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.game.box.advanced.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGameBoxAdvancedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGamesMedia<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.media.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGamesPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.players.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGamesTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGamesWeather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.weather.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesWeatherQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createLines<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lines.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createLivePlays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.live.plays.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLivePlaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMetricsWp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.wp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsWpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMetricsWpPregame<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.wp.pregame.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsWpPregameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPlayStatTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayStatTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPlayStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.play.stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPlayTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPlayerPortal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.player.portal.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayerPortalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPlayerReturning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.player.returning.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayerReturningQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPlayerSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.player.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayerSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPlayerUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.player.usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayerUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPlays<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plays.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPpaGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ppa.games.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPpaGamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPpaPlayersGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ppa.players.games.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPpaPlayersGamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPpaPlayersSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ppa.players.season.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPpaPlayersSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPpaPredicted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ppa.predicted.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPpaPredictedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPpaTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ppa.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPpaTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRankings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rankings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rankings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRankingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRankingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRatingsElo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ratings.elo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRatingsEloQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRatingsSp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ratings.sp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRatingsSpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRatingsSpConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRatingsSpConferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createRatingsSrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ratings.srs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRatingsSrsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRecruitingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recruiting.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecruitingGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRecruitingPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recruiting.players.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecruitingPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRecruitingTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recruiting.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecruitingTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRoster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roster.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRosterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRosterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createScoreboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scoreboard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScoreboardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStatsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createStatsGameAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.game.advanced.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsGameAdvancedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStatsPlayerSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.player.season.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsPlayerSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStatsSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.season.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStatsSeasonAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsSeasonAdvancedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTalent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.talent.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTalentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTalentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeams<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamsFbs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.fbs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsFbsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTeamsMatchup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.matchup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsMatchupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createVenues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVenuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVenuesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
