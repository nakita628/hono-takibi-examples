import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostChannelsCommercialKey() {
  return ['channels', '/channels/commercial', 'POST'] as const
}

export function usePostChannelsCommercial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.commercial.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channels.commercial.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsCommercialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.commercial.$post> }) =>
        parseResponse(client.channels.commercial.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsAdsKey(args: InferRequestType<typeof client.channels.ads.$get>) {
  return ['channels', '/channels/ads', args] as const
}

export function useGetChannelsAds<TError = unknown>(
  args: InferRequestType<typeof client.channels.ads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsAdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsAds<TError = unknown>(
  args: InferRequestType<typeof client.channels.ads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsAdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsAdsScheduleSnoozeKey() {
  return ['channels', '/channels/ads/schedule/snooze', 'POST'] as const
}

export function usePostChannelsAdsScheduleSnooze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channels.ads.schedule.snooze.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channels.ads.schedule.snooze.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsAdsScheduleSnoozeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channels.ads.schedule.snooze.$post> },
      ) => parseResponse(client.channels.ads.schedule.snooze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsExtensionsKey(
  args: InferRequestType<typeof client.analytics.extensions.$get>,
) {
  return ['analytics', '/analytics/extensions', args] as const
}

export function useGetAnalyticsExtensions<TError = unknown>(
  args: InferRequestType<typeof client.analytics.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
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
        ? getGetAnalyticsExtensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsExtensions<TError = unknown>(
  args: InferRequestType<typeof client.analytics.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
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
        ? getGetAnalyticsExtensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.extensions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsGamesKey(
  args: InferRequestType<typeof client.analytics.games.$get>,
) {
  return ['analytics', '/analytics/games', args] as const
}

export function useGetAnalyticsGames<TError = unknown>(
  args: InferRequestType<typeof client.analytics.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsGamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsGames<TError = unknown>(
  args: InferRequestType<typeof client.analytics.games.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsGamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.games.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.games.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBitsLeaderboardKey(
  args: InferRequestType<typeof client.bits.leaderboard.$get>,
) {
  return ['bits', '/bits/leaderboard', args] as const
}

export function useGetBitsLeaderboard<TError = unknown>(
  args: InferRequestType<typeof client.bits.leaderboard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
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
        ? getGetBitsLeaderboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.leaderboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBitsLeaderboard<TError = unknown>(
  args: InferRequestType<typeof client.bits.leaderboard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
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
        ? getGetBitsLeaderboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.leaderboard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.leaderboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBitsCheermotesKey(
  args: InferRequestType<typeof client.bits.cheermotes.$get>,
) {
  return ['bits', '/bits/cheermotes', args] as const
}

export function useGetBitsCheermotes<TError = unknown>(
  args: InferRequestType<typeof client.bits.cheermotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBitsCheermotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.cheermotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBitsCheermotes<TError = unknown>(
  args: InferRequestType<typeof client.bits.cheermotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBitsCheermotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.cheermotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.cheermotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBitsCustomPowerUpsKey(
  args: InferRequestType<typeof client.bits.custom_power_ups.$get>,
) {
  return ['bits', '/bits/custom_power_ups', args] as const
}

export function useGetBitsCustomPowerUps<TError = unknown>(
  args: InferRequestType<typeof client.bits.custom_power_ups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
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
        ? getGetBitsCustomPowerUpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.custom_power_ups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBitsCustomPowerUps<TError = unknown>(
  args: InferRequestType<typeof client.bits.custom_power_ups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
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
        ? getGetBitsCustomPowerUpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bits.custom_power_ups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.custom_power_ups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtensionsTransactionsKey(
  args: InferRequestType<typeof client.extensions.transactions.$get>,
) {
  return ['extensions', '/extensions/transactions', args] as const
}

export function useGetExtensionsTransactions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
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
        ? getGetExtensionsTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsTransactions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
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
        ? getGetExtensionsTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsKey(args: InferRequestType<typeof client.channels.$get>) {
  return ['channels', '/channels', args] as const
}

export function useGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchChannelsKey() {
  return ['channels', '/channels', 'PATCH'] as const
}

export function usePatchChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.channels.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.$patch> }) =>
        parseResponse(client.channels.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsEditorsKey(
  args: InferRequestType<typeof client.channels.editors.$get>,
) {
  return ['channels', '/channels/editors', args] as const
}

export function useGetChannelsEditors<TError = unknown>(
  args: InferRequestType<typeof client.channels.editors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
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
        ? getGetChannelsEditorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.editors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsEditors<TError = unknown>(
  args: InferRequestType<typeof client.channels.editors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
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
        ? getGetChannelsEditorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.editors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.editors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsFollowedKey(
  args: InferRequestType<typeof client.channels.followed.$get>,
) {
  return ['channels', '/channels/followed', args] as const
}

export function useGetChannelsFollowed<TError = unknown>(
  args: InferRequestType<typeof client.channels.followed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
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
        ? getGetChannelsFollowedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.followed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsFollowed<TError = unknown>(
  args: InferRequestType<typeof client.channels.followed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
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
        ? getGetChannelsFollowedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.followed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsFollowersKey(
  args: InferRequestType<typeof client.channels.followers.$get>,
) {
  return ['channels', '/channels/followers', args] as const
}

export function useGetChannelsFollowers<TError = unknown>(
  args: InferRequestType<typeof client.channels.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
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
        ? getGetChannelsFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsFollowers<TError = unknown>(
  args: InferRequestType<typeof client.channels.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
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
        ? getGetChannelsFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelPointsCustomRewardsKey(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$get>,
) {
  return ['channel_points', '/channel_points/custom_rewards', args] as const
}

export function useGetChannelPointsCustomRewards<TError = unknown>(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
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
        ? getGetChannelPointsCustomRewardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel_points.custom_rewards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelPointsCustomRewards<TError = unknown>(
  args: InferRequestType<typeof client.channel_points.custom_rewards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
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
        ? getGetChannelPointsCustomRewardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel_points.custom_rewards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelPointsCustomRewardsKey() {
  return ['channel_points', '/channel_points/custom_rewards', 'POST'] as const
}

export function usePostChannelPointsCustomRewards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel_points.custom_rewards.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel_points.custom_rewards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelPointsCustomRewardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel_points.custom_rewards.$post> },
      ) => parseResponse(client.channel_points.custom_rewards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelPointsCustomRewardsKey() {
  return ['channel_points', '/channel_points/custom_rewards', 'DELETE'] as const
}

export function useDeleteChannelPointsCustomRewards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.channel_points.custom_rewards.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelPointsCustomRewardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel_points.custom_rewards.$delete> },
      ) => parseResponse(client.channel_points.custom_rewards.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChannelPointsCustomRewardsKey() {
  return ['channel_points', '/channel_points/custom_rewards', 'PATCH'] as const
}

export function usePatchChannelPointsCustomRewards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.channel_points.custom_rewards.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel_points.custom_rewards.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelPointsCustomRewardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel_points.custom_rewards.$patch> },
      ) => parseResponse(client.channel_points.custom_rewards.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelPointsCustomRewardsRedemptionsKey(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
) {
  return ['channel_points', '/channel_points/custom_rewards/redemptions', args] as const
}

export function useGetChannelPointsCustomRewardsRedemptions<TError = unknown>(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
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
        ? getGetChannelPointsCustomRewardsRedemptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channel_points.custom_rewards.redemptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelPointsCustomRewardsRedemptions<TError = unknown>(
  args: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
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
        ? getGetChannelPointsCustomRewardsRedemptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channel_points.custom_rewards.redemptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchChannelPointsCustomRewardsRedemptionsKey() {
  return ['channel_points', '/channel_points/custom_rewards/redemptions', 'PATCH'] as const
}

export function usePatchChannelPointsCustomRewardsRedemptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.channel_points.custom_rewards.redemptions.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelPointsCustomRewardsRedemptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.channel_points.custom_rewards.redemptions.$patch>
        },
      ) =>
        parseResponse(client.channel_points.custom_rewards.redemptions.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCharityCampaignsKey(
  args: InferRequestType<typeof client.charity.campaigns.$get>,
) {
  return ['charity', '/charity/campaigns', args] as const
}

export function useGetCharityCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.charity.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
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
        ? getGetCharityCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCharityCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.charity.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
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
        ? getGetCharityCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.campaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCharityDonationsKey(
  args: InferRequestType<typeof client.charity.donations.$get>,
) {
  return ['charity', '/charity/donations', args] as const
}

export function useGetCharityDonations<TError = unknown>(
  args: InferRequestType<typeof client.charity.donations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
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
        ? getGetCharityDonationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity.donations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCharityDonations<TError = unknown>(
  args: InferRequestType<typeof client.charity.donations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
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
        ? getGetCharityDonationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity.donations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity.donations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatChattersKey(args: InferRequestType<typeof client.chat.chatters.$get>) {
  return ['chat', '/chat/chatters', args] as const
}

export function useGetChatChatters<TError = unknown>(
  args: InferRequestType<typeof client.chat.chatters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatChattersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.chatters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatChatters<TError = unknown>(
  args: InferRequestType<typeof client.chat.chatters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatChattersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.chatters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.chatters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatEmotesKey(args: InferRequestType<typeof client.chat.emotes.$get>) {
  return ['chat', '/chat/emotes', args] as const
}

export function useGetChatEmotes<TError = unknown>(
  args: InferRequestType<typeof client.chat.emotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatEmotes<TError = unknown>(
  args: InferRequestType<typeof client.chat.emotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatEmotesGlobalKey() {
  return ['chat', '/chat/emotes/global'] as const
}

export function useGetChatEmotesGlobal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesGlobalKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.global.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatEmotesGlobal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesGlobalKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.global.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.global.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatEmotesSetKey(args: InferRequestType<typeof client.chat.emotes.set.$get>) {
  return ['chat', '/chat/emotes/set', args] as const
}

export function useGetChatEmotesSet<TError = unknown>(
  args: InferRequestType<typeof client.chat.emotes.set.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.set.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatEmotesSet<TError = unknown>(
  args: InferRequestType<typeof client.chat.emotes.set.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.set.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.set.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatBadgesKey(args: InferRequestType<typeof client.chat.badges.$get>) {
  return ['chat', '/chat/badges', args] as const
}

export function useGetChatBadges<TError = unknown>(
  args: InferRequestType<typeof client.chat.badges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatBadges<TError = unknown>(
  args: InferRequestType<typeof client.chat.badges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatBadgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatBadgesGlobalKey() {
  return ['chat', '/chat/badges/global'] as const
}

export function useGetChatBadgesGlobal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatBadgesGlobalKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.badges.global.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatBadgesGlobal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatBadgesGlobalKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.badges.global.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.badges.global.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatSettingsKey(args: InferRequestType<typeof client.chat.settings.$get>) {
  return ['chat', '/chat/settings', args] as const
}

export function useGetChatSettings<TError = unknown>(
  args: InferRequestType<typeof client.chat.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatSettings<TError = unknown>(
  args: InferRequestType<typeof client.chat.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchChatSettingsKey() {
  return ['chat', '/chat/settings', 'PATCH'] as const
}

export function usePatchChatSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.settings.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChatSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.settings.$patch> }) =>
        parseResponse(client.chat.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharedChatSessionKey(
  args: InferRequestType<typeof client.shared_chat.session.$get>,
) {
  return ['shared_chat', '/shared_chat/session', args] as const
}

export function useGetSharedChatSession<TError = unknown>(
  args: InferRequestType<typeof client.shared_chat.session.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
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
        ? getGetSharedChatSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shared_chat.session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharedChatSession<TError = unknown>(
  args: InferRequestType<typeof client.shared_chat.session.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
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
        ? getGetSharedChatSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shared_chat.session.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shared_chat.session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatEmotesUserKey(
  args: InferRequestType<typeof client.chat.emotes.user.$get>,
) {
  return ['chat', '/chat/emotes/user', args] as const
}

export function useGetChatEmotesUser<TError = unknown>(
  args: InferRequestType<typeof client.chat.emotes.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatEmotesUser<TError = unknown>(
  args: InferRequestType<typeof client.chat.emotes.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatEmotesUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.emotes.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.emotes.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatAnnouncementsKey() {
  return ['chat', '/chat/announcements', 'POST'] as const
}

export function usePostChatAnnouncements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chat.announcements.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.chat.announcements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatAnnouncementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.announcements.$post> }) =>
        parseResponse(client.chat.announcements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatShoutoutsKey() {
  return ['chat', '/chat/shoutouts', 'POST'] as const
}

export function usePostChatShoutouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.shoutouts.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.chat.shoutouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatShoutoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.shoutouts.$post> }) =>
        parseResponse(client.chat.shoutouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatMessagesKey() {
  return ['chat', '/chat/messages', 'POST'] as const
}

export function usePostChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.messages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.messages.$post> }) =>
        parseResponse(client.chat.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatPinsKey(args: InferRequestType<typeof client.chat.pins.$get>) {
  return ['chat', '/chat/pins', args] as const
}

export function useGetChatPins<TError = unknown>(
  args: InferRequestType<typeof client.chat.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatPinsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatPins<TError = unknown>(
  args: InferRequestType<typeof client.chat.pins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatPinsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChatPinsKey() {
  return ['chat', '/chat/pins', 'PUT'] as const
}

export function usePutChatPins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.chat.pins.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChatPinsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.pins.$put> }) =>
        parseResponse(client.chat.pins.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChatPinsKey() {
  return ['chat', '/chat/pins', 'DELETE'] as const
}

export function useDeleteChatPins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.chat.pins.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChatPinsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.pins.$delete> }) =>
        parseResponse(client.chat.pins.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChatPinsKey() {
  return ['chat', '/chat/pins', 'PATCH'] as const
}

export function usePatchChatPins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.pins.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.chat.pins.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChatPinsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.pins.$patch> }) =>
        parseResponse(client.chat.pins.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatColorKey(args: InferRequestType<typeof client.chat.color.$get>) {
  return ['chat', '/chat/color', args] as const
}

export function useGetChatColor<TError = unknown>(
  args: InferRequestType<typeof client.chat.color.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatColorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.color.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatColor<TError = unknown>(
  args: InferRequestType<typeof client.chat.color.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatColorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.color.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChatColorKey() {
  return ['chat', '/chat/color', 'PUT'] as const
}

export function usePutChatColor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.color.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.chat.color.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChatColorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.color.$put> }) =>
        parseResponse(client.chat.color.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClipsKey(args: InferRequestType<typeof client.clips.$get>) {
  return ['clips', '/clips', args] as const
}

export function useGetClips<TError = unknown>(
  args: InferRequestType<typeof client.clips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetClips<TError = unknown>(
  args: InferRequestType<typeof client.clips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostClipsKey() {
  return ['clips', '/clips', 'POST'] as const
}

export function usePostClips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.clips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clips.$post> }) =>
        parseResponse(client.clips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVideosClipsKey() {
  return ['videos', '/videos/clips', 'POST'] as const
}

export function usePostVideosClips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.clips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.videos.clips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosClipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.clips.$post> }) =>
        parseResponse(client.videos.clips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClipsDownloadsKey(
  args: InferRequestType<typeof client.clips.downloads.$get>,
) {
  return ['clips', '/clips/downloads', args] as const
}

export function useGetClipsDownloads<TError = unknown>(
  args: InferRequestType<typeof client.clips.downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClipsDownloadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clips.downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClipsDownloads<TError = unknown>(
  args: InferRequestType<typeof client.clips.downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClipsDownloadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clips.downloads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clips.downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsubConduitsKey() {
  return ['eventsub', '/eventsub/conduits'] as const
}

export function useGetEventsubConduits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsubConduitsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventsub.conduits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsubConduits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsubConduitsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventsub.conduits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsubConduitsKey() {
  return ['eventsub', '/eventsub/conduits', 'POST'] as const
}

export function usePostEventsubConduits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.eventsub.conduits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsubConduitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eventsub.conduits.$post> }) =>
        parseResponse(client.eventsub.conduits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsubConduitsKey() {
  return ['eventsub', '/eventsub/conduits', 'DELETE'] as const
}

export function useDeleteEventsubConduits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.eventsub.conduits.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsubConduitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eventsub.conduits.$delete> }) =>
        parseResponse(client.eventsub.conduits.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEventsubConduitsKey() {
  return ['eventsub', '/eventsub/conduits', 'PATCH'] as const
}

export function usePatchEventsubConduits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.eventsub.conduits.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventsubConduitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.eventsub.conduits.$patch> }) =>
        parseResponse(client.eventsub.conduits.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsubConduitsShardsKey(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$get>,
) {
  return ['eventsub', '/eventsub/conduits/shards', args] as const
}

export function useGetEventsubConduitsShards<TError = unknown>(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
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
        ? getGetEventsubConduitsShardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventsub.conduits.shards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsubConduitsShards<TError = unknown>(
  args: InferRequestType<typeof client.eventsub.conduits.shards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
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
        ? getGetEventsubConduitsShardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventsub.conduits.shards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEventsubConduitsShardsKey() {
  return ['eventsub', '/eventsub/conduits/shards', 'PATCH'] as const
}

export function usePatchEventsubConduitsShards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.conduits.shards.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eventsub.conduits.shards.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventsubConduitsShardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eventsub.conduits.shards.$patch> },
      ) => parseResponse(client.eventsub.conduits.shards.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContentClassificationLabelsKey(
  args: InferRequestType<typeof client.content_classification_labels.$get>,
) {
  return ['content_classification_labels', '/content_classification_labels', args] as const
}

export function useGetContentClassificationLabels<TError = unknown>(
  args: InferRequestType<typeof client.content_classification_labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.content_classification_labels.$get>>
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
        ? getGetContentClassificationLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.content_classification_labels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_classification_labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentClassificationLabels<TError = unknown>(
  args: InferRequestType<typeof client.content_classification_labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.content_classification_labels.$get>>
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
        ? getGetContentClassificationLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.content_classification_labels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_classification_labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitlementsDropsKey(
  args: InferRequestType<typeof client.entitlements.drops.$get>,
) {
  return ['entitlements', '/entitlements/drops', args] as const
}

export function useGetEntitlementsDrops<TError = unknown>(
  args: InferRequestType<typeof client.entitlements.drops.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
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
        ? getGetEntitlementsDropsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entitlements.drops.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitlementsDrops<TError = unknown>(
  args: InferRequestType<typeof client.entitlements.drops.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
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
        ? getGetEntitlementsDropsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entitlements.drops.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEntitlementsDropsKey() {
  return ['entitlements', '/entitlements/drops', 'PATCH'] as const
}

export function usePatchEntitlementsDrops<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entitlements.drops.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.entitlements.drops.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEntitlementsDropsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.entitlements.drops.$patch> }) =>
        parseResponse(client.entitlements.drops.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionsConfigurationsKey(
  args: InferRequestType<typeof client.extensions.configurations.$get>,
) {
  return ['extensions', '/extensions/configurations', args] as const
}

export function useGetExtensionsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.extensions.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
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
        ? getGetExtensionsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.extensions.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
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
        ? getGetExtensionsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtensionsConfigurationsKey() {
  return ['extensions', '/extensions/configurations', 'PUT'] as const
}

export function usePutExtensionsConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.configurations.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.extensions.configurations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtensionsConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.extensions.configurations.$put> },
      ) => parseResponse(client.extensions.configurations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutExtensionsRequiredConfigurationKey() {
  return ['extensions', '/extensions/required_configuration', 'PUT'] as const
}

export function usePutExtensionsRequiredConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.extensions.required_configuration.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.extensions.required_configuration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtensionsRequiredConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.extensions.required_configuration.$put> },
      ) => parseResponse(client.extensions.required_configuration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExtensionsPubsubKey() {
  return ['extensions', '/extensions/pubsub', 'POST'] as const
}

export function usePostExtensionsPubsub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.pubsub.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.extensions.pubsub.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionsPubsubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extensions.pubsub.$post> }) =>
        parseResponse(client.extensions.pubsub.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionsLiveKey(
  args: InferRequestType<typeof client.extensions.live.$get>,
) {
  return ['extensions', '/extensions/live', args] as const
}

export function useGetExtensionsLive<TError = unknown>(
  args: InferRequestType<typeof client.extensions.live.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsLiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.live.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsLive<TError = unknown>(
  args: InferRequestType<typeof client.extensions.live.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsLiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.live.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.live.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtensionsJwtSecretsKey() {
  return ['extensions', '/extensions/jwt/secrets'] as const
}

export function useGetExtensionsJwtSecrets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtensionsJwtSecretsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.jwt.secrets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsJwtSecrets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtensionsJwtSecretsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.jwt.secrets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtensionsJwtSecretsKey() {
  return ['extensions', '/extensions/jwt/secrets', 'POST'] as const
}

export function usePostExtensionsJwtSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensions.jwt.secrets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.extensions.jwt.secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionsJwtSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.extensions.jwt.secrets.$post> },
      ) => parseResponse(client.extensions.jwt.secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExtensionsChatKey() {
  return ['extensions', '/extensions/chat', 'POST'] as const
}

export function usePostExtensionsChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.chat.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.extensions.chat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionsChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extensions.chat.$post> }) =>
        parseResponse(client.extensions.chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionsKey(args: InferRequestType<typeof client.extensions.$get>) {
  return ['extensions', '/extensions', args] as const
}

export function useGetExtensions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtensionsReleasedKey(
  args: InferRequestType<typeof client.extensions.released.$get>,
) {
  return ['extensions', '/extensions/released', args] as const
}

export function useGetExtensionsReleased<TError = unknown>(
  args: InferRequestType<typeof client.extensions.released.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
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
        ? getGetExtensionsReleasedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.released.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsReleased<TError = unknown>(
  args: InferRequestType<typeof client.extensions.released.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
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
        ? getGetExtensionsReleasedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensions.released.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.released.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBitsExtensionsKey(
  args: InferRequestType<typeof client.bits.extensions.$get>,
) {
  return ['bits', '/bits/extensions', args] as const
}

export function useGetBitsExtensions<TError = unknown>(
  args: InferRequestType<typeof client.bits.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBitsExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBitsExtensions<TError = unknown>(
  args: InferRequestType<typeof client.bits.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBitsExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bits.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBitsExtensionsKey() {
  return ['bits', '/bits/extensions', 'PUT'] as const
}

export function usePutBitsExtensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bits.extensions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bits.extensions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBitsExtensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bits.extensions.$put> }) =>
        parseResponse(client.bits.extensions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsubSubscriptionsKey(
  args: InferRequestType<typeof client.eventsub.subscriptions.$get>,
) {
  return ['eventsub', '/eventsub/subscriptions', args] as const
}

export function useGetEventsubSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.eventsub.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
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
        ? getGetEventsubSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventsub.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsubSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.eventsub.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
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
        ? getGetEventsubSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventsub.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsubSubscriptionsKey() {
  return ['eventsub', '/eventsub/subscriptions', 'POST'] as const
}

export function usePostEventsubSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eventsub.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsubSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eventsub.subscriptions.$post> },
      ) => parseResponse(client.eventsub.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsubSubscriptionsKey() {
  return ['eventsub', '/eventsub/subscriptions', 'DELETE'] as const
}

export function useDeleteEventsubSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.eventsub.subscriptions.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.eventsub.subscriptions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsubSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eventsub.subscriptions.$delete> },
      ) => parseResponse(client.eventsub.subscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGamesTopKey(args: InferRequestType<typeof client.games.top.$get>) {
  return ['games', '/games/top', args] as const
}

export function useGetGamesTop<TError = unknown>(
  args: InferRequestType<typeof client.games.top.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesTopKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.top.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGamesTop<TError = unknown>(
  args: InferRequestType<typeof client.games.top.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGamesTopKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.games.top.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.games.top.$get(args, clientOptions)),
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

export function getGetGoalsKey(args: InferRequestType<typeof client.goals.$get>) {
  return ['goals', '/goals', args] as const
}

export function useGetGoals<TError = unknown>(
  args: InferRequestType<typeof client.goals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGoalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.goals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGoals<TError = unknown>(
  args: InferRequestType<typeof client.goals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGoalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.goals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGuestStarChannelSettingsKey(
  args: InferRequestType<typeof client.guest_star.channel_settings.$get>,
) {
  return ['guest_star', '/guest_star/channel_settings', args] as const
}

export function useGetGuestStarChannelSettings<TError = unknown>(
  args: InferRequestType<typeof client.guest_star.channel_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
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
        ? getGetGuestStarChannelSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guest_star.channel_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuestStarChannelSettings<TError = unknown>(
  args: InferRequestType<typeof client.guest_star.channel_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
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
        ? getGetGuestStarChannelSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guest_star.channel_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGuestStarChannelSettingsKey() {
  return ['guest_star', '/guest_star/channel_settings', 'PUT'] as const
}

export function usePutGuestStarChannelSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.channel_settings.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.channel_settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuestStarChannelSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.guest_star.channel_settings.$put> },
      ) => parseResponse(client.guest_star.channel_settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuestStarSessionKey(
  args: InferRequestType<typeof client.guest_star.session.$get>,
) {
  return ['guest_star', '/guest_star/session', args] as const
}

export function useGetGuestStarSession<TError = unknown>(
  args: InferRequestType<typeof client.guest_star.session.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
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
        ? getGetGuestStarSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guest_star.session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuestStarSession<TError = unknown>(
  args: InferRequestType<typeof client.guest_star.session.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
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
        ? getGetGuestStarSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guest_star.session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuestStarSessionKey() {
  return ['guest_star', '/guest_star/session', 'POST'] as const
}

export function usePostGuestStarSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.session.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuestStarSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.guest_star.session.$post> }) =>
        parseResponse(client.guest_star.session.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuestStarSessionKey() {
  return ['guest_star', '/guest_star/session', 'DELETE'] as const
}

export function useDeleteGuestStarSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.session.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.session.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuestStarSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.guest_star.session.$delete> },
      ) => parseResponse(client.guest_star.session.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuestStarInvitesKey(
  args: InferRequestType<typeof client.guest_star.invites.$get>,
) {
  return ['guest_star', '/guest_star/invites', args] as const
}

export function useGetGuestStarInvites<TError = unknown>(
  args: InferRequestType<typeof client.guest_star.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
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
        ? getGetGuestStarInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guest_star.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuestStarInvites<TError = unknown>(
  args: InferRequestType<typeof client.guest_star.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
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
        ? getGetGuestStarInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guest_star.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuestStarInvitesKey() {
  return ['guest_star', '/guest_star/invites', 'POST'] as const
}

export function usePostGuestStarInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuestStarInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.guest_star.invites.$post> }) =>
        parseResponse(client.guest_star.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuestStarInvitesKey() {
  return ['guest_star', '/guest_star/invites', 'DELETE'] as const
}

export function useDeleteGuestStarInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.invites.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.invites.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuestStarInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.guest_star.invites.$delete> },
      ) => parseResponse(client.guest_star.invites.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGuestStarSlotKey() {
  return ['guest_star', '/guest_star/slot', 'POST'] as const
}

export function usePostGuestStarSlot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.slot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuestStarSlotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.guest_star.slot.$post> }) =>
        parseResponse(client.guest_star.slot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuestStarSlotKey() {
  return ['guest_star', '/guest_star/slot', 'DELETE'] as const
}

export function useDeleteGuestStarSlot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.slot.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuestStarSlotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.guest_star.slot.$delete> }) =>
        parseResponse(client.guest_star.slot.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuestStarSlotKey() {
  return ['guest_star', '/guest_star/slot', 'PATCH'] as const
}

export function usePatchGuestStarSlot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot.$patch>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.slot.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuestStarSlotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.guest_star.slot.$patch> }) =>
        parseResponse(client.guest_star.slot.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuestStarSlotSettingsKey() {
  return ['guest_star', '/guest_star/slot_settings', 'PATCH'] as const
}

export function usePatchGuestStarSlotSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.guest_star.slot_settings.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.guest_star.slot_settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuestStarSlotSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.guest_star.slot_settings.$patch> },
      ) => parseResponse(client.guest_star.slot_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHypetrainStatusKey(
  args: InferRequestType<typeof client.hypetrain.status.$get>,
) {
  return ['hypetrain', '/hypetrain/status', args] as const
}

export function useGetHypetrainStatus<TError = unknown>(
  args: InferRequestType<typeof client.hypetrain.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
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
        ? getGetHypetrainStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hypetrain.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHypetrainStatus<TError = unknown>(
  args: InferRequestType<typeof client.hypetrain.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
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
        ? getGetHypetrainStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hypetrain.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hypetrain.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModerationEnforcementsStatusKey() {
  return ['moderation', '/moderation/enforcements/status', 'POST'] as const
}

export function usePostModerationEnforcementsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.moderation.enforcements.status.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.enforcements.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationEnforcementsStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.enforcements.status.$post> },
      ) => parseResponse(client.moderation.enforcements.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModerationAutomodMessageKey() {
  return ['moderation', '/moderation/automod/message', 'POST'] as const
}

export function usePostModerationAutomodMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.message.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.moderation.automod.message.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationAutomodMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.automod.message.$post> },
      ) => parseResponse(client.moderation.automod.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModerationAutomodSettingsKey(
  args: InferRequestType<typeof client.moderation.automod.settings.$get>,
) {
  return ['moderation', '/moderation/automod/settings', args] as const
}

export function useGetModerationAutomodSettings<TError = unknown>(
  args: InferRequestType<typeof client.moderation.automod.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
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
        ? getGetModerationAutomodSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.automod.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationAutomodSettings<TError = unknown>(
  args: InferRequestType<typeof client.moderation.automod.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
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
        ? getGetModerationAutomodSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.automod.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutModerationAutomodSettingsKey() {
  return ['moderation', '/moderation/automod/settings', 'PUT'] as const
}

export function usePutModerationAutomodSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.automod.settings.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.automod.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutModerationAutomodSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.automod.settings.$put> },
      ) => parseResponse(client.moderation.automod.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModerationBannedKey(
  args: InferRequestType<typeof client.moderation.banned.$get>,
) {
  return ['moderation', '/moderation/banned', args] as const
}

export function useGetModerationBanned<TError = unknown>(
  args: InferRequestType<typeof client.moderation.banned.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
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
        ? getGetModerationBannedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.banned.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationBanned<TError = unknown>(
  args: InferRequestType<typeof client.moderation.banned.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
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
        ? getGetModerationBannedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.banned.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.banned.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModerationBansKey() {
  return ['moderation', '/moderation/bans', 'POST'] as const
}

export function usePostModerationBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.bans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.moderation.bans.$post> }) =>
        parseResponse(client.moderation.bans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModerationBansKey() {
  return ['moderation', '/moderation/bans', 'DELETE'] as const
}

export function useDeleteModerationBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.bans.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.moderation.bans.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModerationBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.moderation.bans.$delete> }) =>
        parseResponse(client.moderation.bans.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModerationUnbanRequestsKey(
  args: InferRequestType<typeof client.moderation.unban_requests.$get>,
) {
  return ['moderation', '/moderation/unban_requests', args] as const
}

export function useGetModerationUnbanRequests<TError = unknown>(
  args: InferRequestType<typeof client.moderation.unban_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
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
        ? getGetModerationUnbanRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.unban_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationUnbanRequests<TError = unknown>(
  args: InferRequestType<typeof client.moderation.unban_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
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
        ? getGetModerationUnbanRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.unban_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchModerationUnbanRequestsKey() {
  return ['moderation', '/moderation/unban_requests', 'PATCH'] as const
}

export function usePatchModerationUnbanRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unban_requests.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.unban_requests.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModerationUnbanRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.unban_requests.$patch> },
      ) => parseResponse(client.moderation.unban_requests.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModerationBlockedTermsKey(
  args: InferRequestType<typeof client.moderation.blocked_terms.$get>,
) {
  return ['moderation', '/moderation/blocked_terms', args] as const
}

export function useGetModerationBlockedTerms<TError = unknown>(
  args: InferRequestType<typeof client.moderation.blocked_terms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
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
        ? getGetModerationBlockedTermsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.blocked_terms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationBlockedTerms<TError = unknown>(
  args: InferRequestType<typeof client.moderation.blocked_terms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
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
        ? getGetModerationBlockedTermsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.blocked_terms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModerationBlockedTermsKey() {
  return ['moderation', '/moderation/blocked_terms', 'POST'] as const
}

export function usePostModerationBlockedTerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.blocked_terms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationBlockedTermsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.blocked_terms.$post> },
      ) => parseResponse(client.moderation.blocked_terms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModerationBlockedTermsKey() {
  return ['moderation', '/moderation/blocked_terms', 'DELETE'] as const
}

export function useDeleteModerationBlockedTerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.blocked_terms.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.moderation.blocked_terms.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModerationBlockedTermsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.blocked_terms.$delete> },
      ) => parseResponse(client.moderation.blocked_terms.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModerationChatKey() {
  return ['moderation', '/moderation/chat', 'DELETE'] as const
}

export function useDeleteModerationChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.chat.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.moderation.chat.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModerationChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.moderation.chat.$delete> }) =>
        parseResponse(client.moderation.chat.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModerationChannelsKey(
  args: InferRequestType<typeof client.moderation.channels.$get>,
) {
  return ['moderation', '/moderation/channels', args] as const
}

export function useGetModerationChannels<TError = unknown>(
  args: InferRequestType<typeof client.moderation.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
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
        ? getGetModerationChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationChannels<TError = unknown>(
  args: InferRequestType<typeof client.moderation.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
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
        ? getGetModerationChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModerationModeratorsKey(
  args: InferRequestType<typeof client.moderation.moderators.$get>,
) {
  return ['moderation', '/moderation/moderators', args] as const
}

export function useGetModerationModerators<TError = unknown>(
  args: InferRequestType<typeof client.moderation.moderators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
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
        ? getGetModerationModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationModerators<TError = unknown>(
  args: InferRequestType<typeof client.moderation.moderators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
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
        ? getGetModerationModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModerationModeratorsKey() {
  return ['moderation', '/moderation/moderators', 'POST'] as const
}

export function usePostModerationModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.moderation.moderators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.moderators.$post> },
      ) => parseResponse(client.moderation.moderators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModerationModeratorsKey() {
  return ['moderation', '/moderation/moderators', 'DELETE'] as const
}

export function useDeleteModerationModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.moderators.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.moderation.moderators.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModerationModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.moderators.$delete> },
      ) => parseResponse(client.moderation.moderators.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsVipsKey(args: InferRequestType<typeof client.channels.vips.$get>) {
  return ['channels', '/channels/vips', args] as const
}

export function useGetChannelsVips<TError = unknown>(
  args: InferRequestType<typeof client.channels.vips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsVipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.vips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsVips<TError = unknown>(
  args: InferRequestType<typeof client.channels.vips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsVipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels.vips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsVipsKey() {
  return ['channels', '/channels/vips', 'POST'] as const
}

export function usePostChannelsVips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.channels.vips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsVipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.vips.$post> }) =>
        parseResponse(client.channels.vips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsVipsKey() {
  return ['channels', '/channels/vips', 'DELETE'] as const
}

export function useDeleteChannelsVips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.vips.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.channels.vips.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsVipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.vips.$delete> }) =>
        parseResponse(client.channels.vips.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModerationShieldModeKey(
  args: InferRequestType<typeof client.moderation.shield_mode.$get>,
) {
  return ['moderation', '/moderation/shield_mode', args] as const
}

export function useGetModerationShieldMode<TError = unknown>(
  args: InferRequestType<typeof client.moderation.shield_mode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
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
        ? getGetModerationShieldModeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.shield_mode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationShieldMode<TError = unknown>(
  args: InferRequestType<typeof client.moderation.shield_mode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
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
        ? getGetModerationShieldModeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.shield_mode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutModerationShieldModeKey() {
  return ['moderation', '/moderation/shield_mode', 'PUT'] as const
}

export function usePutModerationShieldMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.shield_mode.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.shield_mode.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutModerationShieldModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.shield_mode.$put> },
      ) => parseResponse(client.moderation.shield_mode.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModerationWarningsKey() {
  return ['moderation', '/moderation/warnings', 'POST'] as const
}

export function usePostModerationWarnings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.warnings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.warnings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationWarningsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.moderation.warnings.$post> }) =>
        parseResponse(client.moderation.warnings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModerationSuspiciousUsersKey() {
  return ['moderation', '/moderation/suspicious_users', 'POST'] as const
}

export function usePostModerationSuspiciousUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.suspicious_users.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.suspicious_users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModerationSuspiciousUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.suspicious_users.$post> },
      ) => parseResponse(client.moderation.suspicious_users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModerationSuspiciousUsersKey() {
  return ['moderation', '/moderation/suspicious_users', 'DELETE'] as const
}

export function useDeleteModerationSuspiciousUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.suspicious_users.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.moderation.suspicious_users.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModerationSuspiciousUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.moderation.suspicious_users.$delete> },
      ) => parseResponse(client.moderation.suspicious_users.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPollsKey(args: InferRequestType<typeof client.polls.$get>) {
  return ['polls', '/polls', args] as const
}

export function useGetPolls<TError = unknown>(
  args: InferRequestType<typeof client.polls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPollsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.polls.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPolls<TError = unknown>(
  args: InferRequestType<typeof client.polls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPollsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.polls.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPollsKey() {
  return ['polls', '/polls', 'POST'] as const
}

export function usePostPolls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.polls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPollsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.polls.$post> }) =>
        parseResponse(client.polls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPollsKey() {
  return ['polls', '/polls', 'PATCH'] as const
}

export function usePatchPolls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.polls.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.polls.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPollsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.polls.$patch> }) =>
        parseResponse(client.polls.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPredictionsKey(args: InferRequestType<typeof client.predictions.$get>) {
  return ['predictions', '/predictions', args] as const
}

export function useGetPredictions<TError = unknown>(
  args: InferRequestType<typeof client.predictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPredictionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPredictions<TError = unknown>(
  args: InferRequestType<typeof client.predictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPredictionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPredictionsKey() {
  return ['predictions', '/predictions', 'POST'] as const
}

export function usePostPredictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.predictions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPredictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.predictions.$post> }) =>
        parseResponse(client.predictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPredictionsKey() {
  return ['predictions', '/predictions', 'PATCH'] as const
}

export function usePatchPredictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.predictions.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPredictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.predictions.$patch> }) =>
        parseResponse(client.predictions.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRaidsKey() {
  return ['raids', '/raids', 'POST'] as const
}

export function usePostRaids<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.raids.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRaidsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.raids.$post> }) =>
        parseResponse(client.raids.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRaidsKey() {
  return ['raids', '/raids', 'DELETE'] as const
}

export function useDeleteRaids<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.raids.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.raids.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRaidsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.raids.$delete> }) =>
        parseResponse(client.raids.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduleKey(args: InferRequestType<typeof client.schedule.$get>) {
  return ['schedule', '/schedule', args] as const
}

export function useGetSchedule<TError = unknown>(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schedule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSchedule<TError = unknown>(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schedule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetScheduleIcalendarKey(
  args: InferRequestType<typeof client.schedule.icalendar.$get>,
) {
  return ['schedule', '/schedule/icalendar', args] as const
}

export function useGetScheduleIcalendar<TError = unknown>(
  args: InferRequestType<typeof client.schedule.icalendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
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
        ? getGetScheduleIcalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule.icalendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduleIcalendar<TError = unknown>(
  args: InferRequestType<typeof client.schedule.icalendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
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
        ? getGetScheduleIcalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.icalendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule.icalendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchScheduleSettingsKey() {
  return ['schedule', '/schedule/settings', 'PATCH'] as const
}

export function usePatchScheduleSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedule.settings.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.schedule.settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScheduleSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedule.settings.$patch> }) =>
        parseResponse(client.schedule.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScheduleSegmentKey() {
  return ['schedule', '/schedule/segment', 'POST'] as const
}

export function usePostScheduleSegment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.schedule.segment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduleSegmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedule.segment.$post> }) =>
        parseResponse(client.schedule.segment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScheduleSegmentKey() {
  return ['schedule', '/schedule/segment', 'DELETE'] as const
}

export function useDeleteScheduleSegment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.schedule.segment.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScheduleSegmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedule.segment.$delete> }) =>
        parseResponse(client.schedule.segment.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchScheduleSegmentKey() {
  return ['schedule', '/schedule/segment', 'PATCH'] as const
}

export function usePatchScheduleSegment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.segment.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.schedule.segment.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScheduleSegmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schedule.segment.$patch> }) =>
        parseResponse(client.schedule.segment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchCategoriesKey(
  args: InferRequestType<typeof client.search.categories.$get>,
) {
  return ['search', '/search/categories', args] as const
}

export function useGetSearchCategories<TError = unknown>(
  args: InferRequestType<typeof client.search.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
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
        ? getGetSearchCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCategories<TError = unknown>(
  args: InferRequestType<typeof client.search.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
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
        ? getGetSearchCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchChannelsKey(
  args: InferRequestType<typeof client.search.channels.$get>,
) {
  return ['search', '/search/channels', args] as const
}

export function useGetSearchChannels<TError = unknown>(
  args: InferRequestType<typeof client.search.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchChannels<TError = unknown>(
  args: InferRequestType<typeof client.search.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStreamsKeyKey(args: InferRequestType<typeof client.streams.key.$get>) {
  return ['streams', '/streams/key', args] as const
}

export function useGetStreamsKey<TError = unknown>(
  args: InferRequestType<typeof client.streams.key.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsKey<TError = unknown>(
  args: InferRequestType<typeof client.streams.key.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.key.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStreamsKey(args: InferRequestType<typeof client.streams.$get>) {
  return ['streams', '/streams', args] as const
}

export function useGetStreams<TError = unknown>(
  args: InferRequestType<typeof client.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.streams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStreams<TError = unknown>(
  args: InferRequestType<typeof client.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.streams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStreamsFollowedKey(
  args: InferRequestType<typeof client.streams.followed.$get>,
) {
  return ['streams', '/streams/followed', args] as const
}

export function useGetStreamsFollowed<TError = unknown>(
  args: InferRequestType<typeof client.streams.followed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
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
        ? getGetStreamsFollowedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.followed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsFollowed<TError = unknown>(
  args: InferRequestType<typeof client.streams.followed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
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
        ? getGetStreamsFollowedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.followed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.followed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStreamsMarkersKey(
  args: InferRequestType<typeof client.streams.markers.$get>,
) {
  return ['streams', '/streams/markers', args] as const
}

export function useGetStreamsMarkers<TError = unknown>(
  args: InferRequestType<typeof client.streams.markers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsMarkersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.markers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsMarkers<TError = unknown>(
  args: InferRequestType<typeof client.streams.markers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsMarkersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.markers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStreamsMarkersKey() {
  return ['streams', '/streams/markers', 'POST'] as const
}

export function usePostStreamsMarkers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.markers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.streams.markers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStreamsMarkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.streams.markers.$post> }) =>
        parseResponse(client.streams.markers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  return ['subscriptions', '/subscriptions', args] as const
}

export function useGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsUserKey(
  args: InferRequestType<typeof client.subscriptions.user.$get>,
) {
  return ['subscriptions', '/subscriptions/user', args] as const
}

export function useGetSubscriptionsUser<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
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
        ? getGetSubscriptionsUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsUser<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
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
        ? getGetSubscriptionsUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsStreamsKey(args: InferRequestType<typeof client.tags.streams.$get>) {
  return ['tags', '/tags/streams', args] as const
}

export function useGetTagsStreams<TError = unknown>(
  args: InferRequestType<typeof client.tags.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.streams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsStreams<TError = unknown>(
  args: InferRequestType<typeof client.tags.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.streams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.streams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStreamsTagsKey(args: InferRequestType<typeof client.streams.tags.$get>) {
  return ['streams', '/streams/tags', args] as const
}

export function useGetStreamsTags<TError = unknown>(
  args: InferRequestType<typeof client.streams.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsTags<TError = unknown>(
  args: InferRequestType<typeof client.streams.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsChannelKey(args: InferRequestType<typeof client.teams.channel.$get>) {
  return ['teams', '/teams/channel', args] as const
}

export function useGetTeamsChannel<TError = unknown>(
  args: InferRequestType<typeof client.teams.channel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsChannelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.channel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsChannel<TError = unknown>(
  args: InferRequestType<typeof client.teams.channel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsChannelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.channel.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.channel.$get(args, clientOptions)),
      restSwrOptions,
    ),
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

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutUsersKey() {
  return ['users', '/users', 'PUT'] as const
}

export function usePutUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$put> }) =>
        parseResponse(client.users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationUsersKey(
  args: InferRequestType<typeof client.authorization.users.$get>,
) {
  return ['authorization', '/authorization/users', args] as const
}

export function useGetAuthorizationUsers<TError = unknown>(
  args: InferRequestType<typeof client.authorization.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
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
        ? getGetAuthorizationUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationUsers<TError = unknown>(
  args: InferRequestType<typeof client.authorization.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
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
        ? getGetAuthorizationUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersBlocksKey(args: InferRequestType<typeof client.users.blocks.$get>) {
  return ['users', '/users/blocks', args] as const
}

export function useGetUsersBlocks<TError = unknown>(
  args: InferRequestType<typeof client.users.blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersBlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersBlocks<TError = unknown>(
  args: InferRequestType<typeof client.users.blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersBlocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersBlocksKey() {
  return ['users', '/users/blocks', 'PUT'] as const
}

export function usePutUsersBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.users.blocks.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.blocks.$put> }) =>
        parseResponse(client.users.blocks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersBlocksKey() {
  return ['users', '/users/blocks', 'DELETE'] as const
}

export function useDeleteUsersBlocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.blocks.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.users.blocks.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.blocks.$delete> }) =>
        parseResponse(client.users.blocks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersExtensionsListKey() {
  return ['users', '/users/extensions/list'] as const
}

export function useGetUsersExtensionsList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersExtensionsListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.extensions.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersExtensionsList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersExtensionsListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.extensions.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersExtensionsKey(
  args: InferRequestType<typeof client.users.extensions.$get>,
) {
  return ['users', '/users/extensions', args] as const
}

export function useGetUsersExtensions<TError = unknown>(
  args: InferRequestType<typeof client.users.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
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
        ? getGetUsersExtensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersExtensions<TError = unknown>(
  args: InferRequestType<typeof client.users.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
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
        ? getGetUsersExtensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersExtensionsKey() {
  return ['users', '/users/extensions', 'PUT'] as const
}

export function usePutUsersExtensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.extensions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.extensions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersExtensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.extensions.$put> }) =>
        parseResponse(client.users.extensions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function useGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteVideosKey() {
  return ['videos', '/videos', 'DELETE'] as const
}

export function useDeleteVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.videos.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.$delete> }) =>
        parseResponse(client.videos.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWhispersKey() {
  return ['whispers', '/whispers', 'POST'] as const
}

export function usePostWhispers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whispers.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.whispers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhispersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whispers.$post> }) =>
        parseResponse(client.whispers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
