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

export function getGamesV1AchievementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.achievements.$get>>,
) {
  return ['games', '/games/v1/achievements', toValue(args)] as const
}

export function getGamesV1AchievementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.achievements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1AchievementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.achievements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1Achievements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.achievements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
            >
          >,
          ReturnType<typeof getGamesV1AchievementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1AchievementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1AchievementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.achievements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGamesV1AchievementsUpdateMultipleMutationKey() {
  return ['games', '/games/v1/achievements/updateMultiple', 'POST'] as const
}

export function getPostGamesV1AchievementsUpdateMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1.achievements.updateMultiple.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1.achievements.updateMultiple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1AchievementsUpdateMultipleMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.games.v1.achievements.updateMultiple.$post>,
    ) {
      return parseResponse(client.games.v1.achievements.updateMultiple.$post(args, options))
    },
  })
}

export function usePostGamesV1AchievementsUpdateMultiple<
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
                Awaited<ReturnType<typeof client.games.v1.achievements.updateMultiple.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1.achievements.updateMultiple.$post>,
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
  const mutationDefaults = getPostGamesV1AchievementsUpdateMultipleMutationOptions<
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

export function getPostGamesV1AchievementsAchievementIdIncrementMutationKey() {
  return ['games', '/games/v1/achievements/:achievementId/increment', 'POST'] as const
}

export function getPostGamesV1AchievementsAchievementIdIncrementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1.achievements)[':achievementId']['increment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1AchievementsAchievementIdIncrementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1.achievements)[':achievementId']['increment']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1.achievements[':achievementId'].increment.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1AchievementsAchievementIdIncrement<
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
                    (typeof client.games.v1.achievements)[':achievementId']['increment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.games.v1.achievements)[':achievementId']['increment']['$post']
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
  const mutationDefaults = getPostGamesV1AchievementsAchievementIdIncrementMutationOptions<
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

export function getPostGamesV1AchievementsAchievementIdRevealMutationKey() {
  return ['games', '/games/v1/achievements/:achievementId/reveal', 'POST'] as const
}

export function getPostGamesV1AchievementsAchievementIdRevealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1AchievementsAchievementIdRevealMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1.achievements[':achievementId'].reveal.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1AchievementsAchievementIdReveal<
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
                    (typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.games.v1.achievements)[':achievementId']['reveal']['$post']
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
  const mutationDefaults = getPostGamesV1AchievementsAchievementIdRevealMutationOptions<
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

export function getPostGamesV1AchievementsAchievementIdSetStepsAtLeastMutationKey() {
  return ['games', '/games/v1/achievements/:achievementId/setStepsAtLeast', 'POST'] as const
}

export function getPostGamesV1AchievementsAchievementIdSetStepsAtLeastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1AchievementsAchievementIdSetStepsAtLeastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1.achievements[':achievementId'].setStepsAtLeast.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1AchievementsAchievementIdSetStepsAtLeast<
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
                    (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.games.v1.achievements)[':achievementId']['setStepsAtLeast']['$post']
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
  const mutationDefaults = getPostGamesV1AchievementsAchievementIdSetStepsAtLeastMutationOptions<
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

export function getPostGamesV1AchievementsAchievementIdUnlockMutationKey() {
  return ['games', '/games/v1/achievements/:achievementId/unlock', 'POST'] as const
}

export function getPostGamesV1AchievementsAchievementIdUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1AchievementsAchievementIdUnlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1.achievements[':achievementId'].unlock.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1AchievementsAchievementIdUnlock<
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
                    (typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.games.v1.achievements)[':achievementId']['unlock']['$post']
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
  const mutationDefaults = getPostGamesV1AchievementsAchievementIdUnlockMutationOptions<
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

export function getPostGamesV1ApplicationsGetEndPointMutationKey() {
  return ['games', '/games/v1/applications/getEndPoint', 'POST'] as const
}

export function getPostGamesV1ApplicationsGetEndPointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.games.v1.applications.getEndPoint.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1.applications.getEndPoint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1ApplicationsGetEndPointMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.games.v1.applications.getEndPoint.$post>,
    ) {
      return parseResponse(client.games.v1.applications.getEndPoint.$post(args, options))
    },
  })
}

export function usePostGamesV1ApplicationsGetEndPoint<
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
                Awaited<ReturnType<typeof client.games.v1.applications.getEndPoint.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1.applications.getEndPoint.$post>,
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
  const mutationDefaults = getPostGamesV1ApplicationsGetEndPointMutationOptions<
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

export function getPostGamesV1ApplicationsPlayedMutationKey() {
  return ['games', '/games/v1/applications/played', 'POST'] as const
}

