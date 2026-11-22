import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberKey() {
  return [
    'accounts',
    '/accounts/:accountId/users/:userId#operation=associate-phone-number',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].users[':userId#operation=associate-phone-number'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId#operation=associate-phone-numbers',
    'POST',
  ] as const
}

export function usePostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId#operation=associate-phone-numbers',
    'POST',
  ] as const
}

export function usePostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connector-groups'][
            ':voiceConnectorGroupId#operation=associate-phone-numbers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdOperationAssociateSigninDelegateGroupsKey() {
  return [
    'accounts',
    '/accounts/:accountId#operation=associate-signin-delegate-groups',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdOperationAssociateSigninDelegateGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdOperationAssociateSigninDelegateGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId#operation=associate-signin-delegate-groups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdAttendeesOperationBatchCreateKey() {
  return ['meetings', '/meetings/:meetingId/attendees#operation=batch-create', 'POST'] as const
}

export function usePostMeetingsMeetingIdAttendeesOperationBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdAttendeesOperationBatchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId']['attendees#operation=batch-create'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelArnMembershipsOperationBatchCreateKey() {
  return ['channels', '/channels/:channelArn/memberships#operation=batch-create', 'POST'] as const
}

export function usePostChannelsChannelArnMembershipsOperationBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelArnMembershipsOperationBatchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn']['memberships#operation=batch-create'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateKey() {
  return [
    'accounts',
    '/accounts/:accountId/rooms/:roomId/memberships#operation=batch-create',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'][
            'memberships#operation=batch-create'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersOperationBatchDeleteKey() {
  return [
    'phone-numbers#operation=batch-delete',
    '/phone-numbers#operation=batch-delete',
    'POST',
  ] as const
}

export function usePostPhoneNumbersOperationBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersOperationBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>
        },
      ) => parseResponse(client['phone-numbers#operation=batch-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersOperationSuspendKey() {
  return ['accounts', '/accounts/:accountId/users#operation=suspend', 'POST'] as const
}

export function usePostAccountsAccountIdUsersOperationSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersOperationSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=suspend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId']['users#operation=suspend'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersOperationUnsuspendKey() {
  return ['accounts', '/accounts/:accountId/users#operation=unsuspend', 'POST'] as const
}

export function usePostAccountsAccountIdUsersOperationUnsuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersOperationUnsuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId']['users#operation=unsuspend'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersOperationBatchUpdateKey() {
  return [
    'phone-numbers#operation=batch-update',
    '/phone-numbers#operation=batch-update',
    'POST',
  ] as const
}

export function usePostPhoneNumbersOperationBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers#operation=batch-update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-numbers#operation=batch-update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersOperationBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['phone-numbers#operation=batch-update']['$post']>
        },
      ) => parseResponse(client['phone-numbers#operation=batch-update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdUsersKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/users', keyArgs] as const
}

export function useGetAccountsAccountIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
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
        ? getGetAccountsAccountIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
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
        ? getGetAccountsAccountIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersKey() {
  return ['accounts', '/accounts/:accountId/users', 'POST'] as const
}

export function usePostAccountsAccountIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['users']['$post']> },
      ) => parseResponse(client.accounts[':accountId'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstancesKey(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances', keyArgs] as const
}

export function useGetAppInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppInstancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['app-instances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppInstancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['app-instances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppInstancesKey() {
  return ['app-instances', '/app-instances', 'POST'] as const
}

export function usePostAppInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instances']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['app-instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['app-instances']['$post']> },
      ) => parseResponse(client['app-instances'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstancesAppInstanceArnAdminsKey(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances/:appInstanceArn/admins', keyArgs] as const
}

export function useGetAppInstancesAppInstanceArnAdmins<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
            >
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
        ? getGetAppInstancesAppInstanceArnAdminsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['app-instances'][':appInstanceArn'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstancesAppInstanceArnAdmins<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
            >
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
        ? getGetAppInstancesAppInstanceArnAdminsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['app-instances'][':appInstanceArn'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppInstancesAppInstanceArnAdminsKey() {
  return ['app-instances', '/app-instances/:appInstanceArn/admins', 'POST'] as const
}

export function usePostAppInstancesAppInstanceArnAdmins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppInstancesAppInstanceArnAdminsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['admins']['$post']
          >
        },
      ) =>
        parseResponse(client['app-instances'][':appInstanceArn'].admins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppInstanceUsersKey() {
  return ['app-instance-users', '/app-instance-users', 'POST'] as const
}

export function usePostAppInstanceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['app-instance-users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['app-instance-users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppInstanceUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['app-instance-users']['$post']> },
      ) => parseResponse(client['app-instance-users'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdAttendeesKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/attendees', keyArgs] as const
}

export function useGetMeetingsMeetingIdAttendees<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
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
        ? getGetMeetingsMeetingIdAttendeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].attendees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdAttendees<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
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
        ? getGetMeetingsMeetingIdAttendeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].attendees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdAttendeesKey() {
  return ['meetings', '/meetings/:meetingId/attendees', 'POST'] as const
}

export function usePostMeetingsMeetingIdAttendees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['attendees']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdAttendeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$post']> },
      ) => parseResponse(client.meetings[':meetingId'].attendees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdBotsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/bots', keyArgs] as const
}

export function useGetAccountsAccountIdBots<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
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
        ? getGetAccountsAccountIdBotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].bots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBots<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
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
        ? getGetAccountsAccountIdBotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].bots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdBotsKey() {
  return ['accounts', '/accounts/:accountId/bots', 'POST'] as const
}

export function usePostAccountsAccountIdBots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['bots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdBotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$post']> },
      ) => parseResponse(client.accounts[':accountId'].bots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function usePostChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.$post> }) =>
        parseResponse(client.channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnBansKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/bans', keyArgs] as const
}

