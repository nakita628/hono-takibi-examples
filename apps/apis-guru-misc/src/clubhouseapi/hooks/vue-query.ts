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

export function getPostCallPhoneNumberAuthMutationKey() {
  return ['call_phone_number_auth', '/call_phone_number_auth', 'POST'] as const
}

export function getPostCallPhoneNumberAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.call_phone_number_auth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.call_phone_number_auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallPhoneNumberAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.call_phone_number_auth.$post>) {
      return parseResponse(client.call_phone_number_auth.$post(args, options))
    },
  })
}

export function usePostCallPhoneNumberAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.call_phone_number_auth.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.call_phone_number_auth.$post>,
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
  const mutationDefaults = getPostCallPhoneNumberAuthMutationOptions<TError, TOnMutateResult>(
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

export function getCheckForUpdateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_for_update.$get>>,
) {
  return ['check_for_update', '/check_for_update', toValue(args)] as const
}

export function getCheckForUpdateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_for_update.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckForUpdateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.check_for_update.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckForUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_for_update.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>
            >
          >,
          ReturnType<typeof getCheckForUpdateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_for_update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCheckForUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckForUpdateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.check_for_update.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCheckWaitlistStatusMutationKey() {
  return ['check_waitlist_status', '/check_waitlist_status', 'POST'] as const
}

export function getPostCheckWaitlistStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.check_waitlist_status.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCheckWaitlistStatusMutationKey(),
    async mutationFn() {
      return parseResponse(client.check_waitlist_status.$post(undefined, options))
    },
  })
}

export function usePostCheckWaitlistStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_waitlist_status.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostCheckWaitlistStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostCompletePhoneNumberAuthMutationKey() {
  return ['complete_phone_number_auth', '/complete_phone_number_auth', 'POST'] as const
}

export function getPostCompletePhoneNumberAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.complete_phone_number_auth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.complete_phone_number_auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompletePhoneNumberAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.complete_phone_number_auth.$post>) {
      return parseResponse(client.complete_phone_number_auth.$post(args, options))
    },
  })
}

export function usePostCompletePhoneNumberAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.complete_phone_number_auth.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.complete_phone_number_auth.$post>,
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
  const mutationDefaults = getPostCompletePhoneNumberAuthMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateChannelMutationKey() {
  return ['create_channel', '/create_channel', 'POST'] as const
}

export function getPostCreateChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.create_channel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.create_channel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.create_channel.$post>) {
      return parseResponse(client.create_channel.$post(args, options))
    },
  })
}

export function usePostCreateChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.create_channel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.create_channel.$post>,
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
  const mutationDefaults = getPostCreateChannelMutationOptions<TError, TOnMutateResult>(
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

export function getPostFollowMutationKey() {
  return ['follow', '/follow', 'POST'] as const
}

export function getPostFollowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.follow.$post>>>>>,
    TError,
    InferRequestType<typeof client.follow.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFollowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.follow.$post>) {
      return parseResponse(client.follow.$post(args, options))
    },
  })
}

export function usePostFollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.follow.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.follow.$post>,
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
  const mutationDefaults = getPostFollowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetActionableNotificationsQueryKey() {
  return ['get_actionable_notifications', '/get_actionable_notifications'] as const
}

export function getGetActionableNotificationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetActionableNotificationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_actionable_notifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetActionableNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>
              >
            >
          >,
          ReturnType<typeof getGetActionableNotificationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.get_actionable_notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetActionableNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetActionableNotificationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.get_actionable_notifications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetAllTopicsQueryKey() {
  return ['get_all_topics', '/get_all_topics'] as const
}

export function getGetAllTopicsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetAllTopicsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_all_topics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetAllTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
          >,
          ReturnType<typeof getGetAllTopicsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_all_topics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetAllTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetAllTopicsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.get_all_topics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetChannelsQueryKey() {
  return ['get_channels', '/get_channels'] as const
}

export function getGetChannelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetChannelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_channels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>
          >,
          ReturnType<typeof getGetChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetChannelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.get_channels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGetClubMutationKey() {
  return ['get_club', '/get_club', 'POST'] as const
}

export function getPostGetClubMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_club.$post>>>>>,
    TError,
    InferRequestType<typeof client.get_club.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetClubMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_club.$post>) {
      return parseResponse(client.get_club.$post(args, options))
    },
  })
}

export function usePostGetClub<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_club.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.get_club.$post>,
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
  const mutationDefaults = getPostGetClubMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetClubsForTopicMutationKey() {
  return ['get_clubs_for_topic', '/get_clubs_for_topic', 'POST'] as const
}

export function getPostGetClubsForTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_clubs_for_topic.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.get_clubs_for_topic.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetClubsForTopicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_clubs_for_topic.$post>) {
      return parseResponse(client.get_clubs_for_topic.$post(args, options))
    },
  })
}

