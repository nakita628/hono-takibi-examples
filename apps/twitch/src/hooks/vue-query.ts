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

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAuthorizationKey() {
  return ['authorization'] as const
}

export function getBitsKey() {
  return ['bits'] as const
}

export function getChannelPointsKey() {
  return ['channel_points'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getCharityKey() {
  return ['charity'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getClipsKey() {
  return ['clips'] as const
}

export function getContentClassificationLabelsKey() {
  return ['content_classification_labels'] as const
}

export function getEntitlementsKey() {
  return ['entitlements'] as const
}

export function getEventsubKey() {
  return ['eventsub'] as const
}

export function getExtensionsKey() {
  return ['extensions'] as const
}

export function getGamesKey() {
  return ['games'] as const
}

export function getGoalsKey() {
  return ['goals'] as const
}

export function getGuestStarKey() {
  return ['guest_star'] as const
}

export function getHypetrainKey() {
  return ['hypetrain'] as const
}

export function getModerationKey() {
  return ['moderation'] as const
}

export function getPollsKey() {
  return ['polls'] as const
}

export function getPredictionsKey() {
  return ['predictions'] as const
}

export function getRaidsKey() {
  return ['raids'] as const
}

export function getScheduleKey() {
  return ['schedule'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSharedChatKey() {
  return ['shared_chat'] as const
}

export function getStreamsKey() {
  return ['streams'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVideosKey() {
  return ['videos'] as const
}

export function getWhispersKey() {
  return ['whispers'] as const
}

export function getPostChannelsCommercialMutationKey() {
  return ['channels', '/channels/commercial', 'POST'] as const
}

export function getPostChannelsCommercialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.commercial.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.commercial.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsCommercialMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.commercial.$post>) {
      return parseResponse(client.channels.commercial.$post(args, options))
    },
  })
}

export function usePostChannelsCommercial<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.commercial.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channels.commercial.$post>,
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
  const mutationDefaults = getPostChannelsCommercialMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsAdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.ads.$get>>,
) {
  return ['channels', '/channels/ads', toValue(args)] as const
}

export function getChannelsAdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.ads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsAdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.ads.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannelsAds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.ads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
          >,
          ReturnType<typeof getChannelsAdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsAdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsAdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.ads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsAdsScheduleSnoozeMutationKey() {
  return ['channels', '/channels/ads/schedule/snooze', 'POST'] as const
}

export function getPostChannelsAdsScheduleSnoozeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.schedule.snooze.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channels.ads.schedule.snooze.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsAdsScheduleSnoozeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.ads.schedule.snooze.$post>) {
      return parseResponse(client.channels.ads.schedule.snooze.$post(args, options))
    },
  })
}

export function usePostChannelsAdsScheduleSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channels.ads.schedule.snooze.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channels.ads.schedule.snooze.$post>,
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
  const mutationDefaults = getPostChannelsAdsScheduleSnoozeMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyticsExtensionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.extensions.$get>>,
) {
  return ['analytics', '/analytics/extensions', toValue(args)] as const
}

export function getAnalyticsExtensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.extensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsExtensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.extensions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.extensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsExtensionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsExtensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.extensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsGamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.games.$get>>,
) {
  return ['analytics', '/analytics/games', toValue(args)] as const
}

export function getAnalyticsGamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.games.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsGamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.games.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.games.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsGamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsGamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsGamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.games.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBitsLeaderboardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.leaderboard.$get>>,
) {
  return ['bits', '/bits/leaderboard', toValue(args)] as const
}

export function getBitsLeaderboardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.leaderboard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBitsLeaderboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bits.leaderboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBitsLeaderboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.leaderboard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>
            >
          >,
          ReturnType<typeof getBitsLeaderboardQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBitsLeaderboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBitsLeaderboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bits.leaderboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBitsCheermotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.cheermotes.$get>>,
) {
  return ['bits', '/bits/cheermotes', toValue(args)] as const
}

export function getBitsCheermotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.cheermotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBitsCheermotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bits.cheermotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBitsCheermotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.cheermotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>
            >
          >,
          ReturnType<typeof getBitsCheermotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBitsCheermotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBitsCheermotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bits.cheermotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBitsCustomPowerUpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.custom_power_ups.$get>>,
) {
  return ['bits', '/bits/custom_power_ups', toValue(args)] as const
}

export function getBitsCustomPowerUpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.custom_power_ups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBitsCustomPowerUpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bits.custom_power_ups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBitsCustomPowerUps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.custom_power_ups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
            >
          >,
          ReturnType<typeof getBitsCustomPowerUpsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBitsCustomPowerUpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBitsCustomPowerUpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bits.custom_power_ups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtensionsTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.transactions.$get>>,
) {
  return ['extensions', '/extensions/transactions', toValue(args)] as const
}

export function getExtensionsTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtensionsTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
            >
          >,
          ReturnType<typeof getExtensionsTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
) {
  return ['channels', '/channels', toValue(args)] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchChannelsMutationKey() {
  return ['channels', '/channels', 'PATCH'] as const
}

export function getPatchChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.channels.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$patch>) {
      return parseResponse(client.channels.$patch(args, options))
    },
  })
}

export function usePatchChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.channels.$patch>,
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
  const mutationDefaults = getPatchChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChannelsEditorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.editors.$get>>,
) {
  return ['channels', '/channels/editors', toValue(args)] as const
}

export function getChannelsEditorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.editors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsEditorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.editors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsEditors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.editors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>
            >
          >,
          ReturnType<typeof getChannelsEditorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsEditorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsEditorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.editors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsFollowedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.followed.$get>>,
) {
  return ['channels', '/channels/followed', toValue(args)] as const
}

export function getChannelsFollowedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.followed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsFollowedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.followed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsFollowed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.followed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>
            >
          >,
          ReturnType<typeof getChannelsFollowedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsFollowedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsFollowedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.followed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.followers.$get>>,
) {
  return ['channels', '/channels/followers', toValue(args)] as const
}

export function getChannelsFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.followers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.followers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>
            >
          >,
          ReturnType<typeof getChannelsFollowersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelPointsCustomRewardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel_points.custom_rewards.$get>>,
) {
  return ['channel_points', '/channel_points/custom_rewards', toValue(args)] as const
}

export function getChannelPointsCustomRewardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel_points.custom_rewards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelPointsCustomRewardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel_points.custom_rewards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelPointsCustomRewards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel_points.custom_rewards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
              >
            >
          >,
          ReturnType<typeof getChannelPointsCustomRewardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelPointsCustomRewardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelPointsCustomRewardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel_points.custom_rewards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelPointsCustomRewardsMutationKey() {
  return ['channel_points', '/channel_points/custom_rewards', 'POST'] as const
}

export function getPostChannelPointsCustomRewardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel_points.custom_rewards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelPointsCustomRewardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel_points.custom_rewards.$post>) {
      return parseResponse(client.channel_points.custom_rewards.$post(args, options))
    },
  })
}

export function usePostChannelPointsCustomRewards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel_points.custom_rewards.$post>,
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
  const mutationDefaults = getPostChannelPointsCustomRewardsMutationOptions<
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

export function getDeleteChannelPointsCustomRewardsMutationKey() {
  return ['channel_points', '/channel_points/custom_rewards', 'DELETE'] as const
}

export function getDeleteChannelPointsCustomRewardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.channel_points.custom_rewards.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelPointsCustomRewardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel_points.custom_rewards.$delete>) {
      return parseResponse(client.channel_points.custom_rewards.$delete(args, options))
    },
  })
}

export function useDeleteChannelPointsCustomRewards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.channel_points.custom_rewards.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.channel_points.custom_rewards.$delete>,
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
  const mutationDefaults = getDeleteChannelPointsCustomRewardsMutationOptions<
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

export function getPatchChannelPointsCustomRewardsMutationKey() {
  return ['channel_points', '/channel_points/custom_rewards', 'PATCH'] as const
}

export function getPatchChannelPointsCustomRewardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.channel_points.custom_rewards.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.channel_points.custom_rewards.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelPointsCustomRewardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel_points.custom_rewards.$patch>) {
      return parseResponse(client.channel_points.custom_rewards.$patch(args, options))
    },
  })
}

export function usePatchChannelPointsCustomRewards<
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
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel_points.custom_rewards.$patch>,
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
  const mutationDefaults = getPatchChannelPointsCustomRewardsMutationOptions<
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

export function getChannelPointsCustomRewardsRedemptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>
  >,
) {
  return ['channel_points', '/channel_points/custom_rewards/redemptions', toValue(args)] as const
}

export function getChannelPointsCustomRewardsRedemptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelPointsCustomRewardsRedemptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel_points.custom_rewards.redemptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelPointsCustomRewardsRedemptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
              >
            >
          >,
          ReturnType<typeof getChannelPointsCustomRewardsRedemptionsQueryKey>
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
          Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelPointsCustomRewardsRedemptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelPointsCustomRewardsRedemptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel_points.custom_rewards.redemptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchChannelPointsCustomRewardsRedemptionsMutationKey() {
  return ['channel_points', '/channel_points/custom_rewards/redemptions', 'PATCH'] as const
}

export function getPatchChannelPointsCustomRewardsRedemptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelPointsCustomRewardsRedemptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$patch>,
    ) {
      return parseResponse(client.channel_points.custom_rewards.redemptions.$patch(args, options))
    },
  })
}

export function usePatchChannelPointsCustomRewardsRedemptions<
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
                Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$patch>,
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
  const mutationDefaults = getPatchChannelPointsCustomRewardsRedemptionsMutationOptions<
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

export function getCharityCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity.campaigns.$get>>,
) {
  return ['charity', '/charity/campaigns', toValue(args)] as const
}

export function getCharityCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity.campaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharityCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.charity.campaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharityCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity.campaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>
            >
          >,
          ReturnType<typeof getCharityCampaignsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCharityCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharityCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.charity.campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharityDonationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity.donations.$get>>,
) {
  return ['charity', '/charity/donations', toValue(args)] as const
}

export function getCharityDonationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity.donations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharityDonationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.charity.donations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharityDonations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity.donations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>
            >
          >,
          ReturnType<typeof getCharityDonationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCharityDonationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharityDonationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.charity.donations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatChattersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.chatters.$get>>,
) {
  return ['chat', '/chat/chatters', toValue(args)] as const
}

export function getChatChattersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.chatters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatChattersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.chatters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatChatters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.chatters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
          >,
          ReturnType<typeof getChatChattersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatChattersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatChattersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.chatters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatEmotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.$get>>,
) {
  return ['chat', '/chat/emotes', toValue(args)] as const
}

export function getChatEmotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatEmotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.emotes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChatEmotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
          >,
          ReturnType<typeof getChatEmotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatEmotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatEmotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.emotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatEmotesGlobalQueryKey() {
  return ['chat', '/chat/emotes/global'] as const
}

export function getChatEmotesGlobalQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChatEmotesGlobalQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.emotes.global.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatEmotesGlobal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>
            >
          >,
          ReturnType<typeof getChatEmotesGlobalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatEmotesGlobalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChatEmotesGlobalQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.emotes.global.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatEmotesSetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.set.$get>>,
) {
  return ['chat', '/chat/emotes/set', toValue(args)] as const
}

export function getChatEmotesSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.set.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatEmotesSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.emotes.set.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatEmotesSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.set.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>
            >
          >,
          ReturnType<typeof getChatEmotesSetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatEmotesSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatEmotesSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.emotes.set.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatBadgesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.badges.$get>>,
) {
  return ['chat', '/chat/badges', toValue(args)] as const
}

export function getChatBadgesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.badges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatBadgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.badges.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChatBadges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.badges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
          >,
          ReturnType<typeof getChatBadgesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatBadgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatBadgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.badges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatBadgesGlobalQueryKey() {
  return ['chat', '/chat/badges/global'] as const
}

export function getChatBadgesGlobalQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChatBadgesGlobalQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.badges.global.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatBadgesGlobal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>
            >
          >,
          ReturnType<typeof getChatBadgesGlobalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatBadgesGlobalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChatBadgesGlobalQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.badges.global.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.settings.$get>>,
) {
  return ['chat', '/chat/settings', toValue(args)] as const
}

export function getChatSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
          >,
          ReturnType<typeof getChatSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchChatSettingsMutationKey() {
  return ['chat', '/chat/settings', 'PATCH'] as const
}

export function getPatchChatSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchChatSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.settings.$patch>) {
      return parseResponse(client.chat.settings.$patch(args, options))
    },
  })
}

export function usePatchChatSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chat.settings.$patch>,
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
  const mutationDefaults = getPatchChatSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getSharedChatSessionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shared_chat.session.$get>>,
) {
  return ['shared_chat', '/shared_chat/session', toValue(args)] as const
}

export function getSharedChatSessionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shared_chat.session.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedChatSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shared_chat.session.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedChatSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shared_chat.session.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
            >
          >,
          ReturnType<typeof getSharedChatSessionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedChatSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedChatSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shared_chat.session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatEmotesUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.user.$get>>,
) {
  return ['chat', '/chat/emotes/user', toValue(args)] as const
}

export function getChatEmotesUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatEmotesUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.emotes.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatEmotesUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.emotes.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>
            >
          >,
          ReturnType<typeof getChatEmotesUserQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatEmotesUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatEmotesUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.emotes.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatAnnouncementsMutationKey() {
  return ['chat', '/chat/announcements', 'POST'] as const
}

export function getPostChatAnnouncementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chat.announcements.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.chat.announcements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatAnnouncementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.announcements.$post>) {
      return parseResponse(client.chat.announcements.$post(args, options))
    },
  })
}

export function usePostChatAnnouncements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.chat.announcements.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.chat.announcements.$post>,
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
  const mutationDefaults = getPostChatAnnouncementsMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatShoutoutsMutationKey() {
  return ['chat', '/chat/shoutouts', 'POST'] as const
}

export function getPostChatShoutoutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.shoutouts.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.chat.shoutouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatShoutoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.shoutouts.$post>) {
      return parseResponse(client.chat.shoutouts.$post(args, options))
    },
  })
}

export function usePostChatShoutouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.chat.shoutouts.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.chat.shoutouts.$post>,
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
  const mutationDefaults = getPostChatShoutoutsMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatMessagesMutationKey() {
  return ['chat', '/chat/messages', 'POST'] as const
}

