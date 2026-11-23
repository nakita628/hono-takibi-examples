import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCallPhoneNumberAuthKey() {
  return ['call_phone_number_auth'] as const
}

export function getCheckForUpdateKey() {
  return ['check_for_update'] as const
}

export function getCheckWaitlistStatusKey() {
  return ['check_waitlist_status'] as const
}

export function getCompletePhoneNumberAuthKey() {
  return ['complete_phone_number_auth'] as const
}

export function getCreateChannelKey() {
  return ['create_channel'] as const
}

export function getFollowKey() {
  return ['follow'] as const
}

export function getGetActionableNotificationsKey() {
  return ['get_actionable_notifications'] as const
}

export function getGetAllTopicsKey() {
  return ['get_all_topics'] as const
}

export function getGetChannelsKey() {
  return ['get_channels'] as const
}

export function getGetClubKey() {
  return ['get_club'] as const
}

export function getGetClubsForTopicKey() {
  return ['get_clubs_for_topic'] as const
}

export function getGetCreateChannelTargetsKey() {
  return ['get_create_channel_targets'] as const
}

export function getGetEventsKey() {
  return ['get_events'] as const
}

export function getGetFollowingKey() {
  return ['get_following'] as const
}

export function getGetNotificationsKey() {
  return ['get_notifications'] as const
}

export function getGetOnlineFriendsKey() {
  return ['get_online_friends'] as const
}

export function getGetProfileKey() {
  return ['get_profile'] as const
}

export function getGetReleaseNotesKey() {
  return ['get_release_notes'] as const
}

export function getGetSettingsKey() {
  return ['get_settings'] as const
}

export function getGetSuggestedClubInvitesKey() {
  return ['get_suggested_club_invites'] as const
}

export function getGetSuggestedFollowsAllKey() {
  return ['get_suggested_follows_all'] as const
}

export function getGetSuggestedFollowsFriendsOnlyKey() {
  return ['get_suggested_follows_friends_only'] as const
}

export function getGetSuggestedFollowsSimilarKey() {
  return ['get_suggested_follows_similar'] as const
}

export function getGetSuggestedInvitesKey() {
  return ['get_suggested_invites'] as const
}

export function getGetSuggestedSpeakersKey() {
  return ['get_suggested_speakers'] as const
}

export function getGetTopicKey() {
  return ['get_topic'] as const
}

export function getGetUsersForTopicKey() {
  return ['get_users_for_topic'] as const
}

export function getGetWelcomeChannelKey() {
  return ['get_welcome_channel'] as const
}

export function getInviteFromWaitlistKey() {
  return ['invite_from_waitlist'] as const
}

export function getInviteToAppKey() {
  return ['invite_to_app'] as const
}

export function getJoinChannelKey() {
  return ['join_channel'] as const
}

