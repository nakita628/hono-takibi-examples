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

export function getCalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calendar.$get>>,
) {
  return ['calendar', '/calendar', toValue(args)] as const
}

export function getCalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>
          >,
          ReturnType<typeof getCalendarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCoachesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coaches.$get>>,
) {
  return ['coaches', '/coaches', toValue(args)] as const
}

export function getCoachesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coaches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCoachesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.coaches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCoaches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coaches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>
          >,
          ReturnType<typeof getCoachesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCoachesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCoachesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.coaches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConferencesQueryKey() {
  return ['conferences', '/conferences'] as const
}

export function getConferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conferences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
          >,
          ReturnType<typeof getConferencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.conferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDraftPicksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.draft.picks.$get>>,
) {
  return ['draft', '/draft/picks', toValue(args)] as const
}

export function getDraftPicksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.draft.picks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDraftPicksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft.picks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDraftPicks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.draft.picks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
          >,
          ReturnType<typeof getDraftPicksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDraftPicksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDraftPicksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.draft.picks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDraftPositionsQueryKey() {
  return ['draft', '/draft/positions'] as const
}

export function getDraftPositionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDraftPositionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft.positions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDraftPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>
            >
          >,
          ReturnType<typeof getDraftPositionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDraftPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDraftPositionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.draft.positions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDraftTeamsQueryKey() {
  return ['draft', '/draft/teams'] as const
}

export function getDraftTeamsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDraftTeamsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDraftTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
          >,
          ReturnType<typeof getDraftTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDraftTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDraftTeamsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.draft.teams.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDrivesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drives.$get>>,
) {
  return ['drives', '/drives', toValue(args)] as const
}

export function getDrivesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDrivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drives.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDrives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
          ReturnType<typeof getDrivesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDrivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDrivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGameBoxAdvancedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.game.box.advanced.$get>>,
) {
  return ['game', '/game/box/advanced', toValue(args)] as const
}

export function getGameBoxAdvancedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.game.box.advanced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGameBoxAdvancedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.game.box.advanced.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGameBoxAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.game.box.advanced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>
            >
          >,
          ReturnType<typeof getGameBoxAdvancedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGameBoxAdvancedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGameBoxAdvancedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.game.box.advanced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.$get>>,
) {
  return ['games', '/games', toValue(args)] as const
}

export function getGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
          ReturnType<typeof getGamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.media.$get>>,
) {
  return ['games', '/games/media', toValue(args)] as const
}

export function getGamesMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.media.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.media.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGamesMedia<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.media.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
          >,
          ReturnType<typeof getGamesMediaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.players.$get>>,
) {
  return ['games', '/games/players', toValue(args)] as const
}

export function getGamesPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.players.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.players.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
          >,
          ReturnType<typeof getGamesPlayersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.teams.$get>>,
) {
  return ['games', '/games/teams', toValue(args)] as const
}

export function getGamesTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGamesTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
          >,
          ReturnType<typeof getGamesTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesWeatherQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.weather.$get>>,
) {
  return ['games', '/games/weather', toValue(args)] as const
}

export function getGamesWeatherQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.weather.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesWeatherQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.weather.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesWeather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.weather.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
          >,
          ReturnType<typeof getGamesWeatherQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesWeatherQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesWeatherQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.weather.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lines.$get>>,
) {
  return ['lines', '/lines', toValue(args)] as const
}

export function getLinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lines.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLines<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
          ReturnType<typeof getLinesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLivePlaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.live.plays.$get>>,
) {
  return ['live', '/live/plays', toValue(args)] as const
}

export function getLivePlaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.live.plays.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLivePlaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.live.plays.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLivePlays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.live.plays.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>
          >,
          ReturnType<typeof getLivePlaysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivePlaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLivePlaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.live.plays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.wp.$get>>,
) {
  return ['metrics', '/metrics/wp', toValue(args)] as const
}

export function getMetricsWpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.wp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.wp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetricsWp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.wp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>
          >,
          ReturnType<typeof getMetricsWpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsWpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.wp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsWpPregameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.wp.pregame.$get>>,
) {
  return ['metrics', '/metrics/wp/pregame', toValue(args)] as const
}

export function getMetricsWpPregameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.wp.pregame.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsWpPregameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.wp.pregame.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsWpPregame<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.wp.pregame.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>
            >
          >,
          ReturnType<typeof getMetricsWpPregameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsWpPregameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsWpPregameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.wp.pregame.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayStatTypesQueryKey() {
  return ['play', '/play/stat/types'] as const
}

export function getPlayStatTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlayStatTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.play.stat.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayStatTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>
            >
          >,
          ReturnType<typeof getPlayStatTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayStatTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlayStatTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.play.stat.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.play.stats.$get>>,
) {
  return ['play', '/play/stats', toValue(args)] as const
}