export function getPostChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.messages.$post>) {
      return parseResponse(client.chat.messages.$post(args, options))
    },
  })
}

export function usePostChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chat.messages.$post>,
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
  const mutationDefaults = getPostChatMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getChatPinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.pins.$get>>,
) {
  return ['chat', '/chat/pins', toValue(args)] as const
}

export function getChatPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.pins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.pins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChatPins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.pins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>
          >,
          ReturnType<typeof getChatPinsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChatPinsMutationKey() {
  return ['chat', '/chat/pins', 'PUT'] as const
}

export function getPutChatPinsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.chat.pins.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutChatPinsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.pins.$put>) {
      return parseResponse(client.chat.pins.$put(args, options))
    },
  })
}

export function usePutChatPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.chat.pins.$put>,
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
  const mutationDefaults = getPutChatPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteChatPinsMutationKey() {
  return ['chat', '/chat/pins', 'DELETE'] as const
}

export function getDeleteChatPinsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.chat.pins.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatPinsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.pins.$delete>) {
      return parseResponse(client.chat.pins.$delete(args, options))
    },
  })
}

export function useDeleteChatPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.chat.pins.$delete>,
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
  const mutationDefaults = getDeleteChatPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchChatPinsMutationKey() {
  return ['chat', '/chat/pins', 'PATCH'] as const
}

export function getPatchChatPinsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.chat.pins.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchChatPinsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.pins.$patch>) {
      return parseResponse(client.chat.pins.$patch(args, options))
    },
  })
}

export function usePatchChatPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.chat.pins.$patch>,
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
  const mutationDefaults = getPatchChatPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChatColorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.color.$get>>,
) {
  return ['chat', '/chat/color', toValue(args)] as const
}

export function getChatColorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.color.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatColorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.color.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChatColor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.color.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>
          >,
          ReturnType<typeof getChatColorQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatColorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatColorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.color.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChatColorMutationKey() {
  return ['chat', '/chat/color', 'PUT'] as const
}

export function getPutChatColorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.chat.color.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutChatColorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.color.$put>) {
      return parseResponse(client.chat.color.$put(args, options))
    },
  })
}

export function usePutChatColor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.chat.color.$put>,
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
  const mutationDefaults = getPutChatColorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clips.$get>>,
) {
  return ['clips', '/clips', toValue(args)] as const
}

export function getClipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
          ReturnType<typeof getClipsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClipsMutationKey() {
  return ['clips', '/clips', 'POST'] as const
}

export function getPostClipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$post>>>>>,
    TError,
    InferRequestType<typeof client.clips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clips.$post>) {
      return parseResponse(client.clips.$post(args, options))
    },
  })
}

export function usePostClips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$post>>>>>,
          TError,
          InferRequestType<typeof client.clips.$post>,
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
  const mutationDefaults = getPostClipsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVideosClipsMutationKey() {
  return ['videos', '/videos/clips', 'POST'] as const
}

export function getPostVideosClipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.clips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.videos.clips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosClipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.clips.$post>) {
      return parseResponse(client.videos.clips.$post(args, options))
    },
  })
}

export function usePostVideosClips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.clips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.videos.clips.$post>,
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
  const mutationDefaults = getPostVideosClipsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClipsDownloadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clips.downloads.$get>>,
) {
  return ['clips', '/clips/downloads', toValue(args)] as const
}

export function getClipsDownloadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clips.downloads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClipsDownloadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clips.downloads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClipsDownloads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clips.downloads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>
            >
          >,
          ReturnType<typeof getClipsDownloadsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClipsDownloadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClipsDownloadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clips.downloads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsubConduitsQueryKey() {
  return ['eventsub', '/eventsub/conduits'] as const
}

export function getEventsubConduitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventsubConduitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventsub.conduits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsubConduits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>
            >
          >,
          ReturnType<typeof getEventsubConduitsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubConduitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventsubConduitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eventsub.conduits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventsubConduitsMutationKey() {
  return ['eventsub', '/eventsub/conduits', 'POST'] as const
}

export function getPostEventsubConduitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.eventsub.conduits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsubConduitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsub.conduits.$post>) {
      return parseResponse(client.eventsub.conduits.$post(args, options))
    },
  })
}

export function usePostEventsubConduits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eventsub.conduits.$post>,
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
  const mutationDefaults = getPostEventsubConduitsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEventsubConduitsMutationKey() {
  return ['eventsub', '/eventsub/conduits', 'DELETE'] as const
}

export function getDeleteEventsubConduitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.eventsub.conduits.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsubConduitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsub.conduits.$delete>) {
      return parseResponse(client.eventsub.conduits.$delete(args, options))
    },
  })
}

export function useDeleteEventsubConduits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.eventsub.conduits.$delete>,
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
  const mutationDefaults = getDeleteEventsubConduitsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchEventsubConduitsMutationKey() {
  return ['eventsub', '/eventsub/conduits', 'PATCH'] as const
}

export function getPatchEventsubConduitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.eventsub.conduits.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventsubConduitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsub.conduits.$patch>) {
      return parseResponse(client.eventsub.conduits.$patch(args, options))
    },
  })
}

export function usePatchEventsubConduits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eventsub.conduits.$patch>,
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
  const mutationDefaults = getPatchEventsubConduitsMutationOptions<TError, TOnMutateResult>(
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

export function getEventsubConduitsShardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventsub.conduits.shards.$get>>,
) {
  return ['eventsub', '/eventsub/conduits/shards', toValue(args)] as const
}

export function getEventsubConduitsShardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventsub.conduits.shards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsubConduitsShardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventsub.conduits.shards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsubConduitsShards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventsub.conduits.shards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
            >
          >,
          ReturnType<typeof getEventsubConduitsShardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubConduitsShardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsubConduitsShardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventsub.conduits.shards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchEventsubConduitsShardsMutationKey() {
  return ['eventsub', '/eventsub/conduits/shards', 'PATCH'] as const
}

export function getPatchEventsubConduitsShardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eventsub.conduits.shards.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventsubConduitsShardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsub.conduits.shards.$patch>) {
      return parseResponse(client.eventsub.conduits.shards.$patch(args, options))
    },
  })
}

export function usePatchEventsubConduitsShards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eventsub.conduits.shards.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eventsub.conduits.shards.$patch>,
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
  const mutationDefaults = getPatchEventsubConduitsShardsMutationOptions<TError, TOnMutateResult>(
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

export function getContentClassificationLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_classification_labels.$get>>,
) {
  return ['content_classification_labels', '/content_classification_labels', toValue(args)] as const
}

export function getContentClassificationLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_classification_labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentClassificationLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content_classification_labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentClassificationLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.content_classification_labels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_classification_labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.content_classification_labels.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.content_classification_labels.$get>>
              >
            >
          >,
          ReturnType<typeof getContentClassificationLabelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.content_classification_labels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentClassificationLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentClassificationLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content_classification_labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitlementsDropsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entitlements.drops.$get>>,
) {
  return ['entitlements', '/entitlements/drops', toValue(args)] as const
}

