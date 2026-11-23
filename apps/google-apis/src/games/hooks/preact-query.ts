import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGamesKey() {
  return ['games'] as const
}

export function getGamesV1AchievementsQueryKey(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
) {
  return ['games', '/games/v1/achievements', args] as const
}

export function getGamesV1AchievementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1AchievementsQueryKey>
  >({
    queryKey: getGamesV1AchievementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.achievements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesV1Achievements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1AchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesV1AchievementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesV1Achievements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.achievements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.achievements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1AchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesV1AchievementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
) {
  return ['games', '/games/v1/applications/:applicationId', args] as const
}

export function getGamesV1ApplicationsApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1ApplicationsApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.applications[':applicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1ApplicationsApplicationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1ApplicationsApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1ApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1ApplicationsApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1ApplicationsApplicationIdVerifyQueryKey(
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
) {
  return ['games', '/games/v1/applications/:applicationId/verify', args] as const
}

export function getGamesV1ApplicationsApplicationIdVerifyQueryOptions<
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
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1ApplicationsApplicationIdVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.applications[':applicationId'].verify.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1ApplicationsApplicationIdVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1ApplicationsApplicationIdVerifyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1ApplicationsApplicationIdVerify<
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
  args: InferRequestType<(typeof client.games.v1.applications)[':applicationId']['verify']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getGamesV1ApplicationsApplicationIdVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1ApplicationsApplicationIdVerifyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1EventDefinitionsQueryKey(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
) {
  return ['games', '/games/v1/eventDefinitions', args] as const
}

export function getGamesV1EventDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1EventDefinitionsQueryKey>
  >({
    queryKey: getGamesV1EventDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.eventDefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesV1EventDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1EventDefinitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1EventDefinitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1EventDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.eventDefinitions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.eventDefinitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1EventDefinitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1EventDefinitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1EventsQueryKey(
  args: InferRequestType<typeof client.games.v1.events.$get>,
) {
  return ['games', '/games/v1/events', args] as const
}

export function getGamesV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.v1.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1EventsQueryKey>
  >({
    queryKey: getGamesV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesV1EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesV1EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.events.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.games.v1.events.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
) {
  return ['games', '/games/v1/leaderboards', args] as const
}

export function getGamesV1LeaderboardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1LeaderboardsQueryKey>
  >({
    queryKey: getGamesV1LeaderboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.leaderboards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesV1Leaderboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1LeaderboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesV1LeaderboardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesV1Leaderboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.leaderboards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.leaderboards.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1LeaderboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesV1LeaderboardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId', args] as const
}

export function getGamesV1LeaderboardsLeaderboardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1LeaderboardsLeaderboardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1LeaderboardsLeaderboardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1LeaderboardsLeaderboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.leaderboards)[':leaderboardId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1LeaderboardsLeaderboardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId/scores/:collection', args] as const
}

export function getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryOptions<
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].scores[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1LeaderboardsLeaderboardIdScoresCollection<
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['scores'][':collection']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1LeaderboardsLeaderboardIdScoresCollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey(
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
) {
  return ['games', '/games/v1/leaderboards/:leaderboardId/window/:collection', args] as const
}

export function getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryOptions<
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.leaderboards[':leaderboardId'].window[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1LeaderboardsLeaderboardIdWindowCollection<
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
  args: InferRequestType<
    (typeof client.games.v1.leaderboards)[':leaderboardId']['window'][':collection']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1LeaderboardsLeaderboardIdWindowCollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1MetagameConfigQueryKey(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
) {
  return ['games', '/games/v1/metagameConfig', args] as const
}

export function getGamesV1MetagameConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1MetagameConfigQueryKey>
  >({
    queryKey: getGamesV1MetagameConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.metagameConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesV1MetagameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1MetagameConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1MetagameConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1MetagameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.metagameConfig.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.metagameConfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1MetagameConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1MetagameConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
) {
  return ['games', '/games/v1/players/me/multipleApplicationPlayerIds', args] as const
}

export function getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players.me.multipleApplicationPlayerIds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersMeMultipleApplicationPlayerIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.players.me.multipleApplicationPlayerIds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersMeMultipleApplicationPlayerIdsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersMePlayersCollectionQueryKey(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
) {
  return ['games', '/games/v1/players/me/players/:collection', args] as const
}

export function getGamesV1PlayersMePlayersCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersMePlayersCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players.me.players[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersMePlayersCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersMePlayersCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersMePlayersCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players.me.players)[':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players.me.players)[':collection']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getGamesV1PlayersMePlayersCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersMePlayersCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersMeScopedIdsQueryKey(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
) {
  return ['games', '/games/v1/players/me/scopedIds', args] as const
}

export function getGamesV1PlayersMeScopedIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1PlayersMeScopedIdsQueryKey>
  >({
    queryKey: getGamesV1PlayersMeScopedIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players.me.scopedIds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesV1PlayersMeScopedIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersMeScopedIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersMeScopedIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersMeScopedIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.players.me.scopedIds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.games.v1.players.me.scopedIds.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1PlayersMeScopedIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersMeScopedIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdQueryKey(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
) {
  return ['games', '/games/v1/players/:playerId', args] as const
}

export function getGamesV1PlayersPlayerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersPlayerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players[':playerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersPlayerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersPlayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersPlayerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdAchievementsQueryKey(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
) {
  return ['games', '/games/v1/players/:playerId/achievements', args] as const
}

export function getGamesV1PlayersPlayerIdAchievementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersPlayerIdAchievementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players[':playerId'].achievements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdAchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersPlayerIdAchievementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersPlayerIdAchievements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['achievements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdAchievementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersPlayerIdAchievementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey(
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
) {
  return ['games', '/games/v1/players/:playerId/categories/:collection', args] as const
}

export function getGamesV1PlayersPlayerIdCategoriesCollectionQueryOptions<
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
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players[':playerId'].categories[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdCategoriesCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersPlayerIdCategoriesCollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersPlayerIdCategoriesCollection<
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
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['categories'][':collection']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersPlayerIdCategoriesCollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey(
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

export function getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryOptions<
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
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players[':playerId'].leaderboards[':leaderboardId'].scores[
          ':timeSpan'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpan<
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
  args: InferRequestType<
    (typeof client.games.v1.players)[':playerId']['leaderboards'][':leaderboardId']['scores'][':timeSpan']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1PlayersPlayerIdSnapshotsQueryKey(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
) {
  return ['games', '/games/v1/players/:playerId/snapshots', args] as const
}

export function getGamesV1PlayersPlayerIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1PlayersPlayerIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.players[':playerId'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1PlayersPlayerIdSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1PlayersPlayerIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.players)[':playerId']['snapshots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getGamesV1PlayersPlayerIdSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1PlayersPlayerIdSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1RevisionsCheckQueryKey(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
) {
  return ['games', '/games/v1/revisions/check', args] as const
}

export function getGamesV1RevisionsCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1RevisionsCheckQueryKey>
  >({
    queryKey: getGamesV1RevisionsCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.revisions.check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGamesV1RevisionsCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1RevisionsCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1RevisionsCheckQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1RevisionsCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.revisions.check.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.revisions.check.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1RevisionsCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1RevisionsCheckQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1SnapshotsSnapshotIdQueryKey(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
) {
  return ['games', '/games/v1/snapshots/:snapshotId', args] as const
}

export function getGamesV1SnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGamesV1SnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.snapshots[':snapshotId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGamesV1SnapshotsSnapshotIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGamesV1SnapshotsSnapshotIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGamesV1SnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.games.v1.snapshots)[':snapshotId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGamesV1SnapshotsSnapshotIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGamesV1StatsQueryKey(args: InferRequestType<typeof client.games.v1.stats.$get>) {
  return ['games', '/games/v1/stats', args] as const
}

export function getGamesV1StatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.v1.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGamesV1StatsQueryKey>
  >({
    queryKey: getGamesV1StatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.v1.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGamesV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.stats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1StatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGamesV1StatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGamesV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.games.v1.stats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.v1.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesV1StatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGamesV1StatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