export function getPlayStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.play.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.play.stats.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.play.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>
          >,
          ReturnType<typeof getPlayStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.play.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayTypesQueryKey() {
  return ['play', '/play/types'] as const
}

export function getPlayTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlayTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.play.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>
          >,
          ReturnType<typeof getPlayTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlayTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.play.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayerPortalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.portal.$get>>,
) {
  return ['player', '/player/portal', toValue(args)] as const
}

export function getPlayerPortalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.portal.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayerPortalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.player.portal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayerPortal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.portal.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
          >,
          ReturnType<typeof getPlayerPortalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayerPortalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayerPortalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.player.portal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayerReturningQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.returning.$get>>,
) {
  return ['player', '/player/returning', toValue(args)] as const
}

export function getPlayerReturningQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.returning.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayerReturningQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.player.returning.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayerReturning<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.returning.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>
            >
          >,
          ReturnType<typeof getPlayerReturningQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayerReturningQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayerReturningQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.player.returning.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayerSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.search.$get>>,
) {
  return ['player', '/player/search', toValue(args)] as const
}

export function getPlayerSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayerSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.player.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayerSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
          >,
          ReturnType<typeof getPlayerSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlayerSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayerSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.player.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlayerUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.usage.$get>>,
) {
  return ['player', '/player/usage', toValue(args)] as const
}

export function getPlayerUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayerUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.player.usage.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayerUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.player.usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
          >,
          ReturnType<typeof getPlayerUsageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayerUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayerUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.player.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plays.$get>>,
) {
  return ['plays', '/plays', toValue(args)] as const
}

export function getPlaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plays.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plays.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlays<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plays.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
          ReturnType<typeof getPlaysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPpaGamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.games.$get>>,
) {
  return ['ppa', '/ppa/games', toValue(args)] as const
}

export function getPpaGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.games.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPpaGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ppa.games.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePpaGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.games.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>
          >,
          ReturnType<typeof getPpaGamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPpaGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPpaGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ppa.games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPpaPlayersGamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.players.games.$get>>,
) {
  return ['ppa', '/ppa/players/games', toValue(args)] as const
}

export function getPpaPlayersGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.players.games.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPpaPlayersGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ppa.players.games.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePpaPlayersGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.players.games.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>
            >
          >,
          ReturnType<typeof getPpaPlayersGamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPpaPlayersGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPpaPlayersGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ppa.players.games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPpaPlayersSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.players.season.$get>>,
) {
  return ['ppa', '/ppa/players/season', toValue(args)] as const
}

export function getPpaPlayersSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.players.season.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPpaPlayersSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ppa.players.season.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePpaPlayersSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.players.season.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>
            >
          >,
          ReturnType<typeof getPpaPlayersSeasonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPpaPlayersSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPpaPlayersSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ppa.players.season.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPpaPredictedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.predicted.$get>>,
) {
  return ['ppa', '/ppa/predicted', toValue(args)] as const
}

export function getPpaPredictedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.predicted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPpaPredictedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ppa.predicted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePpaPredicted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.predicted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
          >,
          ReturnType<typeof getPpaPredictedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPpaPredictedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPpaPredictedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ppa.predicted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPpaTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.teams.$get>>,
) {
  return ['ppa', '/ppa/teams', toValue(args)] as const
}

export function getPpaTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPpaTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ppa.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePpaTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppa.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>
          >,
          ReturnType<typeof getPpaTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPpaTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPpaTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ppa.teams.$get(toValue(args), {
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

export function getRatingsEloQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.elo.$get>>,
) {
  return ['ratings', '/ratings/elo', toValue(args)] as const
}

export function getRatingsEloQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.elo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRatingsEloQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ratings.elo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRatingsElo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.elo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
          >,
          ReturnType<typeof getRatingsEloQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatingsEloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRatingsEloQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ratings.elo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRatingsSpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.sp.$get>>,
) {
  return ['ratings', '/ratings/sp', toValue(args)] as const
}

export function getRatingsSpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.sp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRatingsSpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ratings.sp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRatingsSp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.sp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>
          >,
          ReturnType<typeof getRatingsSpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatingsSpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRatingsSpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ratings.sp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRatingsSpConferencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.sp.conferences.$get>>,
) {
  return ['ratings', '/ratings/sp/conferences', toValue(args)] as const
}

export function getRatingsSpConferencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.sp.conferences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRatingsSpConferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ratings.sp.conferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRatingsSpConferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.sp.conferences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
            >
          >,
          ReturnType<typeof getRatingsSpConferencesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRatingsSpConferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRatingsSpConferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ratings.sp.conferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRatingsSrsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.srs.$get>>,
) {
  return ['ratings', '/ratings/srs', toValue(args)] as const
}