export function getEntitlementsDropsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entitlements.drops.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitlementsDropsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entitlements.drops.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitlementsDrops<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entitlements.drops.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>
            >
          >,
          ReturnType<typeof getEntitlementsDropsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitlementsDropsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitlementsDropsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entitlements.drops.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchEntitlementsDropsMutationKey() {
  return ['entitlements', '/entitlements/drops', 'PATCH'] as const
}

export function getPatchEntitlementsDropsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.entitlements.drops.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEntitlementsDropsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.entitlements.drops.$patch>) {
      return parseResponse(client.entitlements.drops.$patch(args, options))
    },
  })
}

export function usePatchEntitlementsDrops<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.entitlements.drops.$patch>,
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
  const mutationDefaults = getPatchEntitlementsDropsMutationOptions<TError, TOnMutateResult>(
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

export function getExtensionsConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.configurations.$get>>,
) {
  return ['extensions', '/extensions/configurations', toValue(args)] as const
}

export function getExtensionsConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.configurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.configurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtensionsConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.configurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.extensions.configurations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.extensions.configurations.$get>>
              >
            >
          >,
          ReturnType<typeof getExtensionsConfigurationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.configurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutExtensionsConfigurationsMutationKey() {
  return ['extensions', '/extensions/configurations', 'PUT'] as const
}

export function getPutExtensionsConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.extensions.configurations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutExtensionsConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensions.configurations.$put>) {
      return parseResponse(client.extensions.configurations.$put(args, options))
    },
  })
}

export function usePutExtensionsConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.extensions.configurations.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.extensions.configurations.$put>,
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
  const mutationDefaults = getPutExtensionsConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getPutExtensionsRequiredConfigurationMutationKey() {
  return ['extensions', '/extensions/required_configuration', 'PUT'] as const
}

export function getPutExtensionsRequiredConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.extensions.required_configuration.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.extensions.required_configuration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutExtensionsRequiredConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensions.required_configuration.$put>) {
      return parseResponse(client.extensions.required_configuration.$put(args, options))
    },
  })
}

export function usePutExtensionsRequiredConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.extensions.required_configuration.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.extensions.required_configuration.$put>,
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
  const mutationDefaults = getPutExtensionsRequiredConfigurationMutationOptions<
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

export function getPostExtensionsPubsubMutationKey() {
  return ['extensions', '/extensions/pubsub', 'POST'] as const
}

export function getPostExtensionsPubsubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.pubsub.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.extensions.pubsub.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtensionsPubsubMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensions.pubsub.$post>) {
      return parseResponse(client.extensions.pubsub.$post(args, options))
    },
  })
}

export function usePostExtensionsPubsub<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.extensions.pubsub.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.extensions.pubsub.$post>,
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
  const mutationDefaults = getPostExtensionsPubsubMutationOptions<TError, TOnMutateResult>(
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

export function getExtensionsLiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.live.$get>>,
) {
  return ['extensions', '/extensions/live', toValue(args)] as const
}

export function getExtensionsLiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.live.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsLiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.live.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtensionsLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.live.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>
            >
          >,
          ReturnType<typeof getExtensionsLiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsLiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsLiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.live.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtensionsJwtSecretsQueryKey() {
  return ['extensions', '/extensions/jwt/secrets'] as const
}

export function getExtensionsJwtSecretsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExtensionsJwtSecretsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.jwt.secrets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtensionsJwtSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
            >
          >,
          ReturnType<typeof getExtensionsJwtSecretsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsJwtSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExtensionsJwtSecretsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.jwt.secrets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtensionsJwtSecretsMutationKey() {
  return ['extensions', '/extensions/jwt/secrets', 'POST'] as const
}

export function getPostExtensionsJwtSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.extensions.jwt.secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtensionsJwtSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensions.jwt.secrets.$post>) {
      return parseResponse(client.extensions.jwt.secrets.$post(args, options))
    },
  })
}

export function usePostExtensionsJwtSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.extensions.jwt.secrets.$post>,
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
  const mutationDefaults = getPostExtensionsJwtSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getPostExtensionsChatMutationKey() {
  return ['extensions', '/extensions/chat', 'POST'] as const
}

export function getPostExtensionsChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.chat.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.extensions.chat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtensionsChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensions.chat.$post>) {
      return parseResponse(client.extensions.chat.$post(args, options))
    },
  })
}

export function usePostExtensionsChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.extensions.chat.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.extensions.chat.$post>,
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
  const mutationDefaults = getPostExtensionsChatMutationOptions<TError, TOnMutateResult>(
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

export function getExtensionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.$get>>,
) {
  return ['extensions', '/extensions', toValue(args)] as const
}

export function getExtensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
          >,
          ReturnType<typeof getExtensionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtensionsReleasedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.released.$get>>,
) {
  return ['extensions', '/extensions/released', toValue(args)] as const
}

export function getExtensionsReleasedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.released.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsReleasedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.released.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtensionsReleased<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.released.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
            >
          >,
          ReturnType<typeof getExtensionsReleasedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsReleasedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsReleasedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.released.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBitsExtensionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.extensions.$get>>,
) {
  return ['bits', '/bits/extensions', toValue(args)] as const
}

export function getBitsExtensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.extensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBitsExtensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bits.extensions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBitsExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bits.extensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>
            >
          >,
          ReturnType<typeof getBitsExtensionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBitsExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBitsExtensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bits.extensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBitsExtensionsMutationKey() {
  return ['bits', '/bits/extensions', 'PUT'] as const
}

export function getPutBitsExtensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.bits.extensions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBitsExtensionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bits.extensions.$put>) {
      return parseResponse(client.bits.extensions.$put(args, options))
    },
  })
}

export function usePutBitsExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bits.extensions.$put>,
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
  const mutationDefaults = getPutBitsExtensionsMutationOptions<TError, TOnMutateResult>(
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

export function getEventsubSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventsub.subscriptions.$get>>,
) {
  return ['eventsub', '/eventsub/subscriptions', toValue(args)] as const
}

export function getEventsubSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventsub.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsubSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventsub.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsubSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventsub.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getEventsubSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsubSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventsub.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventsubSubscriptionsMutationKey() {
  return ['eventsub', '/eventsub/subscriptions', 'POST'] as const
}

export function getPostEventsubSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eventsub.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsubSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsub.subscriptions.$post>) {
      return parseResponse(client.eventsub.subscriptions.$post(args, options))
    },
  })
}

export function usePostEventsubSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eventsub.subscriptions.$post>,
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
  const mutationDefaults = getPostEventsubSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEventsubSubscriptionsMutationKey() {
  return ['eventsub', '/eventsub/subscriptions', 'DELETE'] as const
}

export function getDeleteEventsubSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.eventsub.subscriptions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsubSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsub.subscriptions.$delete>) {
      return parseResponse(client.eventsub.subscriptions.$delete(args, options))
    },
  })
}

export function useDeleteEventsubSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.eventsub.subscriptions.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.eventsub.subscriptions.$delete>,
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
  const mutationDefaults = getDeleteEventsubSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getGamesTopQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.top.$get>>,
) {
  return ['games', '/games/top', toValue(args)] as const
}

