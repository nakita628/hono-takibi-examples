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

export function getGetGamesV1AchievementsKey(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
) {
  return ['games', '/games/v1/achievements', args] as const
}

export function useGetGamesV1Achievements<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
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
        ? getGetGamesV1AchievementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.achievements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1Achievements<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
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
        ? getGetGamesV1AchievementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.achievements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1AchievementsUpdateMultipleKey() {
  return ['games', '/games/v1/achievements/updateMultiple', 'POST'] as const
}

export function usePostGamesV1AchievementsUpdateMultiple<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1.achievements.updateMultiple.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1.achievements.updateMultiple.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1AchievementsUpdateMultipleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.games.v1.achievements.updateMultiple.$post> },
      ) => parseResponse(client.games.v1.achievements.updateMultiple.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1AchievementsAchievementIdIncrementKey() {
  return ['games', '/games/v1/achievements/:achievementId/increment', 'POST'] as const
}

export function usePostGamesV1AchievementsAchievementIdIncrement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1.achievements)[':achievementId']['increment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1.achievements)[':achievementId']['increment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1AchievementsAchievementIdIncrementKey()
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
            (typeof client.games.v1.achievements)[':achievementId']['increment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1.achievements[':achievementId'].increment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1AchievementsAchievementIdRevealKey() {
  return ['games', '/games/v1/achievements/:achievementId/reveal', 'POST'] as const
}

export function usePostGamesV1AchievementsAchievementIdReveal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1AchievementsAchievementIdRevealKey()
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
            (typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1.achievements[':achievementId'].reveal.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1AchievementsAchievementIdSetStepsAtLeastKey() {
  return ['games', '/games/v1/achievements/:achievementId/setStepsAtLeast', 'POST'] as const
}

export function usePostGamesV1AchievementsAchievementIdSetStepsAtLeast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1AchievementsAchievementIdSetStepsAtLeastKey()
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
            (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1.achievements[':achievementId'].setStepsAtLeast.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1AchievementsAchievementIdUnlockKey() {
  return ['games', '/games/v1/achievements/:achievementId/unlock', 'POST'] as const
}

export function usePostGamesV1AchievementsAchievementIdUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1AchievementsAchievementIdUnlockKey()
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
            (typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1.achievements[':achievementId'].unlock.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1ApplicationsGetEndPointKey() {
  return ['games', '/games/v1/applications/getEndPoint', 'POST'] as const
}

export function usePostGamesV1ApplicationsGetEndPoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1.applications.getEndPoint.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1.applications.getEndPoint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1ApplicationsGetEndPointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.games.v1.applications.getEndPoint.$post> },
      ) => parseResponse(client.games.v1.applications.getEndPoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGamesV1ApplicationsPlayedKey() {
  return ['games', '/games/v1/applications/played', 'POST'] as const
}

export function usePostGamesV1ApplicationsPlayed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.applications.played.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1.applications.played.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1ApplicationsPlayedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.games.v1.applications.played.$post> },
      ) => parseResponse(client.games.v1.applications.played.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1ApplicationsApplicationIdKey(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
) {
  return ['games', '/games/v1/applications/:applicationId', args] as const
}

export function useGetGamesV1ApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
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
        ? getGetGamesV1ApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.applications[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1ApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
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
        ? getGetGamesV1ApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.applications[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1ApplicationsApplicationIdVerifyKey(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
) {
  return ['games', '/games/v1/applications/:applicationId/verify', args] as const
}

export function useGetGamesV1ApplicationsApplicationIdVerify<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
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
        ? getGetGamesV1ApplicationsApplicationIdVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.games.v1.applications[':applicationId'].verify.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1ApplicationsApplicationIdVerify<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
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
        ? getGetGamesV1ApplicationsApplicationIdVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.games.v1.applications[':applicationId'].verify.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1EventDefinitionsKey(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
) {
  return ['games', '/games/v1/eventDefinitions', args] as const
}

export function useGetGamesV1EventDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
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
        ? getGetGamesV1EventDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.eventDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1EventDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
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
        ? getGetGamesV1EventDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.eventDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1EventsKey(args: InferRequestType<typeof client.games.v1.events.$get>) {
  return ['games', '/games/v1/events', args] as const
}

export function useGetGamesV1Events<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1Events<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1EventsKey() {
  return ['games', '/games/v1/events', 'POST'] as const
}

export function usePostGamesV1Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.games.v1.events.$post> }) =>
        parseResponse(client.games.v1.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1LeaderboardsKey(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
) {
  return ['games', '/games/v1/leaderboards', args] as const
}

export function useGetGamesV1Leaderboards<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
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
        ? getGetGamesV1LeaderboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.leaderboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1Leaderboards<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
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
        ? getGetGamesV1LeaderboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.leaderboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1LeaderboardsScoresKey() {
  return ['games', '/games/v1/leaderboards/scores', 'POST'] as const
}

export function usePostGamesV1LeaderboardsScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.scores.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.games.v1.leaderboards.scores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1LeaderboardsScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.games.v1.leaderboards.scores.$post> },
      ) => parseResponse(client.games.v1.leaderboards.scores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1LeaderboardsLeaderboardIdKey(
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId', args] as const
}

export function useGetGamesV1LeaderboardsLeaderboardId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
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
        ? getGetGamesV1LeaderboardsLeaderboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.leaderboards[':leaderboardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1LeaderboardsLeaderboardId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
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
        ? getGetGamesV1LeaderboardsLeaderboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.leaderboards[':leaderboardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1LeaderboardsLeaderboardIdScoresKey() {
  return ['games', '/games/v1/leaderboards/:leaderboardId/scores', 'POST'] as const
}

export function usePostGamesV1LeaderboardsLeaderboardIdScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1LeaderboardsLeaderboardIdScoresKey()
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
            (typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1.leaderboards[':leaderboardId'].scores.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1LeaderboardsLeaderboardIdScoresCollectionKey(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId/scores/:collection', args] as const
}

export function useGetGamesV1LeaderboardsLeaderboardIdScoresCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
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
        ? getGetGamesV1LeaderboardsLeaderboardIdScoresCollectionKey(args)
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
                (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
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
          client.games.v1.leaderboards[':leaderboardId'].scores[':collection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1LeaderboardsLeaderboardIdScoresCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
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
        ? getGetGamesV1LeaderboardsLeaderboardIdScoresCollectionKey(args)
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
                (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
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
          client.games.v1.leaderboards[':leaderboardId'].scores[':collection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1LeaderboardsLeaderboardIdWindowCollectionKey(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId/window/:collection', args] as const
}

export function useGetGamesV1LeaderboardsLeaderboardIdWindowCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
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
        ? getGetGamesV1LeaderboardsLeaderboardIdWindowCollectionKey(args)
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
                (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
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
          client.games.v1.leaderboards[':leaderboardId'].window[':collection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1LeaderboardsLeaderboardIdWindowCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
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
        ? getGetGamesV1LeaderboardsLeaderboardIdWindowCollectionKey(args)
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
                (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
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
          client.games.v1.leaderboards[':leaderboardId'].window[':collection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1MetagameConfigKey(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
) {
  return ['games', '/games/v1/metagameConfig', args] as const
}

export function useGetGamesV1MetagameConfig<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
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
        ? getGetGamesV1MetagameConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.metagameConfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1MetagameConfig<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
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
        ? getGetGamesV1MetagameConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.metagameConfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersMeMultipleApplicationPlayerIdsKey(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
) {
  return ['games', '/games/v1/players/me/multipleApplicationPlayerIds', args] as const
}

export function useGetGamesV1PlayersMeMultipleApplicationPlayerIds<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
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
        ? getGetGamesV1PlayersMeMultipleApplicationPlayerIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.games.v1.players.me.multipleApplicationPlayerIds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersMeMultipleApplicationPlayerIds<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
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
        ? getGetGamesV1PlayersMeMultipleApplicationPlayerIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.games.v1.players.me.multipleApplicationPlayerIds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersMePlayersCollectionKey(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
) {
  return ['games', '/games/v1/players/me/players/:collection', args] as const
}

export function useGetGamesV1PlayersMePlayersCollection<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
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
        ? getGetGamesV1PlayersMePlayersCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.players.me.players[':collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersMePlayersCollection<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
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
        ? getGetGamesV1PlayersMePlayersCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.players.me.players[':collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersMeScopedIdsKey(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
) {
  return ['games', '/games/v1/players/me/scopedIds', args] as const
}

export function useGetGamesV1PlayersMeScopedIds<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
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
        ? getGetGamesV1PlayersMeScopedIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.players.me.scopedIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersMeScopedIds<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
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
        ? getGetGamesV1PlayersMeScopedIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.players.me.scopedIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersPlayerIdKey(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
) {
  return ['games', '/games/v1/players/:playerId', args] as const
}

export function useGetGamesV1PlayersPlayerId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
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
        ? getGetGamesV1PlayersPlayerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.players[':playerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersPlayerId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
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
        ? getGetGamesV1PlayersPlayerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.players[':playerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersPlayerIdAchievementsKey(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
) {
  return ['games', '/games/v1/players/:playerId/achievements', args] as const
}

export function useGetGamesV1PlayersPlayerIdAchievements<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
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
        ? getGetGamesV1PlayersPlayerIdAchievementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.players[':playerId'].achievements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersPlayerIdAchievements<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
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
        ? getGetGamesV1PlayersPlayerIdAchievementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.players[':playerId'].achievements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersPlayerIdCategoriesCollectionKey(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
) {
  return ['games', '/games/v1/players/:playerId/categories/:collection', args] as const
}

export function useGetGamesV1PlayersPlayerIdCategoriesCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
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
        ? getGetGamesV1PlayersPlayerIdCategoriesCollectionKey(args)
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
                (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
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
          client.games.v1.players[':playerId'].categories[':collection'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersPlayerIdCategoriesCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
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
        ? getGetGamesV1PlayersPlayerIdCategoriesCollectionKey(args)
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
                (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
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
          client.games.v1.players[':playerId'].categories[':collection'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanKey(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
) {
  return [
    'games',
    '/games/v1/players/:playerId/leaderboards/:leaderboardId/scores/:timeSpan',
    args,
  ] as const
}

export function useGetGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpan<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
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
        ? getGetGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanKey(args)
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
                (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
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
          client.games.v1.players[':playerId'].leaderboards[':leaderboardId'].scores[
            ':timeSpan'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpan<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
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
        ? getGetGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanKey(args)
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
                (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
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
          client.games.v1.players[':playerId'].leaderboards[':leaderboardId'].scores[
            ':timeSpan'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1PlayersPlayerIdSnapshotsKey(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
) {
  return ['games', '/games/v1/players/:playerId/snapshots', args] as const
}

export function useGetGamesV1PlayersPlayerIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
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
        ? getGetGamesV1PlayersPlayerIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.players[':playerId'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1PlayersPlayerIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
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
        ? getGetGamesV1PlayersPlayerIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.games.v1.players[':playerId'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1RevisionsCheckKey(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
) {
  return ['games', '/games/v1/revisions/check', args] as const
}

export function useGetGamesV1RevisionsCheck<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
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
        ? getGetGamesV1RevisionsCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.revisions.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1RevisionsCheck<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
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
        ? getGetGamesV1RevisionsCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.revisions.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1SnapshotsSnapshotIdKey(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
) {
  return ['games', '/games/v1/snapshots/:snapshotId', args] as const
}

export function useGetGamesV1SnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
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
        ? getGetGamesV1SnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.snapshots[':snapshotId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1SnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
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
        ? getGetGamesV1SnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.snapshots[':snapshotId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGamesV1StatsKey(args: InferRequestType<typeof client.games.v1.stats.$get>) {
  return ['games', '/games/v1/stats', args] as const
}

export function useGetGamesV1Stats<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesV1StatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1Stats<TError = unknown>(
  args: InferRequestType<typeof client.games.v1.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesV1StatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.v1.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