export function getRatingsSrsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.srs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRatingsSrsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ratings.srs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRatingsSrs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ratings.srs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
          >,
          ReturnType<typeof getRatingsSrsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRatingsSrsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRatingsSrsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ratings.srs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.records.$get>>,
) {
  return ['records', '/records', toValue(args)] as const
}

export function getRecordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.records.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.records.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.records.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
          >,
          ReturnType<typeof getRecordsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecruitingGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.groups.$get>>,
) {
  return ['recruiting', '/recruiting/groups', toValue(args)] as const
}

export function getRecruitingGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecruitingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recruiting.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecruitingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>
            >
          >,
          ReturnType<typeof getRecruitingGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecruitingGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecruitingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recruiting.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecruitingPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.players.$get>>,
) {
  return ['recruiting', '/recruiting/players', toValue(args)] as const
}

export function getRecruitingPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.players.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecruitingPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recruiting.players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecruitingPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.players.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>
            >
          >,
          ReturnType<typeof getRecruitingPlayersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecruitingPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecruitingPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recruiting.players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecruitingTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.teams.$get>>,
) {
  return ['recruiting', '/recruiting/teams', toValue(args)] as const
}

export function getRecruitingTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecruitingTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recruiting.teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecruitingTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recruiting.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>
            >
          >,
          ReturnType<typeof getRecruitingTeamsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecruitingTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecruitingTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recruiting.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRosterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roster.$get>>,
) {
  return ['roster', '/roster', toValue(args)] as const
}

export function getRosterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roster.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRosterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roster.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roster.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
          ReturnType<typeof getRosterQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRosterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRosterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roster.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScoreboardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scoreboard.$get>>,
) {
  return ['scoreboard', '/scoreboard', toValue(args)] as const
}

export function getScoreboardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scoreboard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScoreboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scoreboard.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScoreboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scoreboard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>
          >,
          ReturnType<typeof getScoreboardQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScoreboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScoreboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scoreboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCategoriesQueryKey() {
  return ['stats', '/stats/categories'] as const
}

export function getStatsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>
            >
          >,
          ReturnType<typeof getStatsCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsGameAdvancedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.game.advanced.$get>>,
) {
  return ['stats', '/stats/game/advanced', toValue(args)] as const
}

export function getStatsGameAdvancedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.game.advanced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsGameAdvancedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.game.advanced.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsGameAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.game.advanced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
            >
          >,
          ReturnType<typeof getStatsGameAdvancedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsGameAdvancedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsGameAdvancedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.game.advanced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsPlayerSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.player.season.$get>>,
) {
  return ['stats', '/stats/player/season', toValue(args)] as const
}

export function getStatsPlayerSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.player.season.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsPlayerSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.player.season.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsPlayerSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.player.season.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
            >
          >,
          ReturnType<typeof getStatsPlayerSeasonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsPlayerSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsPlayerSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.player.season.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.season.$get>>,
) {
  return ['stats', '/stats/season', toValue(args)] as const
}

export function getStatsSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.season.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.season.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsSeason<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.season.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
          >,
          ReturnType<typeof getStatsSeasonQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.season.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsSeasonAdvancedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.season.advanced.$get>>,
) {
  return ['stats', '/stats/season/advanced', toValue(args)] as const
}

export function getStatsSeasonAdvancedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.season.advanced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsSeasonAdvancedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.season.advanced.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsSeasonAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.season.advanced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
            >
          >,
          ReturnType<typeof getStatsSeasonAdvancedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsSeasonAdvancedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsSeasonAdvancedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.season.advanced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTalentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.talent.$get>>,
) {
  return ['talent', '/talent', toValue(args)] as const
}

export function getTalentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.talent.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTalentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.talent.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTalent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.talent.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
          ReturnType<typeof getTalentQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTalentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTalentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.talent.$get(toValue(args), {
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

export function getTeamsFbsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.fbs.$get>>,
) {
  return ['teams', '/teams/fbs', toValue(args)] as const
}

export function getTeamsFbsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.fbs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsFbsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.fbs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamsFbs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.fbs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>
          >,
          ReturnType<typeof getTeamsFbsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsFbsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsFbsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.fbs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsMatchupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.matchup.$get>>,
) {
  return ['teams', '/teams/matchup', toValue(args)] as const
}

export function getTeamsMatchupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.matchup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsMatchupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.matchup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsMatchup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.matchup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
          >,
          ReturnType<typeof getTeamsMatchupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsMatchupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsMatchupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.matchup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVenuesQueryKey() {
  return ['venues', '/venues'] as const
}

export function getVenuesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVenuesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.venues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVenues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
          ReturnType<typeof getVenuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVenuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVenuesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.venues.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
