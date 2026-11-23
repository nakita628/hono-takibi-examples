import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGamesKey() {
  return ['games'] as const
}

export function getPostGamesV1managementAchievementsResetKey() {
  return ['games', '/games/v1management/achievements/reset', 'POST'] as const
}

export function usePostGamesV1managementAchievementsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.achievements.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.achievements.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementAchievementsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.games.v1management.achievements.reset.$post> },
      ) => parseResponse(client.games.v1management.achievements.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementAchievementsResetAllForAllPlayersKey() {
  return ['games', '/games/v1management/achievements/resetAllForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementAchievementsResetAllForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.games.v1management.achievements.resetAllForAllPlayers.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.achievements.resetAllForAllPlayers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementAchievementsResetAllForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.games.v1management.achievements.resetAllForAllPlayers.$post
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.achievements.resetAllForAllPlayers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementAchievementsResetMultipleForAllPlayersKey() {
  return ['games', '/games/v1management/achievements/resetMultipleForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementAchievementsResetMultipleForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementAchievementsResetMultipleForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.achievements.resetMultipleForAllPlayers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementAchievementsAchievementIdResetKey() {
  return ['games', '/games/v1management/achievements/:achievementId/reset', 'POST'] as const
}

export function usePostGamesV1managementAchievementsAchievementIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementAchievementsAchievementIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.achievements[':achievementId'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementAchievementsAchievementIdResetForAllPlayersKey() {
  return [
    'games',
    '/games/v1management/achievements/:achievementId/resetForAllPlayers',
    'POST',
  ] as const
}

export function usePostGamesV1managementAchievementsAchievementIdResetForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGamesV1managementAchievementsAchievementIdResetForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.achievements[':achievementId'].resetForAllPlayers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1managementApplicationsApplicationIdPlayersHiddenKey(
  args: InferRequestType<
    (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
  >,
) {
  return ['games', '/games/v1management/applications/:applicationId/players/hidden', args] as const
}

export function useGetGamesV1managementApplicationsApplicationIdPlayersHidden<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
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
        ? getGetGamesV1managementApplicationsApplicationIdPlayersHiddenKey(args)
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
                (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
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
          client.games.v1management.applications[':applicationId'].players.hidden.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1managementApplicationsApplicationIdPlayersHidden<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
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
        ? getGetGamesV1managementApplicationsApplicationIdPlayersHiddenKey(args)
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
                (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
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
          client.games.v1management.applications[':applicationId'].players.hidden.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdKey() {
  return [
    'games',
    '/games/v1management/applications/:applicationId/players/hidden/:playerId',
    'POST',
  ] as const
}

export function usePostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.applications[':applicationId'].players.hidden[
            ':playerId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdKey() {
  return [
    'games',
    '/games/v1management/applications/:applicationId/players/hidden/:playerId',
    'DELETE',
  ] as const
}

export function useDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.applications[':applicationId'].players.hidden[
            ':playerId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementEventsResetKey() {
  return ['games', '/games/v1management/events/reset', 'POST'] as const
}

export function usePostGamesV1managementEventsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.events.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.events.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementEventsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.games.v1management.events.reset.$post> },
      ) => parseResponse(client.games.v1management.events.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementEventsResetAllForAllPlayersKey() {
  return ['games', '/games/v1management/events/resetAllForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementEventsResetAllForAllPlayers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementEventsResetAllForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>
        },
      ) =>
        parseResponse(
          client.games.v1management.events.resetAllForAllPlayers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementEventsResetMultipleForAllPlayersKey() {
  return ['games', '/games/v1management/events/resetMultipleForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementEventsResetMultipleForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.games.v1management.events.resetMultipleForAllPlayers.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.events.resetMultipleForAllPlayers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementEventsResetMultipleForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.games.v1management.events.resetMultipleForAllPlayers.$post
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.events.resetMultipleForAllPlayers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementEventsEventIdResetKey() {
  return ['games', '/games/v1management/events/:eventId/reset', 'POST'] as const
}

export function usePostGamesV1managementEventsEventIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1management.events)[':eventId']['reset']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1management.events)[':eventId']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementEventsEventIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.events)[':eventId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(client.games.v1management.events[':eventId'].reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementEventsEventIdResetForAllPlayersKey() {
  return ['games', '/games/v1management/events/:eventId/resetForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementEventsEventIdResetForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementEventsEventIdResetForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.events[':eventId'].resetForAllPlayers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetKey() {
  return ['games', '/games/v1management/leaderboards/:leaderboardId/scores/reset', 'POST'] as const
}

export function usePostGamesV1managementLeaderboardsLeaderboardIdScoresReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.leaderboards[':leaderboardId'].scores.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersKey() {
  return [
    'games',
    '/games/v1management/leaderboards/:leaderboardId/scores/resetForAllPlayers',
    'POST',
  ] as const
}

export function usePostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.leaderboards[':leaderboardId'].scores.resetForAllPlayers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementScoresResetKey() {
  return ['games', '/games/v1management/scores/reset', 'POST'] as const
}

export function usePostGamesV1managementScoresReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.scores.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.scores.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementScoresResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.games.v1management.scores.reset.$post> },
      ) => parseResponse(client.games.v1management.scores.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementScoresResetAllForAllPlayersKey() {
  return ['games', '/games/v1management/scores/resetAllForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementScoresResetAllForAllPlayers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementScoresResetAllForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>
        },
      ) =>
        parseResponse(
          client.games.v1management.scores.resetAllForAllPlayers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1managementScoresResetMultipleForAllPlayersKey() {
  return ['games', '/games/v1management/scores/resetMultipleForAllPlayers', 'POST'] as const
}

export function usePostGamesV1managementScoresResetMultipleForAllPlayers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1managementScoresResetMultipleForAllPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post
          >
        },
      ) =>
        parseResponse(
          client.games.v1management.scores.resetMultipleForAllPlayers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