export function useGetChannelsChannelArnBans<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
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
        ? getGetChannelsChannelArnBansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelArn'].bans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnBans<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
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
        ? getGetChannelsChannelArnBansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelArn'].bans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelArnBansKey() {
  return ['channels', '/channels/:channelArn/bans', 'POST'] as const
}

export function usePostChannelsChannelArnBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['bans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['bans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelArnBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$post']> },
      ) => parseResponse(client.channels[':channelArn'].bans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnMembershipsKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/memberships', keyArgs] as const
}

export function useGetChannelsChannelArnMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
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
        ? getGetChannelsChannelArnMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channelArn'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
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
        ? getGetChannelsChannelArnMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channelArn'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelArnMembershipsKey() {
  return ['channels', '/channels/:channelArn/memberships', 'POST'] as const
}

export function usePostChannelsChannelArnMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelArnMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$post']>
        },
      ) => parseResponse(client.channels[':channelArn'].memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnModeratorsKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/moderators', keyArgs] as const
}

export function useGetChannelsChannelArnModerators<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
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
        ? getGetChannelsChannelArnModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channelArn'].moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnModerators<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
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
        ? getGetChannelsChannelArnModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channelArn'].moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelArnModeratorsKey() {
  return ['channels', '/channels/:channelArn/moderators', 'POST'] as const
}

export function usePostChannelsChannelArnModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['moderators']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelArnModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$post']>
        },
      ) => parseResponse(client.channels[':channelArn'].moderators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaCapturePipelinesKey(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['media-capture-pipelines', '/media-capture-pipelines', keyArgs] as const
}

export function useGetMediaCapturePipelines<TError = unknown>(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
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
        ? getGetMediaCapturePipelinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['media-capture-pipelines'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaCapturePipelines<TError = unknown>(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
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
        ? getGetMediaCapturePipelinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['media-capture-pipelines'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMediaCapturePipelinesKey() {
  return ['media-capture-pipelines', '/media-capture-pipelines', 'POST'] as const
}

export function usePostMediaCapturePipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['media-capture-pipelines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['media-capture-pipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaCapturePipelinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['media-capture-pipelines']['$post']> },
      ) => parseResponse(client['media-capture-pipelines'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsKey(args: InferRequestType<typeof client.meetings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings', keyArgs] as const
}

export function useGetMeetings<TError = unknown>(
  args: InferRequestType<typeof client.meetings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeetingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.meetings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMeetings<TError = unknown>(
  args: InferRequestType<typeof client.meetings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeetingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.meetings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMeetingsKey() {
  return ['meetings', '/meetings', 'POST'] as const
}

export function usePostMeetings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meetings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.meetings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.meetings.$post> }) =>
        parseResponse(client.meetings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdDialOutsKey() {
  return ['meetings', '/meetings/:meetingId/dial-outs', 'POST'] as const
}

export function usePostMeetingsMeetingIdDialOuts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdDialOutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']> },
      ) => parseResponse(client.meetings[':meetingId']['dial-outs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsOperationCreateAttendeesKey() {
  return [
    'meetings#operation=create-attendees',
    '/meetings#operation=create-attendees',
    'POST',
  ] as const
}

export function usePostMeetingsOperationCreateAttendees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['meetings#operation=create-attendees']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['meetings#operation=create-attendees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsOperationCreateAttendeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['meetings#operation=create-attendees']['$post']>
        },
      ) => parseResponse(client['meetings#operation=create-attendees'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumberOrdersKey(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-number-orders', '/phone-number-orders', keyArgs] as const
}

export function useGetPhoneNumberOrders<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
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
        ? getGetPhoneNumberOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number-orders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberOrders<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
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
        ? getGetPhoneNumberOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number-orders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumberOrdersKey() {
  return ['phone-number-orders', '/phone-number-orders', 'POST'] as const
}

export function usePostPhoneNumberOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number-orders']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number-orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumberOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-number-orders']['$post']> },
      ) => parseResponse(client['phone-number-orders'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdProxySessionsKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdProxySessions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdProxySessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdProxySessions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdProxySessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVoiceConnectorsVoiceConnectorIdProxySessionsKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/proxy-sessions', 'POST'] as const
}

export function usePostVoiceConnectorsVoiceConnectorIdProxySessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceConnectorsVoiceConnectorIdProxySessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdRoomsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/rooms', keyArgs] as const
}

export function useGetAccountsAccountIdRooms<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
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
        ? getGetAccountsAccountIdRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdRooms<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
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
        ? getGetAccountsAccountIdRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdRoomsKey() {
  return ['accounts', '/accounts/:accountId/rooms', 'POST'] as const
}

export function usePostAccountsAccountIdRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$post']> },
      ) => parseResponse(client.accounts[':accountId'].rooms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdRoomsRoomIdMembershipsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships', keyArgs] as const
}

export function useGetAccountsAccountIdRoomsRoomIdMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIdRoomsRoomIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdRoomsRoomIdMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIdRoomsRoomIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships', 'POST'] as const
}

export function usePostAccountsAccountIdRoomsRoomIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdRoomsRoomIdMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].memberships.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSipMediaApplicationsKey(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sip-media-applications', '/sip-media-applications', keyArgs] as const
}

export function useGetSipMediaApplications<TError = unknown>(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
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
        ? getGetSipMediaApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sip-media-applications'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipMediaApplications<TError = unknown>(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
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
        ? getGetSipMediaApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-media-applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sip-media-applications'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSipMediaApplicationsKey() {
  return ['sip-media-applications', '/sip-media-applications', 'POST'] as const
}

export function usePostSipMediaApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sip-media-applications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sip-media-applications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSipMediaApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sip-media-applications']['$post']> },
      ) => parseResponse(client['sip-media-applications'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSipMediaApplicationsSipMediaApplicationIdCallsKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/calls',
    'POST',
  ] as const
}

export function usePostSipMediaApplicationsSipMediaApplicationIdCalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSipMediaApplicationsSipMediaApplicationIdCallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].calls.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSipRulesKey(args: InferRequestType<(typeof client)['sip-rules']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['sip-rules', '/sip-rules', keyArgs] as const
}