export function usePostGetClubsForTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_clubs_for_topic.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.get_clubs_for_topic.$post>,
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
  const mutationDefaults = getPostGetClubsForTopicMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetCreateChannelTargetsMutationKey() {
  return ['get_create_channel_targets', '/get_create_channel_targets', 'POST'] as const
}

export function getPostGetCreateChannelTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_create_channel_targets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.get_create_channel_targets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetCreateChannelTargetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_create_channel_targets.$post>) {
      return parseResponse(client.get_create_channel_targets.$post(args, options))
    },
  })
}

export function usePostGetCreateChannelTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_create_channel_targets.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.get_create_channel_targets.$post>,
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
  const mutationDefaults = getPostGetCreateChannelTargetsMutationOptions<TError, TOnMutateResult>(
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

export function getGetEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_events.$get>>,
) {
  return ['get_events', '/get_events', toValue(args)] as const
}

export function getGetEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>
          >,
          ReturnType<typeof getGetEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGetFollowingMutationKey() {
  return ['get_following', '/get_following', 'POST'] as const
}

export function getPostGetFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_following.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.get_following.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetFollowingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_following.$post>) {
      return parseResponse(client.get_following.$post(args, options))
    },
  })
}

export function usePostGetFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_following.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.get_following.$post>,
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
  const mutationDefaults = getPostGetFollowingMutationOptions<TError, TOnMutateResult>(
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

export function getGetNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_notifications.$get>>,
) {
  return ['get_notifications', '/get_notifications', toValue(args)] as const
}

export function getGetNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>
            >
          >,
          ReturnType<typeof getGetNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get_notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGetOnlineFriendsMutationKey() {
  return ['get_online_friends', '/get_online_friends', 'POST'] as const
}

export function getPostGetOnlineFriendsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_online_friends.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.get_online_friends.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetOnlineFriendsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_online_friends.$post>) {
      return parseResponse(client.get_online_friends.$post(args, options))
    },
  })
}

export function usePostGetOnlineFriends<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_online_friends.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.get_online_friends.$post>,
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
  const mutationDefaults = getPostGetOnlineFriendsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetProfileMutationKey() {
  return ['get_profile', '/get_profile', 'POST'] as const
}

export function getPostGetProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_profile.$post>>>>>,
    TError,
    InferRequestType<typeof client.get_profile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_profile.$post>) {
      return parseResponse(client.get_profile.$post(args, options))
    },
  })
}

export function usePostGetProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_profile.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.get_profile.$post>,
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
  const mutationDefaults = getPostGetProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetReleaseNotesMutationKey() {
  return ['get_release_notes', '/get_release_notes', 'POST'] as const
}

export function getPostGetReleaseNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_release_notes.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGetReleaseNotesMutationKey(),
    async mutationFn() {
      return parseResponse(client.get_release_notes.$post(undefined, options))
    },
  })
}

export function usePostGetReleaseNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_release_notes.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostGetReleaseNotesMutationOptions<TError, TOnMutateResult>(
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

export function getGetSettingsQueryKey() {
  return ['get_settings', '/get_settings'] as const
}

export function getGetSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>
          >,
          ReturnType<typeof getGetSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.get_settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGetSuggestedClubInvitesMutationKey() {
  return ['get_suggested_club_invites', '/get_suggested_club_invites', 'POST'] as const
}

export function getPostGetSuggestedClubInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_club_invites.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.get_suggested_club_invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSuggestedClubInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_suggested_club_invites.$post>) {
      return parseResponse(client.get_suggested_club_invites.$post(args, options))
    },
  })
}

export function usePostGetSuggestedClubInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_suggested_club_invites.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.get_suggested_club_invites.$post>,
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
  const mutationDefaults = getPostGetSuggestedClubInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getGetSuggestedFollowsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_suggested_follows_all.$get>>,
) {
  return ['get_suggested_follows_all', '/get_suggested_follows_all', toValue(args)] as const
}

export function getGetSuggestedFollowsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_suggested_follows_all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetSuggestedFollowsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_suggested_follows_all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetSuggestedFollowsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_suggested_follows_all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>
              >
            >
          >,
          ReturnType<typeof getGetSuggestedFollowsAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetSuggestedFollowsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetSuggestedFollowsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get_suggested_follows_all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGetSuggestedFollowsFriendsOnlyMutationKey() {
  return [
    'get_suggested_follows_friends_only',
    '/get_suggested_follows_friends_only',
    'POST',
  ] as const
}

export function getPostGetSuggestedFollowsFriendsOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.get_suggested_follows_friends_only.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.get_suggested_follows_friends_only.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSuggestedFollowsFriendsOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.get_suggested_follows_friends_only.$post>,
    ) {
      return parseResponse(client.get_suggested_follows_friends_only.$post(args, options))
    },
  })
}