export function getLeaveChannelKey() {
  return ['leave_channel'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getRecordActionTrailsKey() {
  return ['record_action_trails'] as const
}

export function getRefreshTokenKey() {
  return ['refresh_token'] as const
}

export function getResendPhoneNumberAuthKey() {
  return ['resend_phone_number_auth'] as const
}

export function getSearchClubsKey() {
  return ['search_clubs'] as const
}

export function getSearchUsersKey() {
  return ['search_users'] as const
}

export function getStartPhoneNumberAuthKey() {
  return ['start_phone_number_auth'] as const
}

export function getUpdateNotificationsKey() {
  return ['update_notifications'] as const
}

export function getUpdateUsernameKey() {
  return ['update_username'] as const
}

export function getPostCallPhoneNumberAuthKey() {
  return ['call_phone_number_auth', '/call_phone_number_auth', 'POST'] as const
}

export function usePostCallPhoneNumberAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.call_phone_number_auth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.call_phone_number_auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallPhoneNumberAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.call_phone_number_auth.$post> },
      ) => parseResponse(client.call_phone_number_auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCheckForUpdateKey(
  args: InferRequestType<typeof client.check_for_update.$get>,
) {
  return ['check_for_update', '/check_for_update', args] as const
}

export function useGetCheckForUpdate<TError = unknown>(
  args: InferRequestType<typeof client.check_for_update.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckForUpdateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.check_for_update.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckForUpdate<TError = unknown>(
  args: InferRequestType<typeof client.check_for_update.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckForUpdateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.check_for_update.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCheckWaitlistStatusKey() {
  return ['check_waitlist_status', '/check_waitlist_status', 'POST'] as const
}

export function usePostCheckWaitlistStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.check_waitlist_status.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckWaitlistStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.check_waitlist_status.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompletePhoneNumberAuthKey() {
  return ['complete_phone_number_auth', '/complete_phone_number_auth', 'POST'] as const
}

export function usePostCompletePhoneNumberAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.complete_phone_number_auth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.complete_phone_number_auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompletePhoneNumberAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.complete_phone_number_auth.$post> },
      ) => parseResponse(client.complete_phone_number_auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateChannelKey() {
  return ['create_channel', '/create_channel', 'POST'] as const
}

export function usePostCreateChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.create_channel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.create_channel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.create_channel.$post> }) =>
        parseResponse(client.create_channel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFollowKey() {
  return ['follow', '/follow', 'POST'] as const
}

export function usePostFollow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.follow.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.follow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFollowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.follow.$post> }) =>
        parseResponse(client.follow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetActionableNotificationsKey() {
  return ['get_actionable_notifications', '/get_actionable_notifications'] as const
}

export function useGetGetActionableNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>>
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
        ? getGetGetActionableNotificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_actionable_notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetActionableNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>>
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
        ? getGetGetActionableNotificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_actionable_notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetAllTopicsKey() {
  return ['get_all_topics', '/get_all_topics'] as const
}

export function useGetGetAllTopics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetAllTopicsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_all_topics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetAllTopics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetAllTopicsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_all_topics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetChannelsKey() {
  return ['get_channels', '/get_channels'] as const
}

export function useGetGetChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetChannelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetChannels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetChannelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_channels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetClubKey() {
  return ['get_club', '/get_club', 'POST'] as const
}

export function usePostGetClub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_club.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.get_club.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetClubKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_club.$post> }) =>
        parseResponse(client.get_club.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetClubsForTopicKey() {
  return ['get_clubs_for_topic', '/get_clubs_for_topic', 'POST'] as const
}

export function usePostGetClubsForTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_clubs_for_topic.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_clubs_for_topic.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetClubsForTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_clubs_for_topic.$post> }) =>
        parseResponse(client.get_clubs_for_topic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetCreateChannelTargetsKey() {
  return ['get_create_channel_targets', '/get_create_channel_targets', 'POST'] as const
}

export function usePostGetCreateChannelTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_create_channel_targets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_create_channel_targets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetCreateChannelTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.get_create_channel_targets.$post> },
      ) => parseResponse(client.get_create_channel_targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetEventsKey(args: InferRequestType<typeof client.get_events.$get>) {
  return ['get_events', '/get_events', args] as const
}

export function useGetGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.get_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.get_events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetFollowingKey() {
  return ['get_following', '/get_following', 'POST'] as const
}

export function usePostGetFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_following.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_following.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_following.$post> }) =>
        parseResponse(client.get_following.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetNotificationsKey(
  args: InferRequestType<typeof client.get_notifications.$get>,
) {
  return ['get_notifications', '/get_notifications', args] as const
}

export function useGetGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.get_notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>>
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
        ? getGetGetNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.get_notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>>
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
        ? getGetGetNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetOnlineFriendsKey() {
  return ['get_online_friends', '/get_online_friends', 'POST'] as const
}

export function usePostGetOnlineFriends<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_online_friends.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_online_friends.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetOnlineFriendsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_online_friends.$post> }) =>
        parseResponse(client.get_online_friends.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetProfileKey() {
  return ['get_profile', '/get_profile', 'POST'] as const
}

export function usePostGetProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_profile.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.get_profile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_profile.$post> }) =>
        parseResponse(client.get_profile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetReleaseNotesKey() {
  return ['get_release_notes', '/get_release_notes', 'POST'] as const
}

export function usePostGetReleaseNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_release_notes.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetReleaseNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.get_release_notes.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetSettingsKey() {
  return ['get_settings', '/get_settings'] as const
}

export function useGetGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetSuggestedClubInvitesKey() {
  return ['get_suggested_club_invites', '/get_suggested_club_invites', 'POST'] as const
}

export function usePostGetSuggestedClubInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_club_invites.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_suggested_club_invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSuggestedClubInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.get_suggested_club_invites.$post> },
      ) => parseResponse(client.get_suggested_club_invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetSuggestedFollowsAllKey(
  args: InferRequestType<typeof client.get_suggested_follows_all.$get>,
) {
  return ['get_suggested_follows_all', '/get_suggested_follows_all', args] as const
}

export function useGetGetSuggestedFollowsAll<TError = unknown>(
  args: InferRequestType<typeof client.get_suggested_follows_all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>>
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
        ? getGetGetSuggestedFollowsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_suggested_follows_all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetSuggestedFollowsAll<TError = unknown>(
  args: InferRequestType<typeof client.get_suggested_follows_all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>>
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
        ? getGetGetSuggestedFollowsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_suggested_follows_all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetSuggestedFollowsFriendsOnlyKey() {
  return [
    'get_suggested_follows_friends_only',
    '/get_suggested_follows_friends_only',
    'POST',
  ] as const
}

export function usePostGetSuggestedFollowsFriendsOnly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.get_suggested_follows_friends_only.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_suggested_follows_friends_only.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSuggestedFollowsFriendsOnlyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.get_suggested_follows_friends_only.$post> },
      ) => parseResponse(client.get_suggested_follows_friends_only.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetSuggestedFollowsSimilarKey() {
  return ['get_suggested_follows_similar', '/get_suggested_follows_similar', 'POST'] as const
}

export function usePostGetSuggestedFollowsSimilar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_similar.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_suggested_follows_similar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSuggestedFollowsSimilarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.get_suggested_follows_similar.$post> },
      ) => parseResponse(client.get_suggested_follows_similar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetSuggestedInvitesKey() {
  return ['get_suggested_invites', '/get_suggested_invites', 'POST'] as const
}

export function usePostGetSuggestedInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_invites.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_suggested_invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSuggestedInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.get_suggested_invites.$post> },
      ) => parseResponse(client.get_suggested_invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetSuggestedSpeakersKey() {
  return ['get_suggested_speakers', '/get_suggested_speakers', 'POST'] as const
}

export function usePostGetSuggestedSpeakers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_speakers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.get_suggested_speakers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSuggestedSpeakersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.get_suggested_speakers.$post> },
      ) => parseResponse(client.get_suggested_speakers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTopicKey() {
  return ['get_topic', '/get_topic', 'POST'] as const
}

export function usePostGetTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_topic.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.get_topic.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get_topic.$post> }) =>
        parseResponse(client.get_topic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetUsersForTopicKey(
  args: InferRequestType<typeof client.get_users_for_topic.$get>,
) {
  return ['get_users_for_topic', '/get_users_for_topic', args] as const
}

export function useGetGetUsersForTopic<TError = unknown>(
  args: InferRequestType<typeof client.get_users_for_topic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>
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
        ? getGetGetUsersForTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_users_for_topic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetUsersForTopic<TError = unknown>(
  args: InferRequestType<typeof client.get_users_for_topic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>
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
        ? getGetGetUsersForTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_users_for_topic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetWelcomeChannelKey() {
  return ['get_welcome_channel', '/get_welcome_channel'] as const
}

export function useGetGetWelcomeChannel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetWelcomeChannelKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_welcome_channel.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetWelcomeChannel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetWelcomeChannelKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_welcome_channel.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInviteFromWaitlistKey() {
  return ['invite_from_waitlist', '/invite_from_waitlist', 'POST'] as const
}

export function usePostInviteFromWaitlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.invite_from_waitlist.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.invite_from_waitlist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInviteFromWaitlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.invite_from_waitlist.$post> },
      ) => parseResponse(client.invite_from_waitlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInviteToAppKey() {
  return ['invite_to_app', '/invite_to_app', 'POST'] as const
}

export function usePostInviteToApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite_to_app.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invite_to_app.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInviteToAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invite_to_app.$post> }) =>
        parseResponse(client.invite_to_app.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJoinChannelKey() {
  return ['join_channel', '/join_channel', 'POST'] as const
}

export function usePostJoinChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.join_channel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.join_channel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJoinChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.join_channel.$post> }) =>
        parseResponse(client.join_channel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLeaveChannelKey() {
  return ['leave_channel', '/leave_channel', 'POST'] as const
}

export function usePostLeaveChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leave_channel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.leave_channel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLeaveChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.leave_channel.$post> }) =>
        parseResponse(client.leave_channel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeKey() {
  return ['me', '/me', 'POST'] as const
}

export function usePostMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.$post> }) =>
        parseResponse(client.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecordActionTrailsKey() {
  return ['record_action_trails', '/record_action_trails', 'POST'] as const
}

export function usePostRecordActionTrails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.record_action_trails.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.record_action_trails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecordActionTrailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.record_action_trails.$post> },
      ) => parseResponse(client.record_action_trails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRefreshTokenKey() {
  return ['refresh_token', '/refresh_token', 'POST'] as const
}

export function usePostRefreshToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh_token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.refresh_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefreshTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.refresh_token.$post> }) =>
        parseResponse(client.refresh_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResendPhoneNumberAuthKey() {
  return ['resend_phone_number_auth', '/resend_phone_number_auth', 'POST'] as const
}

export function usePostResendPhoneNumberAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resend_phone_number_auth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.resend_phone_number_auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResendPhoneNumberAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.resend_phone_number_auth.$post> },
      ) => parseResponse(client.resend_phone_number_auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchClubsKey() {
  return ['search_clubs', '/search_clubs', 'POST'] as const
}

export function usePostSearchClubs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_clubs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search_clubs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchClubsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search_clubs.$post> }) =>
        parseResponse(client.search_clubs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchUsersKey() {
  return ['search_users', '/search_users', 'POST'] as const
}

export function usePostSearchUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search_users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search_users.$post> }) =>
        parseResponse(client.search_users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartPhoneNumberAuthKey() {
  return ['start_phone_number_auth', '/start_phone_number_auth', 'POST'] as const
}

export function usePostStartPhoneNumberAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.start_phone_number_auth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.start_phone_number_auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartPhoneNumberAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.start_phone_number_auth.$post> },
      ) => parseResponse(client.start_phone_number_auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateNotificationsKey() {
  return ['update_notifications', '/update_notifications', 'POST'] as const
}

export function usePostUpdateNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.update_notifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.update_notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.update_notifications.$post> },
      ) => parseResponse(client.update_notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateUsernameKey() {
  return ['update_username', '/update_username', 'POST'] as const
}

export function usePostUpdateUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.update_username.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.update_username.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.update_username.$post> }) =>
        parseResponse(client.update_username.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
