import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGamesKey() {
  return ['games'] as const
}

export function getPostGamesV1managementAchievementsResetMutationKey() {
  return ['games', '/games/v1management/achievements/reset', 'POST'] as const
}

export function getPostGamesV1managementAchievementsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.achievements.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1management.achievements.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementAchievementsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.games.v1management.achievements.reset.$post>,
    ) {
      return parseResponse(client.games.v1management.achievements.reset.$post(args, options))
    },
  })
}

export function usePostGamesV1managementAchievementsReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1management.achievements.reset.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1management.achievements.reset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementAchievementsResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementAchievementsResetAllForAllPlayersMutationKey() {
  return ['games', '/games/v1management/achievements/resetAllForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementAchievementsResetAllForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.games.v1management.achievements.resetAllForAllPlayers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementAchievementsResetAllForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.games.v1management.achievements.resetAllForAllPlayers.$post
      >,
    ) {
      return parseResponse(
        client.games.v1management.achievements.resetAllForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementAchievementsResetAllForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    typeof client.games.v1management.achievements.resetAllForAllPlayers.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.games.v1management.achievements.resetAllForAllPlayers.$post
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementAchievementsResetAllForAllPlayersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementAchievementsResetMultipleForAllPlayersMutationKey() {
  return ['games', '/games/v1management/achievements/resetMultipleForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementAchievementsResetMultipleForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementAchievementsResetMultipleForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post
      >,
    ) {
      return parseResponse(
        client.games.v1management.achievements.resetMultipleForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementAchievementsResetMultipleForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            typeof client.games.v1management.achievements.resetMultipleForAllPlayers.$post
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGamesV1managementAchievementsResetMultipleForAllPlayersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementAchievementsAchievementIdResetMutationKey() {
  return ['games', '/games/v1management/achievements/:achievementId/reset', 'POST'] as const
}

export function getPostGamesV1managementAchievementsAchievementIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementAchievementsAchievementIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1management.achievements[':achievementId'].reset.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementAchievementsAchievementIdReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.achievements)[':achievementId']['reset']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementAchievementsAchievementIdResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementAchievementsAchievementIdResetForAllPlayersMutationKey() {
  return [
    'games',
    '/games/v1management/achievements/:achievementId/resetForAllPlayers',
    'POST',
  ] as const
}

export function getPostGamesV1managementAchievementsAchievementIdResetForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementAchievementsAchievementIdResetForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1management.achievements[':achievementId'].resetForAllPlayers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGamesV1managementAchievementsAchievementIdResetForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.achievements)[':achievementId']['resetForAllPlayers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGamesV1managementAchievementsAchievementIdResetForAllPlayersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGamesV1managementApplicationsApplicationIdPlayersHiddenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
    >
  >,
) {
  return [
    'games',
    '/games/v1management/applications/:applicationId/players/hidden',
    toValue(args),
  ] as const
}

export function getGamesV1managementApplicationsApplicationIdPlayersHiddenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGamesV1managementApplicationsApplicationIdPlayersHiddenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1management.applications[':applicationId'].players.hidden.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGamesV1managementApplicationsApplicationIdPlayersHidden<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getGamesV1managementApplicationsApplicationIdPlayersHiddenQueryKey>
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
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.games.v1management.applications)[':applicationId']['players']['hidden']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1managementApplicationsApplicationIdPlayersHiddenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGamesV1managementApplicationsApplicationIdPlayersHiddenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1management.applications[':applicationId'].players.hidden.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationKey() {
  return [
    'games',
    '/games/v1management/applications/:applicationId/players/hidden/:playerId',
    'POST',
  ] as const
}

export function getPostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1management.applications[':applicationId'].players.hidden[':playerId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationKey() {
  return [
    'games',
    '/games/v1management/applications/:applicationId/players/hidden/:playerId',
    'DELETE',
  ] as const
}

export function getDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.games.v1management.applications[':applicationId'].players.hidden[
          ':playerId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.applications)[':applicationId']['players']['hidden'][':playerId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementEventsResetMutationKey() {
  return ['games', '/games/v1management/events/reset', 'POST'] as const
}

export function getPostGamesV1managementEventsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.events.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1management.events.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementEventsResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.games.v1management.events.reset.$post>) {
      return parseResponse(client.games.v1management.events.reset.$post(args, options))
    },
  })
}

