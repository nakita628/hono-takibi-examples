import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGamesKey() {
  return ['games'] as const
}

export function getGamesV1configurationAchievementsAchievementIdQueryKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
) {
  return ['games', '/games/v1configuration/achievements/:achievementId', args] as const
}

export function getGamesV1configurationAchievementsAchievementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.games.v1configuration.achievements)[':achievementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1configuration.achievements)[':achievementId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1configurationAchievementsAchievementIdQueryKey>
  >({
    queryKey: getGamesV1configurationAchievementsAchievementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1configuration.achievements[':achievementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGamesV1configurationAchievementsAchievementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.games.v1configuration.achievements)[':achievementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.games.v1configuration.achievements)[':achievementId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGamesV1configurationAchievementsAchievementIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGamesV1configurationAchievementsAchievementIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutGamesV1configurationAchievementsAchievementIdMutationKey() {
  return ['games', '/games/v1configuration/achievements/:achievementId', 'PUT'] as const
}

export function getPutGamesV1configurationAchievementsAchievementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1configuration.achievements)[':achievementId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGamesV1configurationAchievementsAchievementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1configuration.achievements)[':achievementId']['$put']
      >,
    ) {
      return parseResponse(
        client.games.v1configuration.achievements[':achievementId'].$put(args, options),
      )
    },
  })
}

export function injectPutGamesV1configurationAchievementsAchievementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.games.v1configuration.achievements)[':achievementId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.games.v1configuration.achievements)[':achievementId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGamesV1configurationAchievementsAchievementIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGamesV1configurationAchievementsAchievementIdMutationKey() {
  return ['games', '/games/v1configuration/achievements/:achievementId', 'DELETE'] as const
}

export function getDeleteGamesV1configurationAchievementsAchievementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGamesV1configurationAchievementsAchievementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.games.v1configuration.achievements[':achievementId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGamesV1configurationAchievementsAchievementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.games.v1configuration.achievements)[':achievementId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGamesV1configurationAchievementsAchievementIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGamesV1configurationApplicationsApplicationIdAchievementsQueryKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
) {
  return ['games', '/games/v1configuration/applications/:applicationId/achievements', args] as const
}

export function getGamesV1configurationApplicationsApplicationIdAchievementsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGamesV1configurationApplicationsApplicationIdAchievementsQueryKey>
  >({
    queryKey: getGamesV1configurationApplicationsApplicationIdAchievementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1configuration.applications[':applicationId'].achievements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGamesV1configurationApplicationsApplicationIdAchievements<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGamesV1configurationApplicationsApplicationIdAchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGamesV1configurationApplicationsApplicationIdAchievementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGamesV1configurationApplicationsApplicationIdAchievementsMutationKey() {
  return [
    'games',
    '/games/v1configuration/applications/:applicationId/achievements',
    'POST',
  ] as const
}

export function getPostGamesV1configurationApplicationsApplicationIdAchievementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1configurationApplicationsApplicationIdAchievementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1configuration.applications[':applicationId'].achievements.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGamesV1configurationApplicationsApplicationIdAchievements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.games.v1configuration.applications)[':applicationId']['achievements']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGamesV1configurationApplicationsApplicationIdAchievementsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGamesV1configurationApplicationsApplicationIdLeaderboardsQueryKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
) {
  return ['games', '/games/v1configuration/applications/:applicationId/leaderboards', args] as const
}

export function getGamesV1configurationApplicationsApplicationIdLeaderboardsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGamesV1configurationApplicationsApplicationIdLeaderboardsQueryKey>
  >({
    queryKey: getGamesV1configurationApplicationsApplicationIdLeaderboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1configuration.applications[':applicationId'].leaderboards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGamesV1configurationApplicationsApplicationIdLeaderboards<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGamesV1configurationApplicationsApplicationIdLeaderboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGamesV1configurationApplicationsApplicationIdLeaderboardsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostGamesV1configurationApplicationsApplicationIdLeaderboardsMutationKey() {
  return [
    'games',
    '/games/v1configuration/applications/:applicationId/leaderboards',
    'POST',
  ] as const
}

export function getPostGamesV1configurationApplicationsApplicationIdLeaderboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1configurationApplicationsApplicationIdLeaderboardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1configuration.applications[':applicationId'].leaderboards.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGamesV1configurationApplicationsApplicationIdLeaderboards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.games.v1configuration.applications)[':applicationId']['leaderboards']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGamesV1configurationApplicationsApplicationIdLeaderboardsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGamesV1configurationLeaderboardsLeaderboardIdQueryKey(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
) {
  return ['games', '/games/v1configuration/leaderboards/:leaderboardId', args] as const
}

export function getGamesV1configurationLeaderboardsLeaderboardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1configurationLeaderboardsLeaderboardIdQueryKey>
  >({
    queryKey: getGamesV1configurationLeaderboardsLeaderboardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1configuration.leaderboards[':leaderboardId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGamesV1configurationLeaderboardsLeaderboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGamesV1configurationLeaderboardsLeaderboardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGamesV1configurationLeaderboardsLeaderboardIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutGamesV1configurationLeaderboardsLeaderboardIdMutationKey() {
  return ['games', '/games/v1configuration/leaderboards/:leaderboardId', 'PUT'] as const
}

export function getPutGamesV1configurationLeaderboardsLeaderboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGamesV1configurationLeaderboardsLeaderboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']
      >,
    ) {
      return parseResponse(
        client.games.v1configuration.leaderboards[':leaderboardId'].$put(args, options),
      )
    },
  })
}

export function injectPutGamesV1configurationLeaderboardsLeaderboardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGamesV1configurationLeaderboardsLeaderboardIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGamesV1configurationLeaderboardsLeaderboardIdMutationKey() {
  return ['games', '/games/v1configuration/leaderboards/:leaderboardId', 'DELETE'] as const
}

export function getDeleteGamesV1configurationLeaderboardsLeaderboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGamesV1configurationLeaderboardsLeaderboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
      >,
    ) {
      return parseResponse(
        client.games.v1configuration.leaderboards[':leaderboardId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteGamesV1configurationLeaderboardsLeaderboardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.games.v1configuration.leaderboards)[':leaderboardId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGamesV1configurationLeaderboardsLeaderboardIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