export function useGetSipRules<TError = unknown>(
  args: InferRequestType<(typeof client)['sip-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSipRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sip-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipRules<TError = unknown>(
  args: InferRequestType<(typeof client)['sip-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSipRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sip-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSipRulesKey() {
  return ['sip-rules', '/sip-rules', 'POST'] as const
}

export function usePostSipRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sip-rules']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sip-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSipRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['sip-rules']['$post']> }) =>
        parseResponse(client['sip-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersOperationCreateKey() {
  return ['accounts', '/accounts/:accountId/users#operation=create', 'POST'] as const
}

export function usePostAccountsAccountIdUsersOperationCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersOperationCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId']['users#operation=create'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsKey(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors', keyArgs] as const
}

export function useGetVoiceConnectors<TError = unknown>(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
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
        ? getGetVoiceConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['voice-connectors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectors<TError = unknown>(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
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
        ? getGetVoiceConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['voice-connectors'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVoiceConnectorsKey() {
  return ['voice-connectors', '/voice-connectors', 'POST'] as const
}

export function usePostVoiceConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['voice-connectors']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['voice-connectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['voice-connectors']['$post']> },
      ) => parseResponse(client['voice-connectors'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorGroupsKey(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connector-groups', '/voice-connector-groups', keyArgs] as const
}

export function useGetVoiceConnectorGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
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
        ? getGetVoiceConnectorGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['voice-connector-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
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
        ? getGetVoiceConnectorGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connector-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['voice-connector-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVoiceConnectorGroupsKey() {
  return ['voice-connector-groups', '/voice-connector-groups', 'POST'] as const
}

export function usePostVoiceConnectorGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['voice-connector-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['voice-connector-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceConnectorGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['voice-connector-groups']['$post']> },
      ) => parseResponse(client['voice-connector-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId', keyArgs] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdKey() {
  return ['accounts', '/accounts/:accountId', 'POST'] as const
}

export function usePostAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['$post']> },
      ) => parseResponse(client.accounts[':accountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdKey() {
  return ['accounts', '/accounts/:accountId', 'DELETE'] as const
}

export function useDeleteAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['$delete']> },
      ) => parseResponse(client.accounts[':accountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstancesAppInstanceArnKey(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances/:appInstanceArn', keyArgs] as const
}

export function useGetAppInstancesAppInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
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
        ? getGetAppInstancesAppInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['app-instances'][':appInstanceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstancesAppInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
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
        ? getGetAppInstancesAppInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['app-instances'][':appInstanceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppInstancesAppInstanceArnKey() {
  return ['app-instances', '/app-instances/:appInstanceArn', 'PUT'] as const
}

export function usePutAppInstancesAppInstanceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppInstancesAppInstanceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$put']> },
      ) => parseResponse(client['app-instances'][':appInstanceArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppInstancesAppInstanceArnKey() {
  return ['app-instances', '/app-instances/:appInstanceArn', 'DELETE'] as const
}

export function useDeleteAppInstancesAppInstanceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppInstancesAppInstanceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>
        },
      ) => parseResponse(client['app-instances'][':appInstanceArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstancesAppInstanceArnAdminsAppInstanceAdminArnKey(
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

export function useGetAppInstancesAppInstanceArnAdminsAppInstanceAdminArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppInstancesAppInstanceArnAdminsAppInstanceAdminArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstancesAppInstanceArnAdminsAppInstanceAdminArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppInstancesAppInstanceArnAdminsAppInstanceAdminArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnKey() {
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/admins/:appInstanceAdminArn',
    'DELETE',
  ] as const
}

export function useDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstancesAppInstanceArnStreamingConfigurationsKey(
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

export function useGetAppInstancesAppInstanceArnStreamingConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppInstancesAppInstanceArnStreamingConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['streaming-configurations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstancesAppInstanceArnStreamingConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppInstancesAppInstanceArnStreamingConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['streaming-configurations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppInstancesAppInstanceArnStreamingConfigurationsKey() {
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/streaming-configurations',
    'PUT',
  ] as const
}

export function usePutAppInstancesAppInstanceArnStreamingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppInstancesAppInstanceArnStreamingConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
          >
        },
      ) =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['streaming-configurations'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppInstancesAppInstanceArnStreamingConfigurationsKey() {
  return [
    'app-instances',
    '/app-instances/:appInstanceArn/streaming-configurations',
    'DELETE',
  ] as const
}

export function useDeleteAppInstancesAppInstanceArnStreamingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppInstancesAppInstanceArnStreamingConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['streaming-configurations'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstanceUsersAppInstanceUserArnKey(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', keyArgs] as const
}

export function useGetAppInstanceUsersAppInstanceUserArn<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
            >
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
        ? getGetAppInstanceUsersAppInstanceUserArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instance-users'][':appInstanceUserArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstanceUsersAppInstanceUserArn<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
            >
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
        ? getGetAppInstanceUsersAppInstanceUserArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instance-users'][':appInstanceUserArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppInstanceUsersAppInstanceUserArnKey() {
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', 'PUT'] as const
}

export function usePutAppInstanceUsersAppInstanceUserArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppInstanceUsersAppInstanceUserArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instance-users'][':appInstanceUserArn']['$put']
          >
        },
      ) =>
        parseResponse(client['app-instance-users'][':appInstanceUserArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppInstanceUsersAppInstanceUserArnKey() {
  return ['app-instance-users', '/app-instance-users/:appInstanceUserArn', 'DELETE'] as const
}

export function useDeleteAppInstanceUsersAppInstanceUserArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppInstanceUsersAppInstanceUserArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['app-instance-users'][':appInstanceUserArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdAttendeesAttendeeIdKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId', keyArgs] as const
}

export function useGetMeetingsMeetingIdAttendeesAttendeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
            >
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
        ? getGetMeetingsMeetingIdAttendeesAttendeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdAttendeesAttendeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
            >
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
        ? getGetMeetingsMeetingIdAttendeesAttendeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdAttendeesAttendeeIdKey() {
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingIdAttendeesAttendeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdAttendeesAttendeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn', keyArgs] as const
}

export function useGetChannelsChannelArn<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
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
        ? getGetChannelsChannelArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArn<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
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
        ? getGetChannelsChannelArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelArnKey() {
  return ['channels', '/channels/:channelArn', 'PUT'] as const
}

export function usePutChannelsChannelArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelArn']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channelArn']['$put']> },
      ) => parseResponse(client.channels[':channelArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelArnKey() {
  return ['channels', '/channels/:channelArn', 'DELETE'] as const
}

export function useDeleteChannelsChannelArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channelArn']['$delete']> },
      ) => parseResponse(client.channels[':channelArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnBansMemberArnKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/bans/:memberArn', keyArgs] as const
}

export function useGetChannelsChannelArnBansMemberArn<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
            >
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
        ? getGetChannelsChannelArnBansMemberArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channelArn'].bans[':memberArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnBansMemberArn<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
            >
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
        ? getGetChannelsChannelArnBansMemberArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channelArn'].bans[':memberArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelArnBansMemberArnKey() {
  return ['channels', '/channels/:channelArn/bans/:memberArn', 'DELETE'] as const
}

export function useDeleteChannelsChannelArnBansMemberArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelArnBansMemberArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn'].bans[':memberArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnMembershipsMemberArnKey(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/memberships/:memberArn', keyArgs] as const
}

export function useGetChannelsChannelArnMembershipsMemberArn<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnMembershipsMemberArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channelArn'].memberships[':memberArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnMembershipsMemberArn<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnMembershipsMemberArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channelArn'].memberships[':memberArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelArnMembershipsMemberArnKey() {
  return ['channels', '/channels/:channelArn/memberships/:memberArn', 'DELETE'] as const
}

export function useDeleteChannelsChannelArnMembershipsMemberArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelArnMembershipsMemberArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn'].memberships[':memberArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnMessagesMessageIdKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/messages/:messageId', keyArgs] as const
}

export function useGetChannelsChannelArnMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
            >
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
        ? getGetChannelsChannelArnMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channelArn'].messages[':messageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
            >
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
        ? getGetChannelsChannelArnMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channelArn'].messages[':messageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelArnMessagesMessageIdKey() {
  return ['channels', '/channels/:channelArn/messages/:messageId', 'PUT'] as const
}

export function usePutChannelsChannelArnMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelArnMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['messages'][':messageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn'].messages[':messageId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelArnMessagesMessageIdKey() {
  return ['channels', '/channels/:channelArn/messages/:messageId', 'DELETE'] as const
}

export function useDeleteChannelsChannelArnMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelArnMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn'].messages[':messageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnModeratorsChannelModeratorArnKey(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/moderators/:channelModeratorArn', keyArgs] as const
}

export function useGetChannelsChannelArnModeratorsChannelModeratorArn<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnModeratorsChannelModeratorArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channelArn'].moderators[':channelModeratorArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnModeratorsChannelModeratorArn<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnModeratorsChannelModeratorArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channelArn'].moderators[':channelModeratorArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelArnModeratorsChannelModeratorArnKey() {
  return ['channels', '/channels/:channelArn/moderators/:channelModeratorArn', 'DELETE'] as const
}

export function useDeleteChannelsChannelArnModeratorsChannelModeratorArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelArnModeratorsChannelModeratorArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn'].moderators[':channelModeratorArn'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdBotsBotIdEventsConfigurationKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', keyArgs] as const
}

export function useGetAccountsAccountIdBotsBotIdEventsConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIdBotsBotIdEventsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].bots[':botId']['events-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBotsBotIdEventsConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIdBotsBotIdEventsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].bots[':botId']['events-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdBotsBotIdEventsConfigurationKey() {
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', 'PUT'] as const
}

export function usePutAccountsAccountIdBotsBotIdEventsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdBotsBotIdEventsConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].bots[':botId']['events-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdBotsBotIdEventsConfigurationKey() {
  return ['accounts', '/accounts/:accountId/bots/:botId/events-configuration', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdBotsBotIdEventsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdBotsBotIdEventsConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].bots[':botId']['events-configuration'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaCapturePipelinesMediaPipelineIdKey(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['media-capture-pipelines', '/media-capture-pipelines/:mediaPipelineId', keyArgs] as const
}

export function useGetMediaCapturePipelinesMediaPipelineId<TError = unknown>(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
            >
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
        ? getGetMediaCapturePipelinesMediaPipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['media-capture-pipelines'][':mediaPipelineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaCapturePipelinesMediaPipelineId<TError = unknown>(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
            >
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
        ? getGetMediaCapturePipelinesMediaPipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['media-capture-pipelines'][':mediaPipelineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMediaCapturePipelinesMediaPipelineIdKey() {
  return ['media-capture-pipelines', '/media-capture-pipelines/:mediaPipelineId', 'DELETE'] as const
}

export function useDeleteMediaCapturePipelinesMediaPipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMediaCapturePipelinesMediaPipelineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['media-capture-pipelines'][':mediaPipelineId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId', keyArgs] as const
}

export function useGetMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
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
        ? getGetMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingId<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
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
        ? getGetMeetingsMeetingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMeetingsMeetingIdKey() {
  return ['meetings', '/meetings/:meetingId', 'DELETE'] as const
}

export function useDeleteMeetingsMeetingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeetingsMeetingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.meetings)[':meetingId']['$delete']> },
      ) => parseResponse(client.meetings[':meetingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersPhoneNumberIdKey(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', keyArgs] as const
}