export function usePostGamesV1managementEventsReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1management.events.reset.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1management.events.reset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementEventsResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementEventsResetAllForAllPlayersMutationKey() {
  return ['games', '/games/v1management/events/resetAllForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementEventsResetAllForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementEventsResetAllForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>,
    ) {
      return parseResponse(
        client.games.v1management.events.resetAllForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementEventsResetAllForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1management.events.resetAllForAllPlayers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementEventsResetAllForAllPlayersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementEventsResetMultipleForAllPlayersMutationKey() {
  return ['games', '/games/v1management/events/resetMultipleForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementEventsResetMultipleForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.games.v1management.events.resetMultipleForAllPlayers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementEventsResetMultipleForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.games.v1management.events.resetMultipleForAllPlayers.$post
      >,
    ) {
      return parseResponse(
        client.games.v1management.events.resetMultipleForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementEventsResetMultipleForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    typeof client.games.v1management.events.resetMultipleForAllPlayers.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.games.v1management.events.resetMultipleForAllPlayers.$post
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementEventsResetMultipleForAllPlayersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementEventsEventIdResetMutationKey() {
  return ['games', '/games/v1management/events/:eventId/reset', 'POST'] as const
}

export function getPostGamesV1managementEventsEventIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1management.events)[':eventId']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementEventsEventIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.events)[':eventId']['reset']['$post']
      >,
    ) {
      return parseResponse(client.games.v1management.events[':eventId'].reset.$post(args, options))
    },
  })
}

export function usePostGamesV1managementEventsEventIdReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.games.v1management.events)[':eventId']['reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.games.v1management.events)[':eventId']['reset']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementEventsEventIdResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementEventsEventIdResetForAllPlayersMutationKey() {
  return ['games', '/games/v1management/events/:eventId/resetForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementEventsEventIdResetForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementEventsEventIdResetForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1management.events[':eventId'].resetForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementEventsEventIdResetForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.events)[':eventId']['resetForAllPlayers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementEventsEventIdResetForAllPlayersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetMutationKey() {
  return ['games', '/games/v1management/leaderboards/:leaderboardId/scores/reset', 'POST'] as const
}

export function getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1management.leaderboards[':leaderboardId'].scores.reset.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementLeaderboardsLeaderboardIdScoresReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['reset']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersMutationKey() {
  return [
    'games',
    '/games/v1management/leaderboards/:leaderboardId/scores/resetForAllPlayers',
    'POST',
  ] as const
}

export function getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1management.leaderboards[':leaderboardId'].scores.resetForAllPlayers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.games.v1management.leaderboards)[':leaderboardId']['scores']['resetForAllPlayers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementScoresResetMutationKey() {
  return ['games', '/games/v1management/scores/reset', 'POST'] as const
}

export function getPostGamesV1managementScoresResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.scores.reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1management.scores.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementScoresResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.games.v1management.scores.reset.$post>) {
      return parseResponse(client.games.v1management.scores.reset.$post(args, options))
    },
  })
}

export function usePostGamesV1managementScoresReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1management.scores.reset.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1management.scores.reset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementScoresResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementScoresResetAllForAllPlayersMutationKey() {
  return ['games', '/games/v1management/scores/resetAllForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementScoresResetAllForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementScoresResetAllForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>,
    ) {
      return parseResponse(
        client.games.v1management.scores.resetAllForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementScoresResetAllForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1management.scores.resetAllForAllPlayers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementScoresResetAllForAllPlayersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGamesV1managementScoresResetMultipleForAllPlayersMutationKey() {
  return ['games', '/games/v1management/scores/resetMultipleForAllPlayers', 'POST'] as const
}

export function getPostGamesV1managementScoresResetMultipleForAllPlayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1managementScoresResetMultipleForAllPlayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post
      >,
    ) {
      return parseResponse(
        client.games.v1management.scores.resetMultipleForAllPlayers.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1managementScoresResetMultipleForAllPlayers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.games.v1management.scores.resetMultipleForAllPlayers.$post
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGamesV1managementScoresResetMultipleForAllPlayersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