export function getPostGamesV1ApplicationsPlayedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.applications.played.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1.applications.played.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1ApplicationsPlayedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.games.v1.applications.played.$post>) {
      return parseResponse(client.games.v1.applications.played.$post(args, options))
    },
  })
}

export function usePostGamesV1ApplicationsPlayed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1.applications.played.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1.applications.played.$post>,
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
  const mutationDefaults = getPostGamesV1ApplicationsPlayedMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGamesV1ApplicationsApplicationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>
  >,
) {
  return ['games', '/games/v1/applications/:applicationId', toValue(args)] as const
}

export function getGamesV1ApplicationsApplicationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1ApplicationsApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.applications[':applicationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1ApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesV1ApplicationsApplicationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1ApplicationsApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1ApplicationsApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.applications[':applicationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1ApplicationsApplicationIdVerifyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
  >,
) {
  return ['games', '/games/v1/applications/:applicationId/verify', toValue(args)] as const
}

export function getGamesV1ApplicationsApplicationIdVerifyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1ApplicationsApplicationIdVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.applications[':applicationId'].verify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1ApplicationsApplicationIdVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
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
                    (typeof client.games.v1.applications)[':applicationId']['verify']['$get']
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
                    (typeof client.games.v1.applications)[':applicationId']['verify']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1ApplicationsApplicationIdVerifyQueryKey>
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
            ReturnType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1ApplicationsApplicationIdVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1ApplicationsApplicationIdVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.applications[':applicationId'].verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1EventDefinitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.eventDefinitions.$get>>,
) {
  return ['games', '/games/v1/eventDefinitions', toValue(args)] as const
}

export function getGamesV1EventDefinitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.eventDefinitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1EventDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.eventDefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1EventDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.eventDefinitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>
              >
            >
          >,
          ReturnType<typeof getGamesV1EventDefinitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1EventDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1EventDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.eventDefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.events.$get>>,
) {
  return ['games', '/games/v1/events', toValue(args)] as const
}

export function getGamesV1EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>
            >
          >,
          ReturnType<typeof getGamesV1EventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGamesV1EventsMutationKey() {
  return ['games', '/games/v1/events', 'POST'] as const
}

export function getPostGamesV1EventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.games.v1.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1EventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.games.v1.events.$post>) {
      return parseResponse(client.games.v1.events.$post(args, options))
    },
  })
}

export function usePostGamesV1Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1.events.$post>,
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
  const mutationDefaults = getPostGamesV1EventsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGamesV1LeaderboardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.leaderboards.$get>>,
) {
  return ['games', '/games/v1/leaderboards', toValue(args)] as const
}

export function getGamesV1LeaderboardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.leaderboards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1LeaderboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.leaderboards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1Leaderboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.leaderboards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
            >
          >,
          ReturnType<typeof getGamesV1LeaderboardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1LeaderboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1LeaderboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.leaderboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGamesV1LeaderboardsScoresMutationKey() {
  return ['games', '/games/v1/leaderboards/scores', 'POST'] as const
}

export function getPostGamesV1LeaderboardsScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.scores.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.games.v1.leaderboards.scores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1LeaderboardsScoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.games.v1.leaderboards.scores.$post>) {
      return parseResponse(client.games.v1.leaderboards.scores.$post(args, options))
    },
  })
}

export function usePostGamesV1LeaderboardsScores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1.leaderboards.scores.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.games.v1.leaderboards.scores.$post>,
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
  const mutationDefaults = getPostGamesV1LeaderboardsScoresMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGamesV1LeaderboardsLeaderboardIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>
  >,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId', toValue(args)] as const
}

export function getGamesV1LeaderboardsLeaderboardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1LeaderboardsLeaderboardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1LeaderboardsLeaderboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1LeaderboardsLeaderboardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.leaderboards[':leaderboardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGamesV1LeaderboardsLeaderboardIdScoresMutationKey() {
  return ['games', '/games/v1/leaderboards/:leaderboardId/scores', 'POST'] as const
}

export function getPostGamesV1LeaderboardsLeaderboardIdScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGamesV1LeaderboardsLeaderboardIdScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']
      >,
    ) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].scores.$post(args, options),
      )
    },
  })
}

export function usePostGamesV1LeaderboardsLeaderboardIdScores<
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
                    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.games.v1.leaderboards)[':leaderboardId']['scores']['$post']
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
  const mutationDefaults = getPostGamesV1LeaderboardsLeaderboardIdScoresMutationOptions<
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

export function getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
    >
  >,
) {
  return [
    'games',
    '/games/v1/leaderboards/:leaderboardId/scores/:collection',
    toValue(args),
  ] as const
}

