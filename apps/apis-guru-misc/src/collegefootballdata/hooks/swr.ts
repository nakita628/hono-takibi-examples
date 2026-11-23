import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetCalendarKey(args: InferRequestType<typeof client.calendar.$get>) {
  return ['calendar', '/calendar', args] as const
}

export function useGetCalendar<TError = unknown>(
  args: InferRequestType<typeof client.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.calendar.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCalendar<TError = unknown>(
  args: InferRequestType<typeof client.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendar.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.calendar.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCoachesKey(args: InferRequestType<typeof client.coaches.$get>) {
  return ['coaches', '/coaches', args] as const
}

export function useGetCoaches<TError = unknown>(
  args: InferRequestType<typeof client.coaches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoachesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coaches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCoaches<TError = unknown>(
  args: InferRequestType<typeof client.coaches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoachesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coaches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coaches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetConferencesKey() {
  return ['conferences', '/conferences'] as const
}

export function useGetConferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDraftPicksKey(args: InferRequestType<typeof client.draft.picks.$get>) {
  return ['draft', '/draft/picks', args] as const
}

export function useGetDraftPicks<TError = unknown>(
  args: InferRequestType<typeof client.draft.picks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftPicksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft.picks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftPicks<TError = unknown>(
  args: InferRequestType<typeof client.draft.picks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftPicksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.picks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft.picks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDraftPositionsKey() {
  return ['draft', '/draft/positions'] as const
}

export function useGetDraftPositions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftPositionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft.positions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftPositions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftPositionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft.positions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDraftTeamsKey() {
  return ['draft', '/draft/teams'] as const
}

export function useGetDraftTeams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftTeamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft.teams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDraftTeams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftTeamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.draft.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.draft.teams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDrivesKey(args: InferRequestType<typeof client.drives.$get>) {
  return ['drives', '/drives', args] as const
}

export function useGetDrives<TError = unknown>(
  args: InferRequestType<typeof client.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.drives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDrives<TError = unknown>(
  args: InferRequestType<typeof client.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.drives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGameBoxAdvancedKey(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
) {
  return ['game', '/game/box/advanced', args] as const
}

export function useGetGameBoxAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
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
        ? getGetGameBoxAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.game.box.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGameBoxAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.game.box.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
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
        ? getGetGameBoxAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.game.box.advanced.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.game.box.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesKey(args: InferRequestType<typeof client.games.$get>) {
  return ['games', '/games', args] as const
}

export function useGetGames<TError = unknown>(
  args: InferRequestType<typeof client.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.games.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGames<TError = unknown>(
  args: InferRequestType<typeof client.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.games.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGamesMediaKey(args: InferRequestType<typeof client.games.media.$get>) {
  return ['games', '/games/media', args] as const
}

export function useGetGamesMedia<TError = unknown>(
  args: InferRequestType<typeof client.games.media.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesMedia<TError = unknown>(
  args: InferRequestType<typeof client.games.media.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.media.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesPlayersKey(args: InferRequestType<typeof client.games.players.$get>) {
  return ['games', '/games/players', args] as const
}

export function useGetGamesPlayers<TError = unknown>(
  args: InferRequestType<typeof client.games.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesPlayers<TError = unknown>(
  args: InferRequestType<typeof client.games.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.players.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesTeamsKey(args: InferRequestType<typeof client.games.teams.$get>) {
  return ['games', '/games/teams', args] as const
}

export function useGetGamesTeams<TError = unknown>(
  args: InferRequestType<typeof client.games.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesTeams<TError = unknown>(
  args: InferRequestType<typeof client.games.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesWeatherKey(args: InferRequestType<typeof client.games.weather.$get>) {
  return ['games', '/games/weather', args] as const
}

export function useGetGamesWeather<TError = unknown>(
  args: InferRequestType<typeof client.games.weather.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesWeatherKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.weather.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesWeather<TError = unknown>(
  args: InferRequestType<typeof client.games.weather.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesWeatherKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.weather.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.weather.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinesKey(args: InferRequestType<typeof client.lines.$get>) {
  return ['lines', '/lines', args] as const
}

export function useGetLines<TError = unknown>(
  args: InferRequestType<typeof client.lines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lines.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLines<TError = unknown>(
  args: InferRequestType<typeof client.lines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lines.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLivePlaysKey(args: InferRequestType<typeof client.live.plays.$get>) {
  return ['live', '/live/plays', args] as const
}

export function useGetLivePlays<TError = unknown>(
  args: InferRequestType<typeof client.live.plays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLivePlaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.live.plays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLivePlays<TError = unknown>(
  args: InferRequestType<typeof client.live.plays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLivePlaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.live.plays.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.live.plays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWpKey(args: InferRequestType<typeof client.metrics.wp.$get>) {
  return ['metrics', '/metrics/wp', args] as const
}

export function useGetMetricsWp<TError = unknown>(
  args: InferRequestType<typeof client.metrics.wp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsWpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.wp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWp<TError = unknown>(
  args: InferRequestType<typeof client.metrics.wp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsWpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.wp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsWpPregameKey(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
) {
  return ['metrics', '/metrics/wp/pregame', args] as const
}

export function useGetMetricsWpPregame<TError = unknown>(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
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
        ? getGetMetricsWpPregameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.wp.pregame.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsWpPregame<TError = unknown>(
  args: InferRequestType<typeof client.metrics.wp.pregame.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
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
        ? getGetMetricsWpPregameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.wp.pregame.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.wp.pregame.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayStatTypesKey() {
  return ['play', '/play/stat/types'] as const
}

export function useGetPlayStatTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayStatTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.play.stat.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayStatTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayStatTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stat.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.play.stat.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayStatsKey(args: InferRequestType<typeof client.play.stats.$get>) {
  return ['play', '/play/stats', args] as const
}

export function useGetPlayStats<TError = unknown>(
  args: InferRequestType<typeof client.play.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.play.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayStats<TError = unknown>(
  args: InferRequestType<typeof client.play.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.play.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayTypesKey() {
  return ['play', '/play/types'] as const
}

export function useGetPlayTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.play.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.play.types.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.play.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayerPortalKey(args: InferRequestType<typeof client.player.portal.$get>) {
  return ['player', '/player/portal', args] as const
}

export function useGetPlayerPortal<TError = unknown>(
  args: InferRequestType<typeof client.player.portal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerPortalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.portal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayerPortal<TError = unknown>(
  args: InferRequestType<typeof client.player.portal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerPortalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.portal.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.portal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayerReturningKey(
  args: InferRequestType<typeof client.player.returning.$get>,
) {
  return ['player', '/player/returning', args] as const
}

export function useGetPlayerReturning<TError = unknown>(
  args: InferRequestType<typeof client.player.returning.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
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
        ? getGetPlayerReturningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.returning.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayerReturning<TError = unknown>(
  args: InferRequestType<typeof client.player.returning.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
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
        ? getGetPlayerReturningKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.returning.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.returning.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayerSearchKey(args: InferRequestType<typeof client.player.search.$get>) {
  return ['player', '/player/search', args] as const
}

export function useGetPlayerSearch<TError = unknown>(
  args: InferRequestType<typeof client.player.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayerSearch<TError = unknown>(
  args: InferRequestType<typeof client.player.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlayerUsageKey(args: InferRequestType<typeof client.player.usage.$get>) {
  return ['player', '/player/usage', args] as const
}

export function useGetPlayerUsage<TError = unknown>(
  args: InferRequestType<typeof client.player.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayerUsage<TError = unknown>(
  args: InferRequestType<typeof client.player.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayerUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.player.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.player.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaysKey(args: InferRequestType<typeof client.plays.$get>) {
  return ['plays', '/plays', args] as const
}

export function useGetPlays<TError = unknown>(
  args: InferRequestType<typeof client.plays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plays.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlays<TError = unknown>(
  args: InferRequestType<typeof client.plays.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plays.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plays.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPpaGamesKey(args: InferRequestType<typeof client.ppa.games.$get>) {
  return ['ppa', '/ppa/games', args] as const
}

export function useGetPpaGames<TError = unknown>(
  args: InferRequestType<typeof client.ppa.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpaGamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPpaGames<TError = unknown>(
  args: InferRequestType<typeof client.ppa.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpaGamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.games.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPpaPlayersGamesKey(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
) {
  return ['ppa', '/ppa/players/games', args] as const
}

export function useGetPpaPlayersGames<TError = unknown>(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
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
        ? getGetPpaPlayersGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.players.games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPpaPlayersGames<TError = unknown>(
  args: InferRequestType<typeof client.ppa.players.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
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
        ? getGetPpaPlayersGamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.games.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.players.games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPpaPlayersSeasonKey(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
) {
  return ['ppa', '/ppa/players/season', args] as const
}

export function useGetPpaPlayersSeason<TError = unknown>(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
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
        ? getGetPpaPlayersSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.players.season.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPpaPlayersSeason<TError = unknown>(
  args: InferRequestType<typeof client.ppa.players.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
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
        ? getGetPpaPlayersSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.players.season.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.players.season.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPpaPredictedKey(args: InferRequestType<typeof client.ppa.predicted.$get>) {
  return ['ppa', '/ppa/predicted', args] as const
}

export function useGetPpaPredicted<TError = unknown>(
  args: InferRequestType<typeof client.ppa.predicted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpaPredictedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.predicted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPpaPredicted<TError = unknown>(
  args: InferRequestType<typeof client.ppa.predicted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpaPredictedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.predicted.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.predicted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPpaTeamsKey(args: InferRequestType<typeof client.ppa.teams.$get>) {
  return ['ppa', '/ppa/teams', args] as const
}

export function useGetPpaTeams<TError = unknown>(
  args: InferRequestType<typeof client.ppa.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpaTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPpaTeams<TError = unknown>(
  args: InferRequestType<typeof client.ppa.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpaTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppa.teams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ppa.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
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

export function getGetRatingsEloKey(args: InferRequestType<typeof client.ratings.elo.$get>) {
  return ['ratings', '/ratings/elo', args] as const
}

export function useGetRatingsElo<TError = unknown>(
  args: InferRequestType<typeof client.ratings.elo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRatingsEloKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.elo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRatingsElo<TError = unknown>(
  args: InferRequestType<typeof client.ratings.elo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRatingsEloKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.elo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.elo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRatingsSpKey(args: InferRequestType<typeof client.ratings.sp.$get>) {
  return ['ratings', '/ratings/sp', args] as const
}

export function useGetRatingsSp<TError = unknown>(
  args: InferRequestType<typeof client.ratings.sp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRatingsSpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.sp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRatingsSp<TError = unknown>(
  args: InferRequestType<typeof client.ratings.sp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRatingsSpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.sp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRatingsSpConferencesKey(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
) {
  return ['ratings', '/ratings/sp/conferences', args] as const
}

export function useGetRatingsSpConferences<TError = unknown>(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
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
        ? getGetRatingsSpConferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.sp.conferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRatingsSpConferences<TError = unknown>(
  args: InferRequestType<typeof client.ratings.sp.conferences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
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
        ? getGetRatingsSpConferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ratings.sp.conferences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.sp.conferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRatingsSrsKey(args: InferRequestType<typeof client.ratings.srs.$get>) {
  return ['ratings', '/ratings/srs', args] as const
}

export function useGetRatingsSrs<TError = unknown>(
  args: InferRequestType<typeof client.ratings.srs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRatingsSrsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.srs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRatingsSrs<TError = unknown>(
  args: InferRequestType<typeof client.ratings.srs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRatingsSrsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratings.srs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ratings.srs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordsKey(args: InferRequestType<typeof client.records.$get>) {
  return ['records', '/records', args] as const
}

export function useGetRecords<TError = unknown>(
  args: InferRequestType<typeof client.records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.records.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRecords<TError = unknown>(
  args: InferRequestType<typeof client.records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.records.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRecruitingGroupsKey(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
) {
  return ['recruiting', '/recruiting/groups', args] as const
}

export function useGetRecruitingGroups<TError = unknown>(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
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
        ? getGetRecruitingGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recruiting.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecruitingGroups<TError = unknown>(
  args: InferRequestType<typeof client.recruiting.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
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
        ? getGetRecruitingGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recruiting.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecruitingPlayersKey(
  args: InferRequestType<typeof client.recruiting.players.$get>,
) {
  return ['recruiting', '/recruiting/players', args] as const
}

export function useGetRecruitingPlayers<TError = unknown>(
  args: InferRequestType<typeof client.recruiting.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
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
        ? getGetRecruitingPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recruiting.players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecruitingPlayers<TError = unknown>(
  args: InferRequestType<typeof client.recruiting.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
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
        ? getGetRecruitingPlayersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.players.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recruiting.players.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecruitingTeamsKey(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
) {
  return ['recruiting', '/recruiting/teams', args] as const
}

export function useGetRecruitingTeams<TError = unknown>(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
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
        ? getGetRecruitingTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recruiting.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecruitingTeams<TError = unknown>(
  args: InferRequestType<typeof client.recruiting.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
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
        ? getGetRecruitingTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recruiting.teams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recruiting.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRosterKey(args: InferRequestType<typeof client.roster.$get>) {
  return ['roster', '/roster', args] as const
}

export function useGetRoster<TError = unknown>(
  args: InferRequestType<typeof client.roster.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRosterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roster.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoster<TError = unknown>(
  args: InferRequestType<typeof client.roster.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRosterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roster.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roster.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetScoreboardKey(args: InferRequestType<typeof client.scoreboard.$get>) {
  return ['scoreboard', '/scoreboard', args] as const
}

export function useGetScoreboard<TError = unknown>(
  args: InferRequestType<typeof client.scoreboard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScoreboardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scoreboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScoreboard<TError = unknown>(
  args: InferRequestType<typeof client.scoreboard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScoreboardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scoreboard.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scoreboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCategoriesKey() {
  return ['stats', '/stats/categories'] as const
}

export function useGetStatsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsGameAdvancedKey(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
) {
  return ['stats', '/stats/game/advanced', args] as const
}

export function useGetStatsGameAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
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
        ? getGetStatsGameAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.game.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsGameAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.stats.game.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
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
        ? getGetStatsGameAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.game.advanced.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.game.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsPlayerSeasonKey(
  args: InferRequestType<typeof client.stats.player.season.$get>,
) {
  return ['stats', '/stats/player/season', args] as const
}

export function useGetStatsPlayerSeason<TError = unknown>(
  args: InferRequestType<typeof client.stats.player.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
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
        ? getGetStatsPlayerSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.player.season.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsPlayerSeason<TError = unknown>(
  args: InferRequestType<typeof client.stats.player.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
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
        ? getGetStatsPlayerSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.player.season.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.player.season.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsSeasonKey(args: InferRequestType<typeof client.stats.season.$get>) {
  return ['stats', '/stats/season', args] as const
}

export function useGetStatsSeason<TError = unknown>(
  args: InferRequestType<typeof client.stats.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsSeasonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.season.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsSeason<TError = unknown>(
  args: InferRequestType<typeof client.stats.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsSeasonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.season.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsSeasonAdvancedKey(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
) {
  return ['stats', '/stats/season/advanced', args] as const
}

export function useGetStatsSeasonAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
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
        ? getGetStatsSeasonAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.season.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsSeasonAdvanced<TError = unknown>(
  args: InferRequestType<typeof client.stats.season.advanced.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
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
        ? getGetStatsSeasonAdvancedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.season.advanced.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.season.advanced.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTalentKey(args: InferRequestType<typeof client.talent.$get>) {
  return ['talent', '/talent', args] as const
}

export function useGetTalent<TError = unknown>(
  args: InferRequestType<typeof client.talent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTalentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.talent.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTalent<TError = unknown>(
  args: InferRequestType<typeof client.talent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTalentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.talent.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.talent.$get(args, clientOptions)), restSwrOptions),
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

export function getGetTeamsFbsKey(args: InferRequestType<typeof client.teams.fbs.$get>) {
  return ['teams', '/teams/fbs', args] as const
}

export function useGetTeamsFbs<TError = unknown>(
  args: InferRequestType<typeof client.teams.fbs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsFbsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.fbs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsFbs<TError = unknown>(
  args: InferRequestType<typeof client.teams.fbs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsFbsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.fbs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.fbs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsMatchupKey(args: InferRequestType<typeof client.teams.matchup.$get>) {
  return ['teams', '/teams/matchup', args] as const
}

export function useGetTeamsMatchup<TError = unknown>(
  args: InferRequestType<typeof client.teams.matchup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsMatchupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.matchup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsMatchup<TError = unknown>(
  args: InferRequestType<typeof client.teams.matchup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsMatchupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.matchup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.matchup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVenuesKey() {
  return ['venues', '/venues'] as const
}

export function useGetVenues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVenuesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.venues.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVenues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVenuesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.venues.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.venues.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
