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

export function getGetGamesV1configurationAchievementsAchievementIdKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
) {
  return ['games', '/games/v1configuration/achievements/:achievementId', args] as const
}

export function useGetGamesV1configurationAchievementsAchievementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
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
        ? getGetGamesV1configurationAchievementsAchievementIdKey(args)
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
                (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
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
          client.games.v1configuration.achievements[':achievementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1configurationAchievementsAchievementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
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
        ? getGetGamesV1configurationAchievementsAchievementIdKey(args)
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
                (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
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
          client.games.v1configuration.achievements[':achievementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGamesV1configurationAchievementsAchievementIdKey() {
  return ['games', '/games/v1configuration/achievements/:achievementId', 'PUT'] as const
}

export function usePutGamesV1configurationAchievementsAchievementId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1configuration.achievements)[':achievementId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1configuration.achievements)[':achievementId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGamesV1configurationAchievementsAchievementIdKey()
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
            (typeof client.games.v1configuration.achievements)[':achievementId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.games.v1configuration.achievements[':achievementId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGamesV1configurationAchievementsAchievementIdKey() {
  return ['games', '/games/v1configuration/achievements/:achievementId', 'DELETE'] as const
}

export function useDeleteGamesV1configurationAchievementsAchievementId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGamesV1configurationAchievementsAchievementIdKey()
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
            (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.games.v1configuration.achievements[':achievementId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1configurationApplicationsApplicationIdAchievementsKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
) {
  return ['games', '/games/v1configuration/applications/:applicationId/achievements', args] as const
}

export function useGetGamesV1configurationApplicationsApplicationIdAchievements<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
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
        ? getGetGamesV1configurationApplicationsApplicationIdAchievementsKey(args)
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
                (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
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
          client.games.v1configuration.applications[':applicationId'].achievements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1configurationApplicationsApplicationIdAchievements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
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
        ? getGetGamesV1configurationApplicationsApplicationIdAchievementsKey(args)
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
                (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
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
          client.games.v1configuration.applications[':applicationId'].achievements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1configurationApplicationsApplicationIdAchievementsKey() {
  return [
    'games',
    '/games/v1configuration/applications/:applicationId/achievements',
    'POST',
  ] as const
}

export function usePostGamesV1configurationApplicationsApplicationIdAchievements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1configurationApplicationsApplicationIdAchievementsKey()
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
            (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1configuration.applications[':applicationId'].achievements.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1configurationApplicationsApplicationIdLeaderboardsKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
) {
  return ['games', '/games/v1configuration/applications/:applicationId/leaderboards', args] as const
}

export function useGetGamesV1configurationApplicationsApplicationIdLeaderboards<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
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
        ? getGetGamesV1configurationApplicationsApplicationIdLeaderboardsKey(args)
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
                (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
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
          client.games.v1configuration.applications[':applicationId'].leaderboards.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1configurationApplicationsApplicationIdLeaderboards<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
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
        ? getGetGamesV1configurationApplicationsApplicationIdLeaderboardsKey(args)
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
                (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
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
          client.games.v1configuration.applications[':applicationId'].leaderboards.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGamesV1configurationApplicationsApplicationIdLeaderboardsKey() {
  return [
    'games',
    '/games/v1configuration/applications/:applicationId/leaderboards',
    'POST',
  ] as const
}

export function usePostGamesV1configurationApplicationsApplicationIdLeaderboards<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGamesV1configurationApplicationsApplicationIdLeaderboardsKey()
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
            (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
          >
        },
      ) =>
        parseResponse(
          client.games.v1configuration.applications[':applicationId'].leaderboards.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGamesV1configurationLeaderboardsLeaderboardIdKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
) {
  return ['games', '/games/v1configuration/leaderboards/:leaderboardId', args] as const
}

export function useGetGamesV1configurationLeaderboardsLeaderboardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
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
        ? getGetGamesV1configurationLeaderboardsLeaderboardIdKey(args)
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
                (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
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
          client.games.v1configuration.leaderboards[':leaderboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesV1configurationLeaderboardsLeaderboardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
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
        ? getGetGamesV1configurationLeaderboardsLeaderboardIdKey(args)
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
                (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
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
          client.games.v1configuration.leaderboards[':leaderboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGamesV1configurationLeaderboardsLeaderboardIdKey() {
  return ['games', '/games/v1configuration/leaderboards/:leaderboardId', 'PUT'] as const
}

export function usePutGamesV1configurationLeaderboardsLeaderboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGamesV1configurationLeaderboardsLeaderboardIdKey()
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
            (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.games.v1configuration.leaderboards[':leaderboardId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGamesV1configurationLeaderboardsLeaderboardIdKey() {
  return ['games', '/games/v1configuration/leaderboards/:leaderboardId', 'DELETE'] as const
}

export function useDeleteGamesV1configurationLeaderboardsLeaderboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGamesV1configurationLeaderboardsLeaderboardIdKey()
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
            (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.games.v1configuration.leaderboards[':leaderboardId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
