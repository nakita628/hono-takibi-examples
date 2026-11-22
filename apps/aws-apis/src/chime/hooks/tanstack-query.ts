import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/users', keyArgs] as const
}

export function getAccountsAccountIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdUsersQueryKey>
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
      ...getAccountsAccountIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances', keyArgs] as const
}

export function getAppInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppInstancesQueryKey>
  >({
    queryKey: getAppInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instances'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances/:appInstanceArn/admins', keyArgs] as const
}

export function getAppInstancesAppInstanceArnAdminsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstancesAppInstanceArnAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].admins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstancesAppInstanceArnAdminsQueryKey>
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
      ...getAppInstancesAppInstanceArnAdminsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstancesAppInstanceArnAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAppInstancesAppInstanceArnAdminsQueryKey>
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
      ...getAppInstancesAppInstanceArnAdminsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/attendees', keyArgs] as const
}

export function getMeetingsMeetingIdAttendeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMeetingsMeetingIdAttendeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].attendees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMeetingsMeetingIdAttendeesQueryKey>
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
      ...getMeetingsMeetingIdAttendeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeetingsMeetingIdAttendees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMeetingsMeetingIdAttendeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/bots', keyArgs] as const
}

export function getAccountsAccountIdBotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdBotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].bots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdBotsQueryKey>
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
      ...getAccountsAccountIdBotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdBotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/bans', keyArgs] as const
}

export function getChannelsChannelArnBansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnBansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].bans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnBansQueryKey>
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
      ...getChannelsChannelArnBansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnBans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsChannelArnBansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/memberships', keyArgs] as const
}

export function getChannelsChannelArnMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnMembershipsQueryKey>
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
      ...getChannelsChannelArnMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsChannelArnMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/moderators', keyArgs] as const
}

export function getChannelsChannelArnModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].moderators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnModeratorsQueryKey>
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
      ...getChannelsChannelArnModeratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsChannelArnModeratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['media-capture-pipelines', '/media-capture-pipelines', keyArgs] as const
}

export function getMediaCapturePipelinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaCapturePipelinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-capture-pipelines'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMediaCapturePipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMediaCapturePipelinesQueryKey>
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
      ...getMediaCapturePipelinesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMediaCapturePipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMediaCapturePipelinesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getMeetingsQueryKey(args: InferRequestType<typeof client.meetings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings', keyArgs] as const
}

export function getMeetingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.meetings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeetingsQueryKey>
  >({
    queryKey: getMeetingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeetings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.meetings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeetingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeetingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeetings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.meetings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeetingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeetingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.meetings.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-number-orders', '/phone-number-orders', keyArgs] as const
}

export function getPhoneNumberOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberOrdersQueryKey>
  >({
    queryKey: getPhoneNumberOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-number-orders'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumberOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPhoneNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumberOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumberOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumberOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdProxySessionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProxySessionsQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdProxySessionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdProxySessions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdProxySessionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/rooms', keyArgs] as const
}

export function getAccountsAccountIdRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].rooms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdRoomsQueryKey>
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
      ...getAccountsAccountIdRoomsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdRoomsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships', keyArgs] as const
}

export function getAccountsAccountIdRoomsRoomIdMembershipsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdRoomsRoomIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdRoomsRoomIdMembershipsQueryKey>
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
      ...getAccountsAccountIdRoomsRoomIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdRoomsRoomIdMemberships<
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdRoomsRoomIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sip-media-applications', '/sip-media-applications', keyArgs] as const
}