export function usePostGetSuggestedFollowsFriendsOnly<
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
                Awaited<ReturnType<typeof client.get_suggested_follows_friends_only.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.get_suggested_follows_friends_only.$post>,
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
  const mutationDefaults = getPostGetSuggestedFollowsFriendsOnlyMutationOptions<
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

export function getPostGetSuggestedFollowsSimilarMutationKey() {
  return ['get_suggested_follows_similar', '/get_suggested_follows_similar', 'POST'] as const
}

export function getPostGetSuggestedFollowsSimilarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_follows_similar.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.get_suggested_follows_similar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSuggestedFollowsSimilarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_suggested_follows_similar.$post>) {
      return parseResponse(client.get_suggested_follows_similar.$post(args, options))
    },
  })
}

export function usePostGetSuggestedFollowsSimilar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.get_suggested_follows_similar.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.get_suggested_follows_similar.$post>,
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
  const mutationDefaults = getPostGetSuggestedFollowsSimilarMutationOptions<
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

export function getPostGetSuggestedInvitesMutationKey() {
  return ['get_suggested_invites', '/get_suggested_invites', 'POST'] as const
}

export function getPostGetSuggestedInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_invites.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.get_suggested_invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSuggestedInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_suggested_invites.$post>) {
      return parseResponse(client.get_suggested_invites.$post(args, options))
    },
  })
}

export function usePostGetSuggestedInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_invites.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.get_suggested_invites.$post>,
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
  const mutationDefaults = getPostGetSuggestedInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetSuggestedSpeakersMutationKey() {
  return ['get_suggested_speakers', '/get_suggested_speakers', 'POST'] as const
}

export function getPostGetSuggestedSpeakersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_speakers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.get_suggested_speakers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSuggestedSpeakersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_suggested_speakers.$post>) {
      return parseResponse(client.get_suggested_speakers.$post(args, options))
    },
  })
}

export function usePostGetSuggestedSpeakers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_suggested_speakers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.get_suggested_speakers.$post>,
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
  const mutationDefaults = getPostGetSuggestedSpeakersMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetTopicMutationKey() {
  return ['get_topic', '/get_topic', 'POST'] as const
}

export function getPostGetTopicMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_topic.$post>>>>>,
    TError,
    InferRequestType<typeof client.get_topic.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTopicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get_topic.$post>) {
      return parseResponse(client.get_topic.$post(args, options))
    },
  })
}

export function usePostGetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_topic.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.get_topic.$post>,
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
  const mutationDefaults = getPostGetTopicMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetUsersForTopicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_users_for_topic.$get>>,
) {
  return ['get_users_for_topic', '/get_users_for_topic', toValue(args)] as const
}

export function getGetUsersForTopicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_users_for_topic.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetUsersForTopicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_users_for_topic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetUsersForTopic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_users_for_topic.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>
            >
          >,
          ReturnType<typeof getGetUsersForTopicQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_users_for_topic.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetUsersForTopicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetUsersForTopicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get_users_for_topic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetWelcomeChannelQueryKey() {
  return ['get_welcome_channel', '/get_welcome_channel'] as const
}

export function getGetWelcomeChannelQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetWelcomeChannelQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_welcome_channel.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetWelcomeChannel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>
            >
          >,
          ReturnType<typeof getGetWelcomeChannelQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_welcome_channel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetWelcomeChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetWelcomeChannelQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.get_welcome_channel.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInviteFromWaitlistMutationKey() {
  return ['invite_from_waitlist', '/invite_from_waitlist', 'POST'] as const
}

export function getPostInviteFromWaitlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.invite_from_waitlist.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.invite_from_waitlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInviteFromWaitlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invite_from_waitlist.$post>) {
      return parseResponse(client.invite_from_waitlist.$post(args, options))
    },
  })
}

export function usePostInviteFromWaitlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invite_from_waitlist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invite_from_waitlist.$post>,
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
  const mutationDefaults = getPostInviteFromWaitlistMutationOptions<TError, TOnMutateResult>(
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

export function getPostInviteToAppMutationKey() {
  return ['invite_to_app', '/invite_to_app', 'POST'] as const
}

export function getPostInviteToAppMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite_to_app.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invite_to_app.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInviteToAppMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invite_to_app.$post>) {
      return parseResponse(client.invite_to_app.$post(args, options))
    },
  })
}

export function usePostInviteToApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite_to_app.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invite_to_app.$post>,
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
  const mutationDefaults = getPostInviteToAppMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJoinChannelMutationKey() {
  return ['join_channel', '/join_channel', 'POST'] as const
}

export function getPostJoinChannelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.join_channel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.join_channel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJoinChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.join_channel.$post>) {
      return parseResponse(client.join_channel.$post(args, options))
    },
  })
}