export function getGamesTopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.top.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGamesTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.games.top.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGamesTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.games.top.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>
          >,
          ReturnType<typeof getGamesTopQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGamesTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.games.top.$get(toValue(args), {
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

export function getGoalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.goals.$get>>,
) {
  return ['goals', '/goals', toValue(args)] as const
}

export function getGoalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.goals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGoalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.goals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGoals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.goals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
          ReturnType<typeof getGoalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGoalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGoalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.goals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuestStarChannelSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.channel_settings.$get>>,
) {
  return ['guest_star', '/guest_star/channel_settings', toValue(args)] as const
}

export function getGuestStarChannelSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.channel_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuestStarChannelSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guest_star.channel_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuestStarChannelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.channel_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>
              >
            >
          >,
          ReturnType<typeof getGuestStarChannelSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuestStarChannelSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuestStarChannelSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guest_star.channel_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGuestStarChannelSettingsMutationKey() {
  return ['guest_star', '/guest_star/channel_settings', 'PUT'] as const
}

export function getPutGuestStarChannelSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.channel_settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutGuestStarChannelSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.channel_settings.$put>) {
      return parseResponse(client.guest_star.channel_settings.$put(args, options))
    },
  })
}

export function usePutGuestStarChannelSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.guest_star.channel_settings.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.channel_settings.$put>,
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
  const mutationDefaults = getPutGuestStarChannelSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getGuestStarSessionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.session.$get>>,
) {
  return ['guest_star', '/guest_star/session', toValue(args)] as const
}

export function getGuestStarSessionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.session.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuestStarSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guest_star.session.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuestStarSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.session.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>
            >
          >,
          ReturnType<typeof getGuestStarSessionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGuestStarSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuestStarSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guest_star.session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuestStarSessionMutationKey() {
  return ['guest_star', '/guest_star/session', 'POST'] as const
}

export function getPostGuestStarSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.guest_star.session.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGuestStarSessionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.session.$post>) {
      return parseResponse(client.guest_star.session.$post(args, options))
    },
  })
}

export function usePostGuestStarSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.guest_star.session.$post>,
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
  const mutationDefaults = getPostGuestStarSessionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGuestStarSessionMutationKey() {
  return ['guest_star', '/guest_star/session', 'DELETE'] as const
}

export function getDeleteGuestStarSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.guest_star.session.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuestStarSessionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.session.$delete>) {
      return parseResponse(client.guest_star.session.$delete(args, options))
    },
  })
}

export function useDeleteGuestStarSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.guest_star.session.$delete>,
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
  const mutationDefaults = getDeleteGuestStarSessionMutationOptions<TError, TOnMutateResult>(
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

export function getGuestStarInvitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.invites.$get>>,
) {
  return ['guest_star', '/guest_star/invites', toValue(args)] as const
}

export function getGuestStarInvitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.invites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuestStarInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guest_star.invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuestStarInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.guest_star.invites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>
            >
          >,
          ReturnType<typeof getGuestStarInvitesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGuestStarInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuestStarInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guest_star.invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuestStarInvitesMutationKey() {
  return ['guest_star', '/guest_star/invites', 'POST'] as const
}

export function getPostGuestStarInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGuestStarInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.invites.$post>) {
      return parseResponse(client.guest_star.invites.$post(args, options))
    },
  })
}

export function usePostGuestStarInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.invites.$post>,
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
  const mutationDefaults = getPostGuestStarInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGuestStarInvitesMutationKey() {
  return ['guest_star', '/guest_star/invites', 'DELETE'] as const
}

export function getDeleteGuestStarInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.invites.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuestStarInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.invites.$delete>) {
      return parseResponse(client.guest_star.invites.$delete(args, options))
    },
  })
}

export function useDeleteGuestStarInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.invites.$delete>,
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
  const mutationDefaults = getDeleteGuestStarInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getPostGuestStarSlotMutationKey() {
  return ['guest_star', '/guest_star/slot', 'POST'] as const
}

export function getPostGuestStarSlotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.slot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGuestStarSlotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.slot.$post>) {
      return parseResponse(client.guest_star.slot.$post(args, options))
    },
  })
}

export function usePostGuestStarSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.slot.$post>,
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
  const mutationDefaults = getPostGuestStarSlotMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGuestStarSlotMutationKey() {
  return ['guest_star', '/guest_star/slot', 'DELETE'] as const
}

export function getDeleteGuestStarSlotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.slot.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuestStarSlotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.slot.$delete>) {
      return parseResponse(client.guest_star.slot.$delete(args, options))
    },
  })
}

export function useDeleteGuestStarSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.slot.$delete>,
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
  const mutationDefaults = getDeleteGuestStarSlotMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGuestStarSlotMutationKey() {
  return ['guest_star', '/guest_star/slot', 'PATCH'] as const
}

export function getPatchGuestStarSlotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$patch>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.slot.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuestStarSlotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.slot.$patch>) {
      return parseResponse(client.guest_star.slot.$patch(args, options))
    },
  })
}

export function usePatchGuestStarSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$patch>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.slot.$patch>,
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
  const mutationDefaults = getPatchGuestStarSlotMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGuestStarSlotSettingsMutationKey() {
  return ['guest_star', '/guest_star/slot_settings', 'PATCH'] as const
}

export function getPatchGuestStarSlotSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot_settings.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.guest_star.slot_settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuestStarSlotSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest_star.slot_settings.$patch>) {
      return parseResponse(client.guest_star.slot_settings.$patch(args, options))
    },
  })
}

export function usePatchGuestStarSlotSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.guest_star.slot_settings.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.guest_star.slot_settings.$patch>,
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
  const mutationDefaults = getPatchGuestStarSlotSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getHypetrainStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hypetrain.status.$get>>,
) {
  return ['hypetrain', '/hypetrain/status', toValue(args)] as const
}

export function getHypetrainStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hypetrain.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHypetrainStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hypetrain.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHypetrainStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hypetrain.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>
            >
          >,
          ReturnType<typeof getHypetrainStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHypetrainStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHypetrainStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hypetrain.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModerationEnforcementsStatusMutationKey() {
  return ['moderation', '/moderation/enforcements/status', 'POST'] as const
}

export function getPostModerationEnforcementsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.moderation.enforcements.status.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.enforcements.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationEnforcementsStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.enforcements.status.$post>) {
      return parseResponse(client.moderation.enforcements.status.$post(args, options))
    },
  })
}

export function usePostModerationEnforcementsStatus<
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
                Awaited<ReturnType<typeof client.moderation.enforcements.status.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.enforcements.status.$post>,
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
  const mutationDefaults = getPostModerationEnforcementsStatusMutationOptions<
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

export function getPostModerationAutomodMessageMutationKey() {
  return ['moderation', '/moderation/automod/message', 'POST'] as const
}

export function getPostModerationAutomodMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.message.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.moderation.automod.message.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationAutomodMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.automod.message.$post>) {
      return parseResponse(client.moderation.automod.message.$post(args, options))
    },
  })
}

export function usePostModerationAutomodMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.moderation.automod.message.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.moderation.automod.message.$post>,
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
  const mutationDefaults = getPostModerationAutomodMessageMutationOptions<TError, TOnMutateResult>(
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

export function getModerationAutomodSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.automod.settings.$get>>,
) {
  return ['moderation', '/moderation/automod/settings', toValue(args)] as const
}