export function useGetPhoneNumbersPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
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
        ? getGetPhoneNumbersPhoneNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['phone-numbers'][':phoneNumberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
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
        ? getGetPhoneNumbersPhoneNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['phone-numbers'][':phoneNumberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumbersPhoneNumberIdKey() {
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', 'POST'] as const
}

export function usePostPhoneNumbersPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']> },
      ) => parseResponse(client['phone-numbers'][':phoneNumberId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneNumbersPhoneNumberIdKey() {
  return ['phone-numbers', '/phone-numbers/:phoneNumberId', 'DELETE'] as const
}

export function useDeletePhoneNumbersPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneNumbersPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']> },
      ) => parseResponse(client['phone-numbers'][':phoneNumberId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId',
    'POST',
  ] as const
}

export function usePostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][
            ':proxySessionId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId',
    'DELETE',
  ] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][
            ':proxySessionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdRoomsRoomIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/rooms/:roomId', keyArgs] as const
}

export function useGetAccountsAccountIdRoomsRoomId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
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
        ? getGetAccountsAccountIdRoomsRoomIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].rooms[':roomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdRoomsRoomId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
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
        ? getGetAccountsAccountIdRoomsRoomIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].rooms[':roomId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdRoomsRoomIdKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId', 'POST'] as const
}

export function usePostAccountsAccountIdRoomsRoomId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdRoomsRoomIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].rooms[':roomId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdRoomsRoomIdKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdRoomsRoomId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdRoomsRoomIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId'].rooms[':roomId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdRoomsRoomIdMembershipsMemberIdKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships/:memberId', 'POST'] as const
}

export function usePostAccountsAccountIdRoomsRoomIdMembershipsMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdRoomsRoomIdMembershipsMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].memberships[':memberId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdKey() {
  return ['accounts', '/accounts/:accountId/rooms/:roomId/memberships/:memberId', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].memberships[':memberId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSipMediaApplicationsSipMediaApplicationIdKey(
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

export function useGetSipMediaApplicationsSipMediaApplicationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSipMediaApplicationsSipMediaApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipMediaApplicationsSipMediaApplicationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSipMediaApplicationsSipMediaApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSipMediaApplicationsSipMediaApplicationIdKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId',
    'PUT',
  ] as const
}

export function usePutSipMediaApplicationsSipMediaApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSipMediaApplicationsSipMediaApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSipMediaApplicationsSipMediaApplicationIdKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId',
    'DELETE',
  ] as const
}

export function useDeleteSipMediaApplicationsSipMediaApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSipMediaApplicationsSipMediaApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSipRulesSipRuleIdKey(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sip-rules', '/sip-rules/:sipRuleId', keyArgs] as const
}

export function useGetSipRulesSipRuleId<TError = unknown>(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
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
        ? getGetSipRulesSipRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sip-rules'][':sipRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipRulesSipRuleId<TError = unknown>(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
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
        ? getGetSipRulesSipRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sip-rules'][':sipRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSipRulesSipRuleIdKey() {
  return ['sip-rules', '/sip-rules/:sipRuleId', 'PUT'] as const
}

export function usePutSipRulesSipRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSipRulesSipRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$put']> },
      ) => parseResponse(client['sip-rules'][':sipRuleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSipRulesSipRuleIdKey() {
  return ['sip-rules', '/sip-rules/:sipRuleId', 'DELETE'] as const
}

export function useDeleteSipRulesSipRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSipRulesSipRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$delete']> },
      ) => parseResponse(client['sip-rules'][':sipRuleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdKey(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', keyArgs] as const
}

export function useGetVoiceConnectorsVoiceConnectorId<TError = unknown>(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
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
        ? getGetVoiceConnectorsVoiceConnectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['voice-connectors'][':voiceConnectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorId<TError = unknown>(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
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
        ? getGetVoiceConnectorsVoiceConnectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['voice-connectors'][':voiceConnectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', 'PUT'] as const
}

export function usePutVoiceConnectorsVoiceConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorsVoiceConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>
        },
      ) => parseResponse(client['voice-connectors'][':voiceConnectorId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId', 'DELETE'] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>
        },
      ) =>
        parseResponse(client['voice-connectors'][':voiceConnectorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration',
    'PUT',
  ] as const
}

export function usePutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration',
    'DELETE',
  ] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'][
            'emergency-calling-configuration'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorGroupsVoiceConnectorGroupIdKey(
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

export function useGetVoiceConnectorGroupsVoiceConnectorGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorGroupsVoiceConnectorGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connector-groups'][':voiceConnectorGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorGroupsVoiceConnectorGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorGroupsVoiceConnectorGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connector-groups'][':voiceConnectorGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorGroupsVoiceConnectorGroupIdKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId',
    'PUT',
  ] as const
}

export function usePutVoiceConnectorGroupsVoiceConnectorGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorGroupsVoiceConnectorGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connector-groups'][':voiceConnectorGroupId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorGroupsVoiceConnectorGroupIdKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId',
    'DELETE',
  ] as const
}

export function useDeleteVoiceConnectorGroupsVoiceConnectorGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVoiceConnectorGroupsVoiceConnectorGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connector-groups'][':voiceConnectorGroupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdOriginationKey(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', keyArgs] as const
}

export function useGetVoiceConnectorsVoiceConnectorIdOrigination<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdOriginationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].origination.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdOrigination<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdOriginationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].origination.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdOriginationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', 'PUT'] as const
}

export function usePutVoiceConnectorsVoiceConnectorIdOrigination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorsVoiceConnectorIdOriginationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].origination.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdOriginationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/origination', 'DELETE'] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorIdOrigination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdOriginationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].origination.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy',
    'PUT',
  ] as const
}

export function usePutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy',
    'DELETE',
  ] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdStreamingConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/streaming-configuration',
    'PUT',
  ] as const
}