export function getSipMediaApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSipMediaApplicationsQueryKey>
  >({
    queryKey: getSipMediaApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sip-media-applications'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSipMediaApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSipMediaApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSipMediaApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSipMediaApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSipMediaApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSipMediaApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getSipRulesQueryKey(args: InferRequestType<(typeof client)['sip-rules']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['sip-rules', '/sip-rules', keyArgs] as const
}

export function getSipRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['sip-rules']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSipRulesQueryKey>
  >({
    queryKey: getSipRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sip-rules'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSipRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSipRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSipRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSipRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSipRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSipRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
        InferRequestType<(typeof client.accounts)[':accountId']['users#operation=create']['$post']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors', keyArgs] as const
}

export function getVoiceConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorsQueryKey>
  >({
    queryKey: getVoiceConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVoiceConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVoiceConnectorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVoiceConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVoiceConnectorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['voice-connectors']['$post']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connector-groups', '/voice-connector-groups', keyArgs] as const
}

export function getVoiceConnectorGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceConnectorGroupsQueryKey>
  >({
    queryKey: getVoiceConnectorGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connector-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVoiceConnectorGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVoiceConnectorGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceConnectorGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVoiceConnectorGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId', keyArgs] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances/:appInstanceArn', keyArgs] as const
}

export function getAppInstancesAppInstanceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstancesAppInstanceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstancesAppInstanceArnQueryKey>
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
      ...getAppInstancesAppInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstancesAppInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAppInstancesAppInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/admins/:appInstanceAdminArn',
    keyArgs,
  ] as const
}

export function getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryOptions<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryKey>
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
      ...getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstancesAppInstanceArnAdminsAppInstanceAdminArn<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/streaming-configurations',
    keyArgs,
  ] as const
}

export function getAppInstancesAppInstanceArnStreamingConfigurationsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['streaming-configurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstancesAppInstanceArnStreamingConfigurationsQueryKey>
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
      ...getAppInstancesAppInstanceArnStreamingConfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstancesAppInstanceArnStreamingConfigurations<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAppInstancesAppInstanceArnStreamingConfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', keyArgs] as const
}

export function getAppInstanceUsersAppInstanceUserArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstanceUsersAppInstanceUserArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instance-users'][':appInstanceUserArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstanceUsersAppInstanceUserArnQueryKey>
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
      ...getAppInstanceUsersAppInstanceUserArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstanceUsersAppInstanceUserArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAppInstanceUsersAppInstanceUserArnQueryKey>
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
      ...getAppInstanceUsersAppInstanceUserArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId', keyArgs] as const
}

export function getMeetingsMeetingIdAttendeesAttendeeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMeetingsMeetingIdAttendeesAttendeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdQueryKey>
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
      ...getMeetingsMeetingIdAttendeesAttendeeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeetingsMeetingIdAttendeesAttendeeId<
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdQueryKey>
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
      ...getMeetingsMeetingIdAttendeesAttendeeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn', keyArgs] as const
}

export function getChannelsChannelArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelArnQueryKey>
  >({
    queryKey: getChannelsChannelArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelsChannelArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelsChannelArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/bans/:memberArn', keyArgs] as const
}

export function getChannelsChannelArnBansMemberArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnBansMemberArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].bans[':memberArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnBansMemberArnQueryKey>
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
      ...getChannelsChannelArnBansMemberArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnBansMemberArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getChannelsChannelArnBansMemberArnQueryKey>
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
      ...getChannelsChannelArnBansMemberArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/memberships/:memberArn', keyArgs] as const
}

export function getChannelsChannelArnMembershipsMemberArnQueryOptions<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnMembershipsMemberArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].memberships[':memberArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnMembershipsMemberArnQueryKey>
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
      ...getChannelsChannelArnMembershipsMemberArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnMembershipsMemberArn<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getChannelsChannelArnMembershipsMemberArnQueryKey>
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
      ...getChannelsChannelArnMembershipsMemberArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/messages/:messageId', keyArgs] as const
}

export function getChannelsChannelArnMessagesMessageIdQueryOptions<
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnMessagesMessageIdQueryKey>
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
      ...getChannelsChannelArnMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnMessagesMessageId<
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getChannelsChannelArnMessagesMessageIdQueryKey>
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
      ...getChannelsChannelArnMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$put']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/moderators/:channelModeratorArn', keyArgs] as const
}