export function getModerationAutomodSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.automod.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationAutomodSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.automod.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationAutomodSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.automod.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>
              >
            >
          >,
          ReturnType<typeof getModerationAutomodSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationAutomodSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationAutomodSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.automod.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutModerationAutomodSettingsMutationKey() {
  return ['moderation', '/moderation/automod/settings', 'PUT'] as const
}

export function getPutModerationAutomodSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.automod.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutModerationAutomodSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.automod.settings.$put>) {
      return parseResponse(client.moderation.automod.settings.$put(args, options))
    },
  })
}

export function usePutModerationAutomodSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.automod.settings.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.automod.settings.$put>,
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
  const mutationDefaults = getPutModerationAutomodSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getModerationBannedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.banned.$get>>,
) {
  return ['moderation', '/moderation/banned', toValue(args)] as const
}

export function getModerationBannedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.banned.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationBannedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.banned.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationBanned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.banned.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>
            >
          >,
          ReturnType<typeof getModerationBannedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getModerationBannedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationBannedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.banned.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModerationBansMutationKey() {
  return ['moderation', '/moderation/bans', 'POST'] as const
}

export function getPostModerationBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.bans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationBansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.bans.$post>) {
      return parseResponse(client.moderation.bans.$post(args, options))
    },
  })
}

export function usePostModerationBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.bans.$post>,
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
  const mutationDefaults = getPostModerationBansMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteModerationBansMutationKey() {
  return ['moderation', '/moderation/bans', 'DELETE'] as const
}

export function getDeleteModerationBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.moderation.bans.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModerationBansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.bans.$delete>) {
      return parseResponse(client.moderation.bans.$delete(args, options))
    },
  })
}

export function useDeleteModerationBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.moderation.bans.$delete>,
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
  const mutationDefaults = getDeleteModerationBansMutationOptions<TError, TOnMutateResult>(
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

export function getModerationUnbanRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.unban_requests.$get>>,
) {
  return ['moderation', '/moderation/unban_requests', toValue(args)] as const
}

export function getModerationUnbanRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.unban_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationUnbanRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.unban_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationUnbanRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.unban_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>
              >
            >
          >,
          ReturnType<typeof getModerationUnbanRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationUnbanRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationUnbanRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.unban_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchModerationUnbanRequestsMutationKey() {
  return ['moderation', '/moderation/unban_requests', 'PATCH'] as const
}

export function getPatchModerationUnbanRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.unban_requests.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchModerationUnbanRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.unban_requests.$patch>) {
      return parseResponse(client.moderation.unban_requests.$patch(args, options))
    },
  })
}

export function usePatchModerationUnbanRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.unban_requests.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.unban_requests.$patch>,
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
  const mutationDefaults = getPatchModerationUnbanRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getModerationBlockedTermsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.blocked_terms.$get>>,
) {
  return ['moderation', '/moderation/blocked_terms', toValue(args)] as const
}

export function getModerationBlockedTermsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.blocked_terms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationBlockedTermsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.blocked_terms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationBlockedTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.blocked_terms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
            >
          >,
          ReturnType<typeof getModerationBlockedTermsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationBlockedTermsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationBlockedTermsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.blocked_terms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModerationBlockedTermsMutationKey() {
  return ['moderation', '/moderation/blocked_terms', 'POST'] as const
}

export function getPostModerationBlockedTermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.blocked_terms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationBlockedTermsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.blocked_terms.$post>) {
      return parseResponse(client.moderation.blocked_terms.$post(args, options))
    },
  })
}

export function usePostModerationBlockedTerms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.blocked_terms.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.blocked_terms.$post>,
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
  const mutationDefaults = getPostModerationBlockedTermsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteModerationBlockedTermsMutationKey() {
  return ['moderation', '/moderation/blocked_terms', 'DELETE'] as const
}

export function getDeleteModerationBlockedTermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.moderation.blocked_terms.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModerationBlockedTermsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.blocked_terms.$delete>) {
      return parseResponse(client.moderation.blocked_terms.$delete(args, options))
    },
  })
}

export function useDeleteModerationBlockedTerms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.moderation.blocked_terms.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.moderation.blocked_terms.$delete>,
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
  const mutationDefaults = getDeleteModerationBlockedTermsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteModerationChatMutationKey() {
  return ['moderation', '/moderation/chat', 'DELETE'] as const
}

export function getDeleteModerationChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.chat.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.moderation.chat.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModerationChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.chat.$delete>) {
      return parseResponse(client.moderation.chat.$delete(args, options))
    },
  })
}

export function useDeleteModerationChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.moderation.chat.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.moderation.chat.$delete>,
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
  const mutationDefaults = getDeleteModerationChatMutationOptions<TError, TOnMutateResult>(
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

export function getModerationChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.channels.$get>>,
) {
  return ['moderation', '/moderation/channels', toValue(args)] as const
}

export function getModerationChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
            >
          >,
          ReturnType<typeof getModerationChannelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getModerationChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModerationModeratorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.moderators.$get>>,
) {
  return ['moderation', '/moderation/moderators', toValue(args)] as const
}

export function getModerationModeratorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.moderators.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.moderators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationModerators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.moderators.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
            >
          >,
          ReturnType<typeof getModerationModeratorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.moderators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModerationModeratorsMutationKey() {
  return ['moderation', '/moderation/moderators', 'POST'] as const
}

export function getPostModerationModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.moderation.moderators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationModeratorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.moderators.$post>) {
      return parseResponse(client.moderation.moderators.$post(args, options))
    },
  })
}

export function usePostModerationModerators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.moderation.moderators.$post>,
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
  const mutationDefaults = getPostModerationModeratorsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteModerationModeratorsMutationKey() {
  return ['moderation', '/moderation/moderators', 'DELETE'] as const
}

export function getDeleteModerationModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.moderation.moderators.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModerationModeratorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.moderators.$delete>) {
      return parseResponse(client.moderation.moderators.$delete(args, options))
    },
  })
}

export function useDeleteModerationModerators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.moderation.moderators.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.moderation.moderators.$delete>,
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
  const mutationDefaults = getDeleteModerationModeratorsMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsVipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.vips.$get>>,
) {
  return ['channels', '/channels/vips', toValue(args)] as const
}

export function getChannelsVipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.vips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsVipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.vips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsVips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.vips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
          >,
          ReturnType<typeof getChannelsVipsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsVipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsVipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.vips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsVipsMutationKey() {
  return ['channels', '/channels/vips', 'POST'] as const
}

export function getPostChannelsVipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.channels.vips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsVipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.vips.$post>) {
      return parseResponse(client.channels.vips.$post(args, options))
    },
  })
}

export function usePostChannelsVips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.channels.vips.$post>,
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
  const mutationDefaults = getPostChannelsVipsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelsVipsMutationKey() {
  return ['channels', '/channels/vips', 'DELETE'] as const
}

export function getDeleteChannelsVipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.channels.vips.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsVipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.vips.$delete>) {
      return parseResponse(client.channels.vips.$delete(args, options))
    },
  })
}

