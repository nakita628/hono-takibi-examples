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

export function injectPostChannelsCommercial<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channels.commercial.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.channels.commercial.$post>,
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
    const mutationDefaults = getPostChannelsCommercialMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelsAdsQueryKey(args: InferRequestType<typeof client.channels.ads.$get>) {
  return ['channels', '/channels/ads', args] as const
}

export function getChannelsAdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.ads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsAdsQueryKey>
  >({
    queryKey: getChannelsAdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.ads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelsAds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.ads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsAdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsAdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChannelsAdsScheduleSnooze<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsAdsScheduleSnoozeMutationOptions<
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

export function getAnalyticsExtensionsQueryKey(
  args: InferRequestType<typeof client.analytics.extensions.$get>,
) {
  return ['analytics', '/analytics/extensions', args] as const
}

export function getAnalyticsExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.extensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsExtensionsQueryKey>
  >({
    queryKey: getAnalyticsExtensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.extensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnalyticsExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.extensions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalyticsExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalyticsExtensionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnalyticsGamesQueryKey(
  args: InferRequestType<typeof client.analytics.games.$get>,
) {
  return ['analytics', '/analytics/games', args] as const
}

export function getAnalyticsGamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.games.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsGamesQueryKey>
  >({
    queryKey: getAnalyticsGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.games.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnalyticsGames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.games.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnalyticsGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalyticsGamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBitsLeaderboardQueryKey(
  args: InferRequestType<typeof client.bits.leaderboard.$get>,
) {
  return ['bits', '/bits/leaderboard', args] as const
}

export function getBitsLeaderboardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bits.leaderboard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBitsLeaderboardQueryKey>
  >({
    queryKey: getBitsLeaderboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bits.leaderboard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBitsLeaderboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bits.leaderboard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBitsLeaderboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBitsLeaderboardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBitsCheermotesQueryKey(
  args: InferRequestType<typeof client.bits.cheermotes.$get>,
) {
  return ['bits', '/bits/cheermotes', args] as const
}

export function getBitsCheermotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bits.cheermotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBitsCheermotesQueryKey>
  >({
    queryKey: getBitsCheermotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bits.cheermotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBitsCheermotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bits.cheermotes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBitsCheermotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBitsCheermotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBitsCustomPowerUpsQueryKey(
  args: InferRequestType<typeof client.bits.custom_power_ups.$get>,
) {
  return ['bits', '/bits/custom_power_ups', args] as const
}

export function getBitsCustomPowerUpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bits.custom_power_ups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBitsCustomPowerUpsQueryKey>
  >({
    queryKey: getBitsCustomPowerUpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bits.custom_power_ups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBitsCustomPowerUps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bits.custom_power_ups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBitsCustomPowerUpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBitsCustomPowerUpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExtensionsTransactionsQueryKey(
  args: InferRequestType<typeof client.extensions.transactions.$get>,
) {
  return ['extensions', '/extensions/transactions', args] as const
}

export function getExtensionsTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensions.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsTransactionsQueryKey>
  >({
    queryKey: getExtensionsTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtensionsTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extensions.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsTransactionsQueryKey>
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
      ...getExtensionsTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  return ['channels', '/channels', args] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$patch>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.channels.$patch>,
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
    const mutationDefaults = getPatchChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelsEditorsQueryKey(
  args: InferRequestType<typeof client.channels.editors.$get>,
) {
  return ['channels', '/channels/editors', args] as const
}

export function getChannelsEditorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.editors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsEditorsQueryKey>
  >({
    queryKey: getChannelsEditorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.editors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelsEditors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.editors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsEditorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsEditorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChannelsFollowedQueryKey(
  args: InferRequestType<typeof client.channels.followed.$get>,
) {
  return ['channels', '/channels/followed', args] as const
}

export function getChannelsFollowedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.followed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsFollowedQueryKey>
  >({
    queryKey: getChannelsFollowedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.followed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelsFollowed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.followed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsFollowedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsFollowedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChannelsFollowersQueryKey(
  args: InferRequestType<typeof client.channels.followers.$get>,
) {
  return ['channels', '/channels/followers', args] as const
}

export function getChannelsFollowersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.followers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsFollowersQueryKey>
  >({
    queryKey: getChannelsFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.followers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelsFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.followers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChannelPointsCustomRewardsQueryKey(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$get>,
) {
  return ['channel_points', '/channel_points/custom_rewards', args] as const
}

export function getChannelPointsCustomRewardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelPointsCustomRewardsQueryKey>
  >({
    queryKey: getChannelPointsCustomRewardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel_points.custom_rewards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelPointsCustomRewards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channel_points.custom_rewards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelPointsCustomRewardsQueryKey>
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
      ...getChannelPointsCustomRewardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostChannelPointsCustomRewards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelPointsCustomRewardsMutationOptions<
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

export function injectDeleteChannelPointsCustomRewards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelPointsCustomRewardsMutationOptions<
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

export function injectPatchChannelPointsCustomRewards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchChannelPointsCustomRewardsMutationOptions<
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

export function getChannelPointsCustomRewardsRedemptionsQueryKey(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
) {
  return ['channel_points', '/channel_points/custom_rewards/redemptions', args] as const
}

export function getChannelPointsCustomRewardsRedemptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelPointsCustomRewardsRedemptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel_points.custom_rewards.redemptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelPointsCustomRewardsRedemptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChannelPointsCustomRewardsRedemptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchChannelPointsCustomRewardsRedemptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchChannelPointsCustomRewardsRedemptionsMutationOptions<
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

export function getCharityCampaignsQueryKey(
  args: InferRequestType<typeof client.charity.campaigns.$get>,
) {
  return ['charity', '/charity/campaigns', args] as const
}

export function getCharityCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.charity.campaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCharityCampaignsQueryKey>
  >({
    queryKey: getCharityCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.charity.campaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCharityCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.charity.campaigns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharityCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharityCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCharityDonationsQueryKey(
  args: InferRequestType<typeof client.charity.donations.$get>,
) {
  return ['charity', '/charity/donations', args] as const
}

export function getCharityDonationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.charity.donations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCharityDonationsQueryKey>
  >({
    queryKey: getCharityDonationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.charity.donations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCharityDonations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.charity.donations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCharityDonationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharityDonationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChatChattersQueryKey(args: InferRequestType<typeof client.chat.chatters.$get>) {
  return ['chat', '/chat/chatters', args] as const
}

export function getChatChattersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.chatters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatChattersQueryKey>
  >({
    queryKey: getChatChattersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.chatters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatChatters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.chatters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatChattersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatChattersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChatEmotesQueryKey(args: InferRequestType<typeof client.chat.emotes.$get>) {
  return ['chat', '/chat/emotes', args] as const
}

export function getChatEmotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.emotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatEmotesQueryKey>
  >({
    queryKey: getChatEmotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.emotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatEmotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.emotes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatEmotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatEmotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChatEmotesGlobalQueryKey() {
  return ['chat', '/chat/emotes/global'] as const
}

export function getChatEmotesGlobalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatEmotesGlobalQueryKey>
  >({
    queryKey: getChatEmotesGlobalQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.emotes.global.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChatEmotesGlobal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChatEmotesGlobalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatEmotesGlobalQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getChatEmotesSetQueryKey(
  args: InferRequestType<typeof client.chat.emotes.set.$get>,
) {
  return ['chat', '/chat/emotes/set', args] as const
}

export function getChatEmotesSetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.emotes.set.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatEmotesSetQueryKey>
  >({
    queryKey: getChatEmotesSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.emotes.set.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatEmotesSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.emotes.set.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatEmotesSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatEmotesSetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChatBadgesQueryKey(args: InferRequestType<typeof client.chat.badges.$get>) {
  return ['chat', '/chat/badges', args] as const
}

export function getChatBadgesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.badges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatBadgesQueryKey>
  >({
    queryKey: getChatBadgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.badges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatBadges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.badges.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatBadgesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChatBadgesGlobalQueryKey() {
  return ['chat', '/chat/badges/global'] as const
}

export function getChatBadgesGlobalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatBadgesGlobalQueryKey>
  >({
    queryKey: getChatBadgesGlobalQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.badges.global.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChatBadgesGlobal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChatBadgesGlobalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatBadgesGlobalQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getChatSettingsQueryKey(args: InferRequestType<typeof client.chat.settings.$get>) {
  return ['chat', '/chat/settings', args] as const
}

export function getChatSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatSettingsQueryKey>
  >({
    queryKey: getChatSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchChatSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.chat.settings.$patch>,
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
    const mutationDefaults = getPatchChatSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSharedChatSessionQueryKey(
  args: InferRequestType<typeof client.shared_chat.session.$get>,
) {
  return ['shared_chat', '/shared_chat/session', args] as const
}

export function getSharedChatSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shared_chat.session.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedChatSessionQueryKey>
  >({
    queryKey: getSharedChatSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shared_chat.session.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSharedChatSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shared_chat.session.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedChatSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedChatSessionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getChatEmotesUserQueryKey(
  args: InferRequestType<typeof client.chat.emotes.user.$get>,
) {
  return ['chat', '/chat/emotes/user', args] as const
}

export function getChatEmotesUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.emotes.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatEmotesUserQueryKey>
  >({
    queryKey: getChatEmotesUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.emotes.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatEmotesUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.emotes.user.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatEmotesUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatEmotesUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChatAnnouncements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatAnnouncementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChatShoutouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatShoutoutsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chat.messages.$post>,
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
    const mutationDefaults = getPostChatMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatPinsQueryKey(args: InferRequestType<typeof client.chat.pins.$get>) {
  return ['chat', '/chat/pins', args] as const
}

export function getChatPinsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.pins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatPinsQueryKey>
  >({
    queryKey: getChatPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.pins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatPins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.pins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatPinsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutChatPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.chat.pins.$put>,
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
    const mutationDefaults = getPutChatPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteChatPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.chat.pins.$delete>,
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
    const mutationDefaults = getDeleteChatPinsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchChatPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$patch>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.chat.pins.$patch>,
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
    const mutationDefaults = getPatchChatPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChatColorQueryKey(args: InferRequestType<typeof client.chat.color.$get>) {
  return ['chat', '/chat/color', args] as const
}

export function getChatColorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.color.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatColorQueryKey>
  >({
    queryKey: getChatColorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.color.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChatColor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.color.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatColorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatColorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutChatColor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.chat.color.$put>,
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
    const mutationDefaults = getPutChatColorMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getClipsQueryKey(args: InferRequestType<typeof client.clips.$get>) {
  return ['clips', '/clips', args] as const
}

export function getClipsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClipsQueryKey>
  >({
    queryKey: getClipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectClips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostClips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$post>>>>>,
        TError,
        InferRequestType<typeof client.clips.$post>,
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
    const mutationDefaults = getPostClipsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVideosClips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.clips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.videos.clips.$post>,
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
    const mutationDefaults = getPostVideosClipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getClipsDownloadsQueryKey(
  args: InferRequestType<typeof client.clips.downloads.$get>,
) {
  return ['clips', '/clips/downloads', args] as const
}

export function getClipsDownloadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clips.downloads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClipsDownloadsQueryKey>
  >({
    queryKey: getClipsDownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clips.downloads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectClipsDownloads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clips.downloads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClipsDownloadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClipsDownloadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEventsubConduitsQueryKey() {
  return ['eventsub', '/eventsub/conduits'] as const
}

export function getEventsubConduitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubConduitsQueryKey>
  >({
    queryKey: getEventsubConduitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eventsub.conduits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventsubConduits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsubConduitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsubConduitsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEventsubConduits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eventsub.conduits.$post>,
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
    const mutationDefaults = getPostEventsubConduitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEventsubConduits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEventsubConduitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchEventsubConduits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eventsub.conduits.$patch>,
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
    const mutationDefaults = getPatchEventsubConduitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventsubConduitsShardsQueryKey(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$get>,
) {
  return ['eventsub', '/eventsub/conduits/shards', args] as const
}

export function getEventsubConduitsShardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubConduitsShardsQueryKey>
  >({
    queryKey: getEventsubConduitsShardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventsub.conduits.shards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventsubConduitsShards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eventsub.conduits.shards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsubConduitsShardsQueryKey>
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
      ...getEventsubConduitsShardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchEventsubConduitsShards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eventsub.conduits.shards.$patch>,
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
    const mutationDefaults = getPatchEventsubConduitsShardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContentClassificationLabelsQueryKey(
  args: InferRequestType<typeof client.content_classification_labels.$get>,
) {
  return ['content_classification_labels', '/content_classification_labels', args] as const
}

export function getContentClassificationLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.content_classification_labels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_classification_labels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.content_classification_labels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentClassificationLabelsQueryKey>
  >({
    queryKey: getContentClassificationLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content_classification_labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContentClassificationLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.content_classification_labels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.content_classification_labels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.content_classification_labels.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentClassificationLabelsQueryKey>
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
      ...getContentClassificationLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEntitlementsDropsQueryKey(
  args: InferRequestType<typeof client.entitlements.drops.$get>,
) {
  return ['entitlements', '/entitlements/drops', args] as const
}

export function getEntitlementsDropsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entitlements.drops.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntitlementsDropsQueryKey>
  >({
    queryKey: getEntitlementsDropsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entitlements.drops.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEntitlementsDrops<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entitlements.drops.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntitlementsDropsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntitlementsDropsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchEntitlementsDrops<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.entitlements.drops.$patch>,
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
    const mutationDefaults = getPatchEntitlementsDropsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtensionsConfigurationsQueryKey(
  args: InferRequestType<typeof client.extensions.configurations.$get>,
) {
  return ['extensions', '/extensions/configurations', args] as const
}

export function getExtensionsConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensions.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsConfigurationsQueryKey>
  >({
    queryKey: getExtensionsConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.configurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtensionsConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extensions.configurations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsConfigurationsQueryKey>
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
      ...getExtensionsConfigurationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutExtensionsConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtensionsConfigurationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutExtensionsRequiredConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtensionsRequiredConfigurationMutationOptions<
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

export function injectPostExtensionsPubsub<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtensionsPubsubMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtensionsLiveQueryKey(
  args: InferRequestType<typeof client.extensions.live.$get>,
) {
  return ['extensions', '/extensions/live', args] as const
}

export function getExtensionsLiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.extensions.live.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsLiveQueryKey>
  >({
    queryKey: getExtensionsLiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.live.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExtensionsLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extensions.live.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsLiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtensionsLiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExtensionsJwtSecretsQueryKey() {
  return ['extensions', '/extensions/jwt/secrets'] as const
}

export function getExtensionsJwtSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsJwtSecretsQueryKey>
  >({
    queryKey: getExtensionsJwtSecretsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.jwt.secrets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtensionsJwtSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsJwtSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtensionsJwtSecretsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostExtensionsJwtSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.extensions.jwt.secrets.$post>,
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
    const mutationDefaults = getPostExtensionsJwtSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostExtensionsChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtensionsChatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtensionsQueryKey(args: InferRequestType<typeof client.extensions.$get>) {
  return ['extensions', '/extensions', args] as const
}

export function getExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.extensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExtensionsQueryKey>
  >({
    queryKey: getExtensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extensions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtensionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExtensionsReleasedQueryKey(
  args: InferRequestType<typeof client.extensions.released.$get>,
) {
  return ['extensions', '/extensions/released', args] as const
}

export function getExtensionsReleasedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.extensions.released.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsReleasedQueryKey>
  >({
    queryKey: getExtensionsReleasedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.released.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExtensionsReleased<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extensions.released.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsReleasedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtensionsReleasedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBitsExtensionsQueryKey(
  args: InferRequestType<typeof client.bits.extensions.$get>,
) {
  return ['bits', '/bits/extensions', args] as const
}

export function getBitsExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bits.extensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBitsExtensionsQueryKey>
  >({
    queryKey: getBitsExtensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bits.extensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBitsExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bits.extensions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBitsExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBitsExtensionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBitsExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.bits.extensions.$put>,
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
    const mutationDefaults = getPutBitsExtensionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventsubSubscriptionsQueryKey(
  args: InferRequestType<typeof client.eventsub.subscriptions.$get>,
) {
  return ['eventsub', '/eventsub/subscriptions', args] as const
}

export function getEventsubSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eventsub.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubSubscriptionsQueryKey>
  >({
    queryKey: getEventsubSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventsub.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventsubSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eventsub.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsubSubscriptionsQueryKey>
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
      ...getEventsubSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEventsubSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eventsub.subscriptions.$post>,
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
    const mutationDefaults = getPostEventsubSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEventsubSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEventsubSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGamesTopQueryKey(args: InferRequestType<typeof client.games.top.$get>) {
  return ['games', '/games/top', args] as const
}

export function getGamesTopQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.top.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesTopQueryKey>
  >({
    queryKey: getGamesTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.top.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGamesTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.top.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGamesTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesTopQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGamesQueryKey(args: InferRequestType<typeof client.games.$get>) {
  return ['games', '/games', args] as const
}

export function getGamesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.games.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGamesQueryKey>
  >({
    queryKey: getGamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.games.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.games.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGoalsQueryKey(args: InferRequestType<typeof client.goals.$get>) {
  return ['goals', '/goals', args] as const
}

export function getGoalsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.goals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGoalsQueryKey>
  >({
    queryKey: getGoalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGoals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.goals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGoalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGoalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGuestStarChannelSettingsQueryKey(
  args: InferRequestType<typeof client.guest_star.channel_settings.$get>,
) {
  return ['guest_star', '/guest_star/channel_settings', args] as const
}

export function getGuestStarChannelSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.guest_star.channel_settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuestStarChannelSettingsQueryKey>
  >({
    queryKey: getGuestStarChannelSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.guest_star.channel_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGuestStarChannelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.guest_star.channel_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGuestStarChannelSettingsQueryKey>
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
      ...getGuestStarChannelSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGuestStarChannelSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGuestStarChannelSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGuestStarSessionQueryKey(
  args: InferRequestType<typeof client.guest_star.session.$get>,
) {
  return ['guest_star', '/guest_star/session', args] as const
}

export function getGuestStarSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.guest_star.session.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGuestStarSessionQueryKey>
  >({
    queryKey: getGuestStarSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.guest_star.session.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGuestStarSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.guest_star.session.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGuestStarSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGuestStarSessionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGuestStarSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.guest_star.session.$post>,
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
    const mutationDefaults = getPostGuestStarSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGuestStarSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.guest_star.session.$delete>,
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
    const mutationDefaults = getDeleteGuestStarSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGuestStarInvitesQueryKey(
  args: InferRequestType<typeof client.guest_star.invites.$get>,
) {
  return ['guest_star', '/guest_star/invites', args] as const
}

export function getGuestStarInvitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.guest_star.invites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGuestStarInvitesQueryKey>
  >({
    queryKey: getGuestStarInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.guest_star.invites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGuestStarInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.guest_star.invites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGuestStarInvitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGuestStarInvitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGuestStarInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGuestStarInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGuestStarInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGuestStarInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGuestStarSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGuestStarSlotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGuestStarSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGuestStarSlotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchGuestStarSlot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGuestStarSlotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchGuestStarSlotSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGuestStarSlotSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getHypetrainStatusQueryKey(
  args: InferRequestType<typeof client.hypetrain.status.$get>,
) {
  return ['hypetrain', '/hypetrain/status', args] as const
}

export function getHypetrainStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hypetrain.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHypetrainStatusQueryKey>
  >({
    queryKey: getHypetrainStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hypetrain.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHypetrainStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hypetrain.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHypetrainStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHypetrainStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostModerationEnforcementsStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModerationEnforcementsStatusMutationOptions<
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

export function injectPostModerationAutomodMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModerationAutomodMessageMutationOptions<
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

export function getModerationAutomodSettingsQueryKey(
  args: InferRequestType<typeof client.moderation.automod.settings.$get>,
) {
  return ['moderation', '/moderation/automod/settings', args] as const
}

export function getModerationAutomodSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.moderation.automod.settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationAutomodSettingsQueryKey>
  >({
    queryKey: getModerationAutomodSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.automod.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModerationAutomodSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.automod.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationAutomodSettingsQueryKey>
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
      ...getModerationAutomodSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutModerationAutomodSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutModerationAutomodSettingsMutationOptions<
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

export function getModerationBannedQueryKey(
  args: InferRequestType<typeof client.moderation.banned.$get>,
) {
  return ['moderation', '/moderation/banned', args] as const
}

export function getModerationBannedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.moderation.banned.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getModerationBannedQueryKey>
  >({
    queryKey: getModerationBannedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.banned.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModerationBanned<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.banned.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationBannedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModerationBannedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostModerationBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.moderation.bans.$post>,
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
    const mutationDefaults = getPostModerationBansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteModerationBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModerationBansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModerationUnbanRequestsQueryKey(
  args: InferRequestType<typeof client.moderation.unban_requests.$get>,
) {
  return ['moderation', '/moderation/unban_requests', args] as const
}

export function getModerationUnbanRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.moderation.unban_requests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationUnbanRequestsQueryKey>
  >({
    queryKey: getModerationUnbanRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.unban_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModerationUnbanRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.unban_requests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationUnbanRequestsQueryKey>
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
      ...getModerationUnbanRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchModerationUnbanRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchModerationUnbanRequestsMutationOptions<
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

export function getModerationBlockedTermsQueryKey(
  args: InferRequestType<typeof client.moderation.blocked_terms.$get>,
) {
  return ['moderation', '/moderation/blocked_terms', args] as const
}

export function getModerationBlockedTermsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.moderation.blocked_terms.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationBlockedTermsQueryKey>
  >({
    queryKey: getModerationBlockedTermsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.blocked_terms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModerationBlockedTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.blocked_terms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationBlockedTermsQueryKey>
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
      ...getModerationBlockedTermsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostModerationBlockedTerms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.moderation.blocked_terms.$post>,
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
    const mutationDefaults = getPostModerationBlockedTermsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteModerationBlockedTerms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModerationBlockedTermsMutationOptions<
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

export function injectDeleteModerationChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModerationChatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModerationChannelsQueryKey(
  args: InferRequestType<typeof client.moderation.channels.$get>,
) {
  return ['moderation', '/moderation/channels', args] as const
}

export function getModerationChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.moderation.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getModerationChannelsQueryKey>
  >({
    queryKey: getModerationChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModerationChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModerationChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getModerationModeratorsQueryKey(
  args: InferRequestType<typeof client.moderation.moderators.$get>,
) {
  return ['moderation', '/moderation/moderators', args] as const
}

export function getModerationModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.moderation.moderators.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationModeratorsQueryKey>
  >({
    queryKey: getModerationModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.moderators.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModerationModerators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.moderators.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationModeratorsQueryKey>
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
      ...getModerationModeratorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostModerationModerators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModerationModeratorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteModerationModerators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.moderation.moderators.$delete>,
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
    const mutationDefaults = getDeleteModerationModeratorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelsVipsQueryKey(args: InferRequestType<typeof client.channels.vips.$get>) {
  return ['channels', '/channels/vips', args] as const
}

export function getChannelsVipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.vips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsVipsQueryKey>
  >({
    queryKey: getChannelsVipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.vips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelsVips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.vips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsVipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsVipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChannelsVips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.channels.vips.$post>,
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
    const mutationDefaults = getPostChannelsVipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteChannelsVips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsVipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModerationShieldModeQueryKey(
  args: InferRequestType<typeof client.moderation.shield_mode.$get>,
) {
  return ['moderation', '/moderation/shield_mode', args] as const
}

export function getModerationShieldModeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.moderation.shield_mode.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationShieldModeQueryKey>
  >({
    queryKey: getModerationShieldModeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.shield_mode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModerationShieldMode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.shield_mode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationShieldModeQueryKey>
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
      ...getModerationShieldModeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutModerationShieldMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.moderation.shield_mode.$put>,
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
    const mutationDefaults = getPutModerationShieldModeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostModerationWarnings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.moderation.warnings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.moderation.warnings.$post>,
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
    const mutationDefaults = getPostModerationWarningsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostModerationSuspiciousUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModerationSuspiciousUsersMutationOptions<
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

export function injectDeleteModerationSuspiciousUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModerationSuspiciousUsersMutationOptions<
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

export function getPollsQueryKey(args: InferRequestType<typeof client.polls.$get>) {
  return ['polls', '/polls', args] as const
}

export function getPollsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.polls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPollsQueryKey>
  >({
    queryKey: getPollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.polls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPolls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.polls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPollsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPollsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$post>>>>>,
        TError,
        InferRequestType<typeof client.polls.$post>,
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
    const mutationDefaults = getPostPollsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchPolls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$patch>>>>>,
        TError,
        InferRequestType<typeof client.polls.$patch>,
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
    const mutationDefaults = getPatchPollsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPredictionsQueryKey(args: InferRequestType<typeof client.predictions.$get>) {
  return ['predictions', '/predictions', args] as const
}

export function getPredictionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predictions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPredictionsQueryKey>
  >({
    queryKey: getPredictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predictions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPredictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.predictions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPredictionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPredictionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.predictions.$post>,
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
    const mutationDefaults = getPostPredictionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.predictions.$patch>,
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
    const mutationDefaults = getPatchPredictionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRaids<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$post>>>>>,
        TError,
        InferRequestType<typeof client.raids.$post>,
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
    const mutationDefaults = getPostRaidsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRaids<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.raids.$delete>,
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
    const mutationDefaults = getDeleteRaidsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getScheduleQueryKey(args: InferRequestType<typeof client.schedule.$get>) {
  return ['schedule', '/schedule', args] as const
}

export function getScheduleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedule.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScheduleQueryKey>
  >({
    queryKey: getScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedule.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getScheduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScheduleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getScheduleIcalendarQueryKey(
  args: InferRequestType<typeof client.schedule.icalendar.$get>,
) {
  return ['schedule', '/schedule/icalendar', args] as const
}

export function getScheduleIcalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedule.icalendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleIcalendarQueryKey>
  >({
    queryKey: getScheduleIcalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule.icalendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectScheduleIcalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedule.icalendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScheduleIcalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScheduleIcalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchScheduleSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchScheduleSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostScheduleSegment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.schedule.segment.$post>,
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
    const mutationDefaults = getPostScheduleSegmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteScheduleSegment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScheduleSegmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchScheduleSegment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.schedule.segment.$patch>,
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
    const mutationDefaults = getPatchScheduleSegmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSearchCategoriesQueryKey(
  args: InferRequestType<typeof client.search.categories.$get>,
) {
  return ['search', '/search/categories', args] as const
}

export function getSearchCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCategoriesQueryKey>
  >({
    queryKey: getSearchCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchChannelsQueryKey(
  args: InferRequestType<typeof client.search.channels.$get>,
) {
  return ['search', '/search/channels', args] as const
}

export function getSearchChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchChannelsQueryKey>
  >({
    queryKey: getSearchChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStreamsKeyQueryKey(args: InferRequestType<typeof client.streams.key.$get>) {
  return ['streams', '/streams/key', args] as const
}

export function getStreamsKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.streams.key.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsKeyQueryKey>
  >({
    queryKey: getStreamsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams.key.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStreamsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.streams.key.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStreamsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStreamsQueryKey(args: InferRequestType<typeof client.streams.$get>) {
  return ['streams', '/streams', args] as const
}

export function getStreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.streams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsQueryKey>
  >({
    queryKey: getStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.streams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStreamsFollowedQueryKey(
  args: InferRequestType<typeof client.streams.followed.$get>,
) {
  return ['streams', '/streams/followed', args] as const
}

export function getStreamsFollowedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.streams.followed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsFollowedQueryKey>
  >({
    queryKey: getStreamsFollowedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams.followed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStreamsFollowed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.streams.followed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStreamsFollowedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsFollowedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStreamsMarkersQueryKey(
  args: InferRequestType<typeof client.streams.markers.$get>,
) {
  return ['streams', '/streams/markers', args] as const
}

export function getStreamsMarkersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.streams.markers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsMarkersQueryKey>
  >({
    queryKey: getStreamsMarkersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams.markers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStreamsMarkers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.streams.markers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStreamsMarkersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsMarkersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStreamsMarkers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.streams.markers.$post>,
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
    const mutationDefaults = getPostStreamsMarkersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  return ['subscriptions', '/subscriptions', args] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSubscriptionsUserQueryKey(
  args: InferRequestType<typeof client.subscriptions.user.$get>,
) {
  return ['subscriptions', '/subscriptions/user', args] as const
}

export function getSubscriptionsUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsUserQueryKey>
  >({
    queryKey: getSubscriptionsUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSubscriptionsUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.user.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTagsStreamsQueryKey(args: InferRequestType<typeof client.tags.streams.$get>) {
  return ['tags', '/tags/streams', args] as const
}

export function getTagsStreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.streams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsStreamsQueryKey>
  >({
    queryKey: getTagsStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.streams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.streams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsStreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsStreamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStreamsTagsQueryKey(args: InferRequestType<typeof client.streams.tags.$get>) {
  return ['streams', '/streams/tags', args] as const
}

export function getStreamsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.streams.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsTagsQueryKey>
  >({
    queryKey: getStreamsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStreamsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.streams.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStreamsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTeamsChannelQueryKey(args: InferRequestType<typeof client.teams.channel.$get>) {
  return ['teams', '/teams/channel', args] as const
}

export function getTeamsChannelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.channel.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsChannelQueryKey>
  >({
    queryKey: getTeamsChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.channel.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeamsChannel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.channel.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsChannelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsChannelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTeamsQueryKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function getTeamsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >({
    queryKey: getTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$put>>>>>,
        TError,
        InferRequestType<typeof client.users.$put>,
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
    const mutationDefaults = getPutUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAuthorizationUsersQueryKey(
  args: InferRequestType<typeof client.authorization.users.$get>,
) {
  return ['authorization', '/authorization/users', args] as const
}

export function getAuthorizationUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authorization.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationUsersQueryKey>
  >({
    queryKey: getAuthorizationUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthorizationUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.authorization.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthorizationUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersBlocksQueryKey(args: InferRequestType<typeof client.users.blocks.$get>) {
  return ['users', '/users/blocks', args] as const
}

export function getUsersBlocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.blocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersBlocksQueryKey>
  >({
    queryKey: getUsersBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.blocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.blocks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersBlocksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsersBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.blocks.$put>,
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
    const mutationDefaults = getPutUsersBlocksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersBlocksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersExtensionsListQueryKey() {
  return ['users', '/users/extensions/list'] as const
}

export function getUsersExtensionsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersExtensionsListQueryKey>
  >({
    queryKey: getUsersExtensionsListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.extensions.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersExtensionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersExtensionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersExtensionsListQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUsersExtensionsQueryKey(
  args: InferRequestType<typeof client.users.extensions.$get>,
) {
  return ['users', '/users/extensions', args] as const
}

export function getUsersExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.extensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersExtensionsQueryKey>
  >({
    queryKey: getUsersExtensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.extensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.extensions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersExtensionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsersExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.users.extensions.$put>,
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
    const mutationDefaults = getPutUsersExtensionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVideosQueryKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function getVideosQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >({
    queryKey: getVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.videos.$delete>,
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
    const mutationDefaults = getDeleteVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWhispers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whispers.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.whispers.$post>,
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
    const mutationDefaults = getPostWhispersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