export function getChannelsChannelArnModeratorsChannelModeratorArnQueryOptions<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnModeratorsChannelModeratorArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].moderators[':channelModeratorArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnModeratorsChannelModeratorArnQueryKey>
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
      ...getChannelsChannelArnModeratorsChannelModeratorArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnModeratorsChannelModeratorArn<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsChannelArnModeratorsChannelModeratorArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', keyArgs] as const
}

export function getAccountsAccountIdBotsBotIdEventsConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId']['events-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdBotsBotIdEventsConfigurationQueryKey>
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
      ...getAccountsAccountIdBotsBotIdEventsConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdBotsBotIdEventsConfiguration<
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdBotsBotIdEventsConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['media-capture-pipelines', '/media-capture-pipelines/:mediaPipelineId', keyArgs] as const
}

export function getMediaCapturePipelinesMediaPipelineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaCapturePipelinesMediaPipelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-capture-pipelines'][':mediaPipelineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMediaCapturePipelinesMediaPipelineIdQueryKey>
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
      ...getMediaCapturePipelinesMediaPipelineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMediaCapturePipelinesMediaPipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMediaCapturePipelinesMediaPipelineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId', keyArgs] as const
}

export function getMeetingsMeetingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeetingsMeetingIdQueryKey>
  >({
    queryKey: getMeetingsMeetingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMeetingsMeetingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeetingsMeetingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeetingsMeetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeetingsMeetingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeetingsMeetingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', keyArgs] as const
}

export function getPhoneNumbersPhoneNumberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPhoneNumbersPhoneNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-numbers'][':phoneNumberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPhoneNumbersPhoneNumberIdQueryKey>
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
      ...getPhoneNumbersPhoneNumberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPhoneNumbersPhoneNumberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/rooms/:roomId', keyArgs] as const
}

export function getAccountsAccountIdRoomsRoomIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdRoomsRoomIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].rooms[':roomId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdRoomsRoomIdQueryKey>
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
      ...getAccountsAccountIdRoomsRoomIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdRoomsRoomId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAccountsAccountIdRoomsRoomIdQueryKey>
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
      ...getAccountsAccountIdRoomsRoomIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId',
    keyArgs,
  ] as const
}

export function getSipMediaApplicationsSipMediaApplicationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSipMediaApplicationsSipMediaApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSipMediaApplicationsSipMediaApplicationIdQueryKey>
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
      ...getSipMediaApplicationsSipMediaApplicationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSipMediaApplicationsSipMediaApplicationId<
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSipMediaApplicationsSipMediaApplicationIdQueryKey>
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
      ...getSipMediaApplicationsSipMediaApplicationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sip-rules', '/sip-rules/:sipRuleId', keyArgs] as const
}

export function getSipRulesSipRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSipRulesSipRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sip-rules'][':sipRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSipRulesSipRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSipRulesSipRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSipRulesSipRuleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSipRulesSipRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSipRulesSipRuleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', keyArgs] as const
}

export function getVoiceConnectorsVoiceConnectorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId',
    keyArgs,
  ] as const
}

export function getVoiceConnectorGroupsVoiceConnectorGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connector-groups'][':voiceConnectorGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey>
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
      ...getVoiceConnectorGroupsVoiceConnectorGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorGroupsVoiceConnectorGroupId<
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
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getVoiceConnectorGroupsVoiceConnectorGroupIdQueryKey>
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
      ...getVoiceConnectorGroupsVoiceConnectorGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', keyArgs] as const
}

export function getVoiceConnectorsVoiceConnectorIdOriginationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdOriginationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].origination.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdOriginationQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdOriginationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdOrigination<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdOriginationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/streaming-configuration',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdStreamingConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', keyArgs] as const
}

export function getVoiceConnectorsVoiceConnectorIdTerminationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdTerminationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdTerminationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdTermination<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdTerminationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'channels',
    '/channels/:channelArn#scope=app-instance-user-membership&app-instance-user-arn',
    keyArgs,
  ] as const
}