export function usePutVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/streaming-configuration',
    'DELETE',
  ] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorIdStreamingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdTerminationKey(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', keyArgs] as const
}

export function useGetVoiceConnectorsVoiceConnectorIdTermination<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdTerminationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdTermination<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdTerminationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdTerminationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', 'PUT'] as const
}

export function usePutVoiceConnectorsVoiceConnectorIdTermination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorsVoiceConnectorIdTerminationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVoiceConnectorsVoiceConnectorIdTerminationKey() {
  return ['voice-connectors', '/voice-connectors/:voiceConnectorId/termination', 'DELETE'] as const
}

export function useDeleteVoiceConnectorsVoiceConnectorIdTermination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVoiceConnectorsVoiceConnectorIdTerminationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/credentials#operation=delete',
    'POST',
  ] as const
}

export function usePostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination[
            'credentials#operation=delete'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnKey(
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

export function useGetChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[
            ':channelArn#scope=app-instance-user-membership&app-instance-user-arn'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[
            ':channelArn#scope=app-instance-user-membership&app-instance-user-arn'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnKey(
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

export function useGetChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[
            ':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[
            ':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberKey() {
  return [
    'accounts',
    '/accounts/:accountId/users/:userId#operation=disassociate-phone-number',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].users[':userId#operation=disassociate-phone-number'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId#operation=disassociate-phone-numbers',
    'POST',
  ] as const
}

export function usePostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][
            ':voiceConnectorId#operation=disassociate-phone-numbers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersKey() {
  return [
    'voice-connector-groups',
    '/voice-connector-groups/:voiceConnectorGroupId#operation=disassociate-phone-numbers',
    'POST',
  ] as const
}

export function usePostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connector-groups'][
            ':voiceConnectorGroupId#operation=disassociate-phone-numbers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdOperationDisassociateSigninDelegateGroupsKey() {
  return [
    'accounts',
    '/accounts/:accountId#operation=disassociate-signin-delegate-groups',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdOperationDisassociateSigninDelegateGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdOperationDisassociateSigninDelegateGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId#operation=disassociate-signin-delegate-groups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdSettingsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/settings', keyArgs] as const
}

export function useGetAccountsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
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
        ? getGetAccountsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
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
        ? getGetAccountsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdSettingsKey() {
  return ['accounts', '/accounts/:accountId/settings', 'PUT'] as const
}

export function usePutAccountsAccountIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$put']> },
      ) => parseResponse(client.accounts[':accountId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstancesAppInstanceArnRetentionSettingsKey(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['app-instances', '/app-instances/:appInstanceArn/retention-settings', keyArgs] as const
}

export function useGetAppInstancesAppInstanceArnRetentionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppInstancesAppInstanceArnRetentionSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['retention-settings'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstancesAppInstanceArnRetentionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppInstancesAppInstanceArnRetentionSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['retention-settings'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppInstancesAppInstanceArnRetentionSettingsKey() {
  return ['app-instances', '/app-instances/:appInstanceArn/retention-settings', 'PUT'] as const
}

export function usePutAppInstancesAppInstanceArnRetentionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppInstancesAppInstanceArnRetentionSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client['app-instances'][':appInstanceArn']['retention-settings'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdBotsBotIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/bots/:botId', keyArgs] as const
}

export function useGetAccountsAccountIdBotsBotId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
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
        ? getGetAccountsAccountIdBotsBotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].bots[':botId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBotsBotId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
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
        ? getGetAccountsAccountIdBotsBotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].bots[':botId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdBotsBotIdKey() {
  return ['accounts', '/accounts/:accountId/bots/:botId', 'POST'] as const
}

export function usePostAccountsAccountIdBotsBotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdBotsBotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].bots[':botId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsKey(args: InferRequestType<typeof client.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings', keyArgs] as const
}

export function useGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutSettingsKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function usePutSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.$put> }) =>
        parseResponse(client.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsMessagingSessionKey(
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['endpoints', '/endpoints/messaging-session', keyArgs] as const
}

export function useGetEndpointsMessagingSession<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
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
        ? getGetEndpointsMessagingSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints['messaging-session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsMessagingSession<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
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
        ? getGetEndpointsMessagingSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)['messaging-session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints['messaging-session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumberOrdersPhoneNumberOrderIdKey(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-number-orders', '/phone-number-orders/:phoneNumberOrderId', keyArgs] as const
}

export function useGetPhoneNumberOrdersPhoneNumberOrderId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
            >
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
        ? getGetPhoneNumberOrdersPhoneNumberOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['phone-number-orders'][':phoneNumberOrderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberOrdersPhoneNumberOrderId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
            >
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
        ? getGetPhoneNumberOrdersPhoneNumberOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['phone-number-orders'][':phoneNumberOrderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsPhoneNumberKey(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/phone-number', keyArgs] as const
}

export function useGetSettingsPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
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
        ? getGetSettingsPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings['phone-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
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
        ? getGetSettingsPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings)['phone-number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings['phone-number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSettingsPhoneNumberKey() {
  return ['settings', '/settings/phone-number', 'PUT'] as const
}

export function usePutSettingsPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings)['phone-number']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.settings)['phone-number']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings)['phone-number']['$put']> },
      ) => parseResponse(client.settings['phone-number'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdRetentionSettingsKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/retention-settings', keyArgs] as const
}

export function useGetAccountsAccountIdRetentionSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
            >
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
        ? getGetAccountsAccountIdRetentionSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId']['retention-settings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdRetentionSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
            >
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
        ? getGetAccountsAccountIdRetentionSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId']['retention-settings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdRetentionSettingsKey() {
  return ['accounts', '/accounts/:accountId/retention-settings', 'PUT'] as const
}

export function usePutAccountsAccountIdRetentionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdRetentionSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['retention-settings']['$put']
          >
        },
      ) =>
        parseResponse(client.accounts[':accountId']['retention-settings'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationKey(
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

export function useGetSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/logging-configuration',
    'PUT',
  ] as const
}

export function usePutSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdUsersUserIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/users/:userId', keyArgs] as const
}