export function getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].scores[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1LeaderboardsLeaderboardIdScoresCollection<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
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
                    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
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
                    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey>
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
              (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.leaderboards[':leaderboardId'].scores[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
    >
  >,
) {
  return [
    'games',
    '/games/v1/leaderboards/:leaderboardId/window/:collection',
    toValue(args),
  ] as const
}

export function getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].window[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1LeaderboardsLeaderboardIdWindowCollection<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
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
                    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
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
                    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey>
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
              (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.leaderboards[':leaderboardId'].window[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1MetagameConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.metagameConfig.$get>>,
) {
  return ['games', '/games/v1/metagameConfig', toValue(args)] as const
}

export function getGamesV1MetagameConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.metagameConfig.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1MetagameConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.metagameConfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1MetagameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.metagameConfig.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
            >
          >,
          ReturnType<typeof getGamesV1MetagameConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1MetagameConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1MetagameConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.metagameConfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>
  >,
) {
  return ['games', '/games/v1/players/me/multipleApplicationPlayerIds', toValue(args)] as const
}

export function getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players.me.multipleApplicationPlayerIds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersMeMultipleApplicationPlayerIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>
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
                  ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey>
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
          Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players.me.multipleApplicationPlayerIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersMePlayersCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>
  >,
) {
  return ['games', '/games/v1/players/me/players/:collection', toValue(args)] as const
}

export function getGamesV1PlayersMePlayersCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersMePlayersCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players.me.players[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersMePlayersCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>
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
                  ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersMePlayersCollectionQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersMePlayersCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersMePlayersCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players.me.players[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersMeScopedIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>>,
) {
  return ['games', '/games/v1/players/me/scopedIds', toValue(args)] as const
}

export function getGamesV1PlayersMeScopedIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersMeScopedIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players.me.scopedIds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersMeScopedIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersMeScopedIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersMeScopedIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersMeScopedIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players.me.scopedIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>>,
) {
  return ['games', '/games/v1/players/:playerId', toValue(args)] as const
}

export function getGamesV1PlayersPlayerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersPlayerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players[':playerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersPlayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersPlayerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersPlayerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersPlayerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players[':playerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdAchievementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
  >,
) {
  return ['games', '/games/v1/players/:playerId/achievements', toValue(args)] as const
}

export function getGamesV1PlayersPlayerIdAchievementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersPlayerIdAchievementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players[':playerId'].achievements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersPlayerIdAchievements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
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
                  ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersPlayerIdAchievementsQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersPlayerIdAchievementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersPlayerIdAchievementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players[':playerId'].achievements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
    >
  >,
) {
  return ['games', '/games/v1/players/:playerId/categories/:collection', toValue(args)] as const
}

export function getGamesV1PlayersPlayerIdCategoriesCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players[':playerId'].categories[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersPlayerIdCategoriesCollection<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
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
                    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
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
                    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey>
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
              (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players[':playerId'].categories[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
    >
  >,
) {
  return [
    'games',
    '/games/v1/players/:playerId/leaderboards/:leaderboardId/scores/:timeSpan',
    toValue(args),
  ] as const
}

export function getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players[':playerId'].leaderboards[':leaderboardId'].scores[
          ':timeSpan'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpan<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
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
                    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
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
                    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey
          >
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
              (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players[':playerId'].leaderboards[':leaderboardId'].scores[
            ':timeSpan'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>
  >,
) {
  return ['games', '/games/v1/players/:playerId/snapshots', toValue(args)] as const
}

export function getGamesV1PlayersPlayerIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1PlayersPlayerIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.players[':playerId'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1PlayersPlayerIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>
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
                  ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGamesV1PlayersPlayerIdSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersPlayerIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1PlayersPlayerIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.players[':playerId'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1RevisionsCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.revisions.check.$get>>,
) {
  return ['games', '/games/v1/revisions/check', toValue(args)] as const
}

export function getGamesV1RevisionsCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.revisions.check.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1RevisionsCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.revisions.check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1RevisionsCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.revisions.check.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
            >
          >,
          ReturnType<typeof getGamesV1RevisionsCheckQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1RevisionsCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1RevisionsCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.revisions.check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1SnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>
  >,
) {
  return ['games', '/games/v1/snapshots/:snapshotId', toValue(args)] as const
}

export function getGamesV1SnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1SnapshotsSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.snapshots[':snapshotId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1SnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGamesV1SnapshotsSnapshotIdQueryKey>
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
          Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1SnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1SnapshotsSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.snapshots[':snapshotId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGamesV1StatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.stats.$get>>,
) {
  return ['games', '/games/v1/stats', toValue(args)] as const
}

export function getGamesV1StatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesV1StatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.v1.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGamesV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.v1.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
          >,
          ReturnType<typeof getGamesV1StatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1StatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesV1StatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.v1.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