export function getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryOptions<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[
          ':channelArn#scope=app-instance-user-membership&app-instance-user-arn'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey
        >
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
      ...getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArn<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryKey
        >
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
      ...getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'channels',
    '/channels/:channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn',
    keyArgs,
  ] as const
}

export function getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryOptions<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[
          ':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryKey
        >
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
      ...getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArn<
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
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/settings', keyArgs] as const
}

export function getAccountsAccountIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdSettingsQueryKey>
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
      ...getAccountsAccountIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances/:appInstanceArn/retention-settings', keyArgs] as const
}

export function getAppInstancesAppInstanceArnRetentionSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstancesAppInstanceArnRetentionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instances'][':appInstanceArn']['retention-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstancesAppInstanceArnRetentionSettingsQueryKey>
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
      ...getAppInstancesAppInstanceArnRetentionSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstancesAppInstanceArnRetentionSettings<
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
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAppInstancesAppInstanceArnRetentionSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/bots/:botId', keyArgs] as const
}

export function getAccountsAccountIdBotsBotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdBotsBotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].bots[':botId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAccountsAccountIdBotsBotIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdBotsBotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdBotsBotIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function getSettingsQueryKey(args: InferRequestType<typeof client.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings', keyArgs] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.$put>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['endpoints', '/endpoints/messaging-session', keyArgs] as const
}

export function getEndpointsMessagingSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsMessagingSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints['messaging-session'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEndpointsMessagingSessionQueryKey>
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
      ...getEndpointsMessagingSessionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEndpointsMessagingSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getEndpointsMessagingSessionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhoneNumberOrdersPhoneNumberOrderIdQueryKey(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-number-orders', '/phone-number-orders/:phoneNumberOrderId', keyArgs] as const
}

export function getPhoneNumberOrdersPhoneNumberOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPhoneNumberOrdersPhoneNumberOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-number-orders'][':phoneNumberOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPhoneNumberOrdersPhoneNumberOrderIdQueryKey>
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
      ...getPhoneNumberOrdersPhoneNumberOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumberOrdersPhoneNumberOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getPhoneNumberOrdersPhoneNumberOrderIdQueryKey>
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
      ...getPhoneNumberOrdersPhoneNumberOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsPhoneNumberQueryKey(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/phone-number', keyArgs] as const
}

export function getSettingsPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPhoneNumberQueryKey>
  >({
    queryKey: getSettingsPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings['phone-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSettingsPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsPhoneNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsPhoneNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/retention-settings', keyArgs] as const
}

export function getAccountsAccountIdRetentionSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdRetentionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId']['retention-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdRetentionSettingsQueryKey>
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
      ...getAccountsAccountIdRetentionSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdRetentionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAccountsAccountIdRetentionSettingsQueryKey>
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
      ...getAccountsAccountIdRetentionSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/logging-configuration',
    keyArgs,
  ] as const
}

export function getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryKey>
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
      ...getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration<
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
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/users/:userId', keyArgs] as const
}

export function getAccountsAccountIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdUsersUserIdQueryKey>
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
      ...getAccountsAccountIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAccountsAccountIdUsersUserIdQueryKey>
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
      ...getAccountsAccountIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/users/:userId/settings', keyArgs] as const
}

export function getAccountsAccountIdUsersUserIdSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdUsersUserIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].users[':userId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdUsersUserIdSettingsQueryKey>
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
      ...getAccountsAccountIdUsersUserIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdUsersUserIdSettings<
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
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdUsersUserIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/logging-configuration',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdLoggingConfiguration<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdLoggingConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/health',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.health.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdTerminationHealth<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdTerminationHealthQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'app-instance-users#app-instance-arn',
    '/app-instance-users#app-instance-arn',
    keyArgs,
  ] as const
}

export function getAppInstanceUsersAppInstanceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppInstanceUsersAppInstanceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-instance-users#app-instance-arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAppInstanceUsersAppInstanceArnQueryKey>
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
      ...getAppInstanceUsersAppInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppInstanceUsersAppInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAppInstanceUsersAppInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId/tags', keyArgs] as const
}

export function getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryOptions<
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].attendees[':attendeeId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryKey>
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
      ...getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeetingsMeetingIdAttendeesAttendeeIdTags<
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
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMeetingsMeetingIdAttendeesAttendeeIdTagsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsScopeAppInstanceUserMembershipsQueryKey(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'channels#scope=app-instance-user-memberships',
    '/channels#scope=app-instance-user-memberships',
    keyArgs,
  ] as const
}

export function getChannelsScopeAppInstanceUserMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsScopeAppInstanceUserMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['channels#scope=app-instance-user-memberships'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getChannelsScopeAppInstanceUserMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsScopeAppInstanceUserMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsScopeAppInstanceUserMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsChannelArnMessagesQueryKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/messages', keyArgs] as const
}

export function getChannelsChannelArnMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelArnMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelArn'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsChannelArnMessagesQueryKey>
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
      ...getChannelsChannelArnMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelArnMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsChannelArnMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels#app-instance-arn', '/channels#app-instance-arn', keyArgs] as const
}

export function getChannelsAppInstanceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsAppInstanceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['channels#app-instance-arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsAppInstanceArnQueryKey>
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
      ...getChannelsAppInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsAppInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsAppInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsScopeAppInstanceUserModeratedChannelsQueryKey(
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'channels#scope=app-instance-user-moderated-channels',
    '/channels#scope=app-instance-user-moderated-channels',
    keyArgs,
  ] as const
}

export function getChannelsScopeAppInstanceUserModeratedChannelsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsScopeAppInstanceUserModeratedChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['channels#scope=app-instance-user-moderated-channels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChannelsScopeAppInstanceUserModeratedChannelsQueryKey>
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
      ...getChannelsScopeAppInstanceUserModeratedChannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsScopeAppInstanceUserModeratedChannels<
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
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChannelsScopeAppInstanceUserModeratedChannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMeetingsMeetingIdTagsQueryKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/tags', keyArgs] as const
}

export function getMeetingsMeetingIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMeetingsMeetingIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meetings[':meetingId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMeetingsMeetingIdTagsQueryKey>
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
      ...getMeetingsMeetingIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeetingsMeetingIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMeetingsMeetingIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhoneNumbersQueryKey(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-numbers', '/phone-numbers', keyArgs] as const
}

export function getPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >({
    queryKey: getPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-numbers'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPhoneNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPhoneNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPhoneNumberCountriesProductTypeQueryKey(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'phone-number-countries#product-type',
    '/phone-number-countries#product-type',
    keyArgs,
  ] as const
}

export function getPhoneNumberCountriesProductTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPhoneNumberCountriesProductTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-number-countries#product-type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPhoneNumberCountriesProductTypeQueryKey>
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
      ...getPhoneNumberCountriesProductTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumberCountriesProductType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPhoneNumberCountriesProductTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsArnQueryKey(args: InferRequestType<(typeof client)['tags#arn']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tags#arn', '/tags#arn', keyArgs] as const
}

export function getTagsArnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['tags#arn']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsArnQueryKey>
  >({
    queryKey: getTagsArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tags#arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsArn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#arn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsArn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/credentials',
    keyArgs,
  ] as const
}

export function getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['voice-connectors'][':voiceConnectorId'].termination.credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryKey>
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
      ...getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceConnectorsVoiceConnectorIdTerminationCredentials<
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
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVoiceConnectorsVoiceConnectorIdTerminationCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search#type=phone-numbers', '/search#type=phone-numbers', keyArgs] as const
}

export function getSearchTypePhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchTypePhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['search#type=phone-numbers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSearchTypePhoneNumbersQueryKey>
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
      ...getSearchTypePhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchTypePhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSearchTypePhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
        InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']>,
        TOnMutateResult
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