export function useGetAccountsAccountIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
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
        ? getGetAccountsAccountIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
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
        ? getGetAccountsAccountIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':accountId'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersUserIdKey() {
  return ['accounts', '/accounts/:accountId/users/:userId', 'POST'] as const
}

export function usePostAccountsAccountIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>
        },
      ) => parseResponse(client.accounts[':accountId'].users[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdUsersUserIdSettingsKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/users/:userId/settings', keyArgs] as const
}

export function useGetAccountsAccountIdUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIdUsersUserIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].users[':userId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdUsersUserIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAccountsAccountIdUsersUserIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':accountId'].users[':userId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdUsersUserIdSettingsKey() {
  return ['accounts', '/accounts/:accountId/users/:userId/settings', 'PUT'] as const
}

export function usePutAccountsAccountIdUsersUserIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdUsersUserIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].users[':userId'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdLoggingConfigurationKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdLoggingConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdLoggingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdLoggingConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdLoggingConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVoiceConnectorsVoiceConnectorIdLoggingConfigurationKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/logging-configuration',
    'PUT',
  ] as const
}

export function usePutVoiceConnectorsVoiceConnectorIdLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceConnectorsVoiceConnectorIdLoggingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdTerminationHealthKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdTerminationHealth<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdTerminationHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.health.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdTerminationHealth<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdTerminationHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.health.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersOperationAddKey() {
  return ['accounts', '/accounts/:accountId/users#operation=add', 'POST'] as const
}

export function usePostAccountsAccountIdUsersOperationAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['users#operation=add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersOperationAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users#operation=add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId']['users#operation=add'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppInstanceUsersAppInstanceArnKey(
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'app-instance-users#app-instance-arn',
    '/app-instance-users#app-instance-arn',
    keyArgs,
  ] as const
}

export function useGetAppInstanceUsersAppInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
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
        ? getGetAppInstanceUsersAppInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['app-instance-users#app-instance-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppInstanceUsersAppInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
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
        ? getGetAppInstanceUsersAppInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['app-instance-users#app-instance-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['app-instance-users#app-instance-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdAttendeesAttendeeIdTagsKey(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/attendees/:attendeeId/tags', keyArgs] as const
}

export function useGetMeetingsMeetingIdAttendeesAttendeeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMeetingsMeetingIdAttendeesAttendeeIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdAttendeesAttendeeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMeetingsMeetingIdAttendeesAttendeeIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsScopeAppInstanceUserMembershipsKey(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'channels#scope=app-instance-user-memberships',
    '/channels#scope=app-instance-user-memberships',
    keyArgs,
  ] as const
}

