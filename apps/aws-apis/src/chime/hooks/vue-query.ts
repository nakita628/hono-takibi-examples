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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAppInstanceUsersKey() {
  return ['app-instance-users'] as const
}

export function getAppInstanceUsersAppInstanceArnKey() {
  return ['app-instance-users#app-instance-arn'] as const
}

export function getAppInstancesKey() {
  return ['app-instances'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getChannelsAppInstanceArnKey() {
  return ['channels#app-instance-arn'] as const
}

export function getChannelsScopeAppInstanceUserMembershipsKey() {
  return ['channels#scope=app-instance-user-memberships'] as const
}

export function getChannelsScopeAppInstanceUserModeratedChannelsKey() {
  return ['channels#scope=app-instance-user-moderated-channels'] as const
}

export function getEmergencyCallingKey() {
  return ['emergency-calling'] as const
}

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getMediaCapturePipelinesKey() {
  return ['media-capture-pipelines'] as const
}

export function getMeetingsKey() {
  return ['meetings'] as const
}

export function getMeetingsOperationCreateAttendeesKey() {
  return ['meetings#operation=create-attendees'] as const
}

export function getPhoneNumberCountriesProductTypeKey() {
  return ['phone-number-countries#product-type'] as const
}

export function getPhoneNumberOrdersKey() {
  return ['phone-number-orders'] as const
}

export function getPhoneNumbersKey() {
  return ['phone-numbers'] as const
}

export function getPhoneNumbersOperationBatchDeleteKey() {
  return ['phone-numbers#operation=batch-delete'] as const
}

export function getPhoneNumbersOperationBatchUpdateKey() {
  return ['phone-numbers#operation=batch-update'] as const
}

export function getSearchTypePhoneNumbersKey() {
  return ['search#type=phone-numbers'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSipMediaApplicationsKey() {
  return ['sip-media-applications'] as const
}

export function getSipRulesKey() {
  return ['sip-rules'] as const
}

export function getTagsArnKey() {
  return ['tags#arn'] as const
}

export function getTagsOperationTagResourceKey() {
  return ['tags#operation=tag-resource'] as const
}

export function getTagsOperationUntagResourceKey() {
  return ['tags#operation=untag-resource'] as const
}

export function getVoiceConnectorGroupsKey() {
  return ['voice-connector-groups'] as const
}

export function getVoiceConnectorsKey() {
  return ['voice-connectors'] as const
}

export function getPostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/users/:userId#operation=associate-phone-number',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId#operation=associate-phone-number'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumber<
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
                    (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
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
    getPostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberMutationOptions<
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

export function getPostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId#operation=associate-phone-numbers',
    'POST',
  ] as const
}

export function getPostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbers<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
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
    getPostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersMutationOptions<
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

export function getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersMutationKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId#operation=associate-phone-numbers',
    'POST',
  ] as const
}

export function getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connector-groups'][
          ':voiceConnectorGroupId#operation=associate-phone-numbers'
        ].$post(args, options),
      )
    },
  })
}

export function usePostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbers<
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
                    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
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
    getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersMutationOptions<
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

export function getPostAccountsAccountIdOperationAssociateSigninDelegateGroupsMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId#operation=associate-signin-delegate-groups',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdOperationAssociateSigninDelegateGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdOperationAssociateSigninDelegateGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId#operation=associate-signin-delegate-groups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdOperationAssociateSigninDelegateGroups<
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
                    (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
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
    getPostAccountsAccountIdOperationAssociateSigninDelegateGroupsMutationOptions<
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

export function getPostMeetingsMeetingIdAttendeesOperationBatchCreateMutationKey() {
  return ['meetings', '/meetings/:meetingId/attendees#operation=batch-create', 'POST'] as const
}

export function getPostMeetingsMeetingIdAttendeesOperationBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdAttendeesOperationBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId']['attendees#operation=batch-create'].$post(args, options),
      )
    },
  })
}

export function usePostMeetingsMeetingIdAttendeesOperationBatchCreate<
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
                    (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
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
  const mutationDefaults = getPostMeetingsMeetingIdAttendeesOperationBatchCreateMutationOptions<
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

export function getPostChannelsChannelArnMembershipsOperationBatchCreateMutationKey() {
  return ['channels', '/channels/:channelArn/memberships#operation=batch-create', 'POST'] as const
}

export function getPostChannelsChannelArnMembershipsOperationBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelArnMembershipsOperationBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channelArn']['memberships#operation=batch-create'].$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelArnMembershipsOperationBatchCreate<
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
                    (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
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
  const mutationDefaults = getPostChannelsChannelArnMembershipsOperationBatchCreateMutationOptions<
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

export function getPostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/rooms/:roomId/memberships#operation=batch-create',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId']['memberships#operation=batch-create'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreate<
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
                    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
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
    getPostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateMutationOptions<
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

export function getPostPhoneNumbersOperationBatchDeleteMutationKey() {
  return [
    'phone-numbers#operation=batch-delete',
    '/phone-numbers#operation=batch-delete',
    'POST',
  ] as const
}

export function getPostPhoneNumbersOperationBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersOperationBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>,
    ) {
      return parseResponse(client['phone-numbers#operation=batch-delete'].$post(args, options))
    },
  })
}

export function usePostPhoneNumbersOperationBatchDelete<
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
                  ReturnType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>,
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
  const mutationDefaults = getPostPhoneNumbersOperationBatchDeleteMutationOptions<
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

export function getPostAccountsAccountIdUsersOperationSuspendMutationKey() {
  return ['accounts', '/accounts/:accountId/users#operation=suspend', 'POST'] as const
}

export function getPostAccountsAccountIdUsersOperationSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['users#operation=suspend']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersOperationSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users#operation=suspend']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId']['users#operation=suspend'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersOperationSuspend<
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
                    (typeof client.accounts)[':accountId']['users#operation=suspend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=suspend']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdUsersOperationSuspendMutationOptions<
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

export function getPostAccountsAccountIdUsersOperationUnsuspendMutationKey() {
  return ['accounts', '/accounts/:accountId/users#operation=unsuspend', 'POST'] as const
}

export function getPostAccountsAccountIdUsersOperationUnsuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersOperationUnsuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId']['users#operation=unsuspend'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersOperationUnsuspend<
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
                    (typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdUsersOperationUnsuspendMutationOptions<
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

export function getPostPhoneNumbersOperationBatchUpdateMutationKey() {
  return [
    'phone-numbers#operation=batch-update',
    '/phone-numbers#operation=batch-update',
    'POST',
  ] as const
}

export function getPostPhoneNumbersOperationBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers#operation=batch-update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-numbers#operation=batch-update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersOperationBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-numbers#operation=batch-update']['$post']>,
    ) {
      return parseResponse(client['phone-numbers#operation=batch-update'].$post(args, options))
    },
  })
}

export function usePostPhoneNumbersOperationBatchUpdate<
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
                  ReturnType<(typeof client)['phone-numbers#operation=batch-update']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-numbers#operation=batch-update']['$post']>,
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
  const mutationDefaults = getPostPhoneNumbersOperationBatchUpdateMutationOptions<
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

export function getAccountsAccountIdUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/users', keyArgs] as const
}

export function getAccountsAccountIdUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdUsersMutationKey() {
  return ['accounts', '/accounts/:accountId/users', 'POST'] as const
}

export function getPostAccountsAccountIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].users.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['users']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdUsersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function usePostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
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
  const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['app-instances']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['app-instances', '/app-instances', keyArgs] as const
}

export function getAppInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['app-instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['app-instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
            >
          >,
          ReturnType<typeof getAppInstancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppInstancesMutationKey() {
  return ['app-instances', '/app-instances', 'POST'] as const
}

export function getPostAppInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['app-instances']['$post']>) {
      return parseResponse(client['app-instances'].$post(args, options))
    },
  })
}

export function usePostAppInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['app-instances']['$post']>,
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
  const mutationDefaults = getPostAppInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getAppInstancesAppInstanceArnAdminsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['app-instances', '/app-instances/:appInstanceArn/admins', keyArgs] as const
}

export function getAppInstancesAppInstanceArnAdminsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstancesAppInstanceArnAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstancesAppInstanceArnAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
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
                  ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppInstancesAppInstanceArnAdminsQueryKey>
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
          Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesAppInstanceArnAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstancesAppInstanceArnAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instances'][':appInstanceArn'].admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppInstancesAppInstanceArnAdminsMutationKey() {
  return ['app-instances', '/app-instances/:appInstanceArn/admins', 'POST'] as const
}

export function getPostAppInstancesAppInstanceArnAdminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppInstancesAppInstanceArnAdminsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-instances'][':appInstanceArn']['admins']['$post']
      >,
    ) {
      return parseResponse(client['app-instances'][':appInstanceArn'].admins.$post(args, options))
    },
  })
}

export function usePostAppInstancesAppInstanceArnAdmins<
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
                  ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$post']>,
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
  const mutationDefaults = getPostAppInstancesAppInstanceArnAdminsMutationOptions<
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

export function getPostAppInstanceUsersMutationKey() {
  return ['app-instance-users', '/app-instance-users', 'POST'] as const
}

export function getPostAppInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instance-users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-instance-users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppInstanceUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['app-instance-users']['$post']>) {
      return parseResponse(client['app-instance-users'].$post(args, options))
    },
  })
}

export function usePostAppInstanceUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['app-instance-users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['app-instance-users']['$post']>,
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
  const mutationDefaults = getPostAppInstanceUsersMutationOptions<TError, TOnMutateResult>(
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

export function getMeetingsMeetingIdAttendeesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['meetings', '/meetings/:meetingId/attendees', keyArgs] as const
}

export function getMeetingsMeetingIdAttendeesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdAttendeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].attendees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdAttendees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdAttendeesQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdAttendeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdAttendeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].attendees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMeetingsMeetingIdAttendeesMutationKey() {
  return ['meetings', '/meetings/:meetingId/attendees', 'POST'] as const
}

export function getPostMeetingsMeetingIdAttendeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdAttendeesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$post']>,
    ) {
      return parseResponse(client.meetings[':meetingId'].attendees.$post(args, options))
    },
  })
}

export function usePostMeetingsMeetingIdAttendees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$post']>,
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
  const mutationDefaults = getPostMeetingsMeetingIdAttendeesMutationOptions<
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

export function getAccountsAccountIdBotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/bots', keyArgs] as const
}

export function getAccountsAccountIdBotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].bots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBotsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].bots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdBotsMutationKey() {
  return ['accounts', '/accounts/:accountId/bots', 'POST'] as const
}

export function getPostAccountsAccountIdBotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['bots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdBotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].bots.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdBots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['bots']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdBotsMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsMutationKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function getPostChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    InferRequestType<typeof client.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$post>) {
      return parseResponse(client.channels.$post(args, options))
    },
  })
}

export function usePostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.$post>,
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
  const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChannelsChannelArnBansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/bans', keyArgs] as const
}

export function getChannelsChannelArnBansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnBansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].bans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnBans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnBansQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnBansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnBansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].bans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelArnBansMutationKey() {
  return ['channels', '/channels/:channelArn/bans', 'POST'] as const
}

export function getPostChannelsChannelArnBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['bans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelArnBansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$post']>,
    ) {
      return parseResponse(client.channels[':channelArn'].bans.$post(args, options))
    },
  })
}

export function usePostChannelsChannelArnBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['bans']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelArnBansMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelArnMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/memberships', keyArgs] as const
}

export function getChannelsChannelArnMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelArnMembershipsMutationKey() {
  return ['channels', '/channels/:channelArn/memberships', 'POST'] as const
}

export function getPostChannelsChannelArnMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelArnMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$post']>,
    ) {
      return parseResponse(client.channels[':channelArn'].memberships.$post(args, options))
    },
  })
}

export function usePostChannelsChannelArnMemberships<
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
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelArnMembershipsMutationOptions<
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

export function getChannelsChannelArnModeratorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/moderators', keyArgs] as const
}

export function getChannelsChannelArnModeratorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].moderators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnModeratorsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].moderators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelArnModeratorsMutationKey() {
  return ['channels', '/channels/:channelArn/moderators', 'POST'] as const
}

export function getPostChannelsChannelArnModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelArnModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$post']>,
    ) {
      return parseResponse(client.channels[':channelArn'].moderators.$post(args, options))
    },
  })
}

export function usePostChannelsChannelArnModerators<
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
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelArnModeratorsMutationOptions<
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

export function getMediaCapturePipelinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['media-capture-pipelines']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['media-capture-pipelines', '/media-capture-pipelines', keyArgs] as const
}

export function getMediaCapturePipelinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['media-capture-pipelines']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaCapturePipelinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-capture-pipelines'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaCapturePipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['media-capture-pipelines']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMediaCapturePipelinesQueryKey>
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
          Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaCapturePipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaCapturePipelinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-capture-pipelines'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMediaCapturePipelinesMutationKey() {
  return ['media-capture-pipelines', '/media-capture-pipelines', 'POST'] as const
}

export function getPostMediaCapturePipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['media-capture-pipelines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaCapturePipelinesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['media-capture-pipelines']['$post']>) {
      return parseResponse(client['media-capture-pipelines'].$post(args, options))
    },
  })
}

export function usePostMediaCapturePipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['media-capture-pipelines']['$post']>,
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
  const mutationDefaults = getPostMediaCapturePipelinesMutationOptions<TError, TOnMutateResult>(
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

export function getMeetingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.meetings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['meetings', '/meetings', keyArgs] as const
}

export function getMeetingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.meetings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeetings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.meetings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>
          >,
          ReturnType<typeof getMeetingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeetingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMeetingsMutationKey() {
  return ['meetings', '/meetings', 'POST'] as const
}

export function getPostMeetingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$post>>>>>,
    TError,
    InferRequestType<typeof client.meetings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.meetings.$post>) {
      return parseResponse(client.meetings.$post(args, options))
    },
  })
}

export function usePostMeetings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.meetings.$post>,
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
  const mutationDefaults = getPostMeetingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMeetingsMeetingIdDialOutsMutationKey() {
  return ['meetings', '/meetings/:meetingId/dial-outs', 'POST'] as const
}

export function getPostMeetingsMeetingIdDialOutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdDialOutsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>,
    ) {
      return parseResponse(client.meetings[':meetingId']['dial-outs'].$post(args, options))
    },
  })
}

export function usePostMeetingsMeetingIdDialOuts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>,
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
  const mutationDefaults = getPostMeetingsMeetingIdDialOutsMutationOptions<TError, TOnMutateResult>(
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

export function getPostMeetingsOperationCreateAttendeesMutationKey() {
  return [
    'meetings#operation=create-attendees',
    '/meetings#operation=create-attendees',
    'POST',
  ] as const
}

export function getPostMeetingsOperationCreateAttendeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['meetings#operation=create-attendees']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['meetings#operation=create-attendees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsOperationCreateAttendeesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['meetings#operation=create-attendees']['$post']>,
    ) {
      return parseResponse(client['meetings#operation=create-attendees'].$post(args, options))
    },
  })
}

export function usePostMeetingsOperationCreateAttendees<
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
                Awaited<ReturnType<(typeof client)['meetings#operation=create-attendees']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['meetings#operation=create-attendees']['$post']>,
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
  const mutationDefaults = getPostMeetingsOperationCreateAttendeesMutationOptions<
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

export function getPhoneNumberOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number-orders']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['phone-number-orders', '/phone-number-orders', keyArgs] as const
}

export function getPhoneNumberOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number-orders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumberOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-number-orders'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumberOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number-orders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneNumberOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumberOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-number-orders'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPhoneNumberOrdersMutationKey() {
  return ['phone-number-orders', '/phone-number-orders', 'POST'] as const
}

export function getPostPhoneNumberOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number-orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumberOrdersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-number-orders']['$post']>) {
      return parseResponse(client['phone-number-orders'].$post(args, options))
    },
  })
}

export function usePostPhoneNumberOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number-orders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-number-orders']['$post']>,
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
  const mutationDefaults = getPostPhoneNumberOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdProxySessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdProxySessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVoiceConnectorsVoiceConnectorIdProxySessionsMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/proxy-sessions', 'POST'] as const
}

export function getPostVoiceConnectorsVoiceConnectorIdProxySessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceConnectorsVoiceConnectorIdProxySessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$post(args, options),
      )
    },
  })
}