export function useDeleteChannelsVips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.channels.vips.$delete>,
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
  const mutationDefaults = getDeleteChannelsVipsMutationOptions<TError, TOnMutateResult>(
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

export function getModerationShieldModeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.shield_mode.$get>>,
) {
  return ['moderation', '/moderation/shield_mode', toValue(args)] as const
}

export function getModerationShieldModeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.shield_mode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModerationShieldModeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.moderation.shield_mode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModerationShieldMode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.moderation.shield_mode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
            >
          >,
          ReturnType<typeof getModerationShieldModeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationShieldModeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModerationShieldModeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.moderation.shield_mode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutModerationShieldModeMutationKey() {
  return ['moderation', '/moderation/shield_mode', 'PUT'] as const
}

export function getPutModerationShieldModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.shield_mode.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutModerationShieldModeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.shield_mode.$put>) {
      return parseResponse(client.moderation.shield_mode.$put(args, options))
    },
  })
}

export function usePutModerationShieldMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.shield_mode.$put>,
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
  const mutationDefaults = getPutModerationShieldModeMutationOptions<TError, TOnMutateResult>(
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

export function getPostModerationWarningsMutationKey() {
  return ['moderation', '/moderation/warnings', 'POST'] as const
}

export function getPostModerationWarningsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.warnings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.warnings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationWarningsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.warnings.$post>) {
      return parseResponse(client.moderation.warnings.$post(args, options))
    },
  })
}

export function usePostModerationWarnings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.warnings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.warnings.$post>,
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
  const mutationDefaults = getPostModerationWarningsMutationOptions<TError, TOnMutateResult>(
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

export function getPostModerationSuspiciousUsersMutationKey() {
  return ['moderation', '/moderation/suspicious_users', 'POST'] as const
}

export function getPostModerationSuspiciousUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.suspicious_users.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.suspicious_users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationSuspiciousUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.suspicious_users.$post>) {
      return parseResponse(client.moderation.suspicious_users.$post(args, options))
    },
  })
}

export function usePostModerationSuspiciousUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.suspicious_users.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.suspicious_users.$post>,
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
  const mutationDefaults = getPostModerationSuspiciousUsersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteModerationSuspiciousUsersMutationKey() {
  return ['moderation', '/moderation/suspicious_users', 'DELETE'] as const
}

export function getDeleteModerationSuspiciousUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.suspicious_users.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.suspicious_users.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModerationSuspiciousUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.suspicious_users.$delete>) {
      return parseResponse(client.moderation.suspicious_users.$delete(args, options))
    },
  })
}

export function useDeleteModerationSuspiciousUsers<
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
                Awaited<ReturnType<typeof client.moderation.suspicious_users.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.suspicious_users.$delete>,
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
  const mutationDefaults = getDeleteModerationSuspiciousUsersMutationOptions<
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

export function getPollsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.polls.$get>>,
) {
  return ['polls', '/polls', toValue(args)] as const
}

export function getPollsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.polls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.polls.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePolls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.polls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
          ReturnType<typeof getPollsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPollsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.polls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPollsMutationKey() {
  return ['polls', '/polls', 'POST'] as const
}

export function getPostPollsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$post>>>>>,
    TError,
    InferRequestType<typeof client.polls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPollsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.polls.$post>) {
      return parseResponse(client.polls.$post(args, options))
    },
  })
}

export function usePostPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$post>>>>>,
          TError,
          InferRequestType<typeof client.polls.$post>,
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
  const mutationDefaults = getPostPollsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPollsMutationKey() {
  return ['polls', '/polls', 'PATCH'] as const
}

export function getPatchPollsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$patch>>>>>,
    TError,
    InferRequestType<typeof client.polls.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPollsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.polls.$patch>) {
      return parseResponse(client.polls.$patch(args, options))
    },
  })
}

export function usePatchPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.polls.$patch>,
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
  const mutationDefaults = getPatchPollsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPredictionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictions.$get>>,
) {
  return ['predictions', '/predictions', toValue(args)] as const
}

export function getPredictionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predictions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePredictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
          >,
          ReturnType<typeof getPredictionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPredictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPredictionsMutationKey() {
  return ['predictions', '/predictions', 'POST'] as const
}

export function getPostPredictionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>>,
    TError,
    InferRequestType<typeof client.predictions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPredictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.predictions.$post>) {
      return parseResponse(client.predictions.$post(args, options))
    },
  })
}

export function usePostPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.predictions.$post>,
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
  const mutationDefaults = getPostPredictionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPredictionsMutationKey() {
  return ['predictions', '/predictions', 'PATCH'] as const
}

export function getPatchPredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.predictions.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPredictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.predictions.$patch>) {
      return parseResponse(client.predictions.$patch(args, options))
    },
  })
}

export function usePatchPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.predictions.$patch>,
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
  const mutationDefaults = getPatchPredictionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostRaidsMutationKey() {
  return ['raids', '/raids', 'POST'] as const
}

export function getPostRaidsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$post>>>>>,
    TError,
    InferRequestType<typeof client.raids.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRaidsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.raids.$post>) {
      return parseResponse(client.raids.$post(args, options))
    },
  })
}

export function usePostRaids<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$post>>>>>,
          TError,
          InferRequestType<typeof client.raids.$post>,
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
  const mutationDefaults = getPostRaidsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRaidsMutationKey() {
  return ['raids', '/raids', 'DELETE'] as const
}

export function getDeleteRaidsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.raids.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRaidsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.raids.$delete>) {
      return parseResponse(client.raids.$delete(args, options))
    },
  })
}

export function useDeleteRaids<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.raids.$delete>,
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
  const mutationDefaults = getDeleteRaidsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScheduleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
) {
  return ['schedule', '/schedule', toValue(args)] as const
}

export function getScheduleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          ReturnType<typeof getScheduleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduleIcalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.icalendar.$get>>,
) {
  return ['schedule', '/schedule/icalendar', toValue(args)] as const
}

export function getScheduleIcalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.icalendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleIcalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule.icalendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduleIcalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.icalendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>
            >
          >,
          ReturnType<typeof getScheduleIcalendarQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleIcalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleIcalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule.icalendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchScheduleSettingsMutationKey() {
  return ['schedule', '/schedule/settings', 'PATCH'] as const
}

export function getPatchScheduleSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedule.settings.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.schedule.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchScheduleSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schedule.settings.$patch>) {
      return parseResponse(client.schedule.settings.$patch(args, options))
    },
  })
}

export function usePatchScheduleSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.schedule.settings.$patch>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.schedule.settings.$patch>,
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
  const mutationDefaults = getPatchScheduleSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostScheduleSegmentMutationKey() {
  return ['schedule', '/schedule/segment', 'POST'] as const
}

export function getPostScheduleSegmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.schedule.segment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduleSegmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schedule.segment.$post>) {
      return parseResponse(client.schedule.segment.$post(args, options))
    },
  })
}

export function usePostScheduleSegment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.schedule.segment.$post>,
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
  const mutationDefaults = getPostScheduleSegmentMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteScheduleSegmentMutationKey() {
  return ['schedule', '/schedule/segment', 'DELETE'] as const
}