export function usePostJoinChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.join_channel.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.join_channel.$post>,
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
  const mutationDefaults = getPostJoinChannelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLeaveChannelMutationKey() {
  return ['leave_channel', '/leave_channel', 'POST'] as const
}

export function getPostLeaveChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leave_channel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.leave_channel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLeaveChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.leave_channel.$post>) {
      return parseResponse(client.leave_channel.$post(args, options))
    },
  })
}

export function usePostLeaveChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.leave_channel.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.leave_channel.$post>,
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
  const mutationDefaults = getPostLeaveChannelMutationOptions<TError, TOnMutateResult>(
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

export function getPostMeMutationKey() {
  return ['me', '/me', 'POST'] as const
}

export function getPostMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
    TError,
    InferRequestType<typeof client.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.$post>) {
      return parseResponse(client.me.$post(args, options))
    },
  })
}

export function usePostMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
          TError,
          InferRequestType<typeof client.me.$post>,
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
  const mutationDefaults = getPostMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRecordActionTrailsMutationKey() {
  return ['record_action_trails', '/record_action_trails', 'POST'] as const
}

export function getPostRecordActionTrailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.record_action_trails.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.record_action_trails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecordActionTrailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.record_action_trails.$post>) {
      return parseResponse(client.record_action_trails.$post(args, options))
    },
  })
}

export function usePostRecordActionTrails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.record_action_trails.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.record_action_trails.$post>,
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
  const mutationDefaults = getPostRecordActionTrailsMutationOptions<TError, TOnMutateResult>(
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

export function getPostRefreshTokenMutationKey() {
  return ['refresh_token', '/refresh_token', 'POST'] as const
}

export function getPostRefreshTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.refresh_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefreshTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refresh_token.$post>) {
      return parseResponse(client.refresh_token.$post(args, options))
    },
  })
}

export function usePostRefreshToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh_token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.refresh_token.$post>,
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
  const mutationDefaults = getPostRefreshTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostResendPhoneNumberAuthMutationKey() {
  return ['resend_phone_number_auth', '/resend_phone_number_auth', 'POST'] as const
}

export function getPostResendPhoneNumberAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.resend_phone_number_auth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.resend_phone_number_auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResendPhoneNumberAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resend_phone_number_auth.$post>) {
      return parseResponse(client.resend_phone_number_auth.$post(args, options))
    },
  })
}

export function usePostResendPhoneNumberAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resend_phone_number_auth.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.resend_phone_number_auth.$post>,
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
  const mutationDefaults = getPostResendPhoneNumberAuthMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchClubsMutationKey() {
  return ['search_clubs', '/search_clubs', 'POST'] as const
}

export function getPostSearchClubsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_clubs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search_clubs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchClubsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search_clubs.$post>) {
      return parseResponse(client.search_clubs.$post(args, options))
    },
  })
}

export function usePostSearchClubs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_clubs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search_clubs.$post>,
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
  const mutationDefaults = getPostSearchClubsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSearchUsersMutationKey() {
  return ['search_users', '/search_users', 'POST'] as const
}

export function getPostSearchUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search_users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search_users.$post>) {
      return parseResponse(client.search_users.$post(args, options))
    },
  })
}

export function usePostSearchUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search_users.$post>,
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
  const mutationDefaults = getPostSearchUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStartPhoneNumberAuthMutationKey() {
  return ['start_phone_number_auth', '/start_phone_number_auth', 'POST'] as const
}

export function getPostStartPhoneNumberAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.start_phone_number_auth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.start_phone_number_auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartPhoneNumberAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.start_phone_number_auth.$post>) {
      return parseResponse(client.start_phone_number_auth.$post(args, options))
    },
  })
}

export function usePostStartPhoneNumberAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.start_phone_number_auth.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.start_phone_number_auth.$post>,
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
  const mutationDefaults = getPostStartPhoneNumberAuthMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateNotificationsMutationKey() {
  return ['update_notifications', '/update_notifications', 'POST'] as const
}

export function getPostUpdateNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.update_notifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.update_notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.update_notifications.$post>) {
      return parseResponse(client.update_notifications.$post(args, options))
    },
  })
}

export function usePostUpdateNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.update_notifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.update_notifications.$post>,
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
  const mutationDefaults = getPostUpdateNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateUsernameMutationKey() {
  return ['update_username', '/update_username', 'POST'] as const
}

export function getPostUpdateUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.update_username.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.update_username.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateUsernameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.update_username.$post>) {
      return parseResponse(client.update_username.$post(args, options))
    },
  })
}

export function usePostUpdateUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.update_username.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.update_username.$post>,
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
  const mutationDefaults = getPostUpdateUsernameMutationOptions<TError, TOnMutateResult>(
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