export function usePostVoiceConnectorsVoiceConnectorIdProxySessions<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
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
  const mutationDefaults = getPostVoiceConnectorsVoiceConnectorIdProxySessionsMutationOptions<
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

export function getAccountsAccountIdRoomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/rooms', keyArgs] as const
}

export function getAccountsAccountIdRoomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].rooms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdRoomsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].rooms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdRoomsMutationKey() {
  return ['accounts', '/accounts/:accountId/rooms', 'POST'] as const
}

export function getPostAccountsAccountIdRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdRoomsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].rooms.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdRoomsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountIdRoomsRoomIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships', keyArgs] as const
}

export function getAccountsAccountIdRoomsRoomIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdRoomsRoomIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdRoomsRoomIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
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
                    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
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
                    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdRoomsRoomIdMembershipsQueryKey>
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
              (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdRoomsRoomIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdRoomsRoomIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsMutationKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships', 'POST'] as const
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdRoomsRoomIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].memberships.$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdRoomsRoomIdMemberships<
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
                    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdRoomsRoomIdMembershipsMutationOptions<
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

export function getSipMediaApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-media-applications']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sip-media-applications', '/sip-media-applications', keyArgs] as const
}

export function getSipMediaApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-media-applications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSipMediaApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sip-media-applications'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSipMediaApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-media-applications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSipMediaApplicationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSipMediaApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSipMediaApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sip-media-applications'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSipMediaApplicationsMutationKey() {
  return ['sip-media-applications', '/sip-media-applications', 'POST'] as const
}

export function getPostSipMediaApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sip-media-applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sip-media-applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSipMediaApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sip-media-applications']['$post']>) {
      return parseResponse(client['sip-media-applications'].$post(args, options))
    },
  })
}

export function usePostSipMediaApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sip-media-applications']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sip-media-applications']['$post']>,
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
  const mutationDefaults = getPostSipMediaApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSipMediaApplicationsSipMediaApplicationIdCallsMutationKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/calls',
    'POST',
  ] as const
}

export function getPostSipMediaApplicationsSipMediaApplicationIdCallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSipMediaApplicationsSipMediaApplicationIdCallsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
      >,
    ) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId'].calls.$post(args, options),
      )
    },
  })
}

export function usePostSipMediaApplicationsSipMediaApplicationIdCalls<
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
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
  const mutationDefaults = getPostSipMediaApplicationsSipMediaApplicationIdCallsMutationOptions<
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

export function getSipRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-rules']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sip-rules', '/sip-rules', keyArgs] as const
}

export function getSipRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-rules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSipRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sip-rules'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSipRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-rules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>
            >
          >,
          ReturnType<typeof getSipRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSipRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSipRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sip-rules'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSipRulesMutationKey() {
  return ['sip-rules', '/sip-rules', 'POST'] as const
}

export function getPostSipRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['sip-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSipRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sip-rules']['$post']>) {
      return parseResponse(client['sip-rules'].$post(args, options))
    },
  })
}

export function usePostSipRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['sip-rules']['$post']>,
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
  const mutationDefaults = getPostSipRulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdUsersOperationCreateMutationKey() {
  return ['accounts', '/accounts/:accountId/users#operation=create', 'POST'] as const
}

export function getPostAccountsAccountIdUsersOperationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['users#operation=create']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersOperationCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users#operation=create']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId']['users#operation=create'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersOperationCreate<
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
                    (typeof client.accounts)[':accountId']['users#operation=create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=create']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdUsersOperationCreateMutationOptions<
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

export function getVoiceConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['voice-connectors']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['voice-connectors', '/voice-connectors', keyArgs] as const
}

export function getVoiceConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['voice-connectors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['voice-connectors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
            >
          >,
          ReturnType<typeof getVoiceConnectorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVoiceConnectorsMutationKey() {
  return ['voice-connectors', '/voice-connectors', 'POST'] as const
}

export function getPostVoiceConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['voice-connectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['voice-connectors']['$post']>) {
      return parseResponse(client['voice-connectors'].$post(args, options))
    },
  })
}

export function usePostVoiceConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['voice-connectors']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['voice-connectors']['$post']>,
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
  const mutationDefaults = getPostVoiceConnectorsMutationOptions<TError, TOnMutateResult>(
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

export function getVoiceConnectorGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['voice-connector-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['voice-connector-groups', '/voice-connector-groups', keyArgs] as const
}

export function getVoiceConnectorGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['voice-connector-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connector-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['voice-connector-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connector-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVoiceConnectorGroupsMutationKey() {
  return ['voice-connector-groups', '/voice-connector-groups', 'POST'] as const
}

export function getPostVoiceConnectorGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['voice-connector-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['voice-connector-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceConnectorGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['voice-connector-groups']['$post']>) {
      return parseResponse(client['voice-connector-groups'].$post(args, options))
    },
  })
}

export function usePostVoiceConnectorGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['voice-connector-groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['voice-connector-groups']['$post']>,
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
  const mutationDefaults = getPostVoiceConnectorGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId', keyArgs] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId', 'POST'] as const
}

export function getPostAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':accountId']['$post']>) {
      return parseResponse(client.accounts[':accountId'].$post(args, options))
    },
  })
}

export function usePostAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':accountId']['$delete']>) {
      return parseResponse(client.accounts[':accountId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
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
  const mutationDefaults = getDeleteAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppInstancesAppInstanceArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['app-instances', '/app-instances/:appInstanceArn', keyArgs] as const
}

export function getAppInstancesAppInstanceArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstancesAppInstanceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstancesAppInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppInstancesAppInstanceArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesAppInstanceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstancesAppInstanceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instances'][':appInstanceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppInstancesAppInstanceArnMutationKey() {
  return ['app-instances', '/app-instances/:appInstanceArn', 'PUT'] as const
}

export function getPutAppInstancesAppInstanceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppInstancesAppInstanceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$put']>,
    ) {
      return parseResponse(client['app-instances'][':appInstanceArn'].$put(args, options))
    },
  })
}

export function usePutAppInstancesAppInstanceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$put']>,
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
  const mutationDefaults = getPutAppInstancesAppInstanceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppInstancesAppInstanceArnMutationKey() {
  return ['app-instances', '/app-instances/:appInstanceArn', 'DELETE'] as const
}

export function getDeleteAppInstancesAppInstanceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppInstancesAppInstanceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>,
    ) {
      return parseResponse(client['app-instances'][':appInstanceArn'].$delete(args, options))
    },
  })
}

export function useDeleteAppInstancesAppInstanceArn<
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
                  Awaited<
                    ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>,
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
  const mutationDefaults = getDeleteAppInstancesAppInstanceArnMutationOptions<
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

export function getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/admins/:appInstanceAdminArn',
    keyArgs,
  ] as const
}

export function getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAppInstancesAppInstanceArnAdminsAppInstanceAdminArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
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
                    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
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
                    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey>
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
              (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnMutationKey() {
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/admins/:appInstanceAdminArn',
    'DELETE',
  ] as const
}

export function getDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArn<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
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
    getDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnMutationOptions<
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

export function getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/streaming-configurations',
    keyArgs,
  ] as const
}

export function getAppInstancesAppInstanceArnStreamingConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['streaming-configurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstancesAppInstanceArnStreamingConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
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
                    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
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
                    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey>
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
              (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instances'][':appInstanceArn']['streaming-configurations'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppInstancesAppInstanceArnStreamingConfigurationsMutationKey() {
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/streaming-configurations',
    'PUT',
  ] as const
}

export function getPutAppInstancesAppInstanceArnStreamingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppInstancesAppInstanceArnStreamingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
      >,
    ) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['streaming-configurations'].$put(args, options),
      )
    },
  })
}

export function usePutAppInstancesAppInstanceArnStreamingConfigurations<
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
                    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
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
  const mutationDefaults = getPutAppInstancesAppInstanceArnStreamingConfigurationsMutationOptions<
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

export function getDeleteAppInstancesAppInstanceArnStreamingConfigurationsMutationKey() {
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/streaming-configurations',
    'DELETE',
  ] as const
}

export function getDeleteAppInstancesAppInstanceArnStreamingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppInstancesAppInstanceArnStreamingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['streaming-configurations'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAppInstancesAppInstanceArnStreamingConfigurations<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
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
    getDeleteAppInstancesAppInstanceArnStreamingConfigurationsMutationOptions<
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

export function getAppInstanceUsersAppInstanceUserArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', keyArgs] as const
}

export function getAppInstanceUsersAppInstanceUserArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstanceUsersAppInstanceUserArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instance-users'][':appInstanceUserArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstanceUsersAppInstanceUserArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
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
                  ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppInstanceUsersAppInstanceUserArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstanceUsersAppInstanceUserArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstanceUsersAppInstanceUserArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instance-users'][':appInstanceUserArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppInstanceUsersAppInstanceUserArnMutationKey() {
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', 'PUT'] as const
}

export function getPutAppInstanceUsersAppInstanceUserArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppInstanceUsersAppInstanceUserArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>,
    ) {
      return parseResponse(client['app-instance-users'][':appInstanceUserArn'].$put(args, options))
    },
  })
}

export function usePutAppInstanceUsersAppInstanceUserArn<
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
                  ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>,
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
  const mutationDefaults = getPutAppInstanceUsersAppInstanceUserArnMutationOptions<
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

export function getDeleteAppInstanceUsersAppInstanceUserArnMutationKey() {
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', 'DELETE'] as const
}

export function getDeleteAppInstanceUsersAppInstanceUserArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppInstanceUsersAppInstanceUserArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-instance-users'][':appInstanceUserArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAppInstanceUsersAppInstanceUserArn<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']>,
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
  const mutationDefaults = getDeleteAppInstanceUsersAppInstanceUserArnMutationOptions<
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

export function getMeetingsMeetingIdAttendeesAttendeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId', keyArgs] as const
}

export function getMeetingsMeetingIdAttendeesAttendeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdAttendeesAttendeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdAttendeesAttendeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
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
                    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
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
                    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdQueryKey>
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
            ReturnType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdAttendeesAttendeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMeetingsMeetingIdAttendeesAttendeeIdMutationKey() {
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdAttendeesAttendeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdAttendeesAttendeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMeetingsMeetingIdAttendeesAttendeeId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']
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
  const mutationDefaults = getDeleteMeetingsMeetingIdAttendeesAttendeeIdMutationOptions<
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

export function getChannelsChannelArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn', keyArgs] as const
}

export function getChannelsChannelArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelArnMutationKey() {
  return ['channels', '/channels/:channelArn', 'PUT'] as const
}

export function getPutChannelsChannelArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channelArn']['$put']>) {
      return parseResponse(client.channels[':channelArn'].$put(args, options))
    },
  })
}

export function usePutChannelsChannelArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['$put']>,
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
  const mutationDefaults = getPutChannelsChannelArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelsChannelArnMutationKey() {
  return ['channels', '/channels/:channelArn', 'DELETE'] as const
}

export function getDeleteChannelsChannelArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channelArn']['$delete']>) {
      return parseResponse(client.channels[':channelArn'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.channels)[':channelArn']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['$delete']>,
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
  const mutationDefaults = getDeleteChannelsChannelArnMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelArnBansMemberArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/bans/:memberArn', keyArgs] as const
}

export function getChannelsChannelArnBansMemberArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnBansMemberArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].bans[':memberArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnBansMemberArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
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
                  ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnBansMemberArnQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnBansMemberArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnBansMemberArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].bans[':memberArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsChannelArnBansMemberArnMutationKey() {
  return ['channels', '/channels/:channelArn/bans/:memberArn', 'DELETE'] as const
}

export function getDeleteChannelsChannelArnBansMemberArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelArnBansMemberArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']
      >,
    ) {
      return parseResponse(client.channels[':channelArn'].bans[':memberArn'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelArnBansMemberArn<
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
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelArnBansMemberArnMutationOptions<
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

export function getChannelsChannelArnMembershipsMemberArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/memberships/:memberArn', keyArgs] as const
}

export function getChannelsChannelArnMembershipsMemberArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnMembershipsMemberArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].memberships[':memberArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnMembershipsMemberArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']>
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
                    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
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
                    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnMembershipsMemberArnQueryKey>
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
            ReturnType<(typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnMembershipsMemberArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnMembershipsMemberArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].memberships[':memberArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsChannelArnMembershipsMemberArnMutationKey() {
  return ['channels', '/channels/:channelArn/memberships/:memberArn', 'DELETE'] as const
}

export function getDeleteChannelsChannelArnMembershipsMemberArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelArnMembershipsMemberArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channelArn'].memberships[':memberArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelArnMembershipsMemberArn<
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
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelArnMembershipsMemberArnMutationOptions<
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

export function getChannelsChannelArnMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/messages/:messageId', keyArgs] as const
}

export function getChannelsChannelArnMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].messages[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
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
                    (typeof client.channels)[':channelArn']['messages'][':messageId']['$get']
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
                    (typeof client.channels)[':channelArn']['messages'][':messageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnMessagesMessageIdQueryKey>
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
            ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].messages[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelArnMessagesMessageIdMutationKey() {
  return ['channels', '/channels/:channelArn/messages/:messageId', 'PUT'] as const
}

export function getPutChannelsChannelArnMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelArnMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['messages'][':messageId']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channelArn'].messages[':messageId'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelArnMessagesMessageId<
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
                    (typeof client.channels)[':channelArn']['messages'][':messageId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['messages'][':messageId']['$put']
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
  const mutationDefaults = getPutChannelsChannelArnMessagesMessageIdMutationOptions<
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

export function getDeleteChannelsChannelArnMessagesMessageIdMutationKey() {
  return ['channels', '/channels/:channelArn/messages/:messageId', 'DELETE'] as const
}

export function getDeleteChannelsChannelArnMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelArnMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channelArn'].messages[':messageId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelArnMessagesMessageId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelArnMessagesMessageIdMutationOptions<
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

export function getChannelsChannelArnModeratorsChannelModeratorArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/moderators/:channelModeratorArn', keyArgs] as const
}

export function getChannelsChannelArnModeratorsChannelModeratorArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnModeratorsChannelModeratorArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].moderators[':channelModeratorArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnModeratorsChannelModeratorArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
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
                    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
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
                    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnModeratorsChannelModeratorArnQueryKey>
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
              (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnModeratorsChannelModeratorArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnModeratorsChannelModeratorArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].moderators[':channelModeratorArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsChannelArnModeratorsChannelModeratorArnMutationKey() {
  return ['channels', '/channels/:channelArn/moderators/:channelModeratorArn', 'DELETE'] as const
}

export function getDeleteChannelsChannelArnModeratorsChannelModeratorArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelArnModeratorsChannelModeratorArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channelArn'].moderators[':channelModeratorArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelArnModeratorsChannelModeratorArn<
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
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelArnModeratorsChannelModeratorArnMutationOptions<
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

export function getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', keyArgs] as const
}

export function getAccountsAccountIdBotsBotIdEventsConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId']['events-configuration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBotsBotIdEventsConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
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
                    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
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
                    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey>
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
              (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].bots[':botId']['events-configuration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdBotsBotIdEventsConfigurationMutationKey() {
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', 'PUT'] as const
}

export function getPutAccountsAccountIdBotsBotIdEventsConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdBotsBotIdEventsConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId']['events-configuration'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAccountIdBotsBotIdEventsConfiguration<
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
                    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
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
  const mutationDefaults = getPutAccountsAccountIdBotsBotIdEventsConfigurationMutationOptions<
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

export function getDeleteAccountsAccountIdBotsBotIdEventsConfigurationMutationKey() {
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdBotsBotIdEventsConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdBotsBotIdEventsConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId']['events-configuration'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAccountIdBotsBotIdEventsConfiguration<
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
                  Awaited<
                    ReturnType<
                      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
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
  const mutationDefaults = getDeleteAccountsAccountIdBotsBotIdEventsConfigurationMutationOptions<
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

export function getMediaCapturePipelinesMediaPipelineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['media-capture-pipelines', '/media-capture-pipelines/:mediaPipelineId', keyArgs] as const
}

export function getMediaCapturePipelinesMediaPipelineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaCapturePipelinesMediaPipelineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-capture-pipelines'][':mediaPipelineId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaCapturePipelinesMediaPipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
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
                  ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMediaCapturePipelinesMediaPipelineIdQueryKey>
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
            ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaCapturePipelinesMediaPipelineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaCapturePipelinesMediaPipelineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-capture-pipelines'][':mediaPipelineId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMediaCapturePipelinesMediaPipelineIdMutationKey() {
  return ['media-capture-pipelines', '/media-capture-pipelines/:mediaPipelineId', 'DELETE'] as const
}

export function getDeleteMediaCapturePipelinesMediaPipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaCapturePipelinesMediaPipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']
      >,
    ) {
      return parseResponse(
        client['media-capture-pipelines'][':mediaPipelineId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMediaCapturePipelinesMediaPipelineId<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']
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
  const mutationDefaults = getDeleteMediaCapturePipelinesMediaPipelineIdMutationOptions<
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

export function getMeetingsMeetingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['meetings', '/meetings/:meetingId', keyArgs] as const
}

export function getMeetingsMeetingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMeetingsMeetingIdMutationKey() {
  return ['meetings', '/meetings/:meetingId', 'DELETE'] as const
}

export function getDeleteMeetingsMeetingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeetingsMeetingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>) {
      return parseResponse(client.meetings[':meetingId'].$delete(args, options))
    },
  })
}

export function useDeleteMeetingsMeetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>,
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
  const mutationDefaults = getDeleteMeetingsMeetingIdMutationOptions<TError, TOnMutateResult>(
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

export function getPhoneNumbersPhoneNumberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', keyArgs] as const
}

export function getPhoneNumbersPhoneNumberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumbersPhoneNumberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-numbers'][':phoneNumberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumbersPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneNumbersPhoneNumberIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersPhoneNumberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumbersPhoneNumberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-numbers'][':phoneNumberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPhoneNumbersPhoneNumberIdMutationKey() {
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', 'POST'] as const
}

export function getPostPhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>,
    ) {
      return parseResponse(client['phone-numbers'][':phoneNumberId'].$post(args, options))
    },
  })
}

export function usePostPhoneNumbersPhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>,
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
  const mutationDefaults = getPostPhoneNumbersPhoneNumberIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePhoneNumbersPhoneNumberIdMutationKey() {
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', 'DELETE'] as const
}

export function getDeletePhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>,
    ) {
      return parseResponse(client['phone-numbers'][':phoneNumberId'].$delete(args, options))
    },
  })
}

export function useDeletePhoneNumbersPhoneNumberId<
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
                  Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>,
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
  const mutationDefaults = getDeletePhoneNumbersPhoneNumberIdMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId',
    'POST',
  ] as const
}

export function getPostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
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
    getPostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId',
    'DELETE',
  ] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][
          ':proxySessionId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
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
    getDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdMutationOptions<
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

export function getAccountsAccountIdRoomsRoomIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/rooms/:roomId', keyArgs] as const
}

export function getAccountsAccountIdRoomsRoomIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdRoomsRoomIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdRoomsRoomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>
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
                  ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdRoomsRoomIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdRoomsRoomIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdRoomsRoomIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdRoomsRoomIdMutationKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId', 'POST'] as const
}

export function getPostAccountsAccountIdRoomsRoomIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdRoomsRoomIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].rooms[':roomId'].$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdRoomsRoomId<
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
                  ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdRoomsRoomIdMutationOptions<
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

export function getDeleteAccountsAccountIdRoomsRoomIdMutationKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdRoomsRoomIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdRoomsRoomIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']>,
    ) {
      return parseResponse(client.accounts[':accountId'].rooms[':roomId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsAccountIdRoomsRoomId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']>,
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
  const mutationDefaults = getDeleteAccountsAccountIdRoomsRoomIdMutationOptions<
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

export function getPostAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships/:memberId', 'POST'] as const
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].memberships[':memberId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdRoomsRoomIdMembershipsMemberId<
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
                    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationOptions<
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

export function getDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships/:memberId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].memberships[':memberId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdMutationOptions<
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

export function getSipMediaApplicationsSipMediaApplicationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId',
    keyArgs,
  ] as const
}

export function getSipMediaApplicationsSipMediaApplicationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSipMediaApplicationsSipMediaApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSipMediaApplicationsSipMediaApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']>
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSipMediaApplicationsSipMediaApplicationIdQueryKey>
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
            ReturnType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSipMediaApplicationsSipMediaApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSipMediaApplicationsSipMediaApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSipMediaApplicationsSipMediaApplicationIdMutationKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId',
    'PUT',
  ] as const
}

export function getPutSipMediaApplicationsSipMediaApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSipMediaApplicationsSipMediaApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']
      >,
    ) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId'].$put(args, options),
      )
    },
  })
}

export function usePutSipMediaApplicationsSipMediaApplicationId<
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']
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
  const mutationDefaults = getPutSipMediaApplicationsSipMediaApplicationIdMutationOptions<
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

export function getDeleteSipMediaApplicationsSipMediaApplicationIdMutationKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId',
    'DELETE',
  ] as const
}

export function getDeleteSipMediaApplicationsSipMediaApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSipMediaApplicationsSipMediaApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
      >,
    ) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSipMediaApplicationsSipMediaApplicationId<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
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
  const mutationDefaults = getDeleteSipMediaApplicationsSipMediaApplicationIdMutationOptions<
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

export function getSipRulesSipRuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sip-rules', '/sip-rules/:sipRuleId', keyArgs] as const
}

export function getSipRulesSipRuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSipRulesSipRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sip-rules'][':sipRuleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSipRulesSipRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSipRulesSipRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSipRulesSipRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSipRulesSipRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sip-rules'][':sipRuleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSipRulesSipRuleIdMutationKey() {
  return ['sip-rules', '/sip-rules/:sipRuleId', 'PUT'] as const
}

export function getPutSipRulesSipRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSipRulesSipRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$put']>) {
      return parseResponse(client['sip-rules'][':sipRuleId'].$put(args, options))
    },
  })
}

export function usePutSipRulesSipRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$put']>,
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
  const mutationDefaults = getPutSipRulesSipRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSipRulesSipRuleIdMutationKey() {
  return ['sip-rules', '/sip-rules/:sipRuleId', 'DELETE'] as const
}

export function getDeleteSipRulesSipRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSipRulesSipRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>,
    ) {
      return parseResponse(client['sip-rules'][':sipRuleId'].$delete(args, options))
    },
  })
}

export function useDeleteSipRulesSipRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>,
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
  const mutationDefaults = getDeleteSipRulesSipRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getVoiceConnectorsVoiceConnectorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', keyArgs] as const
}

export function getVoiceConnectorsVoiceConnectorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>
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
                  ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', 'PUT'] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>,
    ) {
      return parseResponse(client['voice-connectors'][':voiceConnectorId'].$put(args, options))
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorId<
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
                  ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>,
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
  const mutationDefaults = getPutVoiceConnectorsVoiceConnectorIdMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', 'DELETE'] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>,
    ) {
      return parseResponse(client['voice-connectors'][':voiceConnectorId'].$delete(args, options))
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorId<
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
                  Awaited<
                    ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>,
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
  const mutationDefaults = getDeleteVoiceConnectorsVoiceConnectorIdMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration',
    'PUT',
  ] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
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
    getPutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration',
    'DELETE',
  ] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
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
    getDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationMutationOptions<
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

export function getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId',
    keyArgs,
  ] as const
}

export function getVoiceConnectorGroupsVoiceConnectorGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connector-groups'][':voiceConnectorGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorGroupsVoiceConnectorGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']>
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
                    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
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
                    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey>
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
            ReturnType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connector-groups'][':voiceConnectorGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorGroupsVoiceConnectorGroupIdMutationKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId',
    'PUT',
  ] as const
}

export function getPutVoiceConnectorGroupsVoiceConnectorGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorGroupsVoiceConnectorGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connector-groups'][':voiceConnectorGroupId'].$put(args, options),
      )
    },
  })
}

export function usePutVoiceConnectorGroupsVoiceConnectorGroupId<
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
                    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']
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
  const mutationDefaults = getPutVoiceConnectorGroupsVoiceConnectorGroupIdMutationOptions<
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

export function getDeleteVoiceConnectorGroupsVoiceConnectorGroupIdMutationKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId',
    'DELETE',
  ] as const
}