export function getDeleteScheduleSegmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.schedule.segment.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScheduleSegmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schedule.segment.$delete>) {
      return parseResponse(client.schedule.segment.$delete(args, options))
    },
  })
}

export function useDeleteScheduleSegment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.schedule.segment.$delete>,
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
  const mutationDefaults = getDeleteScheduleSegmentMutationOptions<TError, TOnMutateResult>(
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

export function getPatchScheduleSegmentMutationKey() {
  return ['schedule', '/schedule/segment', 'PATCH'] as const
}

export function getPatchScheduleSegmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.schedule.segment.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchScheduleSegmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schedule.segment.$patch>) {
      return parseResponse(client.schedule.segment.$patch(args, options))
    },
  })
}

export function usePatchScheduleSegment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.schedule.segment.$patch>,
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
  const mutationDefaults = getPatchScheduleSegmentMutationOptions<TError, TOnMutateResult>(
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

export function getSearchCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.categories.$get>>,
) {
  return ['search', '/search/categories', toValue(args)] as const
}

export function getSearchCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>
            >
          >,
          ReturnType<typeof getSearchCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.channels.$get>>,
) {
  return ['search', '/search/channels', toValue(args)] as const
}

export function getSearchChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>
            >
          >,
          ReturnType<typeof getSearchChannelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.key.$get>>,
) {
  return ['streams', '/streams/key', toValue(args)] as const
}

export function getStreamsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.key.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.key.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreamsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.key.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
          >,
          ReturnType<typeof getStreamsKeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.key.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
) {
  return ['streams', '/streams', toValue(args)] as const
}

export function getStreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          ReturnType<typeof getStreamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsFollowedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.followed.$get>>,
) {
  return ['streams', '/streams/followed', toValue(args)] as const
}

export function getStreamsFollowedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.followed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsFollowedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.followed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamsFollowed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.followed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>
            >
          >,
          ReturnType<typeof getStreamsFollowedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsFollowedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsFollowedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.followed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsMarkersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.markers.$get>>,
) {
  return ['streams', '/streams/markers', toValue(args)] as const
}

export function getStreamsMarkersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.markers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsMarkersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.markers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamsMarkers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.markers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>
            >
          >,
          ReturnType<typeof getStreamsMarkersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsMarkersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsMarkersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.markers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStreamsMarkersMutationKey() {
  return ['streams', '/streams/markers', 'POST'] as const
}

export function getPostStreamsMarkersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.streams.markers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStreamsMarkersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.streams.markers.$post>) {
      return parseResponse(client.streams.markers.$post(args, options))
    },
  })
}

export function usePostStreamsMarkers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.streams.markers.$post>,
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
  const mutationDefaults = getPostStreamsMarkersMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  return ['subscriptions', '/subscriptions', toValue(args)] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.user.$get>>,
) {
  return ['subscriptions', '/subscriptions/user', toValue(args)] as const
}

export function getSubscriptionsUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionsUserQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsStreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.streams.$get>>,
) {
  return ['tags', '/tags/streams', toValue(args)] as const
}

export function getTagsStreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.streams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.streams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.streams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
          >,
          ReturnType<typeof getTagsStreamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.streams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.tags.$get>>,
) {
  return ['streams', '/streams/tags', toValue(args)] as const
}

export function getStreamsTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreamsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
          >,
          ReturnType<typeof getStreamsTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsChannelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.channel.$get>>,
) {
  return ['teams', '/teams/channel', toValue(args)] as const
}

export function getTeamsChannelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.channel.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.channel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsChannel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.channel.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
          >,
          ReturnType<typeof getTeamsChannelQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.channel.$get(toValue(args), {
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMutationKey() {
  return ['users', '/users', 'PUT'] as const
}

export function getPutUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$put>>>>>,
    TError,
    InferRequestType<typeof client.users.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$put>) {
      return parseResponse(client.users.$put(args, options))
    },
  })
}

export function usePutUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$put>>>>>,
          TError,
          InferRequestType<typeof client.users.$put>,
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
  const mutationDefaults = getPutUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.users.$get>>,
) {
  return ['authorization', '/authorization/users', toValue(args)] as const
}

export function getAuthorizationUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizationUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
            >
          >,
          ReturnType<typeof getAuthorizationUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.blocks.$get>>,
) {
  return ['users', '/users/blocks', toValue(args)] as const
}

export function getUsersBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.blocks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.blocks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.blocks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
          >,
          ReturnType<typeof getUsersBlocksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersBlocksMutationKey() {
  return ['users', '/users/blocks', 'PUT'] as const
}

export function getPutUsersBlocksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.blocks.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.blocks.$put>) {
      return parseResponse(client.users.blocks.$put(args, options))
    },
  })
}

export function usePutUsersBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.users.blocks.$put>,
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
  const mutationDefaults = getPutUsersBlocksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersBlocksMutationKey() {
  return ['users', '/users/blocks', 'DELETE'] as const
}

export function getDeleteUsersBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.blocks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.blocks.$delete>) {
      return parseResponse(client.users.blocks.$delete(args, options))
    },
  })
}

export function useDeleteUsersBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.users.blocks.$delete>,
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
  const mutationDefaults = getDeleteUsersBlocksMutationOptions<TError, TOnMutateResult>(
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

export function getUsersExtensionsListQueryKey() {
  return ['users', '/users/extensions/list'] as const
}

export function getUsersExtensionsListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersExtensionsListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.extensions.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersExtensionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
            >
          >,
          ReturnType<typeof getUsersExtensionsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersExtensionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersExtensionsListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.extensions.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersExtensionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.extensions.$get>>,
) {
  return ['users', '/users/extensions', toValue(args)] as const
}

export function getUsersExtensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.extensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersExtensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.extensions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.extensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>
            >
          >,
          ReturnType<typeof getUsersExtensionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersExtensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.extensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersExtensionsMutationKey() {
  return ['users', '/users/extensions', 'PUT'] as const
}

export function getPutUsersExtensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.extensions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersExtensionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.extensions.$put>) {
      return parseResponse(client.users.extensions.$put(args, options))
    },
  })
}

export function usePutUsersExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.extensions.$put>,
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
  const mutationDefaults = getPutUsersExtensionsMutationOptions<TError, TOnMutateResult>(
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

export function getVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
) {
  return ['videos', '/videos', toValue(args)] as const
}

export function getVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          ReturnType<typeof getVideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVideosMutationKey() {
  return ['videos', '/videos', 'DELETE'] as const
}

export function getDeleteVideosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$delete>>>>>,
    TError,
    InferRequestType<typeof client.videos.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.$delete>) {
      return parseResponse(client.videos.$delete(args, options))
    },
  })
}

export function useDeleteVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.videos.$delete>,
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
  const mutationDefaults = getDeleteVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWhispersMutationKey() {
  return ['whispers', '/whispers', 'POST'] as const
}

export function getPostWhispersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whispers.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.whispers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhispersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whispers.$post>) {
      return parseResponse(client.whispers.$post(args, options))
    },
  })
}

export function usePostWhispers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whispers.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.whispers.$post>,
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
  const mutationDefaults = getPostWhispersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