export function useGetChannelsScopeAppInstanceUserMemberships<TError = unknown>(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
            >
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
        ? getGetChannelsScopeAppInstanceUserMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['channels#scope=app-instance-user-memberships'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsScopeAppInstanceUserMemberships<TError = unknown>(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
            >
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
        ? getGetChannelsScopeAppInstanceUserMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['channels#scope=app-instance-user-memberships'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelArnMessagesKey(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelArn/messages', keyArgs] as const
}

export function useGetChannelsChannelArnMessages<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
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
        ? getGetChannelsChannelArnMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelArn'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelArnMessages<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
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
        ? getGetChannelsChannelArnMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelArn'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelArnMessagesKey() {
  return ['channels', '/channels/:channelArn/messages', 'POST'] as const
}

export function usePostChannelsChannelArnMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelArnMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$post']> },
      ) => parseResponse(client.channels[':channelArn'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsAppInstanceArnKey(
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels#app-instance-arn', '/channels#app-instance-arn', keyArgs] as const
}

export function useGetChannelsAppInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
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
        ? getGetChannelsAppInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['channels#app-instance-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsAppInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
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
        ? getGetChannelsAppInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['channels#app-instance-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['channels#app-instance-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsScopeAppInstanceUserModeratedChannelsKey(
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

export function useGetChannelsScopeAppInstanceUserModeratedChannels<TError = unknown>(
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsScopeAppInstanceUserModeratedChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['channels#scope=app-instance-user-moderated-channels'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsScopeAppInstanceUserModeratedChannels<TError = unknown>(
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetChannelsScopeAppInstanceUserModeratedChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['channels#scope=app-instance-user-moderated-channels'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMeetingsMeetingIdTagsKey(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['meetings', '/meetings/:meetingId/tags', keyArgs] as const
}

export function useGetMeetingsMeetingIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
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
        ? getGetMeetingsMeetingIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeetingsMeetingIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
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
        ? getGetMeetingsMeetingIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meetings)[':meetingId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meetings[':meetingId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersKey(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-numbers', '/phone-numbers', keyArgs] as const
}

export function useGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-numbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-numbers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-numbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumberCountriesProductTypeKey(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'phone-number-countries#product-type',
    '/phone-number-countries#product-type',
    keyArgs,
  ] as const
}

export function useGetPhoneNumberCountriesProductType<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
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
        ? getGetPhoneNumberCountriesProductTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['phone-number-countries#product-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberCountriesProductType<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
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
        ? getGetPhoneNumberCountriesProductTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number-countries#product-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['phone-number-countries#product-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsArnKey(args: InferRequestType<(typeof client)['tags#arn']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tags#arn', '/tags#arn', keyArgs] as const
}

export function useGetTagsArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsArnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsArnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#arn']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVoiceConnectorsVoiceConnectorIdTerminationCredentialsKey(
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

export function useGetVoiceConnectorsVoiceConnectorIdTerminationCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdTerminationCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceConnectorsVoiceConnectorIdTerminationCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVoiceConnectorsVoiceConnectorIdTerminationCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersUserIdOperationLogoutKey() {
  return ['accounts', '/accounts/:accountId/users/:userId#operation=logout', 'POST'] as const
}

export function usePostAccountsAccountIdUsersUserIdOperationLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersUserIdOperationLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].users[':userId#operation=logout'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutKey() {
  return [
    'voice-connectors',
    '/voice-connectors/:voiceConnectorId/termination/credentials#operation=put',
    'POST',
  ] as const
}

export function usePostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPut<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
          >
        },
      ) =>
        parseResponse(
          client['voice-connectors'][':voiceConnectorId'].termination[
            'credentials#operation=put'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelArnMessagesMessageIdOperationRedactKey() {
  return ['channels', '/channels/:channelArn/messages/:messageId#operation=redact', 'POST'] as const
}

export function usePostChannelsChannelArnMessagesMessageIdOperationRedact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelArnMessagesMessageIdOperationRedactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channelArn'].messages[':messageId#operation=redact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactKey() {
  return [
    'accounts',
    '/accounts/:accountId/conversations/:conversationId/messages/:messageId#operation=redact',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].conversations[':conversationId'].messages[
            ':messageId#operation=redact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactKey() {
  return [
    'accounts',
    '/accounts/:accountId/rooms/:roomId/messages/:messageId#operation=redact',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].rooms[':roomId'].messages[
            ':messageId#operation=redact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenKey() {
  return [
    'accounts',
    '/accounts/:accountId/bots/:botId#operation=regenerate-security-token',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdBotsBotIdOperationRegenerateSecurityToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].bots[':botId#operation=regenerate-security-token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdUsersUserIdOperationResetPersonalPinKey() {
  return [
    'accounts',
    '/accounts/:accountId/users/:userId#operation=reset-personal-pin',
    'POST',
  ] as const
}

export function usePostAccountsAccountIdUsersUserIdOperationResetPersonalPin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdUsersUserIdOperationResetPersonalPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':accountId'].users[':userId#operation=reset-personal-pin'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersPhoneNumberIdOperationRestoreKey() {
  return ['phone-numbers', '/phone-numbers/:phoneNumberId#operation=restore', 'POST'] as const
}

export function usePostPhoneNumbersPhoneNumberIdOperationRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersPhoneNumberIdOperationRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['phone-numbers'][':phoneNumberId#operation=restore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSearchTypePhoneNumbersKey(
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search#type=phone-numbers', '/search#type=phone-numbers', keyArgs] as const
}

export function useGetSearchTypePhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
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
        ? getGetSearchTypePhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search#type=phone-numbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchTypePhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
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
        ? getGetSearchTypePhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['search#type=phone-numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search#type=phone-numbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdTranscriptionOperationStartKey() {
  return ['meetings', '/meetings/:meetingId/transcription#operation=start', 'POST'] as const
}

export function usePostMeetingsMeetingIdTranscriptionOperationStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdTranscriptionOperationStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId']['transcription#operation=start'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdTranscriptionOperationStopKey() {
  return ['meetings', '/meetings/:meetingId/transcription#operation=stop', 'POST'] as const
}

export function usePostMeetingsMeetingIdTranscriptionOperationStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdTranscriptionOperationStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId']['transcription#operation=stop'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddKey() {
  return [
    'meetings',
    '/meetings/:meetingId/attendees/:attendeeId/tags#operation=add',
    'POST',
  ] as const
}

export function usePostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAdd<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId']['tags#operation=add'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdTagsOperationAddKey() {
  return ['meetings', '/meetings/:meetingId/tags#operation=add', 'POST'] as const
}

export function usePostMeetingsMeetingIdTagsOperationAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdTagsOperationAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['tags#operation=add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId']['tags#operation=add'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTagsOperationTagResourceKey() {
  return ['tags#operation=tag-resource', '/tags#operation=tag-resource', 'POST'] as const
}

export function usePostTagsOperationTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#operation=tag-resource']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#operation=tag-resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsOperationTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#operation=tag-resource']['$post']> },
      ) => parseResponse(client['tags#operation=tag-resource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteKey() {
  return [
    'meetings',
    '/meetings/:meetingId/attendees/:attendeeId/tags#operation=delete',
    'POST',
  ] as const
}

export function usePostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId'].attendees[':attendeeId']['tags#operation=delete'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMeetingsMeetingIdTagsOperationDeleteKey() {
  return ['meetings', '/meetings/:meetingId/tags#operation=delete', 'POST'] as const
}

export function usePostMeetingsMeetingIdTagsOperationDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeetingsMeetingIdTagsOperationDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meetings[':meetingId']['tags#operation=delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTagsOperationUntagResourceKey() {
  return ['tags#operation=untag-resource', '/tags#operation=untag-resource', 'POST'] as const
}

export function usePostTagsOperationUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#operation=untag-resource']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#operation=untag-resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsOperationUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['tags#operation=untag-resource']['$post']> },
      ) => parseResponse(client['tags#operation=untag-resource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChannelsChannelArnReadMarkerKey() {
  return ['channels', '/channels/:channelArn/readMarker', 'PUT'] as const
}

export function usePutChannelsChannelArnReadMarker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelArn']['readMarker']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelArn']['readMarker']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelArnReadMarkerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channelArn']['readMarker']['$put']> },
      ) => parseResponse(client.channels[':channelArn'].readMarker.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdKey() {
  return [
    'sip-media-applications',
    '/sip-media-applications/:sipMediaApplicationId/calls/:transactionId',
    'POST',
  ] as const
}

export function usePostSipMediaApplicationsSipMediaApplicationIdCallsTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sip-media-applications'][':sipMediaApplicationId'].calls[':transactionId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEmergencyCallingAddressKey() {
  return ['emergency-calling', '/emergency-calling/address', 'POST'] as const
}

export function usePostEmergencyCallingAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['emergency-calling']['address']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['emergency-calling']['address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmergencyCallingAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['emergency-calling']['address']['$post']> },
      ) => parseResponse(client['emergency-calling'].address.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