export function getDeleteVoiceConnectorGroupsVoiceConnectorGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorGroupsVoiceConnectorGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connector-groups'][':voiceConnectorGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVoiceConnectorGroupsVoiceConnectorGroupId<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
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
  const mutationDefaults = getDeleteVoiceConnectorGroupsVoiceConnectorGroupIdMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdOriginationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', keyArgs] as const
}

export function getVoiceConnectorsVoiceConnectorIdOriginationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdOriginationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].origination.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdOrigination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdOriginationQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdOriginationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdOriginationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId'].origination.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdOriginationMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', 'PUT'] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdOriginationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdOriginationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].origination.$put(args, options),
      )
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorIdOrigination<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
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
  const mutationDefaults = getPutVoiceConnectorsVoiceConnectorIdOriginationMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdOriginationMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', 'DELETE'] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdOriginationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdOriginationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].origination.$delete(args, options),
      )
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorIdOrigination<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
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
  const mutationDefaults = getDeleteVoiceConnectorsVoiceConnectorIdOriginationMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy',
    'PUT',
  ] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
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
    getPutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy',
    'DELETE',
  ] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
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
    getDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/streaming-configuration',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/streaming-configuration',
    'PUT',
  ] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
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
    getPutVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/streaming-configuration',
    'DELETE',
  ] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
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
    getDeleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdTerminationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', keyArgs] as const
}

export function getVoiceConnectorsVoiceConnectorIdTerminationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdTerminationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdTermination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdTerminationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdTerminationMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', 'PUT'] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdTerminationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdTerminationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.$put(args, options),
      )
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorIdTermination<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
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
  const mutationDefaults = getPutVoiceConnectorsVoiceConnectorIdTerminationMutationOptions<
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

export function getDeleteVoiceConnectorsVoiceConnectorIdTerminationMutationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', 'DELETE'] as const
}

export function getDeleteVoiceConnectorsVoiceConnectorIdTerminationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVoiceConnectorsVoiceConnectorIdTerminationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.$delete(args, options),
      )
    },
  })
}

export function useDeleteVoiceConnectorsVoiceConnectorIdTermination<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
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
  const mutationDefaults = getDeleteVoiceConnectorsVoiceConnectorIdTerminationMutationOptions<
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

export function getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/credentials#operation=delete',
    'POST',
  ] as const
}

export function getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination[
          'credentials#operation=delete'
        ].$post(args, options),
      )
    },
  })
}

export function usePostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDelete<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
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
    getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteMutationOptions<
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

export function getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'channels',
    '/channels/:channelArn#scope=app-instance-user-membership&app-instance-user-arn',
    keyArgs,
  ] as const
}

export function getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[
          ':channelArn#scope=app-instance-user-membership&app-instance-user-arn'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
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
                    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
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
                    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey
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
              (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[
            ':channelArn#scope=app-instance-user-membership&app-instance-user-arn'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'channels',
    '/channels/:channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn',
    keyArgs,
  ] as const
}

export function getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[
          ':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
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
                    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
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
                    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey
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
              (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[
            ':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/users/:userId#operation=disassociate-phone-number',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId#operation=disassociate-phone-number'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumber<
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
                    (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
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
    getPostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberMutationOptions<
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

export function getPostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId#operation=disassociate-phone-numbers',
    'POST',
  ] as const
}

export function getPostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbers<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
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
    getPostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersMutationOptions<
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

export function getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersMutationKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId#operation=disassociate-phone-numbers',
    'POST',
  ] as const
}

export function getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connector-groups'][
          ':voiceConnectorGroupId#operation=disassociate-phone-numbers'
        ].$post(args, options),
      )
    },
  })
}

export function usePostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbers<
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
                    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
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
    getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersMutationOptions<
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

export function getPostAccountsAccountIdOperationDisassociateSigninDelegateGroupsMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId#operation=disassociate-signin-delegate-groups',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdOperationDisassociateSigninDelegateGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdOperationDisassociateSigninDelegateGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId#operation=disassociate-signin-delegate-groups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdOperationDisassociateSigninDelegateGroups<
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
                    (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
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
    getPostAccountsAccountIdOperationDisassociateSigninDelegateGroupsMutationOptions<
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

export function getAccountsAccountIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/settings', keyArgs] as const
}

export function getAccountsAccountIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/settings', 'PUT'] as const
}

export function getPutAccountsAccountIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$put']>,
    ) {
      return parseResponse(client.accounts[':accountId'].settings.$put(args, options))
    },
  })
}

export function usePutAccountsAccountIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['settings']['$put']>,
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
  const mutationDefaults = getPutAccountsAccountIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getAppInstancesAppInstanceArnRetentionSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['app-instances', '/app-instances/:appInstanceArn/retention-settings', keyArgs] as const
}

export function getAppInstancesAppInstanceArnRetentionSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstancesAppInstanceArnRetentionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['retention-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstancesAppInstanceArnRetentionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
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
                    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
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
                    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppInstancesAppInstanceArnRetentionSettingsQueryKey>
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
              (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesAppInstanceArnRetentionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstancesAppInstanceArnRetentionSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instances'][':appInstanceArn']['retention-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppInstancesAppInstanceArnRetentionSettingsMutationKey() {
  return ['app-instances', '/app-instances/:appInstanceArn/retention-settings', 'PUT'] as const
}

export function getPutAppInstancesAppInstanceArnRetentionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppInstancesAppInstanceArnRetentionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
      >,
    ) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['retention-settings'].$put(args, options),
      )
    },
  })
}

export function usePutAppInstancesAppInstanceArnRetentionSettings<
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
                    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
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
  const mutationDefaults = getPutAppInstancesAppInstanceArnRetentionSettingsMutationOptions<
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

export function getAccountsAccountIdBotsBotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/bots/:botId', keyArgs] as const
}

export function getAccountsAccountIdBotsBotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBotsBotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBotsBotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>
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
                  ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBotsBotIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBotsBotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBotsBotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].bots[':botId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdBotsBotIdMutationKey() {
  return ['accounts', '/accounts/:accountId/bots/:botId', 'POST'] as const
}

export function getPostAccountsAccountIdBotsBotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdBotsBotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].bots[':botId'].$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdBotsBotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdBotsBotIdMutationOptions<
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

export function getSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings', keyArgs] as const
}

export function getSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          ReturnType<typeof getSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSettingsMutationKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function getPutSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$put>) {
      return parseResponse(client.settings.$put(args, options))
    },
  })
}

export function usePutSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.$put>,
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
  const mutationDefaults = getPutSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEndpointsMessagingSessionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['endpoints', '/endpoints/messaging-session', keyArgs] as const
}

export function getEndpointsMessagingSessionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsMessagingSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints['messaging-session'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsMessagingSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEndpointsMessagingSessionQueryKey>
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
          Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsMessagingSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsMessagingSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints['messaging-session'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumberOrdersPhoneNumberOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['phone-number-orders', '/phone-number-orders/:phoneNumberOrderId', keyArgs] as const
}

export function getPhoneNumberOrdersPhoneNumberOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumberOrdersPhoneNumberOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-number-orders'][':phoneNumberOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumberOrdersPhoneNumberOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
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
                  ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPhoneNumberOrdersPhoneNumberOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberOrdersPhoneNumberOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumberOrdersPhoneNumberOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-number-orders'][':phoneNumberOrderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsPhoneNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)['phone-number']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings/phone-number', keyArgs] as const
}

export function getSettingsPhoneNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)['phone-number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsPhoneNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings['phone-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)['phone-number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsPhoneNumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPhoneNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsPhoneNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings['phone-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSettingsPhoneNumberMutationKey() {
  return ['settings', '/settings/phone-number', 'PUT'] as const
}

export function getPutSettingsPhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings)['phone-number']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.settings)['phone-number']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsPhoneNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings)['phone-number']['$put']>) {
      return parseResponse(client.settings['phone-number'].$put(args, options))
    },
  })
}

export function usePutSettingsPhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.settings)['phone-number']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.settings)['phone-number']['$put']>,
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
  const mutationDefaults = getPutSettingsPhoneNumberMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountIdRetentionSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/retention-settings', keyArgs] as const
}

export function getAccountsAccountIdRetentionSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdRetentionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId']['retention-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdRetentionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
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
                  ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdRetentionSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdRetentionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdRetentionSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId']['retention-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdRetentionSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/retention-settings', 'PUT'] as const
}

export function getPutAccountsAccountIdRetentionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdRetentionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>,
    ) {
      return parseResponse(client.accounts[':accountId']['retention-settings'].$put(args, options))
    },
  })
}

export function usePutAccountsAccountIdRetentionSettings<
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
                  Awaited<
                    ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>,
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
  const mutationDefaults = getPutAccountsAccountIdRetentionSettingsMutationOptions<
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

export function getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/logging-configuration',
    keyArgs,
  ] as const
}

export function getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey
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
              (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationMutationKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/logging-configuration',
    'PUT',
  ] as const
}

export function getPutSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration<
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
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
    getPutSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationMutationOptions<
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

export function getAccountsAccountIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/users/:userId', keyArgs] as const
}

export function getAccountsAccountIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>
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
                  ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdUsersUserIdMutationKey() {
  return ['accounts', '/accounts/:accountId/users/:userId', 'POST'] as const
}

export function getPostAccountsAccountIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].users[':userId'].$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdUsersUserId<
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
                  ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdUsersUserIdMutationOptions<
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

export function getAccountsAccountIdUsersUserIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:accountId/users/:userId/settings', keyArgs] as const
}

export function getAccountsAccountIdUsersUserIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdUsersUserIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdUsersUserIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']>
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
                    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
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
                    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdUsersUserIdSettingsQueryKey>
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
              (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdUsersUserIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdUsersUserIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].users[':userId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdUsersUserIdSettingsMutationKey() {
  return ['accounts', '/accounts/:accountId/users/:userId/settings', 'PUT'] as const
}

export function getPutAccountsAccountIdUsersUserIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdUsersUserIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId'].settings.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAccountIdUsersUserIdSettings<
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
                  Awaited<
                    ReturnType<
                      (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
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
  const mutationDefaults = getPutAccountsAccountIdUsersUserIdSettingsMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/logging-configuration',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdLoggingConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutVoiceConnectorsVoiceConnectorIdLoggingConfigurationMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/logging-configuration',
    'PUT',
  ] as const
}

export function getPutVoiceConnectorsVoiceConnectorIdLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceConnectorsVoiceConnectorIdLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutVoiceConnectorsVoiceConnectorIdLoggingConfiguration<
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
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
  const mutationDefaults = getPutVoiceConnectorsVoiceConnectorIdLoggingConfigurationMutationOptions<
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

export function getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/health',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdTerminationHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdUsersOperationAddMutationKey() {
  return ['accounts', '/accounts/:accountId/users#operation=add', 'POST'] as const
}

export function getPostAccountsAccountIdUsersOperationAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['users#operation=add']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersOperationAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users#operation=add']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId']['users#operation=add'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersOperationAdd<
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
                  ReturnType<(typeof client.accounts)[':accountId']['users#operation=add']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['users#operation=add']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdUsersOperationAddMutationOptions<
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

export function getAppInstanceUsersAppInstanceArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'app-instance-users#app-instance-arn',
    '/app-instance-users#app-instance-arn',
    keyArgs,
  ] as const
}

export function getAppInstanceUsersAppInstanceArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppInstanceUsersAppInstanceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-instance-users#app-instance-arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppInstanceUsersAppInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppInstanceUsersAppInstanceArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstanceUsersAppInstanceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppInstanceUsersAppInstanceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-instance-users#app-instance-arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId/tags', keyArgs] as const
}

export function getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdAttendeesAttendeeIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
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
                    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
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
                    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey>
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
              (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsScopeAppInstanceUserMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'channels#scope=app-instance-user-memberships',
    '/channels#scope=app-instance-user-memberships',
    keyArgs,
  ] as const
}

export function getChannelsScopeAppInstanceUserMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsScopeAppInstanceUserMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['channels#scope=app-instance-user-memberships'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsScopeAppInstanceUserMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
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
                    (typeof client)['channels#scope=app-instance-user-memberships']['$get']
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
                    (typeof client)['channels#scope=app-instance-user-memberships']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsScopeAppInstanceUserMembershipsQueryKey>
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
            ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsScopeAppInstanceUserMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsScopeAppInstanceUserMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['channels#scope=app-instance-user-memberships'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelArnMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelArn/messages', keyArgs] as const
}

export function getChannelsChannelArnMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelArnMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelArn'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelArnMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelArnMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelArnMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelArn'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelArnMessagesMutationKey() {
  return ['channels', '/channels/:channelArn/messages', 'POST'] as const
}

export function getPostChannelsChannelArnMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelArnMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$post']>,
    ) {
      return parseResponse(client.channels[':channelArn'].messages.$post(args, options))
    },
  })
}

export function usePostChannelsChannelArnMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['messages']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelArnMessagesMutationOptions<
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

export function getChannelsAppInstanceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels#app-instance-arn', '/channels#app-instance-arn', keyArgs] as const
}

export function getChannelsAppInstanceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsAppInstanceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['channels#app-instance-arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsAppInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsAppInstanceArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsAppInstanceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsAppInstanceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['channels#app-instance-arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsScopeAppInstanceUserModeratedChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'channels#scope=app-instance-user-moderated-channels',
    '/channels#scope=app-instance-user-moderated-channels',
    keyArgs,
  ] as const
}

export function getChannelsScopeAppInstanceUserModeratedChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsScopeAppInstanceUserModeratedChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['channels#scope=app-instance-user-moderated-channels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsScopeAppInstanceUserModeratedChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']>
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
                    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
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
                    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsScopeAppInstanceUserModeratedChannelsQueryKey>
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
              (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsScopeAppInstanceUserModeratedChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsScopeAppInstanceUserModeratedChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['channels#scope=app-instance-user-moderated-channels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeetingsMeetingIdTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['meetings', '/meetings/:meetingId/tags', keyArgs] as const
}

export function getMeetingsMeetingIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeetingsMeetingIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meetings[':meetingId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeetingsMeetingIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeetingsMeetingIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeetingsMeetingIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meetings[':meetingId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-numbers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['phone-numbers', '/phone-numbers', keyArgs] as const
}

export function getPhoneNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-numbers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-numbers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-numbers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
            >
          >,
          ReturnType<typeof getPhoneNumbersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-numbers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumberCountriesProductTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'phone-number-countries#product-type',
    '/phone-number-countries#product-type',
    keyArgs,
  ] as const
}

export function getPhoneNumberCountriesProductTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumberCountriesProductTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-number-countries#product-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumberCountriesProductType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneNumberCountriesProductTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberCountriesProductTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumberCountriesProductTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-number-countries#product-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags#arn', '/tags#arn', keyArgs] as const
}

export function getTagsArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags#arn'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsArn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsArnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tags#arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/credentials',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.credentials.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVoiceConnectorsVoiceConnectorIdTerminationCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
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
                    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey>
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
              (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.credentials.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdUsersUserIdOperationLogoutMutationKey() {
  return ['accounts', '/accounts/:accountId/users/:userId#operation=logout', 'POST'] as const
}

export function getPostAccountsAccountIdUsersUserIdOperationLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersUserIdOperationLogoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId#operation=logout'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersUserIdOperationLogout<
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
                  Awaited<
                    ReturnType<
                      (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdUsersUserIdOperationLogoutMutationOptions<
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

export function getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutMutationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/credentials#operation=put',
    'POST',
  ] as const
}

export function getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
      >,
    ) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination[
          'credentials#operation=put'
        ].$post(args, options),
      )
    },
  })
}

export function usePostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPut<
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
                  Awaited<
                    ReturnType<
                      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
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
    getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutMutationOptions<
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

export function getPostChannelsChannelArnMessagesMessageIdOperationRedactMutationKey() {
  return ['channels', '/channels/:channelArn/messages/:messageId#operation=redact', 'POST'] as const
}

export function getPostChannelsChannelArnMessagesMessageIdOperationRedactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelArnMessagesMessageIdOperationRedactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channelArn'].messages[':messageId#operation=redact'].$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelArnMessagesMessageIdOperationRedact<
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
                    (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
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
  const mutationDefaults = getPostChannelsChannelArnMessagesMessageIdOperationRedactMutationOptions<
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

export function getPostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/conversations/:conversationId/messages/:messageId#operation=redact',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].conversations[':conversationId'].messages[
          ':messageId#operation=redact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedact<
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
                    (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
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
    getPostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactMutationOptions<
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

export function getPostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/rooms/:roomId/messages/:messageId#operation=redact',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].messages[
          ':messageId#operation=redact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedact<
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
                    (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
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
    getPostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactMutationOptions<
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

export function getPostAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/bots/:botId#operation=regenerate-security-token',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId#operation=regenerate-security-token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdBotsBotIdOperationRegenerateSecurityToken<
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
                    (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
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
    getPostAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenMutationOptions<
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

export function getPostAccountsAccountIdUsersUserIdOperationResetPersonalPinMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/users/:userId#operation=reset-personal-pin',
    'POST',
  ] as const
}

export function getPostAccountsAccountIdUsersUserIdOperationResetPersonalPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdUsersUserIdOperationResetPersonalPinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId#operation=reset-personal-pin'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAccountIdUsersUserIdOperationResetPersonalPin<
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
                    (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
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
    getPostAccountsAccountIdUsersUserIdOperationResetPersonalPinMutationOptions<
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

export function getPostPhoneNumbersPhoneNumberIdOperationRestoreMutationKey() {
  return ['phone-numbers', '/phone-numbers/:phoneNumberId#operation=restore', 'POST'] as const
}

export function getPostPhoneNumbersPhoneNumberIdOperationRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersPhoneNumberIdOperationRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']
      >,
    ) {
      return parseResponse(
        client['phone-numbers'][':phoneNumberId#operation=restore'].$post(args, options),
      )
    },
  })
}

export function usePostPhoneNumbersPhoneNumberIdOperationRestore<
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
                    (typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']
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
  const mutationDefaults = getPostPhoneNumbersPhoneNumberIdOperationRestoreMutationOptions<
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

export function getSearchTypePhoneNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search#type=phone-numbers', '/search#type=phone-numbers', keyArgs] as const
}

export function getSearchTypePhoneNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchTypePhoneNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['search#type=phone-numbers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchTypePhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchTypePhoneNumbersQueryKey>
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
          Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchTypePhoneNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchTypePhoneNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['search#type=phone-numbers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMeetingsMeetingIdTranscriptionOperationStartMutationKey() {
  return ['meetings', '/meetings/:meetingId/transcription#operation=start', 'POST'] as const
}

export function getPostMeetingsMeetingIdTranscriptionOperationStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdTranscriptionOperationStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId']['transcription#operation=start'].$post(args, options),
      )
    },
  })
}

export function usePostMeetingsMeetingIdTranscriptionOperationStart<
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
                    (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
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
  const mutationDefaults = getPostMeetingsMeetingIdTranscriptionOperationStartMutationOptions<
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

export function getPostMeetingsMeetingIdTranscriptionOperationStopMutationKey() {
  return ['meetings', '/meetings/:meetingId/transcription#operation=stop', 'POST'] as const
}

export function getPostMeetingsMeetingIdTranscriptionOperationStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdTranscriptionOperationStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId']['transcription#operation=stop'].$post(args, options),
      )
    },
  })
}

export function usePostMeetingsMeetingIdTranscriptionOperationStop<
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
                    (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
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
  const mutationDefaults = getPostMeetingsMeetingIdTranscriptionOperationStopMutationOptions<
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

export function getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddMutationKey() {
  return [
    'meetings',
    '/meetings/:meetingId/attendees/:attendeeId/tags#operation=add',
    'POST',
  ] as const
}

export function getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId']['tags#operation=add'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAdd<
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
                  Awaited<
                    ReturnType<
                      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
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
    getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddMutationOptions<
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

export function getPostMeetingsMeetingIdTagsOperationAddMutationKey() {
  return ['meetings', '/meetings/:meetingId/tags#operation=add', 'POST'] as const
}

export function getPostMeetingsMeetingIdTagsOperationAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['tags#operation=add']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdTagsOperationAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=add']['$post']>,
    ) {
      return parseResponse(client.meetings[':meetingId']['tags#operation=add'].$post(args, options))
    },
  })
}

export function usePostMeetingsMeetingIdTagsOperationAdd<
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
                  Awaited<
                    ReturnType<
                      (typeof client.meetings)[':meetingId']['tags#operation=add']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=add']['$post']>,
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
  const mutationDefaults = getPostMeetingsMeetingIdTagsOperationAddMutationOptions<
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

export function getPostTagsOperationTagResourceMutationKey() {
  return ['tags#operation=tag-resource', '/tags#operation=tag-resource', 'POST'] as const
}

export function getPostTagsOperationTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#operation=tag-resource']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tags#operation=tag-resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsOperationTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tags#operation=tag-resource']['$post']>,
    ) {
      return parseResponse(client['tags#operation=tag-resource'].$post(args, options))
    },
  })
}

export function usePostTagsOperationTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['tags#operation=tag-resource']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['tags#operation=tag-resource']['$post']>,
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
  const mutationDefaults = getPostTagsOperationTagResourceMutationOptions<TError, TOnMutateResult>(
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

export function getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteMutationKey() {
  return [
    'meetings',
    '/meetings/:meetingId/attendees/:attendeeId/tags#operation=delete',
    'POST',
  ] as const
}

export function getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId']['tags#operation=delete'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDelete<
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
                  Awaited<
                    ReturnType<
                      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
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
    getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteMutationOptions<
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

export function getPostMeetingsMeetingIdTagsOperationDeleteMutationKey() {
  return ['meetings', '/meetings/:meetingId/tags#operation=delete', 'POST'] as const
}

export function getPostMeetingsMeetingIdTagsOperationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMeetingsMeetingIdTagsOperationDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']
      >,
    ) {
      return parseResponse(
        client.meetings[':meetingId']['tags#operation=delete'].$post(args, options),
      )
    },
  })
}

export function usePostMeetingsMeetingIdTagsOperationDelete<
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
                  Awaited<
                    ReturnType<
                      (typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']
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
  const mutationDefaults = getPostMeetingsMeetingIdTagsOperationDeleteMutationOptions<
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

export function getPostTagsOperationUntagResourceMutationKey() {
  return ['tags#operation=untag-resource', '/tags#operation=untag-resource', 'POST'] as const
}

export function getPostTagsOperationUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#operation=untag-resource']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tags#operation=untag-resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsOperationUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tags#operation=untag-resource']['$post']>,
    ) {
      return parseResponse(client['tags#operation=untag-resource'].$post(args, options))
    },
  })
}

export function usePostTagsOperationUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['tags#operation=untag-resource']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['tags#operation=untag-resource']['$post']>,
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
  const mutationDefaults = getPostTagsOperationUntagResourceMutationOptions<
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

export function getPutChannelsChannelArnReadMarkerMutationKey() {
  return ['channels', '/channels/:channelArn/readMarker', 'PUT'] as const
}

export function getPutChannelsChannelArnReadMarkerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['readMarker']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelArn']['readMarker']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelArnReadMarkerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channelArn']['readMarker']['$put']>,
    ) {
      return parseResponse(client.channels[':channelArn'].readMarker.$put(args, options))
    },
  })
}

export function usePutChannelsChannelArnReadMarker<
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
                Awaited<ReturnType<(typeof client.channels)[':channelArn']['readMarker']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelArn']['readMarker']['$put']>,
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
  const mutationDefaults = getPutChannelsChannelArnReadMarkerMutationOptions<
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

export function getPostSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdMutationKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/calls/:transactionId',
    'POST',
  ] as const
}

export function getPostSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
      >,
    ) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId'].calls[':transactionId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSipMediaApplicationsSipMediaApplicationIdCallsTransactionId<
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
                    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
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
    getPostSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdMutationOptions<
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

export function getPostEmergencyCallingAddressMutationKey() {
  return ['emergency-calling', '/emergency-calling/address', 'POST'] as const
}

export function getPostEmergencyCallingAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['emergency-calling']['address']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['emergency-calling']['address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmergencyCallingAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['emergency-calling']['address']['$post']>,
    ) {
      return parseResponse(client['emergency-calling'].address.$post(args, options))
    },
  })
}

export function usePostEmergencyCallingAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['emergency-calling']['address']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['emergency-calling']['address']['$post']>,
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
  const mutationDefaults = getPostEmergencyCallingAddressMutationOptions<TError, TOnMutateResult>(
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
